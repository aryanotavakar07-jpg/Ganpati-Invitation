import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const locationData = {
  venue: 'अ/८०३ अनमोल हाईट',
  heading: 'कार्यक्रम स्थळ',
  subtitle: 'आपण सर्वांनी सहकुटुंब येऊन बाप्पाचं दर्शन घ्यावे ही विनंती',
  address: 'अ/८०३ अनमोल हाईट, कोकणीपाडा, संतोषी माता मंदिर समोर, मालाड पूर्व, मुंबई - ४०००९७',
  googleMapsLink: 'https://maps.app.goo.gl/NcUc9HTD979eJU8W9',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.64731804245!2d72.8636405!3d19.1838908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70f7cf65f1f%3A0x60c35655c5e49d62!2sAnmol%20Heights!5e0!3m2!1sen!2sin!4v1784097692102!5m2!1sen!2sin',
  buttonText: 'Open Maps',
  footerMessage: ['आपली उपस्थिती आमच्यासाठी', 'आनंददायी आणि प्रेरणादायी ठरेल.'],
};

export default function LocationSection() {
  const sectionRef = useScrollReveal();

  const handleMapClick = (e) => {
    const el = e.currentTarget;
    el.style.transform = 'scale(.95)';
    window.setTimeout(() => {
      el.style.transform = 'scale(1)';
      window.open(locationData.googleMapsLink, '_blank', 'noopener,noreferrer');
    }, 150);
  };

  return (
    <section className="location-section scroll-reveal" ref={sectionRef}>
      <div className="custom-shape-divider-top-1784026445">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path className="shape-fill" d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" />
        </svg>
      </div>

      <img src="/assets/divider-1-CA7Shuxn.webp" className="location-divider scroll-reveal-child" alt="" />
      <h2 className="location-heading scroll-reveal-child">{locationData.heading}</h2>
      <p className="location-subtitle scroll-reveal-child">{locationData.subtitle}</p>

      <div className="new-location-card scroll-reveal-child">
        <div className="map-header">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={locationData.googleMapsEmbed}
            style={{ border: 0 }}
            title={locationData.venue}
          />
        </div>
        <div className="location-details">
          <h3>{locationData.venue}</h3>
          <p className="address-text">{locationData.address}</p>
          <a
            className="new-maps-btn"
            href={locationData.googleMapsLink}
            onClick={handleMapClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            {locationData.buttonText}
          </a>
          <p className="footer-msg">
            {locationData.footerMessage.map((msg, i) => (
              <React.Fragment key={i}>
                {msg}
                {i < locationData.footerMessage.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      <img src="/assets/divider-1-CA7Shuxn.webp" className="location-divider bottom-divider scroll-reveal-child" alt="" />
    </section>
  );
}
