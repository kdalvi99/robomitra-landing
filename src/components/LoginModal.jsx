import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, MapPin, LogOut, Eye, EyeOff, Lock, UserPlus, LogIn, CheckCircle, Edit3 } from "lucide-react";

// Helpers – store all registered accounts in localStorage under "robomitra_accounts"
const getAccounts = () => {
  try {
    return JSON.parse(localStorage.getItem("robomitra_accounts") || "[]");
  } catch {
    return [];
  }
};
const saveAccounts = (accounts) => {
  localStorage.setItem("robomitra_accounts", JSON.stringify(accounts));
};

// Tiny validation helpers
const emailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function LoginModal({ isOpen, onClose, user, onSaveUser }) {
  // "signup" | "login" | "profile" | "edit"
  const [view, setView] = useState(user ? "profile" : "login");

  // signup form
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", address: "" });
  const [signupErrors, setSignupErrors] = useState({});

  // login form
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  // edit form
  const [editData, setEditData] = useState({ name: "", email: "", address: "" });

  // misc
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState("");

  // sync view when modal opens / user changes
  useEffect(() => {
    if (isOpen) {
      setView(user ? "profile" : "login");
      setSignupErrors({});
      setLoginError("");
      setSuccess("");
    }
  }, [isOpen, user]);

  // ── SIGN UP ──────────────────────────────────────────────────────────────
  const validateSignup = () => {
    const errs = {};
    if (!signupData.name.trim()) errs.name = "Full name is required";
    if (!emailValid(signupData.email)) errs.email = "Valid email is required";
    if (signupData.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (!signupData.address.trim()) errs.address = "Shipping address is required";
    return errs;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const errs = validateSignup();
    if (Object.keys(errs).length) { setSignupErrors(errs); return; }

    const accounts = getAccounts();
    if (accounts.find((a) => a.email.toLowerCase() === signupData.email.toLowerCase())) {
      setSignupErrors({ email: "An account with this email already exists" });
      return;
    }

    const newAccount = {
      name: signupData.name.trim(),
      email: signupData.email.trim().toLowerCase(),
      password: signupData.password,   // plaintext – fine for a demo/offline app
      address: signupData.address.trim(),
    };
    saveAccounts([...accounts, newAccount]);
    onSaveUser({ name: newAccount.name, email: newAccount.email, address: newAccount.address });
    setSuccess("Account created! Welcome to RoboMitra 🎉");
    setView("profile");
  };

  // ── LOG IN ───────────────────────────────────────────────────────────────
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    const accounts = getAccounts();
    const found = accounts.find(
      (a) =>
        a.email.toLowerCase() === loginData.email.trim().toLowerCase() &&
        a.password === loginData.password
    );
    if (!found) { setLoginError("Incorrect email or password. Please try again."); return; }
    onSaveUser({ name: found.name, email: found.email, address: found.address });
    setSuccess(`Welcome back, ${found.name}! 👋`);
    setView("profile");
  };

  // ── EDIT PROFILE ─────────────────────────────────────────────────────────
  const openEdit = () => {
    setEditData({ name: user.name, email: user.email, address: user.address });
    setView("edit");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!editData.name.trim() || !editData.address.trim()) return;

    // update the master accounts store too
    const accounts = getAccounts().map((a) =>
      a.email.toLowerCase() === user.email.toLowerCase()
        ? { ...a, name: editData.name.trim(), address: editData.address.trim() }
        : a
    );
    saveAccounts(accounts);
    onSaveUser({ ...user, name: editData.name.trim(), address: editData.address.trim() });
    setView("profile");
  };

  // ── LOG OUT ───────────────────────────────────────────────────────────────
  const handleLogout = () => {
    onSaveUser(null);
    setLoginData({ email: "", password: "" });
    setView("login");
  };

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="login-modal-backdrop">
          {/* Overlay */}
          <motion.div
            className="login-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="login-modal-container"
            key={view}
            initial={{ scale: 0.93, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            <button className="login-modal-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>

            {/* ── SIGN UP ── */}
            {view === "signup" && (
              <form onSubmit={handleSignup} className="login-form" noValidate>
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <UserPlus size={20} />
                  </div>
                  <h3>Create Account</h3>
                  <p>Join RoboMitra — save your address for faster checkout.</p>
                </div>

                <div className="login-form-body">
                  {/* Name */}
                  <div className="login-input-group">
                    <label htmlFor="su-name"><User size={13} /> Full Name</label>
                    <input
                      id="su-name" type="text" placeholder="e.g. Rohan Sharma" value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    />
                    {signupErrors.name && <span className="login-field-error">{signupErrors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="login-input-group">
                    <label htmlFor="su-email"><Mail size={13} /> Email Address</label>
                    <input
                      id="su-email" type="email" placeholder="you@example.com" value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    />
                    {signupErrors.email && <span className="login-field-error">{signupErrors.email}</span>}
                  </div>

                  {/* Password */}
                  <div className="login-input-group">
                    <label htmlFor="su-pass"><Lock size={13} /> Password</label>
                    <div className="login-pass-wrap">
                      <input
                        id="su-pass" type={showPass ? "text" : "password"} placeholder="Min. 6 characters"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      />
                      <button type="button" className="login-eye-btn" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                    {signupErrors.password && <span className="login-field-error">{signupErrors.password}</span>}
                  </div>

                  {/* Address */}
                  <div className="login-input-group">
                    <label htmlFor="su-addr"><MapPin size={13} /> Shipping Address</label>
                    <textarea
                      id="su-addr" rows={3} placeholder="Flat, Street, City, State, Pincode"
                      value={signupData.address}
                      onChange={(e) => setSignupData({ ...signupData, address: e.target.value })}
                    />
                    {signupErrors.address && <span className="login-field-error">{signupErrors.address}</span>}
                  </div>
                </div>

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn">
                    <UserPlus size={15} /> Create Account
                  </button>
                </div>

                <p className="login-switch-text">
                  Already have an account?{" "}
                  <button type="button" className="login-switch-btn" onClick={() => setView("login")}>
                    Log In
                  </button>
                </p>
              </form>
            )}

            {/* ── LOG IN ── */}
            {view === "login" && (
              <form onSubmit={handleLogin} className="login-form" noValidate>
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <LogIn size={20} />
                  </div>
                  <h3>Welcome Back</h3>
                  <p>Log in to access your saved address at checkout.</p>
                </div>

                <div className="login-form-body">
                  <div className="login-input-group">
                    <label htmlFor="li-email"><Mail size={13} /> Email Address</label>
                    <input
                      id="li-email" type="email" placeholder="you@example.com" value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="li-pass"><Lock size={13} /> Password</label>
                    <div className="login-pass-wrap">
                      <input
                        id="li-pass" type={showPass ? "text" : "password"} placeholder="Your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      />
                      <button type="button" className="login-eye-btn" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <div className="login-error-banner">{loginError}</div>
                  )}
                </div>

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn">
                    <LogIn size={15} /> Log In
                  </button>
                </div>

                <p className="login-switch-text">
                  New here?{" "}
                  <button type="button" className="login-switch-btn" onClick={() => setView("signup")}>
                    Create Account
                  </button>
                </p>
              </form>
            )}

            {/* ── PROFILE ── */}
            {view === "profile" && user && (
              <div className="login-profile-card">
                {success && (
                  <div className="login-success-banner">
                    <CheckCircle size={15} /> {success}
                  </div>
                )}

                <div className="login-profile-header">
                  <div className="login-profile-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <h3>{user.name}</h3>
                  <p className="login-profile-tag">RoboMitra Customer</p>
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
                      <p>{user.address}</p>
                    </div>
                  </div>
                </div>

                <div className="login-profile-footer">
                  <button type="button" className="login-edit-btn" onClick={openEdit}>
                    <Edit3 size={14} /> Edit Details
                  </button>
                  <button type="button" className="login-logout-btn" onClick={handleLogout}>
                    <LogOut size={14} /> Log Out
                  </button>
                </div>
              </div>
            )}

            {/* ── EDIT ── */}
            {view === "edit" && (
              <form onSubmit={handleEdit} className="login-form">
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <Edit3 size={20} />
                  </div>
                  <h3>Edit Details</h3>
                  <p>Update your shipping address or display name.</p>
                </div>

                <div className="login-form-body">
                  <div className="login-input-group">
                    <label htmlFor="ed-name"><User size={13} /> Full Name</label>
                    <input
                      id="ed-name" type="text" value={editData.name} required
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                  </div>
                  <div className="login-input-group">
                    <label htmlFor="ed-addr"><MapPin size={13} /> Shipping Address</label>
                    <textarea
                      id="ed-addr" rows={3} value={editData.address} required
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    />
                  </div>
                </div>

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn">Save Changes</button>
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
