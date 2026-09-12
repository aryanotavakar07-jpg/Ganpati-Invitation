import React from 'react';

export default function TimelineModal({ event, isOpen, onClose }) {
  if (!isOpen || !event) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const imageSrc = event.image === '/assets/sthapana-opt-po5HE-Wf.webp' || event.image === 'eventSthapana' ? '/assets/user_ganpati_idol.png' : event.image;

  return (
    <div className={`utsav-modal ${isOpen ? 'show' : ''}`} onClick={handleBackdropClick}>
      <div className="modal-card">
        <button className="close-modal" onClick={onClose} type="button">
          ✕
        </button>

        <h3 className="modal-title">{event.title || ''}</h3>
        <img src="/assets/divider-2-B5AQ9qpj.webp" className="modal-divider" alt="" />

        <div className="modal-murti-wrapper">
          <img src={imageSrc} className="modal-murti" style={{ objectFit: 'contain' }} alt="" />
        </div>

        <div className="premium-info-rows">
          <div className="info-row">
            <img src="/assets/diva-BREN9I8b.webp" className="row-icon-img" alt="" />
            <div className="row-text">
              <span className="row-label">दिनांक</span>
              <span className="modal-date">{event.date || ''}</span>
            </div>
          </div>
          <div className="info-row">
            <img src="/assets/diva-BREN9I8b.webp" className="row-icon-img" alt="" />
            <div className="row-text">
              <span className="row-label">वेळ</span>
              <span className="modal-time">{event.time || ''}</span>
            </div>
          </div>
          <div className="info-row">
            <img src="/assets/diva-BREN9I8b.webp" className="row-icon-img" alt="" />
            <div className="row-text">
              <span className="row-label">स्थळ</span>
              <span className="modal-place">{event.location || ''}</span>
            </div>
          </div>
        </div>

        <div className="modal-description">
          <p className="modal-desc">{event.description || ''}</p>
        </div>

        <img src="/assets/divider-2-B5AQ9qpj.webp" className="modal-divider bottom-divider" alt="" />
      </div>
    </div>
  );
}
