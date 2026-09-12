import React, { useState, useRef, useEffect, useCallback } from 'react';
import Curtain from './components/Curtain';
import Header from './components/Header';
import Hero from './components/Hero';
import TimelineSection from './components/TimelineSection';
import LocationSection from './components/LocationSection';
import BlessingsSection from './components/BlessingsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

export default function App() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const bgAudioRef = useRef(null);
  const bellAudioCtxRef = useRef(null);

  useEffect(() => {
    bgAudioRef.current = new Audio('/assets/bgMusic-Cx9Z66jg.mp3');
    bgAudioRef.current.loop = true;

    return () => {
      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
      }
    };
  }, []);

  const playBellSound = useCallback(() => {
    // Beep sound effect removed as requested
  }, []);

  const handleOpenCurtain = () => {
    setIsCurtainOpen(true);
    setIsAudioPlaying(true);
    playBellSound();
    if (bgAudioRef.current) {
      bgAudioRef.current.play().catch(() => {});
    }
  };

  const toggleAudio = () => {
    if (!bgAudioRef.current) return;
    if (isAudioPlaying) {
      bgAudioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      bgAudioRef.current.play().catch(() => {});
      setIsAudioPlaying(true);
      playBellSound();
    }
  };

  return (
    <div className="app-container">
      {/* Preloading Curtain Overlay */}
      <Curtain isOpen={isCurtainOpen} onOpen={handleOpenCurtain} />

      {/* Floating Audio Switch */}
      <Header isPlaying={isAudioPlaying} onToggleAudio={toggleAudio} />

      {/* Main Temple Sections */}
      <main>
        <Hero onPlayBell={playBellSound} isCurtainOpen={isCurtainOpen} />
        <TimelineSection />
        <LocationSection />
        <BlessingsSection onOfferFlower={playBellSound} />
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
