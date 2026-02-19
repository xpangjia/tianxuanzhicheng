import { useCallback, useRef } from 'react';
import { initAudio, playClick, playSelect, playTransition, playResult, playHover, toggleMute, getIsMuted } from './sounds';

export function useSound() {
  const initialized = useRef(false);

  const ensureInit = useCallback(() => {
    if (!initialized.current) {
      initAudio();
      initialized.current = true;
    }
  }, []);

  return {
    click: useCallback(() => { ensureInit(); playClick(); }, [ensureInit]),
    select: useCallback(() => { ensureInit(); playSelect(); }, [ensureInit]),
    transition: useCallback(() => { ensureInit(); playTransition(); }, [ensureInit]),
    result: useCallback(() => { ensureInit(); playResult(); }, [ensureInit]),
    hover: useCallback(() => { ensureInit(); playHover(); }, [ensureInit]),
    toggleMute: useCallback(() => { ensureInit(); return toggleMute(); }, [ensureInit]),
    isMuted: getIsMuted,
  };
}
