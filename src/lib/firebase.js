import { initializeApp, getApps } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const LOCAL_REVIEWS_KEY = "robomitra_reviews";
const LOCAL_USERS_KEY = "robomitra_users";

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);

export const firebaseReady = hasFirebaseConfig;

export const firebaseApp = hasFirebaseConfig
  ? getApps().length
    ? getApps()[0]
    : initializeApp(firebaseConfig)
  : null;

export const firestore = firebaseApp ? getFirestore(firebaseApp) : null;
export const auth = firebaseApp ? getAuth(firebaseApp) : null;
export const googleProvider = firebaseApp ? new GoogleAuthProvider() : null;

if (googleProvider) {
  googleProvider.setCustomParameters({ prompt: "select_account" });
}

export function subscribeToAuth(callback) {
  if (!auth) return () => {};
  return onAuthStateChanged(auth, callback);
}

function readLocalUsers() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(LOCAL_USERS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalUsers(users) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch {
    // Ignore storage failures and keep the UI working.
  }
}

function normalizeLocalUser(user) {
  return {
    uid: user.uid,
    name: user.name || "",
    email: user.email || "",
    address: user.address || "",
    provider: user.provider || "local",
    password: user.password || "",
  };
}

function upsertLocalUser(user) {
  const nextUser = normalizeLocalUser(user);
  const users = readLocalUsers();
  const index = users.findIndex((item) => item.uid === nextUser.uid || item.email === nextUser.email);

  if (index >= 0) {
    users[index] = { ...users[index], ...nextUser };
  } else {
    users.unshift(nextUser);
  }

  writeLocalUsers(users);
  return nextUser;
}

function findLocalUserByEmail(email) {
  return readLocalUsers().find((user) => user.email?.toLowerCase() === email.toLowerCase()) || null;
}

function findLocalUserByUid(uid) {
  return readLocalUsers().find((user) => user.uid === uid) || null;
}

export async function registerWithEmail(email, password, name, address) {
  if (!auth || !firestore) {
    const existing = findLocalUserByEmail(email);
    if (existing) throw new Error("An account with this email already exists");

    const localUser = upsertLocalUser({
      uid: `local-${Date.now()}`,
      name,
      email,
      address,
      password,
      provider: "local",
    });

    return { uid: localUser.uid, displayName: localUser.name, email: localUser.email };
  }

  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName: name });
  await setDoc(doc(firestore, "users", credential.user.uid), {
    name,
    email,
    address,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return credential.user;
}

export async function loginWithEmail(email, password) {
  if (!auth) {
    const existing = findLocalUserByEmail(email);
    if (!existing || existing.password !== password) {
      throw new Error("Invalid email or password");
    }

    return { uid: existing.uid, displayName: existing.name, email: existing.email };
  }

  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

function isGooglePopupRecoverable(error) {
  const code = error?.code || "";
  return ["auth/popup-blocked", "auth/popup-closed-by-user", "auth/cancelled-popup-request", "auth/operation-not-supported-in-this-environment"].includes(code);
}

function buildGoogleSignInError(error) {
  const code = error?.code || "";

  if (!hasFirebaseConfig) {
    return new Error(
      "Google login needs Firebase config. Add your VITE_FIREBASE_* env values and enable Google sign-in in Firebase Auth."
    );
  }

  if (code === "auth/unauthorized-domain") {
    return new Error(
      "Google login is blocked for this domain. Add your site domain to Firebase Authentication > Settings > Authorized domains."
    );
  }

  if (code === "auth/operation-not-allowed") {
    return new Error(
      "Google sign-in is disabled in Firebase. Enable the Google provider in Firebase Authentication > Sign-in method."
    );
  }

  if (code === "auth/network-request-failed") {
    return new Error("Google sign-in failed because of a network problem. Check your connection and try again.");
  }

  return new Error("Google sign-in failed. Please check Firebase Auth setup and try again.");
}

export async function signInWithGoogle() {
  if (!auth || !firestore || !googleProvider) {
    if (typeof window === "undefined") {
      throw buildGoogleSignInError();
    }

    const email = window.prompt("Google email address")?.trim();
    if (!email) {
      throw new Error("Google sign-in was cancelled");
    }

    const defaultName = email.split("@")[0] || "Google User";
    const name = window.prompt("Display name", defaultName)?.trim() || defaultName;
    const address = window.prompt("Shipping address (optional)")?.trim() || "";

    const existing = findLocalUserByEmail(email);
    const localUser = upsertLocalUser({
      uid: existing?.uid || `google-${Date.now()}`,
      name,
      email,
      address: address || existing?.address || "",
      password: existing?.password || "",
      provider: "google",
    });

    return { user: { uid: localUser.uid, displayName: localUser.name, email: localUser.email }, method: "local" };
  }

  try {
    const credential = await signInWithPopup(auth, googleProvider);
    const user = credential.user;
    const profileRef = doc(firestore, "users", user.uid);
    const profileSnap = await getDoc(profileRef);
    const nextProfile = {
      name: user.displayName || profileSnap.data()?.name || "",
      email: user.email || profileSnap.data()?.email || "",
      address: profileSnap.data()?.address || "",
      updatedAt: serverTimestamp(),
    };

    await setDoc(
      profileRef,
      {
        ...nextProfile,
        createdAt: profileSnap.exists() ? profileSnap.data()?.createdAt || serverTimestamp() : serverTimestamp(),
      },
      { merge: true }
    );

    return { user, method: "popup" };
  } catch (error) {
    if (isGooglePopupRecoverable(error)) {
      await signInWithRedirect(auth, googleProvider);
      return { user: null, method: "redirect" };
    }

    throw buildGoogleSignInError(error);
  }
}

export async function logoutUser() {
  if (!auth) return;
  await signOut(auth);
}

export async function saveUserProfile(uid, profile) {
  if (!firestore) {
    const existing = findLocalUserByUid(uid);
    upsertLocalUser({
      uid,
      name: profile?.name || existing?.name || "",
      email: profile?.email || existing?.email || "",
      address: profile?.address || existing?.address || "",
      password: existing?.password || "",
      provider: existing?.provider || "local",
    });
    return;
  }

  await setDoc(doc(firestore, "users", uid), { ...profile, updatedAt: serverTimestamp() }, { merge: true });
}

export async function fetchUserProfile(uid) {
  if (!firestore) {
    const user = findLocalUserByUid(uid);
    return user ? { id: user.uid, ...user } : null;
  }

  const snap = await getDoc(doc(firestore, "users", uid));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

function readLocalReviews() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(LOCAL_REVIEWS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalReviews(reviews) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(LOCAL_REVIEWS_KEY, JSON.stringify(reviews));
  } catch {
    // Ignore storage failures and keep the UI working.
  }
}

function normalizeReview(review) {
  return {
    id: review.id || String(Date.now()),
    name: review.name || "Anonymous",
    rating: Number(review.rating) || 5,
    comment: review.comment || "",
    avatar:
      review.avatar ||
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(review.name || "Anonymous")}`,
    createdAt: review.createdAt || Date.now(),
  };
}

export async function fetchReviews() {
  if (!firestore) {
    return readLocalReviews().sort((a, b) => {
      const aTime = typeof a.createdAt === "number" ? a.createdAt : new Date(a.createdAt || 0).getTime();
      const bTime = typeof b.createdAt === "number" ? b.createdAt : new Date(b.createdAt || 0).getTime();
      return bTime - aTime;
    });
  }

  const snap = await getDocs(query(collection(firestore, "reviews"), orderBy("createdAt", "desc")));
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function createReview(review) {
  const nextReview = normalizeReview(review);

  if (!firestore) {
    const existingReviews = readLocalReviews();
    writeLocalReviews([nextReview, ...existingReviews]);
    return nextReview;
  }

  return addDoc(collection(firestore, "reviews"), {
    ...nextReview,
    createdAt: serverTimestamp(),
  });
}
