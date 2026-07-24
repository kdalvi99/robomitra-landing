import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";
import React, { useMemo, useState } from "react";

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
  const [couponCode, setCouponCode] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(/[^\d]/g, "")) * item.quantity,
    0
  );

  const deliveryCharges = 150;
  const validCouponCode = "50%robmit";
  const normalizedCoupon = couponCode.trim().toLowerCase();
  const isCouponApplied = normalizedCoupon === validCouponCode;
  const discountAmount = isCouponApplied ? Math.round(subtotal * 0.5) : 0;
  const total = Math.max(subtotal - discountAmount + deliveryCharges, 0);

  const couponStatus = useMemo(() => {
    if (!couponCode.trim()) return null;
    return isCouponApplied ? "applied" : "invalid";
  }, [couponCode, isCouponApplied]);

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Build product list
    const productLines = cartItems
      .map((item) => `  • ${item.quantity}x ${item.name} ${item.nameHighlight || ""} — ${item.price} each`)
      .join("\n");

    let message = `Hello RoboMitra! 👋 I would like to place an order.\n\n`;

    message += `🛒 *Order Details:*\n${productLines}\n\n`;
    message += `💵 *Subtotal:* ${formatCurrency(subtotal)}\n`;
    if (isCouponApplied) {
      message += `🏷️ *Discount Code:* ${validCouponCode}\n`;
      message += `➖ *Discount:* -${formatCurrency(discountAmount)}\n`;
    }
    message += `🚚 *Delivery Charges:* ${formatCurrency(deliveryCharges)}\n`;
    message += `💰 *Total Amount:* ${formatCurrency(total)}\n`;

    if (user) {
      const fullName = user.name || `${user.firstName || ""} ${user.lastName || ""}`.trim();
      message += `\n👤 *Customer Name:* ${fullName}\n`;
      message += `📦 *Delivery Address:*\n  ${user.address}\n`;
    } else {
      message += `\n📦 *(Please share your name and delivery address so we can process the order)*\n`;
    }

    message += `\nPlease confirm my order and share payment details! 😊`;

    const finalUrl = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cart-overlay-wrapper">
          {/* Backdrop */}
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            {/* Header */}
            <div className="cart-header">
              <div className="cart-header-title">
                <ShoppingBag size={20} className="cart-icon-main" />
                <h3>Your Cart ({cartItems.reduce((a, c) => a + c.quantity, 0)})</h3>
              </div>
              <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
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
                          <h4>{item.name} {item.nameHighlight}</h4>
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

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="cart-footer">
                {/* Address Banner */}
                {user ? (
                  <div className="cart-shipping-success">
                    <CheckCircle size={16} style={{ flexShrink: 0 }} />
                    <span>
                      <strong>{user.firstName || user.name?.split(" ")[0]}</strong> — delivering to:{" "}
                      {user.address.split(",")[0]}…
                    </span>
                  </div>
                ) : (
                  <div className="cart-shipping-warning">
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>
                      <button
                        onClick={onLoginClick}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#b45309",
                          fontWeight: 700,
                          cursor: "pointer",
                          textDecoration: "underline",
                          padding: 0,
                          fontSize: "inherit",
                        }}
                      >
                        Add your name &amp; address
                      </button>{" "}
                      to include delivery details in your WhatsApp order.
                    </span>
                  </div>
                )}

                <div className="cart-coupon-box">
                  <label className="cart-coupon-label" htmlFor="cart-coupon-code">
                    Discount code
                  </label>
                  <div className="cart-coupon-row">
                    <input
                      id="cart-coupon-code"
                      type="text"
                      className="cart-coupon-input"
                      placeholder="Enter discount code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>
                  <p className={`cart-coupon-status ${couponStatus === "applied" ? "is-success" : couponStatus === "invalid" ? "is-error" : ""}`}>
                    {couponStatus === "applied"
                      ? "Discount applied successfully"
                      : couponStatus === "invalid"
                        ? "Invalid discount code"
                        : "Enter your discount code to unlock the offer."}
                  </p>
                </div>

                <div className="cart-summary-row" style={{ fontSize: "0.92rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                {isCouponApplied && (
                  <div className="cart-summary-row cart-summary-discount" style={{ fontSize: "0.92rem", fontWeight: 700 }}>
                    <span>Discount (50%robmit)</span>
                    <span>-{formatCurrency(discountAmount)}</span>
                  </div>
                )}
                <div className="cart-summary-row" style={{ fontSize: "0.92rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  <span>Delivery Charges</span>
                  <span>{formatCurrency(deliveryCharges)}</span>
                </div>
                <div className="cart-summary-row" style={{ marginTop: "4px", paddingTop: "12px", borderTop: "1px dashed var(--border)" }}>
                  <span>Total</span>
                  <span className="cart-subtotal-price">{formatCurrency(total)}</span>
                </div>
                <p className="cart-shipping-notice">
                  Orders are processed via WhatsApp. A flat delivery charge of ₹150 applies.
                </p>

                <button className="cart-checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout on WhatsApp
                  <ArrowRight size={18} />
                </button>
                <button className="cart-clear-btn" onClick={onClearCart}>
                  Clear All Items
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
