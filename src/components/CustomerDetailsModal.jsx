import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, MapPin, CheckCircle, Edit3 } from "lucide-react";

// Persist customer details in localStorage
const STORAGE_KEY = "robomitra_customer";

export function loadCustomer() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function saveCustomer(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function CustomerDetailsModal({ isOpen, onClose, user, onSaveUser }) {
  // view: "form" | "profile"
  const [view, setView] = useState(user ? "profile" : "form");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  // Sync view when modal opens
  useEffect(() => {
    if (isOpen) {
      if (user) {
        setView("profile");
        setForm({
          firstName: user.firstName || user.name?.split(" ")[0] || "",
          lastName: user.lastName || user.name?.split(" ").slice(1).join(" ") || "",
          address: user.address || "",
        });
      } else {
        setView("form");
        setForm({ firstName: "", lastName: "", address: "" });
      }
      setErrors({});
      setSaved(false);
    }
  }, [isOpen, user]);

  function validate() {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Surname is required";
    if (!form.address.trim()) errs.address = "Delivery address is required";
    return errs;
  }

  function handleSave(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const customer = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      name: `${form.firstName.trim()} ${form.lastName.trim()}`,
      address: form.address.trim(),
    };
    saveCustomer(customer);
    onSaveUser(customer);
    setSaved(true);
    setView("profile");
  }

  function handleEdit() {
    setSaved(false);
    setView("form");
  }

  function handleClear() {
    saveCustomer(null);
    onSaveUser(null);
    setForm({ firstName: "", lastName: "", address: "" });
    setView("form");
  }

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

          {/* Modal Card */}
          <motion.div
            className="login-modal-container"
            key={view}
            initial={{ scale: 0.93, opacity: 0, y: 18 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 18 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            <button className="login-modal-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>

            {/* ── FORM VIEW ── */}
            {view === "form" && (
              <form onSubmit={handleSave} className="login-form" noValidate>
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <User size={20} />
                  </div>
                  <h3>{user ? "Edit Your Details" : "Your Details"}</h3>
                  <p>We need your name and address so we can include it in your WhatsApp order.</p>
                </div>

                <div className="login-form-body">
                  {/* First Name */}
                  <div className="cdm-row">
                    <div className="login-input-group">
                      <label htmlFor="cdm-fname">
                        <User size={13} /> First Name
                      </label>
                      <input
                        id="cdm-fname"
                        type="text"
                        placeholder="e.g. Rohan"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        autoComplete="given-name"
                      />
                      {errors.firstName && (
                        <span className="login-field-error">{errors.firstName}</span>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="login-input-group">
                      <label htmlFor="cdm-lname">
                        <User size={13} /> Surname
                      </label>
                      <input
                        id="cdm-lname"
                        type="text"
                        placeholder="e.g. Sharma"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        autoComplete="family-name"
                      />
                      {errors.lastName && (
                        <span className="login-field-error">{errors.lastName}</span>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="login-input-group">
                    <label htmlFor="cdm-addr">
                      <MapPin size={13} /> Delivery Address
                    </label>
                    <textarea
                      id="cdm-addr"
                      rows={3}
                      placeholder="Flat no, Street, City, State, Pincode"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      autoComplete="street-address"
                    />
                    {errors.address && (
                      <span className="login-field-error">{errors.address}</span>
                    )}
                  </div>
                </div>

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn">
                    <CheckCircle size={15} /> Save Details
                  </button>
                  {user && (
                    <button
                      type="button"
                      className="login-cancel-btn"
                      onClick={() => setView("profile")}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* ── PROFILE VIEW ── */}
            {view === "profile" && user && (
              <div className="login-profile-card">
                {saved && (
                  <div className="login-success-banner">
                    <CheckCircle size={15} /> Details saved! Your order will include these.
                  </div>
                )}

                <div className="login-profile-header">
                  <div className="login-profile-avatar">
                    {user.firstName?.charAt(0)?.toUpperCase() || user.name?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                  <h3>{user.name || `${user.firstName} ${user.lastName}`}</h3>
                  <p className="login-profile-tag">RoboMitra Customer</p>
                </div>

                <div className="login-profile-body">
                  <div className="login-profile-detail">
                    <span className="detail-label">Name</span>
                    <span className="detail-val">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                  <div className="login-profile-detail">
                    <span className="detail-label">Delivery Address</span>
                    <div className="detail-val address-box">
                      <MapPin size={14} className="address-pin-icon" />
                      <p>{user.address}</p>
                    </div>
                  </div>
                </div>

                <div className="login-profile-footer">
                  <button type="button" className="login-edit-btn" onClick={handleEdit}>
                    <Edit3 size={14} /> Edit Details
                  </button>
                  <button type="button" className="login-logout-btn" onClick={handleClear}>
                    <X size={14} /> Clear
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
