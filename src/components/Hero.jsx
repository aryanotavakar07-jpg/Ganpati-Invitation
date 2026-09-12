import React from 'react';

export default function Hero({ onPlayBell, isCurtainOpen }) {
  const p = isCurtainOpen ? ' hero-animate' : '';

  return (
    <>
      <section className="hero">
        {/* Top Garland / Toran Layer */}
        <img
          src="/assets/top-layer-BdL4xo3x.webp"
          alt=""
          className={`toplayer hero-anim-toplayer${p}`}
          loading="eager"
        />

        {/* Pillars */}
        <img
          src="/assets/piller-pvoq_vZm.webp"
          alt=""
          className={`pillar left hero-anim-pillar-left${p}`}
          loading="eager"
        />
        <img
          src="/assets/piller-pvoq_vZm.webp"
          alt=""
          className={`pillar right hero-anim-pillar-right${p}`}
          loading="eager"
        />

        {/* Hanging Bells */}
        <img
          src="/assets/bell-DxDhDReW.webp"
          alt=""
          className={`bell bell-left hero-anim-bell${p}`}
          loading="eager"
          onClick={onPlayBell}
          style={{ cursor: 'pointer' }}
        />
        <img
          src="/assets/bell-2-CjaksJjB.webp"
          alt=""
          className={`bell bell-right hero-anim-bell${p}`}
          loading="eager"
          onClick={onPlayBell}
          style={{ cursor: 'pointer' }}
        />

        {/* Main Hero Header */}
        <div className={`hero-content hero-anim-text-1${p}`}>
          <img
            src="/assets/logo-m7LBp2Yu.webp"
            alt=""
            className="logo"
            loading="eager"
          />
          <p className={`shlok hero-anim-text-2${p}`}>॥ श्री गणेशाय नमः ॥</p>

          <h1 className={`title hero-anim-text-3${p}`}>
            बाप्पाचे
            <br />
            आगमन
          </h1>

          <p className={`subtitle hero-anim-text-4${p}`}>
            आपणास सस्नेह निमंत्रण !
          </p>

          <div className={`hero-shrine hero-anim-murti${p}`}>
            <img
              src="/assets/murti-DogDNfqS.webp"
              alt="गणपती बाप्पा"
              className="murti"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Inviter Family Strip */}
      <section className={`family-strip hero-anim-text-5${p}`}>
        <img src="/assets/divider-2-B5AQ9qpj.webp" className="family-divider" alt="" />
        <div className="inviter-seal">
          <div className="seal-badge-container">
            <span className="seal-badge">॥ सप्रेम निमंत्रक ॥</span>
          </div>
          <h2 className="seal-family-name">
            केळुसकर, ओटवकर आणि घोसाळकर परिवार
          </h2>
          <div className="seal-lotus-divider">
            <img src="/assets/lotus-C9mPCXs6.webp" alt="" className="seal-lotus-img" />
          </div>
          <p className="seal-message">
            आपण सर्वांनी सहकुटुंब, सहपरिवार येऊन बाप्पाचं दर्शन घ्यावे ही मनःपूर्वक विनंती.
          </p>
        </div>
        <img src="/assets/divider-2-B5AQ9qpj.webp" className="family-divider" alt="" />
      </section>
    </>
  );
}
