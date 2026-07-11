import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, MapPin, LogOut, Save, Shield } from "lucide-react";

export default function LoginModal({ isOpen, onClose, user, onSaveUser, theme = "light" }) {
  const [isEditing, setIsEditing] = useState(!user);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.address.trim()) {
      alert("Name and Shipping Address are required!");
      return;
    }
    onSaveUser(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out? This will clear your saved address.")) {
      onSaveUser(null);
      setFormData({ name: "", email: "", address: "" });
      setIsEditing(true);
    }
  };

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

          {/* Modal Container */}
          <motion.div
            className="login-modal-container"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
          >
            <button className="login-modal-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>

            {isEditing ? (
              /* Sign In / Set Shipping Details Form */
              <form onSubmit={handleSubmit} className="login-form">
                <div className="login-form-header">
                  <div className="login-header-icon">
                    <Shield size={20} />
                  </div>
                  <h3>Customer Shipping Details</h3>
                  <p>Set your address once to include it automatically at checkout.</p>
                </div>

                <div className="login-form-body">
                  <div className="login-input-group">
                    <label htmlFor="login-name">
                      <User size={14} /> Full Name
                    </label>
                    <input
                      type="text"
                      id="login-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="login-email">
                      <Mail size={14} /> Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="login-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. johndoe@example.com"
                    />
                  </div>

                  <div className="login-input-group">
                    <label htmlFor="login-address">
                      <MapPin size={14} /> Full Shipping Address
                    </label>
                    <textarea
                      id="login-address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Flat/House No, Building, Street, City, State, Pincode"
                      rows={4}
                      required
                    />
                  </div>
                </div>

                <div className="login-form-footer">
                  <button type="submit" className="login-save-btn">
                    <Save size={16} /> Save &amp; Log In
                  </button>
                  {user && (
                    <button
                      type="button"
                      className="login-cancel-btn"
                      onClick={() => {
                        setFormData({
                          name: user.name,
                          email: user.email,
                          address: user.address,
                        });
                        setIsEditing(false);
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            ) : (
              /* Logged In Customer Profile Card */
              <div className="login-profile-card">
                <div className="login-profile-header">
                  <div className="login-profile-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <h3>Logged In As</h3>
                  <p className="login-profile-tag">Official RoboMitra Customer</p>
                </div>

                <div className="login-profile-body">
                  <div className="login-profile-detail">
                    <span className="detail-label">Name</span>
                    <span className="detail-val">{user.name}</span>
                  </div>

                  {user.email && (
                    <div className="login-profile-detail">
                      <span className="detail-label">Email</span>
                      <span className="detail-val">{user.email}</span>
                    </div>
                  )}

                  <div className="login-profile-detail">
                    <span className="detail-label">Shipping Address</span>
                    <div className="detail-val address-box">
                      <MapPin size={14} className="address-pin-icon" />
                      <p>{user.address}</p>
                    </div>
                  </div>
                </div>

                <div className="login-profile-footer">
                  <button
                    type="button"
                    className="login-edit-btn"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Details
                  </button>
                  <button type="button" className="login-logout-btn" onClick={handleLogout}>
                    <LogOut size={14} /> Log Out
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
