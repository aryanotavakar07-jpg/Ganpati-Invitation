import React, { useState, useRef, useCallback, useMemo } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function pseudoRandom(x, y) {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

export default function BlessingsSection({ onOfferFlower }) {
  const sectionRef = useRef(null);
  const revealRef = useScrollReveal();
  const [isMurtiActive, setIsMurtiActive] = useState(false);

  const setRefs = useCallback(
    (el) => {
      sectionRef.current = el;
      revealRef.current = el;
    },
    [revealRef]
  );

  const dustParticles = useMemo(() => {
    const count = 14;
    const delayRange = 6;
    const durationRange = 5;
    const minDuration = 6;
    return Array.from({ length: count }, (_, i) => ({
      animationDelay: `${pseudoRandom(i, 1) * delayRange}s`,
      animationDuration: `${minDuration + pseudoRandom(i, 2) * durationRange}s`,
      left: `${pseudoRandom(i, 3) * 100}%`,
      top: `${pseudoRandom(i, 4) * 100}%`,
    }));
  }, []);

  const spawnPetal = useCallback(() => {
    const container = sectionRef.current;
    if (!container) return;

    const petal = document.createElement('div');
    petal.classList.add('petal');

    const side = Math.random() > 0.5 ? 'left' : 'right';
    const direction = side === 'left' ? 1 : -1;
    const h = container.offsetHeight || 500;
    const startX = side === 'left' ? -50 : window.innerWidth + 50;
    const startY = h * 0.4 + Math.random() * (h * 0.2);

    petal.style.left = `${startX}px`;
    petal.style.top = `${startY}px`;

    const size = 15 + Math.random() * 20;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    container.appendChild(petal);

    const percentX = 30 + Math.random() * 40;
    const targetX = (window.innerWidth * percentX) / 100 - startX;
    const targetY = h - startY + 50;
    const rotation = 360 + Math.random() * 720;
    const duration = 2500 + Math.random() * 1500;

    const apexFrac = 0.2 + Math.random() * 0.15;
    const aCoeff = targetY / (1 - 2 * apexFrac);
    const bCoeff = -2 * aCoeff * apexFrac;
    const steps = 30;
    const swayAmp = 0.2 + Math.random() * 0.4;
    const keyframes = [];

    for (let p = 0; p <= steps; p += 1) {
      const progress = p / steps;
      const curX = targetX * progress;
      const curY = aCoeff * progress * progress + bCoeff * progress;
      const curRot = rotation * progress;
      const curScale = 0.5 + Math.sin(progress * Math.PI) * swayAmp;
      let opacity = 1;

      if (progress < 0.08) opacity = progress * 12.5;
      if (progress > 0.4) opacity = 1 - (progress - 0.4) / 0.6;

      keyframes.push({
        offset: progress,
        opacity,
        transform: `translate(${curX}px, ${curY}px) rotate(${direction * curRot}deg) scale(${curScale})`,
      });
    }

    petal.animate(keyframes, {
      duration,
      easing: 'linear',
      fill: 'forwards',
    });

    window.setTimeout(() => {
      petal.remove();
    }, duration);
  }, []);

  const handleOfferFlowers = () => {
    setIsMurtiActive(true);
    if (onOfferFlower) onOfferFlower();

    window.setTimeout(() => {
      setIsMurtiActive(false);
    }, 700);

    const petalCount = 16;
    for (let i = 0; i < petalCount; i += 1) {
      spawnPetal();
    }
  };

  return (
    <section className="ashirwad-section scroll-reveal" ref={setRefs}>
      <div className="royal-frame" />
      <img src="/assets/divider-1-CA7Shuxn.webp" className="ashirwad-divider scroll-reveal-child" alt="" />
      <h2 className="ashirwad-heading scroll-reveal-child">बाप्पाचे आशीर्वाद</h2>
      <p className="ashirwad-subtitle scroll-reveal-child">
        स्पर्श करा आणि बाप्पांचे मंगल आशीर्वाद प्राप्त करा
      </p>

      <div className="ashirwad-stage scroll-reveal-child">
        <img src="/assets/user_ganpati_idol.png" className="murti-bg" alt="" />
        <img
          src="/assets/user_ganpati_idol.png"
          className={`murti-main ${isMurtiActive ? 'active' : ''}`}
          alt="श्री सिद्धिविनायक"
        />
        <div className="floating-particles" />
        <div className="sacred-dust">
          {dustParticles.map((st, idx) => (
            <span key={idx} style={st} />
          ))}
        </div>
      </div>

      <p className="tap-note scroll-reveal-child">बाप्पांच्या चरणी भक्तीपूर्वक फुलांची अर्पण करा</p>
      <button className="flower-btn scroll-reveal-child" onClick={handleOfferFlowers} type="button">
        फुलांची वर्षाव करा
      </button>
    </section>
  );
}
