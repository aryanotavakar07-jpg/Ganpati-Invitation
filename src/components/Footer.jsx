import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Footer() {
  const footerRef = useScrollReveal();

  return (
    <footer className="sacred-footer scroll-reveal" ref={footerRef}>
      <div className="footer-fade" />
      <img src="/assets/diva2-Cj74hIfe.webp" className="footer-diya-left" alt="" />
      <img src="/assets/aarti-opt-DAeVgRo3.webp" className="footer-aarti-left" alt="" />
      <img src="/assets/divider-2-B5AQ9qpj.webp" className="footer-divider scroll-reveal-child" alt="" />
      <h2 className="footer-quote scroll-reveal-child">
        आपली उपस्थिती आमच्यासाठी
        <br />
        आनंददायी आणि प्रेरणादायी ठरेल.
      </h2>
      <div className="footer-family scroll-reveal-child">
        — केळुसकर, ओटवकर आणि घोसाळकर परिवार
      </div>
      <div className="footer-morya scroll-reveal-child" style={{ marginTop: '20px', marginBottom: '25px', fontSize: '1.4rem' }}>
        ॥ सर्वांचं स्वागत आहे ॥
      </div>
      <div className="footer-brand scroll-reveal-child">
        <a
          href="https://www.instagram.com/invi.digitals"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          Crafted by INVI DIGITALS
        </a>
      </div>
    </footer>
  );
}
