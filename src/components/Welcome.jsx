import { disclaimer } from '../config/disclaimer';
import '../styles/welcome.css';

export default function Welcome({ onStart }) {
  return (
    <div className="welcome">
      <div className="welcome-decoration">
        <div className="city-lights">
          <div className="light-dot" />
          <div className="light-dot" />
          <div className="light-dot" />
          <div className="light-dot" />
          <div className="light-dot" />
          <div className="light-dot" />
          <div className="light-dot" />
          <div className="light-dot" />
        </div>
        <div className="skyline">
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
          <div className="building" />
        </div>
      </div>

      <h1 className="welcome-title">你的天选之城</h1>

      <p className="welcome-subtitle">
        冥冥之中，你的性格决定了你适合在哪里生活
      </p>

      <div className="welcome-desc">
        <div className="welcome-desc-item">
          <span>8道趣味</span>测试题，探索你的城市基因
        </div>
        <div className="welcome-desc-item">
          每座城市都有自己的<span>性格密码</span>
        </div>
        <div className="welcome-desc-item">
          找到那座与你<span>灵魂共振</span>的城市吧
        </div>
      </div>

      <button className="welcome-btn" onClick={onStart}>
        开始探索
      </button>

      <p className="welcome-hint">共8道题 · 约2分钟</p>
      <p className="disclaimer">{disclaimer.short}</p>
    </div>
  );
}
