import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Mail,
  User,
  Phone,
  MapPin,
  BadgeIndianRupee,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const INDIA_STATES = [
  { name: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Guntur"] },
  { name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur"] },
  { name: "Delhi", cities: ["New Delhi", "Dwarka", "Rohini"] },
  { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara"] },
  { name: "Karnataka", cities: ["Bengaluru", "Mysuru", "Mangaluru"] },
  { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode"] },
  { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur"] },
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
  { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela"] },
  { name: "Punjab", cities: ["Ludhiana", "Amritsar", "Jalandhar"] },
  { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur"] },
  { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai"] },
  { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad"] },
  { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Noida"] },
  { name: "West Bengal", cities: ["Kolkata", "Howrah", "Siliguri"] },
];

const COUPON_OFFERS = [
  { code: "50%robmit", label: "50% Off", type: "percent", value: 50 },
  { code: "oldcusto100", label: "₹100 Off", type: "flat", value: 100 },
];

const makeEmptyCheckout = (user) => ({
  name: user?.name || "",
  email: user?.email || "",
  phone: user?.phone || "",
  address: user?.address || "",
  state: "",
  city: "",
});

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  whatsappUrl,
  user,
  onLoginClick,
}) {
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupons, setAppliedCoupons] = useState([]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState(() => makeEmptyCheckout(user));

  useEffect(() => {
    if (!isOpen) return;
    setCheckoutOpen(false);
    setCheckoutStep(1);
    setCheckoutData(makeEmptyCheckout(user));
  }, [isOpen, user]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(/[^\d]/g, "")) * item.quantity,
    0
  );

  const deliveryCharges = 150;
  
  const matchedCoupons = appliedCoupons
    .map(code => COUPON_OFFERS.find((offer) => offer.code.toLowerCase() === code))
    .filter(Boolean);

  const isCouponApplied = matchedCoupons.length > 0;
  let discountAmount = 0;
  matchedCoupons.forEach(coupon => {
    if (coupon.type === "percent") {
      discountAmount += Math.round(subtotal * (coupon.value / 100));
    } else {
      discountAmount += coupon.value;
    }
  });
  
  const total = Math.max(subtotal - discountAmount + deliveryCharges, 0);

  const handleApplyCoupon = (codeToApply) => {
    const normalized = codeToApply.trim().toLowerCase();
    if (!normalized) return;
    const isValid = COUPON_OFFERS.some(c => c.code.toLowerCase() === normalized);
    if (isValid && !appliedCoupons.includes(normalized)) {
      setAppliedCoupons([...appliedCoupons, normalized]);
      setCouponInput("");
    }
  };

  const handleRemoveCoupon = (codeToRemove) => {
    setAppliedCoupons(appliedCoupons.filter(c => c !== codeToRemove));
  };

  const selectedState = INDIA_STATES.find((entry) => entry.name === checkoutData.state);
  const cityOptions = selectedState?.cities || [];

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  const openCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckoutData(makeEmptyCheckout(user));
    setCheckoutStep(1);
    setCheckoutOpen(true);
  };

  const buildCheckoutMessage = () => {
    const productLines = cartItems
      .map((item) => `• ${item.quantity}x ${item.name} ${item.nameHighlight || ""} — ${item.price} each`)
      .join("\n");

    const fullName = checkoutData.name.trim() || user?.name || "Customer";
    const email = checkoutData.email.trim() || user?.email || "Not shared";
    const phone = checkoutData.phone.trim() || user?.phone || "Not shared";
    const address = checkoutData.address.trim() || user?.address || "Not shared";

    let message = `Hello RoboMitra! 👋 I want to place my order via WhatsApp.\n\n`;
    message += `🛒 *Order Details:*\n${productLines}\n\n`;
    message += `👤 *Name:* ${fullName}\n`;
    message += `📧 *Email:* ${email}\n`;
    message += `📱 *Phone:* ${phone}\n`;
    message += `📦 *Address:* ${address}\n`;
    message += `🏷️ *State:* ${checkoutData.state || "Not selected"}\n`;
    message += `🏙️ *City:* ${checkoutData.city || "Not selected"}\n\n`;
    message += `💵 *Subtotal:* ${formatCurrency(subtotal)}\n`;
    if (matchedCoupons.length > 0) {
      const codes = matchedCoupons.map(c => c.code).join(", ");
      message += `🏷️ *Discount Code:* ${codes}\n`;
      message += `➖ *Discount:* -${formatCurrency(discountAmount)}\n`;
    }
    message += `🚚 *Delivery Charges:* ${formatCurrency(deliveryCharges)}\n`;
    message += `💰 *Total Amount:* ${formatCurrency(total)}\n\n`;
    message += `Please confirm my order and share the payment details. धन्यवाद!`;
    return message;
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    const finalUrl = `${whatsappUrl}?text=${encodeURIComponent(buildCheckoutMessage())}`;
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cart-overlay-wrapper">
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            <div className="cart-header">
              <div className="cart-header-title">
                <ShoppingBag size={20} className="cart-icon-main" />
                <h3>Your Cart ({cartItems.reduce((a, c) => a + c.quantity, 0)})</h3>
              </div>
              <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            <div className="cart-items-body">
              {cartItems.length === 0 ? (
                <div className="cart-empty-state">
                  <ShoppingBag size={48} className="cart-empty-icon" />
                  <p>Your cart is empty</p>
                  <button className="cart-shop-now-btn" onClick={onClose}>
                    Shop Our Products
                  </button>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-details">
                        <div className="cart-item-header">
                          <h4>
                            {item.name} {item.nameHighlight}
                          </h4>
                          <button
                            className="cart-item-remove"
                            onClick={() => onRemoveItem(item.id)}
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="cart-item-price">{item.price}</p>
                        <div className="cart-item-actions">
                          <div className="cart-qty-selector">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} aria-label="Decrease">
                              <Minus size={12} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} aria-label="Increase">
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="cart-item-total">
                            {formatCurrency(parseFloat(item.price.replace(/[^\d]/g, "")) * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-summary-row" style={{ fontSize: "0.92rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                {matchedCoupons.map((coupon) => (
                  <div key={coupon.code} className="cart-summary-row cart-summary-discount" style={{ fontSize: "0.92rem", fontWeight: 700 }}>
                    <span>Discount ({coupon.code})</span>
                    <span>-{formatCurrency(coupon.type === "percent" ? Math.round(subtotal * (coupon.value / 100)) : coupon.value)}</span>
                  </div>
                ))}
                <div className="cart-summary-row" style={{ fontSize: "0.92rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  <span>Delivery Charges</span>
                  <span>{formatCurrency(deliveryCharges)}</span>
                </div>
                <div className="cart-summary-row" style={{ marginTop: "4px", paddingTop: "12px", borderTop: "1px dashed var(--border)" }}>
                  <span>Total</span>
                  <span className="cart-subtotal-price">{formatCurrency(total)}</span>
                </div>
                <p className="cart-shipping-notice">Orders are completed on WhatsApp. A flat delivery charge of ₹150 applies.</p>

                <button className="cart-checkout-btn" onClick={openCheckout}>
                  Continue to Checkout
                  <ArrowRight size={18} />
                </button>
                <button className="cart-clear-btn" onClick={onClearCart}>
                  Clear All Items
                </button>
              </div>
            )}
          </motion.div>

          <AnimatePresence>
            {checkoutOpen && (
              <div className="login-modal-backdrop">
                <motion.div
                  className="login-modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setCheckoutOpen(false)}
                />

                <motion.div
                  className="login-modal-container cart-checkout-modal"
                  initial={{ scale: 0.88, opacity: 0, y: 28 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.88, opacity: 0, y: 28 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                >
                  <div className="cart-checkout-hero" aria-hidden="true">
                    <div className="cart-checkout-hero-orb cart-checkout-hero-orb-a" />
                    <div className="cart-checkout-hero-orb cart-checkout-hero-orb-b" />
                    <div className="cart-checkout-hero-lines" />
                  </div>
                  <button className="login-modal-close" onClick={() => setCheckoutOpen(false)} aria-label="Close checkout">
                    <X size={18} />
                  </button>

                  <div className="login-form cart-checkout-form" style={{ paddingBottom: 24 }}>
                    <div className="login-form-header">
                      <div className="login-header-icon">
                        <MessageCircle size={20} />
                      </div>
                      <h3>WhatsApp Checkout</h3>
                      <p>Fill in your details in 3 quick steps, then continue on WhatsApp.</p>
                      <div className="cart-stepper" aria-label="Checkout steps">
                        {[1, 2, 3].map((step) => (
                          <span key={step} className={`cart-step-dot ${checkoutStep === step ? "is-active" : checkoutStep > step ? "is-complete" : ""}`}>
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>

                    {checkoutStep === 1 && (
                      <div className="login-form-body">
                        <div className="login-input-group">
                          <label htmlFor="checkout-name">
                            <User size={13} /> Full Name
                          </label>
                          <input
                            id="checkout-name"
                            type="text"
                            placeholder="Your full name"
                            value={checkoutData.name}
                            onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                            autoComplete="name"
                          />
                        </div>

                        <div className="login-input-group">
                          <label htmlFor="checkout-email">
                            <Mail size={13} /> Email Address
                          </label>
                          <input
                            id="checkout-email"
                            type="email"
                            placeholder="you@example.com"
                            value={checkoutData.email}
                            onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                            autoComplete="email"
                          />
                        </div>

                        <div className="login-input-group">
                          <label htmlFor="checkout-phone">
                            <Phone size={13} /> Phone Number
                          </label>
                          <input
                            id="checkout-phone"
                            type="tel"
                            placeholder="10-digit mobile number"
                            value={checkoutData.phone}
                            onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                            autoComplete="tel"
                          />
                        </div>
                      </div>
                    )}

                    {checkoutStep === 2 && (
                      <div className="login-form-body">
                        <div className="login-input-group">
                          <label htmlFor="checkout-address">
                            <MapPin size={13} /> Delivery Address
                          </label>
                          <textarea
                            id="checkout-address"
                            rows={3}
                            placeholder="House no, street, area"
                            value={checkoutData.address}
                            onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                            autoComplete="street-address"
                          />
                        </div>

                        <div className="cdm-row">
                          <div className="login-input-group">
                            <label htmlFor="checkout-state">
                              <BadgeIndianRupee size={13} /> State
                            </label>
                            <select
                              id="checkout-state"
                              value={checkoutData.state}
                              onChange={(e) =>
                                setCheckoutData({
                                  ...checkoutData,
                                  state: e.target.value,
                                  city: "",
                                })
                              }
                            >
                              <option value="">Select state</option>
                              {INDIA_STATES.map((entry) => (
                                <option key={entry.name} value={entry.name}>
                                  {entry.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="login-input-group">
                            <label htmlFor="checkout-city">
                              <MapPin size={13} /> City
                            </label>
                            <select
                              id="checkout-city"
                              value={checkoutData.city}
                              onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                              disabled={!selectedState}
                            >
                              <option value="">{selectedState ? "Select city" : "Select state first"}</option>
                              {cityOptions.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {checkoutStep === 3 && (
                      <div className="login-form-body cart-step-body">
                        <div className="cart-review-box">
                          <div>
                            <span className="cart-review-label">Name</span>
                            <p>{checkoutData.name || "Not filled"}</p>
                          </div>
                          <div>
                            <span className="cart-review-label">Email</span>
                            <p>{checkoutData.email || "Not filled"}</p>
                          </div>
                          <div>
                            <span className="cart-review-label">Phone</span>
                            <p>{checkoutData.phone || "Not filled"}</p>
                          </div>
                          <div>
                            <span className="cart-review-label">Address</span>
                            <p>{checkoutData.address || "Not filled"}</p>
                          </div>
                          <div className="cdm-row">
                            <div>
                              <span className="cart-review-label">State</span>
                              <p>{checkoutData.state || "Not selected"}</p>
                            </div>
                            <div>
                              <span className="cart-review-label">City</span>
                              <p>{checkoutData.city || "Not selected"}</p>
                            </div>
                          </div>
                        </div>

                        <div className="cart-checkout-summary-card">
                          <div className="cart-coupon-box cart-checkout-coupon-box">
                            <label className="cart-coupon-label" htmlFor="checkout-coupon-code">
                              Discount code
                            </label>
                            <div className="cart-coupon-chips" aria-label="Available discount codes">
                              {COUPON_OFFERS.filter(offer => offer.code === "50%robmit").map((offer) => {
                                const isActive = appliedCoupons.includes(offer.code.toLowerCase());
                                return (
                                  <button
                                    key={offer.code}
                                    type="button"
                                    className={`cart-coupon-chip ${isActive ? "is-active" : ""}`}
                                    onClick={() => {
                                      if (isActive) {
                                        handleRemoveCoupon(offer.code.toLowerCase());
                                      } else {
                                        handleApplyCoupon(offer.code);
                                      }
                                    }}
                                  >
                                    {offer.code} · {offer.label} {isActive && <X size={12} style={{marginLeft: 4, display: 'inline-block'}}/>}
                                  </button>
                                );
                              })}
                            </div>
                            <div className="cart-coupon-row" style={{ display: "flex", gap: "10px", marginTop: "12px", position: "relative" }}>
                              <input
                                id="checkout-coupon-code"
                                type="text"
                                className="cart-coupon-input"
                                placeholder="Have a discount code?"
                                value={couponInput}
                                onChange={(e) => setCouponInput(e.target.value)}
                                style={{
                                  flex: 1,
                                  background: "var(--bg-soft)",
                                  border: "2px solid var(--border)",
                                  borderRadius: "12px",
                                  padding: "12px 16px",
                                  fontSize: "0.95rem",
                                  fontWeight: "500",
                                  color: "var(--text)",
                                  transition: "all var(--transition)",
                                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)"
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = "var(--blue)";
                                  e.target.style.boxShadow = "0 0 0 4px var(--blue-glow)";
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = "var(--border)";
                                  e.target.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.02)";
                                }}
                              />
                              <button
                                type="button"
                                style={{
                                  padding: "0 24px",
                                  borderRadius: "12px",
                                  fontSize: "0.95rem",
                                  fontWeight: "700",
                                  background: "var(--gradient-brand)",
                                  color: "#fff",
                                  border: "none",
                                  cursor: "pointer",
                                  boxShadow: "var(--shadow-blue)",
                                  transition: "all var(--transition)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.transform = "translateY(-2px)";
                                  e.currentTarget.style.boxShadow = "var(--shadow-blue-lg)";
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.transform = "translateY(0)";
                                  e.currentTarget.style.boxShadow = "var(--shadow-blue)";
                                }}
                                onClick={() => handleApplyCoupon(couponInput)}
                              >
                                Apply
                              </button>
                            </div>
                            {appliedCoupons.length > 0 && (
                              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                {matchedCoupons.map((c) => (
                                  <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    key={c.code} 
                                    style={{ 
                                      display: "flex", 
                                      justifyContent: "space-between", 
                                      alignItems: "center", 
                                      background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)",
                                      border: "1px solid rgba(16, 185, 129, 0.2)",
                                      padding: "10px 16px", 
                                      borderRadius: "10px", 
                                      fontSize: "0.9rem", 
                                      fontWeight: "600", 
                                      color: "var(--green-dark)" 
                                    }}
                                  >
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <X size={12} style={{ transform: "rotate(45deg)" }} />
                                      </div>
                                      <span><strong style={{textTransform: 'uppercase', letterSpacing: '0.5px'}}>{c.code}</strong> applied!</span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveCoupon(c.code.toLowerCase())}
                                      style={{ 
                                        background: "rgba(16, 185, 129, 0.15)", 
                                        border: "none", 
                                        cursor: "pointer", 
                                        color: "var(--green-dark)", 
                                        display: "flex",
                                        padding: "4px",
                                        borderRadius: "50%",
                                        transition: "all var(--transition)"
                                      }}
                                      onMouseOver={(e) => e.currentTarget.style.background = "rgba(16, 185, 129, 0.3)"}
                                      onMouseOut={(e) => e.currentTarget.style.background = "rgba(16, 185, 129, 0.15)"}
                                    >
                                      <X size={14} />
                                    </button>
                                  </motion.div>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="cart-summary-row" style={{ fontSize: "0.92rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                            <span>Subtotal</span>
                            <span>{formatCurrency(subtotal)}</span>
                          </div>
                          {matchedCoupons.map((coupon) => (
                            <div key={coupon.code} className="cart-summary-row cart-summary-discount" style={{ fontSize: "0.92rem", fontWeight: 700 }}>
                              <span>Discount ({coupon.code})</span>
                              <span>-{formatCurrency(coupon.type === "percent" ? Math.round(subtotal * (coupon.value / 100)) : coupon.value)}</span>
                            </div>
                          ))}
                          <div className="cart-summary-row" style={{ fontSize: "0.92rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                            <span>Delivery Charges</span>
                            <span>{formatCurrency(deliveryCharges)}</span>
                          </div>
                          <div className="cart-summary-row cart-summary-total-row">
                            <span>Total</span>
                            <span className="cart-subtotal-price">{formatCurrency(total)}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="login-form-footer cart-checkout-footer">
                      <button
                        type="button"
                        className="login-cancel-btn"
                        onClick={() => {
                          if (checkoutStep > 1) {
                            setCheckoutStep((step) => step - 1);
                            return;
                          }
                          setCheckoutOpen(false);
                        }}
                      >
                        <ChevronLeft size={15} /> {checkoutStep > 1 ? "Back" : "Close"}
                      </button>

                      {checkoutStep < 3 ? (
                        <button
                          type="button"
                          className="login-save-btn"
                          onClick={() => setCheckoutStep((step) => step + 1)}
                        >
                          Next <ChevronRight size={15} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="login-save-btn"
                          onClick={handleWhatsAppCheckout}
                        >
                          <MessageCircle size={15} /> Checkout via WhatsApp
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
