import React from 'react';
import { X, ArrowRight, Zap, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetailsModal = ({ product, isOpen, onClose, instagramUrl, theme, onAddToCart }) => {
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
              background: theme === 'light' ? '#fff' : '#171717',
              color: theme === 'light' ? '#000' : '#fff',
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
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
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div style={{ 
              background: theme === 'light' ? '#f8fafc' : '#262626', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '2rem',
              borderRight: theme === 'light' ? '1px solid #e2e8f0' : '1px solid #333'
            }}>
              <motion.img 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
              />
            </div>

            {/* Info Section */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
              <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{product.tag}</span>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>{product.name}</h2>
              
              {/* Big Price Display */}
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '900', 
                color: theme === 'light' ? '#1e3a8a' : '#60a5fa', 
                margin: '1rem 0' 
              }}>
                {product.price}
              </div>
              
              <p style={{ lineHeight: '1.6', color: theme === 'light' ? '#4b5563' : '#a3a3a3', marginBottom: '2rem' }}>
                {product.longDescription}
              </p>

              {product.highlights && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {product.highlights.map(h => (
                      <li key={h} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }} /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: '700' }}>Features & Specs</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {product.specs.map(spec => (
                    <li key={spec} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                      <Zap size={14} color="#3b82f6" /> {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amazon-style Trust Badges */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginBottom: '2rem',
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

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button 
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="primary-button" 
                  style={{ padding: '1.25rem', borderRadius: '100px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: '700', border: 'none', cursor: 'pointer' }}
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
