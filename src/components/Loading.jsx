import { useEffect } from 'react';
import '../styles/loading.css';

export default function Loading({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring ring-1"></div>
        <div className="spinner-ring ring-2"></div>
        <div className="spinner-ring ring-3"></div>
      </div>
      <p className="loading-text">正在匹配你的天选之城...</p>
    </div>
  );
}
