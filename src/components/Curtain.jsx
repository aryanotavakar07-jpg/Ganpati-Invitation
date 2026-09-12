import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Curtain({ isOpen, onOpen, onOpenStart }) {
  const [isOpening, setIsOpening] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (shouldRender && !isOpening) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [shouldRender, isOpening]);

  const handleOpen = () => {
    setIsOpening(true);
    if (onOpenStart) onOpenStart();
    if (onOpen) onOpen();

    // Unlock scroll as curtain slides open
    setTimeout(() => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 800);

    setTimeout(() => {
      setShouldRender(false);
    }, 2200);
  };

  if (!shouldRender) return null;

  const cubicEase = [0.22, 1, 0.36, 1];

  return (
    <div className="curtain-container" style={{ pointerEvents: isOpening ? 'none' : 'auto' }} aria-hidden="true">
      {/* Left Panel */}
      <motion.div
        className="curtain-panel panel-left"
        initial={{ x: 0 }}
        animate={isOpening ? { x: '-100%' } : { x: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: cubicEase }}
      >
        <div className="curtain-panel-decor" />
        <div className="curtain-decor-line" />
        <div className="curtain-decor-outer" />
        <div className="curtain-corner curtain-corner--top" />
        <div className="curtain-corner curtain-corner--bottom" />
        <img
          src="/assets/mandala-jdOIDeh6.webp"
          alt=""
          className="curtain-mandala curtain-mandala--left"
          draggable="false"
          loading="eager"
        />
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="curtain-panel panel-right"
        initial={{ x: 0 }}
        animate={isOpening ? { x: '100%' } : { x: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: cubicEase }}
      >
        <div className="curtain-panel-decor" />
        <div className="curtain-decor-line" />
        <div className="curtain-decor-outer" />
        <div className="curtain-corner curtain-corner--top" />
        <div className="curtain-corner curtain-corner--bottom" />
        <img
          src="/assets/mandala-jdOIDeh6.webp"
          alt=""
          className="curtain-mandala curtain-mandala--right"
          draggable="false"
          loading="eager"
        />
      </motion.div>

      {/* Central Breathing Seal */}
      <motion.div
        className="curtain-center-content"
        initial={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
        animate={isOpening ? { opacity: 0, scale: 0.85, x: '-50%', y: '-50%' } : { opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
        transition={isOpening ? { duration: 0.5, ease: 'easeIn' } : { duration: 0 }}
      >
        <div className="curtain-seal-ring" />
        <div className="curtain-seal-ring-inner" />
        <button className="curtain-seal" onClick={handleOpen} type="button">
          <span className="curtain-seal-text-hi">गणपती नमः</span>
          <span className="curtain-seal-divider">
            <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14 3.5H24L15.5 5L12 8L8.5 5L0 3.5H10L12 0Z" fill="#8D5A18" opacity="0.6" />
            </svg>
          </span>
          <span className="curtain-seal-text-en">Tap To Open</span>
          <span className="curtain-seal-shine" />
        </button>
      </motion.div>
    </div>
  );
}
