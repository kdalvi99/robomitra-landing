import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Instagram, Phone } from "lucide-react";

export default function ContactFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-float-root">
      <AnimatePresence>
        {open && (
          <motion.div
            className="contact-float-panel"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <div className="cfp-header">
              <div className="cfp-header-info">
                <div className="cfp-avatar">R</div>
                <div>
                  <p className="cfp-name">RoboMitra</p>
                  <span className="cfp-status">
                    <span className="cfp-dot" />
                    Typically replies instantly
                  </span>
                </div>
              </div>
              <button className="cfp-close" onClick={() => setOpen(false)} aria-label="Close">
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="cfp-body">
              <p className="cfp-greeting">
                👋 Hi there! Got a question about RoboMitra? Reach us directly on WhatsApp or Instagram — we're happy to help!
              </p>
            </div>

            {/* Buttons */}
            <div className="cfp-buttons">
              <a
                href="https://wa.me/917977473538"
                target="_blank"
                rel="noopener noreferrer"
                className="cfp-btn cfp-btn-whatsapp"
              >
                <Phone size={16} />
                Chat on WhatsApp
              </a>
              <a
                href="https://instagram.com/Robomitra.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="cfp-btn cfp-btn-instagram"
              >
                <Instagram size={16} />
                Ask on Instagram
              </a>
            </div>

            <p className="cfp-footer">@Robomitra.tech &nbsp;·&nbsp; +91 79774 73538</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        className="contact-float-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Ask a question"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MessageCircle size={20} />
              <span className="contact-float-label">Ask a question</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
