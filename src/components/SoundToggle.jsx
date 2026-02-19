import { useState } from 'react';
import { useSound } from '../utils/useSound';
import '../styles/sound-toggle.css';

export default function SoundToggle() {
  const sound = useSound();
  const [muted, setMuted] = useState(false);

  const handleToggle = () => {
    const nowMuted = sound.toggleMute();
    setMuted(nowMuted);
    if (!nowMuted) sound.click();
  };

  return (
    <button className="sound-toggle" onClick={handleToggle} title={muted ? '开启音效' : '关闭音效'}>
      {muted ? '🔇' : '🔊'}
    </button>
  );
}
