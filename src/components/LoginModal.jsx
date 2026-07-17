import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  User,
  Mail,
  MapPin,
  LogOut,
  Eye,
  EyeOff,
  Lock,
  UserPlus,
  LogIn,
  CheckCircle,
  Edit3,
  Chrome,
} from "lucide-react";
import {
  auth,
  fetchUserProfile,
  loginWithEmail,
  logoutUser,
  registerWithEmail,
  saveUserProfile,
  signInWithGoogle,
} from "../lib/firebase";

const emptySignup = { name: "", email: "", password: "", address: "" };
const emptyLogin = { email: "", password: "" };

export default function LoginModal({ isOpen, onClose, user, onSaveUser }) {
  const [view, setView] = useState(user ? "profile" : "login");
  const [signupData, setSignupData] = useState(emptySignup);
  const [loginData, setLoginData] = useState(emptyLogin);
  const [editData, setEditData] = useState({ name: "", address: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [banner, setBanner] = useState("");

  const displayName = useMemo(() => {
    if (!user) return "";
    return user.name || auth?.currentUser?.displayName || "";
  }, [user]);

  useEffect(() => {
    if (!isOpen) return;
    setErrors({});
    setBanner("");
    setShowPass(false);
    setLoginData(emptyLogin);
    setSignupData(emptySignup);
    if (user) {
      setView("profile");
      setEditData({
        name: user.name || "",
        address: user.address || "",
      });
    } else {
      setView("login");
    }
  }, [isOpen, user]);

  useEffect(() => {
    if (user) {
      setEditData({ name: user.name || "", address: user.address || "" });
    }
  }, [user]);

  const closeAndSync = (nextUser) => {
    onSaveUser?.(nextUser);
    if (nextUser) setView("profile");
  };

  const normalizeProfile = (authUser, profile) => ({
    uid: authUser.uid,
    name: profile?.name || authUser.displayName || "",
    email: profile?.email || authUser.email || "",
    address: profile?.address || "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!signupData.name.trim()) nextErrors.name = "Full name is required";
    if (!signupData.email.trim()) nextErrors.email = "Email is required";
    if (signupData.password.length < 6) nextErrors.password = "Password must be at least 6 characters";
    if (!signupData.address.trim()) nextErrors.address = "Shipping address is required";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const authUser = await registerWithEmail(
        signupData.email.trim(),
        signupData.password,
        signupData.name.trim(),
        signupData.address.trim()
      );
      const profile = await fetchUserProfile(authUser.uid);
      const nextUser = normalizeProfile(authUser, profile || signupData);
      closeAndSync(nextUser);
      setBanner("Account created successfully");
      setView("profile");
    } catch {
      setErrors({ form: "Could not create your account right now." });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!loginData.email.trim()) nextErrors.email = "Email is required";
    if (!loginData.password) nextErrors.password = "Password is required";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const authUser = await loginWithEmail(loginData.email.trim(), loginData.password);
      const profile = await fetchUserProfile(authUser.uid);
      const nextUser = normalizeProfile(authUser, profile);
      closeAndSync(nextUser);
      setBanner(`Welcome back${nextUser.name ? `, ${nextUser.name}` : ""}!`);
      setView("profile");
    } catch {
      setErrors({ form: "Could not log you in right now." });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrors({});
    try {
      const result = await signInWithGoogle();
      if (!result?.user) {
        setBanner("Redirecting to Google sign-in...");
        return;
      }

      const authUser = result.user;
      const profile = await fetchUserProfile(authUser.uid);
      const nextUser = normalizeProfile(authUser, profile);
      closeAndSync(nextUser);
      setBanner("Signed in with Google successfully");
      setView("profile");
    } catch (error) {
      setErrors({ form: error?.message || "Could not sign you in with Google right now." });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!user) return;
    const nextErrors = {};
    if (!editData.name.trim()) nextErrors.name = "Name is required";
    if (!editData.address.trim()) nextErrors.address = "Shipping address is required";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      await saveUserProfile(user.uid, {
        name: editData.name.trim(),
        email: user.email,
        address: editData.address.trim(),
      });
      const nextUser = { ...user, name: editData.name.trim(), address: editData.address.trim() };
      closeAndSync(nextUser);
      setBanner("Details saved successfully");
      setView("profile");
    } catch {
      setErrors({ form: "Could not save your details right now." });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      onSaveUser?.(null);
      setView("login");
      setBanner("Logged out successfully");
      setLoginData(emptyLogin);
      setSignupData(emptySignup);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="login-modal-backdrop">
          <motion.div
            className="login-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="login-modal-container auth-modal-container"
            key={view}
            initial={{ scale: 0.93, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            <button className="login-modal-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>



            {banner && (
              <div className="login-success-banner" style={{ margin: "16px 32px 0" }}>
                <CheckCircle size={15} /> {banner}
              </div>
            )}

            {view === "signup" && (
              <form onSubmit={handleSignup} className="login-form" noValidate>
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <UserPlus size={20} />
                  </div>
                  <h3>Create Account</h3>
                  <p>Sign up once and log in from any device.</p>
                </div>

                <div className="login-social-wrap">
                  <button type="button" className="login-google-btn" onClick={handleGoogleLogin} disabled={loading}>
                    <Chrome size={16} /> Continue with Google
                  </button>
                  <div className="login-or-divider">
                    <span>or</span>
                  </div>
                </div>

                <div className="login-form-body">
                  <div className="login-input-group">
                    <label htmlFor="su-name"><User size={13} /> Full Name</label>
                    <input
                      id="su-name"
                      type="text"
                      placeholder="e.g. Rohan Sharma"
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                      autoComplete="name"
                    />
                    {errors.name && <span className="login-field-error">{errors.name}</span>}
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="su-email"><Mail size={13} /> Email Address</label>
                    <input
                      id="su-email"
                      type="email"
                      placeholder="you@example.com"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      autoComplete="email"
                    />
                    {errors.email && <span className="login-field-error">{errors.email}</span>}
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="su-pass"><Lock size={13} /> Password</label>
                    <div className="login-pass-wrap">
                      <input
                        id="su-pass"
                        type={showPass ? "text" : "password"}
                        placeholder="Min. 6 characters"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        autoComplete="new-password"
                      />
                      <button type="button" className="login-eye-btn" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                    {errors.password && <span className="login-field-error">{errors.password}</span>}
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="su-addr"><MapPin size={13} /> Shipping Address</label>
                    <textarea
                      id="su-addr"
                      rows={3}
                      placeholder="Flat, Street, City, State, Pincode"
                      value={signupData.address}
                      onChange={(e) => setSignupData({ ...signupData, address: e.target.value })}
                      autoComplete="street-address"
                    />
                    {errors.address && <span className="login-field-error">{errors.address}</span>}
                  </div>
                </div>

                {errors.form && <div className="login-error-banner">{errors.form}</div>}

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn" disabled={loading}>
                    {loading ? "Creating..." : (<><UserPlus size={15} /> Create Account</>)}
                  </button>
                </div>

                <p className="login-switch-text">
                  Already have an account?{" "}
                  <button type="button" className="login-switch-btn" onClick={() => setView("login")}>Log In</button>
                </p>
              </form>
            )}

            {view === "login" && (
              <form onSubmit={handleLogin} className="login-form" noValidate>
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <LogIn size={20} />
                  </div>
                  <h3>Welcome Back</h3>
                  <p>Log in to restore your account on this or any other device.</p>
                </div>

                <div className="login-social-wrap">
                  <button type="button" className="login-google-btn" onClick={handleGoogleLogin} disabled={loading}>
                    <Chrome size={16} /> Continue with Google
                  </button>
                  <div className="login-or-divider">
                    <span>or</span>
                  </div>
                </div>

                <div className="login-form-body">
                  <div className="login-input-group">
                    <label htmlFor="li-email"><Mail size={13} /> Email Address</label>
                    <input
                      id="li-email"
                      type="email"
                      placeholder="you@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      autoComplete="email"
                    />
                    {errors.email && <span className="login-field-error">{errors.email}</span>}
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="li-pass"><Lock size={13} /> Password</label>
                    <div className="login-pass-wrap">
                      <input
                        id="li-pass"
                        type={showPass ? "text" : "password"}
                        placeholder="Your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        autoComplete="current-password"
                      />
                      <button type="button" className="login-eye-btn" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                    {errors.password && <span className="login-field-error">{errors.password}</span>}
                  </div>
                </div>

                {errors.form && <div className="login-error-banner">{errors.form}</div>}

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn" disabled={loading}>
                    {loading ? "Logging in..." : (<><LogIn size={15} /> Log In</>)}
                  </button>
                </div>

                <p className="login-switch-text">
                  New here?{" "}
                  <button type="button" className="login-switch-btn" onClick={() => setView("signup")}>Create Account</button>
                </p>
              </form>
            )}

            {view === "profile" && user && (
              <div className="login-profile-card auth-profile-card">
                <div className="login-profile-header">
                  <div className="login-profile-avatar">
                    {displayName?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                  <h3>{displayName || "Your Account"}</h3>
                  <p className="login-profile-tag">Account</p>
                </div>

                <div className="login-profile-body">
                  <div className="login-profile-detail">
                    <span className="detail-label">Email</span>
                    <span className="detail-val">{user.email}</span>
                  </div>
                  <div className="login-profile-detail">
                    <span className="detail-label">Shipping Address</span>
                    <div className="detail-val address-box">
                      <MapPin size={14} className="address-pin-icon" />
                      <p>{user.address || "Add your shipping address"}</p>
                    </div>
                  </div>
                </div>

                {errors.form && <div className="login-error-banner">{errors.form}</div>}

                <div className="login-profile-footer">
                  <button type="button" className="login-edit-btn" onClick={() => setView("edit")}>
                    <Edit3 size={14} /> Edit Details
                  </button>
                  <button type="button" className="login-logout-btn" onClick={handleLogout} disabled={loading}>
                    <LogOut size={14} /> Log Out
                  </button>
                </div>
              </div>
            )}

            {view === "edit" && user && (
              <form onSubmit={handleEdit} className="login-form">
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <Edit3 size={20} />
                  </div>
                  <h3>Edit Details</h3>
                  <p>Update your name or shipping address.</p>
                </div>

                <div className="login-form-body">
                  <div className="login-input-group">
                    <label htmlFor="ed-name"><User size={13} /> Full Name</label>
                    <input
                      id="ed-name"
                      type="text"
                      value={editData.name}
                      required
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                    {errors.name && <span className="login-field-error">{errors.name}</span>}
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="ed-addr"><MapPin size={13} /> Shipping Address</label>
                    <textarea
                      id="ed-addr"
                      rows={3}
                      value={editData.address}
                      required
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    />
                    {errors.address && <span className="login-field-error">{errors.address}</span>}
                  </div>
                </div>

                {errors.form && <div className="login-error-banner">{errors.form}</div>}

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                  <button type="button" className="login-cancel-btn" onClick={() => setView("profile")}>Cancel</button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
