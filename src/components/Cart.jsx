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
  ChevronDown,
  MessageCircle,
  Percent,
  Clock,
  Receipt,
  Gift,
  Tag,
  Check,
  Calendar,
  FileText,
  Bike,
  Sparkles,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
  {
    code: "50%robmit",
    label: "50% OFF Special Discount",
    type: "percent",
    value: 50,
    title: "Get Upto 50% OFF on RoboMitra",
    desc: "Use code 50%robmit to save 50% instantly on all items",
    hidden: false,
  },
  {
    code: "oldcusto100",
    label: "₹100 Instant Discount",
    type: "flat",
    value: 100,
    title: "Flat ₹100 Extra Discount",
    desc: "Exclusive coupon for RoboMitra customers",
    hidden: false,
  },
  {
    code: "robo50",
    label: "₹50 Super Cashback",
    type: "flat",
    value: 50,
    title: "Flat ₹50 Bonus Coupon",
    desc: "Secret bonus coupon for extra savings",
    hidden: true,
  },
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
}) {
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupons, setAppliedCoupons] = useState(["50%robmit"]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState(() => makeEmptyCheckout(user));
  const [tipAmount, setTipAmount] = useState(0);
  const [dontNeedBag, setDontNeedBag] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");
  const [activeTab, setActiveTab] = useState("tip");

  const savingsRef = useRef(null);

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

  const nimbuExcludedSubtotal = cartItems.reduce((acc, item) => {
    if (item.id?.startsWith("nimbu-bot")) return acc;
    return acc + parseFloat(item.price.replace(/[^\d]/g, "")) * item.quantity;
  }, 0);

  const matchedCoupons = appliedCoupons
    .map((code) => COUPON_OFFERS.find((offer) => offer.code.toLowerCase() === code))
    .filter(Boolean);

  let discountAmount = 0;
  matchedCoupons.forEach((coupon) => {
    if (coupon.type === "percent") {
      const baseAmount = coupon.code.toLowerCase() === "50%robmit" ? nimbuExcludedSubtotal : subtotal;
      discountAmount += Math.round(baseAmount * (coupon.value / 100));
    } else {
      discountAmount += coupon.value;
    }
  });

  const mrpSavings = discountAmount;
  const totalSavings = mrpSavings;
  const total = Math.max(subtotal - discountAmount + tipAmount, 0);

  const handleApplyCoupon = (codeToApply) => {
    setCouponError("");
    setCouponSuccess("");
    const normalized = codeToApply.trim().toLowerCase();
    if (!normalized) return;
    const found = COUPON_OFFERS.find((c) => c.code.toLowerCase() === normalized);
    if (!found) {
      setCouponError("Invalid coupon code");
      return;
    }
    if (appliedCoupons.includes(normalized)) {
      setCouponError(`Coupon '${found.code}' is already applied`);
      return;
    }
    setAppliedCoupons((prev) => [...prev, normalized]);
    setCouponInput("");
    setCouponSuccess(`Coupon '${found.code}' stacked successfully!`);
  };

  const handleRemoveCoupon = (codeToRemove) => {
    setAppliedCoupons(appliedCoupons.filter((c) => c !== codeToRemove));
    setCouponError("");
    setCouponSuccess("");
  };

  const selectedState = INDIA_STATES.find((entry) => entry.name === checkoutData.state);
  const cityOptions = selectedState?.cities || [];

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  const scrollToSavings = () => {
    if (savingsRef.current) {
      savingsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

    let message = `Hello RoboMitra! 👋 I want to place my order via Online Payment.\n\n`;
    message += `🛒 *Order Details:*\n${productLines}\n\n`;
    message += `👤 *Name:* ${fullName}\n`;
    message += `📧 *Email:* ${email}\n`;
    message += `📱 *Phone:* ${phone}\n`;
    message += `📦 *Address:* ${address}\n`;
    message += `🏷️ *State:* ${checkoutData.state || "Not selected"}\n`;
    message += `🏙️ *City:* ${checkoutData.city || "Not selected"}\n\n`;
    message += `💵 *Subtotal:* ${formatCurrency(subtotal)}\n`;
    if (matchedCoupons.length > 0) {
      const codes = matchedCoupons.map((c) => c.code).join(", ");
      message += `🏷️ *Stacked Coupons Applied:* ${codes}\n`;
      message += `➖ *Total MRP Discount:* -${formatCurrency(discountAmount)}\n`;
    }
    if (tipAmount > 0) {
      message += `🛵 *Rider Tip:* ${formatCurrency(tipAmount)}\n`;
    }
    message += `💳 *Payment Method:* Online Payment (UPI / Card / Net Banking)\n`;
    message += `🎉 *Total Savings:* ${formatCurrency(totalSavings)}\n`;
    message += `💰 *Total Amount:* ${formatCurrency(total)}\n\n`;
    message += `Please share the Online Payment link to confirm my order. धन्यवाद!`;
    return message;
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    const finalUrl = `${whatsappUrl}?text=${encodeURIComponent(buildCheckoutMessage())}`;
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  const totalQuantity = cartItems.reduce((a, c) => a + c.quantity, 0);

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
            className="cart-drawer zepto-style-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            {/* Header */}
            <div className="zepto-cart-header">
              <div className="zepto-header-left">
                <button className="zepto-back-btn" onClick={onClose} aria-label="Close cart">
                  <ChevronLeft size={22} />
                </button>
                <div>
                  <div className="zepto-header-title-row">
                    <h3>Home</h3>
                    <ChevronDown size={16} className="zepto-arrow-down" />
                  </div>
                  <p className="zepto-header-subtitle">
                    {user?.address || "Select delivery location"}
                  </p>
                </div>
              </div>
              <button className="zepto-heart-btn" aria-label="Saved items">
                <ShoppingBag size={20} />
              </button>
            </div>

            {/* Top Savings Green Banner */}
            {cartItems.length > 0 && totalSavings > 0 && (
              <div className="zepto-savings-banner" onClick={scrollToSavings}>
                <span className="zepto-savings-banner-text">
                  Yay! You saved <strong>{formatCurrency(totalSavings)}</strong> on this order
                </span>
                <ChevronDown size={16} className="zepto-savings-chevron" />
              </div>
            )}

            {/* Scrollable Cart Content */}
            <div className="cart-items-body zepto-cart-body">
              {cartItems.length === 0 ? (
                <div className="cart-empty-state">
                  <ShoppingBag size={48} className="cart-empty-icon" />
                  <p>Your cart is empty</p>
                  <button className="cart-shop-now-btn" onClick={onClose}>
                    Shop Our Products
                  </button>
                </div>
              ) : (
                <div className="zepto-scroll-stack">
                  {/* CARD 1: COUPONS & OFFERS (STACKABLE MULTI-COUPON SUPPORT) */}
                  <div className="zepto-card zepto-coupons-card">
                    <div className="zepto-card-top-tag">
                      <span className="zepto-badge-blue">STACKABLE</span>
                      <span className="zepto-tag-text">Apply & Stack Multiple Coupons for Maximum Savings</span>
                    </div>

                    <div className="zepto-card-header">
                      <h4 className="zepto-card-title">Coupons & offers</h4>
                    </div>

                    {/* Visible Offer Cards */}
                    <div className="zepto-offer-cards-stack">
                      {COUPON_OFFERS.filter((o) => !o.hidden).map((offer) => {
                        const isActive = appliedCoupons.includes(offer.code.toLowerCase());
                        return (
                          <div
                            key={offer.code}
                            className={`zepto-payment-offer-box ${isActive ? "is-applied-box" : ""}`}
                          >
                            <div className="zepto-pay-logo">
                              {offer.type === "percent" ? "50% OFF" : "DISCOUNT"}
                            </div>
                            <div className="zepto-pay-info">
                              <span className="zepto-pay-title">{offer.title}</span>
                              <span className="zepto-pay-sub">{offer.desc}</span>
                            </div>
                            <button
                              type="button"
                              className={`zepto-pay-apply-btn ${isActive ? "is-applied" : ""}`}
                              onClick={() => {
                                if (isActive) {
                                  handleRemoveCoupon(offer.code.toLowerCase());
                                } else {
                                  handleApplyCoupon(offer.code);
                                }
                              }}
                            >
                              {isActive ? "Applied ✓" : "Apply"}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Coupon Input Box (Allows typing hidden codes like oldcusto100) */}
                    <div className="zepto-coupon-input-container">
                      <div className="zepto-coupon-input-wrapper">
                        <Tag size={16} className="zepto-tag-input-icon" />
                        <input
                          type="text"
                          className="zepto-coupon-input"
                          placeholder="Enter coupon code"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleApplyCoupon(couponInput);
                          }}
                        />
                        <button
                          type="button"
                          className="zepto-coupon-apply-btn"
                          onClick={() => handleApplyCoupon(couponInput)}
                        >
                          Apply
                        </button>
                      </div>

                      {couponError && <p className="zepto-coupon-error">{couponError}</p>}
                      {couponSuccess && <p className="zepto-coupon-success">{couponSuccess}</p>}

                      {/* Display Stacked / Applied Coupons */}
                      {matchedCoupons.length > 0 && (
                        <div className="zepto-applied-stacked-box">
                          <div className="zepto-stacked-header">
                            <CheckCircle2 size={14} color="#059669" />
                            <span>{matchedCoupons.length} {matchedCoupons.length === 1 ? "Coupon" : "Coupons"} Stacked & Applied:</span>
                          </div>
                          <div className="zepto-stacked-list">
                            {matchedCoupons.map((c) => (
                              <div key={c.code} className="zepto-stacked-tag">
                                <span>
                                  <strong>{c.code}</strong> ({c.label})
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveCoupon(c.code.toLowerCase())}
                                  title="Remove coupon"
                                >
                                  <X size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CARD 2: DELIVERY & ITEMS */}
                  <div className="zepto-card zepto-items-card">
                    <div className="zepto-delivery-header">
                      <div className="zepto-delivery-left">
                        <div className="zepto-clock-icon-bg">
                          <ShoppingBag size={18} />
                        </div>
                        <div>
                          <h4 className="zepto-delivery-title">Your Order Items</h4>
                          <span className="zepto-delivery-subtitle">
                            {totalQuantity} {totalQuantity === 1 ? "item" : "items"} selected
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="zepto-items-list">
                      {cartItems.map((item) => {
                        const priceNum = parseFloat(item.price.replace(/[^\d]/g, ""));
                        const itemTotal = priceNum * item.quantity;
                        const originalMRP = Math.round(priceNum * 1.5);

                        return (
                          <div className="zepto-item-row" key={item.id}>
                            <img src={item.image} alt={item.name} className="zepto-item-thumb" />
                            <div className="zepto-item-details">
                              <h5 className="zepto-item-name">
                                {item.name} {item.nameHighlight}
                              </h5>
                              <span className="zepto-item-pack">1 pack (RoboMitra Certified)</span>

                              <div className="zepto-item-pricing-row">
                                <span className="zepto-mrp-crossed">
                                  {formatCurrency(originalMRP * item.quantity)}
                                </span>
                                <span className="zepto-item-final-price">{formatCurrency(itemTotal)}</span>
                              </div>
                            </div>

                            {/* RoboMitra Blue Bordered Counter Pill */}
                            <div className="zepto-qty-pill">
                              <button
                                className="zepto-qty-btn"
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                aria-label="Decrease"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="zepto-qty-count">{item.quantity}</span>
                              <button
                                className="zepto-qty-btn"
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                aria-label="Increase"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Add More Items link */}
                    <div className="zepto-add-more-row">
                      <span>Forgot something?</span>
                      <button className="zepto-add-more-btn" onClick={onClose}>
                        Add More Items
                      </button>
                    </div>
                  </div>

                  {/* CARD 3: BILL SUMMARY */}
                  <div className="zepto-card zepto-bill-card">
                    <div className="zepto-card-header">
                      <Receipt size={18} className="zepto-card-icon" />
                      <h4 className="zepto-card-title">Bill Summary</h4>
                    </div>

                    <div className="zepto-bill-rows">
                      <div className="zepto-bill-row">
                        <span>Item Total</span>
                        <div className="zepto-bill-val">
                          <span className="zepto-mrp-crossed">{formatCurrency(Math.round(subtotal * 1.5))}</span>
                          <span>{formatCurrency(subtotal)}</span>
                        </div>
                      </div>

                      {matchedCoupons.map((coupon) => (
                        <div className="zepto-bill-row zepto-green-row" key={coupon.code}>
                          <span>Discount ({coupon.code})</span>
                          <span>
                            -
                            {formatCurrency(
                              coupon.type === "percent"
                                ? Math.round(subtotal * (coupon.value / 100))
                                : coupon.value
                            )}
                          </span>
                        </div>
                      ))}

                      <div className="zepto-bill-divider" />

                      <div className="zepto-bill-row zepto-bill-total-row">
                        <span>To Pay</span>
                        <div className="zepto-bill-val">
                          <span className="zepto-mrp-crossed">{formatCurrency(Math.round(subtotal * 1.5))}</span>
                          <span className="zepto-bill-final-total">{formatCurrency(total)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: SAVINGS ON THIS ORDER */}
                  <div className="zepto-card zepto-savings-card" ref={savingsRef}>
                    <div className="zepto-savings-card-header">
                      <h4 className="zepto-savings-title">Savings on this order</h4>
                      <span className="zepto-savings-pill">{formatCurrency(totalSavings)}</span>
                    </div>

                    <div className="zepto-savings-list">
                      <div className="zepto-savings-item">
                        <div className="zepto-savings-icon-green">%</div>
                        <span className="zepto-savings-label">Discount on MRP</span>
                        <span className="zepto-savings-amount">{formatCurrency(mrpSavings)}</span>
                      </div>
                    </div>
                  </div>

                  {/* CARD 5: TIP DELIVERY PARTNER */}
                  <div className="zepto-card zepto-tip-card">
                    <div className="zepto-tip-tabs">
                      <button
                        className={`zepto-tip-tab ${activeTab === "tip" ? "is-active" : ""}`}
                        onClick={() => setActiveTab("tip")}
                      >
                        Give a Tip
                      </button>
                      <button
                        className={`zepto-tip-tab ${activeTab === "instructions" ? "is-active" : ""}`}
                        onClick={() => setActiveTab("instructions")}
                      >
                        Delivery Instructions
                      </button>
                    </div>

                    {activeTab === "tip" ? (
                      <div className="zepto-tip-content">
                        <div className="zepto-tip-info-row">
                          <div className="zepto-tip-text">
                            <h5>Tip Delivery Partner</h5>
                            <p>Help them earn a little extra for their effort. 100% of this tip will go to them.</p>
                            <span className="zepto-tip-link">Delivery Partner Safety</span>
                          </div>
                          <div className="zepto-rider-graphic">
                            <Bike size={36} color="#2563eb" />
                          </div>
                        </div>

                        <div className="zepto-tip-chips">
                          {[
                            { label: "₹10", val: 10, emoji: "☕" },
                            { label: "₹35", val: 35, emoji: "🥟" },
                            { label: "₹50", val: 50, emoji: "🍱" },
                            { label: "Custom", val: 0, emoji: "🎁" },
                          ].map((t) => (
                            <button
                              key={t.label}
                              className={`zepto-tip-chip ${tipAmount === t.val && t.val > 0 ? "is-selected" : ""}`}
                              onClick={() => setTipAmount(tipAmount === t.val ? 0 : t.val)}
                            >
                              <span>
                                {t.emoji} {t.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="zepto-tip-content">
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                          • Leave at door step<br />
                          • Avoid calling<br />
                          • Ring bell twice
                        </p>
                      </div>
                    )}
                  </div>



                  {/* Clear cart action */}
                  <button className="cart-clear-btn zepto-clear-all" onClick={onClearCart}>
                    <Trash2 size={14} /> Clear All Items
                  </button>
                </div>
              )}
            </div>

            {/* STICKY BOTTOM PAYMENT BAR (PAY ONLINE ONLY) */}
            {cartItems.length > 0 && (
              <div className="zepto-sticky-bottom">
                {/* Bottom Action Row */}
                <div className="zepto-bottom-action-row">
                  <div className="zepto-bottom-price-box">
                    <span className="zepto-to-pay-label">To Pay</span>
                    <span className="zepto-to-pay-amount">{formatCurrency(total)}</span>
                  </div>

                  <div className="zepto-bottom-btn-group">
                    <button className="zepto-pay-blue-btn zepto-pay-full-btn" onClick={openCheckout}>
                      <span>Pay Online &amp; Order</span>
                      <span className="zepto-btn-sub">Instant UPI, Card &amp; Net Banking</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* CHECKOUT DETAILS MODAL */}
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
                        <Lock size={20} />
                      </div>
                      <h3>Online Payment Details</h3>
                      <p>Enter your details to receive payment link &amp; confirm order on WhatsApp.</p>
                      <div className="cart-stepper" aria-label="Checkout steps">
                        {[1, 2].map((step) => (
                          <span
                            key={step}
                            className={`cart-step-dot ${
                              checkoutStep === step ? "is-active" : checkoutStep > step ? "is-complete" : ""
                            }`}
                          >
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

                      {checkoutStep < 2 ? (
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
                          style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)" }}
                          onClick={handleWhatsAppCheckout}
                        >
                          <Lock size={15} /> Pay Online via WhatsApp
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
