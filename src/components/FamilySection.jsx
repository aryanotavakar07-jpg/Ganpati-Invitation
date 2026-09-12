import React, { useState, useMemo, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const familyMembers = [
  {
    id: 'keluskar-family',
    name: 'केळुसकर परिवार',
    image: '/assets/family-1-D6DB0Svu.webp',
  },
  {
    id: 'otavkar-family',
    name: 'ओटवकर परिवार',
    image: '/assets/family-2-DA8DTEL4.webp',
  },
  {
    id: 'ghosalkar-family',
    name: 'घोसाळकर परिवार',
    image: '/assets/family-3-CBo3jFmR.webp',
  },
];

export default function FamilySection() {
  const sectionRef = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const total = familyMembers.length;

  const prevIndex = useMemo(() => (total ? (current - 1 + total) % total : 0), [current, total]);
  const nextIndex = useMemo(() => (total ? (current + 1) % total : 0), [current, total]);

  const showPrevious = useCallback(() => {
    setCurrent((e) => (total ? (e - 1 + total) % total : 0));
  }, [total]);

  const showNext = useCallback(() => {
    setCurrent((e) => (total ? (e + 1) % total : 0));
  }, [total]);

  const getCardClass = (index) => {
    if (index === current) return 'active';
    if (index === prevIndex) return 'prev';
    if (index === nextIndex) return 'next';
    return '';
  };

  return (
    <section className="family-section scroll-reveal" ref={sectionRef}>
      <div className="family-top scroll-reveal-child">
        <img src="/assets/divider-2-B5AQ9qpj.webp" className="family-divider" alt="" />
        <p className="family-tag">॥ निमंत्रक ॥</p>
        <div className="family-heading-wrapper" style={{ padding: '16px 24px' }}>
          <img src="/assets/f1-ADhmizYT.webp" className="flourish left" alt="" />
          <h2 className="family-heading" style={{ fontSize: 'clamp(1.2rem, 5vw, 2.2rem)' }}>
            केळुसकर, ओटवकर आणि घोसाळकर परिवार
          </h2>
          <img src="/assets/f1-ADhmizYT.webp" className="flourish right" alt="" />
        </div>
        <p className="family-subtitle">
          आपण सर्वांनी सहकुटुंब, सहपरिवार येऊन बाप्पाचं दर्शन घेऊन प्रसादाचा लाभ घ्यावा ही मनःपूर्वक विनंती.
        </p>
      </div>

      <div className="family-slider-wrapper scroll-reveal-child">
        <button className="family-btn prev" onClick={showPrevious} aria-label="Previous">
          ❮
        </button>

        <div className="family-slider">
          {familyMembers.map((member, idx) => {
            const cardClass = getCardClass(idx);
            return (
              <div key={member.id} className={`family-card ${cardClass}`}>
                <img src="/assets/flower1-BlVhglJb.webp" className="card-flower left" alt="" />
                <img src="/assets/flower1-BlVhglJb.webp" className="card-flower right" alt="" />
                <img src={member.image} alt={member.name} className="member-img" />
                <div className="member-name">
                  <img src="/assets/lotus-C9mPCXs6.webp" alt="" />
                  <span style={{ fontSize: '1.2rem' }}>{member.name}</span>
                  <img src="/assets/lotus-C9mPCXs6.webp" alt="" />
                </div>
              </div>
            );
          })}
        </div>

        <button className="family-btn next" onClick={showNext} aria-label="Next">
          ❯
        </button>
      </div>

      <div className="slider-dots scroll-reveal-child">
        {familyMembers.map((member, idx) => (
          <span key={`${member.id}-dot`} className={idx === current ? 'active' : ''} />
        ))}
      </div>

      <p className="family-bottom-text scroll-reveal-child">
        आपली उपस्थिती आमच्यासाठी आनंददायी आणि प्रेरणादायी ठरेल.
      </p>
      <img src="/assets/divider-2-B5AQ9qpj.webp" className="family-divider scroll-reveal-child" alt="" />

      <img src="/assets/diva2-Cj74hIfe.webp" className="family-diya-left" alt="" />
      <img src="/assets/aarti-opt-DAeVgRo3.webp" className="family-aarti-left" alt="" />
    </section>
  );
}
