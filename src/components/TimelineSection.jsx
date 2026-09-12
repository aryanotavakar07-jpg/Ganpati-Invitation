import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const aayojanEvents = [
  {
    id: 'arrival',
    icon: '/assets/sthapana-opt-po5HE-Wf.webp',
    title: 'गणेश आगमन व स्थापना',
    date: '१४ सप्टेंबर २०२६',
    time: 'सकाळी १०:०० वाजता',
    side: 'left',
    type: 'gold',
  },
  {
    id: 'aarti',
    icon: '/assets/aarti-opt-DAeVgRo3.webp',
    title: 'आरती व पूजन',
    date: 'दररोज',
    time: 'सकाळी १०:०० व सायं ७:३०',
    side: 'right',
    type: 'light',
  },
  {
    id: 'darshan',
    icon: '/assets/snehbhet-opt-CGz7vv-w.webp',
    title: 'गणपती दर्शन',
    date: 'दररोज (१४ ते १८ सप्टेंबर)',
    time: 'दिवसभरात कधीही',
    side: 'left',
    type: 'gold',
  },
  {
    id: 'visarjan',
    icon: '/assets/visarjan-opt-Epp4xHxG.webp',
    title: 'उत्तरपूजा व विसर्जन सोहळा',
    date: '१८ सप्टेंबर २०२६',
    time: 'सायंकाळी ५:०० वाजता',
    side: 'right',
    type: 'light',
  },
];

export default function TimelineSection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="aayojan-section scroll-reveal" ref={sectionRef}>
      <h2 className="aayojan-heading scroll-reveal-child">आयोजन</h2>
      <div className="aayojan-flourish scroll-reveal-child">
        <img src="/assets/divider-2-B5AQ9qpj.webp" className="aayojan-divider-img" alt="" />
      </div>

      <p className="aayojan-subtitle scroll-reveal-child">
        भक्ती, प्रेम आणि आनंदाने भरलेला
        <br />
        गणरायाच्या आगमनाचा मंगल सोहळा
      </p>

      {/* Central Vertical Gold Timeline */}
      <div className="aayojan-timeline scroll-reveal-child">
        <div className="aayojan-vertical-line" />

        {aayojanEvents.map((evt) => (
          <div key={evt.id} className={`aayojan-row row-${evt.side}`}>
            <div className={`aayojan-card card-${evt.type}`}>
              <div className="aayojan-icon-box">
                <img src={evt.icon} alt={evt.title} />
              </div>
              <h3 className="aayojan-card-title">{evt.title}</h3>
              <div className="aayojan-card-divider" />
              <p className="aayojan-card-date">{evt.date}</p>
              <p className="aayojan-card-time">{evt.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
