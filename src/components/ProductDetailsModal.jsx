import React from 'react';
import { X, ArrowRight, Zap, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetailsModal = ({ product, isOpen, onClose, instagramUrl, theme, onAddToCart }) => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isNimbu = product?.id?.startsWith('nimbu-bot');

  return (
    <AnimatePresence>
      {isOpen && product && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)'
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            style={{
              position: 'relative',
              background: isNimbu
                ? 'linear-gradient(180deg, #fffef6 0%, #fff9df 100%)'
                : theme === 'light'
                  ? '#fff'
                  : '#171717',
              color: theme === 'light' ? '#000' : '#fff',
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              maxHeight: '90vh'
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                right: '1.5rem',
                top: '1.5rem',
                background: theme === 'light' ? '#f3f4f6' : '#262626',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }}
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div style={{
              background: isNimbu
                ? 'linear-gradient(135deg, #fff8c8 0%, #fffdf0 55%, #fef3a7 100%)'
                : theme === 'light' ? '#f8fafc' : '#262626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              borderRight: isMobile ? 'none' : (theme === 'light' ? '1px solid #e2e8f0' : '1px solid #333')
            }}>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxHeight: isMobile ? '280px' : '520px', objectFit: 'contain' }}
              />
            </div>

            {/* Info Section */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', overflowY: 'auto', gap: '1rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: isNimbu ? '#7a6000' : '#3b82f6', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{product.tag}</span>
                {isNimbu && (
                  <span style={{ background: '#ffe234', color: '#3d2f00', padding: '5px 10px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800 }}>
                    Coupon not on Nimbu
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.25rem', lineHeight: 1.05 }}>
                {product.name} <span style={{ color: isNimbu ? '#b8860b' : '#1e3a8a' }}>{product.nameHighlight}</span>
              </h2>

              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: theme === 'light' ? '#1e3a8a' : '#60a5fa',
                margin: '0.75rem 0 0.25rem'
              }}>
                {product.price}
              </div>

              <p style={{ lineHeight: '1.6', color: theme === 'light' ? '#4b5563' : '#a3a3a3', marginBottom: '0.25rem' }}>
                {product.longDescription}
              </p>

              {isNimbu && (
                <div style={{
                  padding: '12px 14px',
                  borderRadius: '16px',
                  background: 'rgba(255,226,52,0.18)',
                  border: '1px solid rgba(255,210,0,0.3)',
                  color: '#5a4000',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}>
                  Gift-ready special edition. Coupon discounts are excluded on Nimbu Bot.
                </div>
              )}

              {product.highlights && (
                <div style={{ marginBottom: '0.75rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {product.highlights.map(h => (
                      <li key={h} style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '12px', background: theme === 'light' ? '#f8fafc' : '#262626' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }} /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: '700' }}>Features & Specs</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  {product.specs.map(spec => (
                    <li key={spec} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', padding: '10px 12px', borderRadius: '14px', background: theme === 'light' ? '#f8fafc' : '#262626' }}>
                      <Zap size={14} color="#3b82f6" /> {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
                padding: '1rem',
                background: theme === 'light' ? '#f8fafc' : '#262626',
                borderRadius: '16px'
              }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <Truck size={18} color="#3b82f6" />
                  <span style={{ fontSize: '0.65rem', fontWeight: '700', textAlign: 'center' }}>Fast Delivery</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={18} color="#3b82f6" />
                  <span style={{ fontSize: '0.65rem', fontWeight: '700', textAlign: 'center' }}>1 Year Support</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={18} color="#3b82f6" />
                  <span style={{ fontSize: '0.65rem', fontWeight: '700', textAlign: 'center' }}>Quality Test</span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="primary-button"
                  style={{ padding: '1.15rem', borderRadius: '100px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: '700', border: 'none', cursor: 'pointer', background: isNimbu ? 'linear-gradient(135deg, #ffe234 0%, #ffd000 100%)' : undefined, color: isNimbu ? '#3d2f00' : undefined }}
                >
                  Add to Cart <ArrowRight size={20} />
                </button>
                <p style={{ fontSize: '0.75rem', textAlign: 'center', opacity: 0.6 }}>Add to cart and checkout on WhatsApp</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailsModal;
