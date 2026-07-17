import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageSquareText,
  SendHorizontal,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";

const reviewMood = {
  1: "Needs work",
  2: "Could be better",
  3: "Good",
  4: "Great",
  5: "Amazing",
};

const stars = [1, 2, 3, 4, 5];

const AddReviewForm = ({ onReviewAdded, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef(null);
  const activeRating = hoveredRating || formData.rating;
  const commentLength = formData.comment.trim().length;
  const nameLength = formData.name.trim().length;

  const ratingLabel = useMemo(() => reviewMood[activeRating] || "Amazing", [activeRating]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const setRating = (rating) => {
    setFormData((current) => ({ ...current, rating }));
    setHoveredRating(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const trimmedName = formData.name.trim();
    const trimmedComment = formData.comment.trim();

    if (!trimmedName) {
      setSubmitError("Please add your name.");
      return;
    }

    if (!trimmedComment) {
      setSubmitError("Please write your review message.");
      return;
    }

    if (!formData.rating || formData.rating < 1) {
      setSubmitError("Please choose a rating.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: trimmedName,
      rating: Number(formData.rating),
      comment: trimmedComment,
      date: new Date().toLocaleDateString(),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
        trimmedName || "Anonymous"
      )}`,
    };

    try {
      setIsSubmitting(true);
      if (onReviewAdded) {
        await onReviewAdded(newReview);
      }

      setSubmitted(true);
      setFormData({ name: "", rating: 5, comment: "" });
      setHoveredRating(0);

      timerRef.current = window.setTimeout(() => {
        setSubmitted(false);
        setIsSubmitting(false);
        if (onClose) onClose();
      }, 1600);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error?.message || "Could not save your review");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      className="rm-review-form-card"
    >
      <div className="rm-review-form-topbar">
        <div className="rm-review-form-badge">
          <Sparkles size={14} />
          Share your experience
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rm-review-form-close"
            aria-label="Close review form"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rm-review-success"
        >
          <div className="rm-review-success-icon">
            <CheckCircle2 size={26} />
          </div>
          <h3>Thanks for your review!</h3>
          <p>Your feedback is now saved.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="rm-review-form" noValidate>
          <div className="rm-review-form-header">
            <div className="rm-review-form-icon">
              <MessageSquareText size={22} />
            </div>
            <div className="rm-review-form-heading-copy">
              <p className="rm-review-form-kicker">Public review</p>
              <h3>Write a helpful review</h3>
              <p>
                Tell others what stood out, what felt premium, and what could be improved.
              </p>
            </div>
          </div>

          <div className="rm-review-form-summary">
            <div className="rm-review-summary-pill">
              <Star size={14} />
              {ratingLabel}
            </div>
            <div className="rm-review-summary-pill rm-review-summary-pill-soft">
              <CheckCircle2 size={14} />
              Saved securely
            </div>
          </div>

          {submitError && <div className="rm-review-error-banner">{submitError}</div>}

          <div className="rm-review-rating-card">
            <div className="rm-review-rating-copy">
              <p className="rm-review-label">Your rating</p>
              <h4>How was your RoboMitra experience?</h4>
            </div>
            <div className="rm-review-star-row" role="radiogroup" aria-label="Review rating">
              {stars.map((rating) => {
                const active = rating <= activeRating;
                return (
                  <button
                    key={rating}
                    type="button"
                    className={`rm-review-star-btn ${active ? "is-active" : ""}`}
                    onMouseEnter={() => setHoveredRating(rating)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onFocus={() => setHoveredRating(rating)}
                    onBlur={() => setHoveredRating(0)}
                    onClick={() => setRating(rating)}
                    aria-pressed={formData.rating === rating}
                    aria-label={`${rating} star${rating > 1 ? "s" : ""}`}
                  >
                    <Star size={18} fill={active ? "currentColor" : "none"} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rm-review-input-grid">
            <label className="rm-review-input-group">
              <span>
                <User size={14} />
                Your name
              </span>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Enter your name"
                maxLength={40}
                autoComplete="name"
                required
              />
              <small>{nameLength}/40 characters</small>
            </label>

            <label className="rm-review-input-group rm-review-input-group-wide">
              <span>
                <MessageSquareText size={14} />
                Your review
              </span>
              <textarea
                value={formData.comment}
                onChange={handleChange("comment")}
                placeholder="Tell people what you liked most about RoboMitra..."
                rows={5}
                maxLength={240}
                required
              />
              <div className="rm-review-char-row">
                <small>Keep it short, clear, and honest.</small>
                <small>{commentLength}/240</small>
              </div>
            </label>
          </div>

          <div className="rm-review-form-footer">
            <button type="button" onClick={onClose} className="rm-review-cancel-btn">
              Cancel
            </button>
            <button
              type="submit"
              className="rm-review-submit-btn"
              disabled={isSubmitting}
            >
              <SendHorizontal size={16} />
              {isSubmitting ? "Saving..." : "Submit review"}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default AddReviewForm;
