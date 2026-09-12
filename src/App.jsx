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
  const playCountRef = useRef(0);
  const bellAudioCtxRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scrollToTop();
    const t1 = setTimeout(scrollToTop, 50);
    const t2 = setTimeout(scrollToTop, 200);

    const audio = new Audio('/assets/bgMusic-Cx9Z66jg.mp3');
    audio.loop = false;
    bgAudioRef.current = audio;

    const handleEnded = () => {
      playCountRef.current += 1;
      if (playCountRef.current < 2) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        setIsAudioPlaying(false);
      }
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const playBellSound = useCallback(() => {
    // Beep sound effect removed as requested
  }, []);

  const handleOpenCurtain = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setIsCurtainOpen(true);
    setIsAudioPlaying(true);
    playCountRef.current = 0;
    if (bgAudioRef.current) {
      bgAudioRef.current.currentTime = 0;
      bgAudioRef.current.play().catch(() => {});
    }
  };

  const toggleAudio = () => {
    if (!bgAudioRef.current) return;
    if (isAudioPlaying) {
      bgAudioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      playCountRef.current = 0;
      bgAudioRef.current.currentTime = 0;
      bgAudioRef.current.play().catch(() => {});
      setIsAudioPlaying(true);
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
