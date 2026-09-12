import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Header({ isPlaying, onToggleAudio }) {
  return (
    <div className="music-toggle-wrapper">
      <button 
        className={`music-toggle ${isPlaying ? 'music-toggle--on' : ''}`}
        onClick={onToggleAudio}
        title={isPlaying ? 'संगीत बंद करा (Mute Audio)' : 'संगीत सुरू करा (Play Audio)'}
      >
        <span className="music-toggle__icon">
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </span>
      </button>
    </div>
  );
}
