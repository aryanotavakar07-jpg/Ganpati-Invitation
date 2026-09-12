import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const memoryImages = [
  {
    id: 'mem-1',
    src: '/assets/memories/memory1.jpg',
    alt: 'गेल्या वर्षीची आठवण १',
  },
  {
    id: 'mem-2',
    src: '/assets/memories/memory2.jpg',
    alt: 'गेल्या वर्षीची आठवण २',
  },
  {
    id: 'mem-3',
    src: '/assets/memories/memory3.jpg',
    alt: 'गेल्या वर्षीची आठवण ३',
  },
  {
    id: 'mem-4',
    src: '/assets/memories/memory4.jpg',
    alt: 'गेल्या वर्षीची आठवण ४',
  },
  {
    id: 'mem-5',
    src: '/assets/memories/memory5.jpg',
    alt: 'गेल्या वर्षीची आठवण ५',
  },
];

export default function GallerySection() {
  const sectionRef = useScrollReveal();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-section scroll-reveal" ref={sectionRef}>
      <img src="/assets/divider-1-CA7Shuxn.webp" className="gallery-divider scroll-reveal-child" alt="" />
      <h2 className="gallery-heading scroll-reveal-child">गेल्या वर्षीच्या आठवणी</h2>
      <img src="/assets/divider-2-B5AQ9qpj.webp" className="gallery-small-divider scroll-reveal-child" alt="" />
      <p className="gallery-subtitle scroll-reveal-child">
        गेल्या वर्षीच्या गणेशोत्सवातील काही खास व अनमोल क्षण
      </p>

      {/* Grid: 2 columns on mobile, 3 on desktop */}
      <div className="memories-grid scroll-reveal-child">
        {memoryImages.map((img) => (
          <div
            key={img.id}
            className="memory-card"
            onClick={() => setActiveImage(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="memory-lightbox" onClick={() => setActiveImage(null)}>
          <div className="memory-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setActiveImage(null)} type="button">
              ✕
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}
