import { useState, useEffect } from 'react';
import '../styles/theme-toggle.css';

const themes = [
  { id: 'aurora', icon: '\u{1F319}', label: '极光' },
  { id: 'morning', icon: '\u{2600}\u{FE0F}', label: '晨光' },
  { id: 'ocean', icon: '\u{1F30A}', label: '海风' },
];

export default function ThemeToggle() {
  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem('tianxuan-theme');
    const idx = themes.findIndex((t) => t.id === saved);
    return idx >= 0 ? idx : 0;
  });

  useEffect(() => {
    const theme = themes[themeIndex];
    if (theme.id === 'aurora') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme.id);
    }
    localStorage.setItem('tianxuan-theme', theme.id);
  }, [themeIndex]);

  const handleToggle = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      title={`切换主题：${themes[(themeIndex + 1) % themes.length].label}`}
    >
      {themes[themeIndex].icon}
    </button>
  );
}
