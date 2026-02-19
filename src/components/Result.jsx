import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import '../styles/result.css';

export default function Result({ result, onRestart }) {
  const [showIntro, setShowIntro] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareImage, setShareImage] = useState(null);
  const [generating, setGenerating] = useState(false);
  const shareCardRef = useRef(null);
  const { city, matchPercent } = result;

  const cityDisplay = city.country ? `${city.name}, ${city.country}` : city.name;

  const handleShare = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const canvas = await html2canvas(shareCardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const dataUrl = canvas.toDataURL('image/png');
      setShareImage(dataUrl);
      setShowShareModal(true);
    } catch {
      // fallback: copy text
      const text = `我在「天选之城」测试中匹配到了 ${cityDisplay}！匹配度 ${matchPercent}%\n性格标签：${city.personalityTags.join('、')}\n城市特色：${city.featureTags.join('、')}\n${city.description}`;
      try {
        await navigator.clipboard.writeText(text);
      } catch {}
    }
    setGenerating(false);
  };

  const handleDownload = () => {
    if (!shareImage) return;
    const link = document.createElement('a');
    link.download = `天选之城-${city.name}.png`;
    link.href = shareImage;
    link.click();
  };

  const handleCopyImage = async () => {
    if (!shareImage) return;
    try {
      const res = await fetch(shareImage);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
    } catch {
      // fallback download
      handleDownload();
    }
  };

  // Determine share card colors based on current theme
  const getShareCardStyle = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'morning') {
      return {
        bg: 'linear-gradient(160deg, #FFF8F0 0%, #FFE4CC 40%, #FFDAB9 100%)',
        text: '#2D2A26',
        textSub: '#8A7F78',
        reasonBg: 'rgba(232, 85, 61, 0.06)',
        tagBg: 'rgba(245, 166, 35, 0.15)',
        tagColor: '#C47A10',
        countryBg: 'rgba(245, 166, 35, 0.12)',
        countryColor: '#C47A10',
        divider: 'rgba(0,0,0,0.08)',
        brand: '#C47A10',
        percentColor: '#E8553D',
      };
    }
    if (theme === 'ocean') {
      return {
        bg: 'linear-gradient(160deg, #EEF6FF 0%, #D4EAFF 40%, #C8E0F8 100%)',
        text: '#1A2B3C',
        textSub: '#5A7A96',
        reasonBg: 'rgba(43, 127, 224, 0.06)',
        tagBg: 'rgba(22, 160, 122, 0.12)',
        tagColor: '#0F7A5D',
        countryBg: 'rgba(22, 160, 122, 0.10)',
        countryColor: '#0F7A5D',
        divider: 'rgba(0,0,0,0.08)',
        brand: '#2B7FE0',
        percentColor: '#2B7FE0',
      };
    }
    // aurora (dark)
    return {
      bg: 'linear-gradient(160deg, #1a1040 0%, #0f0c29 40%, #302b63 100%)',
      text: '#ffffff',
      textSub: 'rgba(255,255,255,0.65)',
      reasonBg: 'rgba(255,255,255,0.06)',
      tagBg: 'rgba(255,201,71,0.2)',
      tagColor: '#ffc947',
      countryBg: 'rgba(255,201,71,0.15)',
      countryColor: '#ffc947',
      divider: 'rgba(255,255,255,0.12)',
      brand: 'rgba(255,255,255,0.4)',
      percentColor: city.color || '#ff6b6b',
    };
  };

  const s = getShareCardStyle();

  return (
    <div className="result-container">
      <div className="result-percent" style={{ backgroundImage: `linear-gradient(135deg, ${city.color || '#ff6b6b'}, #ffc947)` }}>
        {matchPercent}%
      </div>

      <div className="result-city" onClick={() => setShowIntro(true)}>
        <span className="city-emoji">{city.emoji || '\u{1F4CD}'}</span>
        <span className="city-name-text">
          你的天选之城：{city.name}
          {city.country && <span className="city-country">{city.country}</span>}
        </span>
        <span className="city-arrow">{'\u203A'}</span>
      </div>

      <div className="result-tags personality-tags">
        {city.personalityTags.map((tag) => (
          <span
            key={tag}
            className="tag personality-tag"
            style={{ backgroundColor: `${city.color || '#ff6b6b'}33` }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="result-tags feature-tags">
        {city.featureTags.map((tag) => (
          <span key={tag} className="tag feature-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="match-reason">
        <div className="match-reason-title">{'\u2728'} 匹配理由</div>
        <div className="match-reason-text">{city.description}</div>
      </div>

      <div className="result-actions">
        <button className="btn-restart" onClick={onRestart}>
          重新测试
        </button>
        <button className="btn-share" onClick={handleShare} disabled={generating}>
          {generating ? '生成中...' : '分享图片'}
        </button>
      </div>

      {/* Share card (off-screen, rendered by html2canvas) */}
      <div className="share-card-wrapper">
        <div
          ref={shareCardRef}
          className="share-card"
          style={{ background: s.bg }}
        >
          <div className="share-card-brand" style={{ color: s.brand }}>
            {'\u{1F3D9}\u{FE0F}'} 天选之城
          </div>
          <div className="share-card-percent" style={{ color: s.percentColor }}>
            {matchPercent}%
          </div>
          <div className="share-card-city" style={{ color: s.text }}>
            <span className="share-card-city-emoji">{city.emoji || '\u{1F4CD}'}</span>
            你的天选之城：{city.name}
            {city.country && (
              <span className="share-card-country" style={{ background: s.countryBg, color: s.countryColor }}>
                {city.country}
              </span>
            )}
          </div>
          <div className="share-card-tags">
            {city.personalityTags.map((tag) => (
              <span key={tag} className="share-card-tag" style={{ background: `${city.color || '#ff6b6b'}25`, color: s.text }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="share-card-tags">
            {city.featureTags.map((tag) => (
              <span key={tag} className="share-card-tag" style={{ background: s.tagBg, color: s.tagColor }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="share-card-reason" style={{ background: s.reasonBg }}>
            <div className="share-card-reason-title" style={{ color: s.percentColor }}>
              {'\u2728'} 匹配理由
            </div>
            <div className="share-card-reason-text" style={{ color: s.textSub }}>
              {city.description}
            </div>
          </div>
          <div className="share-card-footer" style={{ color: s.brand }}>
            <div className="share-card-divider" style={{ background: s.divider }} />
            天选之城 {'\u00B7'} 性格城市匹配测试
          </div>
        </div>
      </div>

      {/* Share Preview Modal */}
      {showShareModal && shareImage && (
        <div className="share-modal-overlay" onClick={() => setShowShareModal(false)}>
          <div className="share-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={shareImage} alt="分享卡片" className="share-modal-image" />
            <div className="share-modal-actions">
              <button className="share-modal-btn btn-download" onClick={handleDownload}>
                保存图片
              </button>
              <button className="share-modal-btn btn-download" onClick={handleCopyImage}>
                复制图片
              </button>
            </div>
            <button
              className="share-modal-btn btn-close-share"
              onClick={() => setShowShareModal(false)}
              style={{ width: '100%' }}
            >
              关闭
            </button>
            <div className="share-modal-hint">长按图片也可保存到相册</div>
          </div>
        </div>
      )}

      {/* City Intro Modal */}
      {showIntro && (
        <div className="modal-overlay" onClick={() => setShowIntro(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowIntro(false)}>{'\u00D7'}</button>
            <div className="modal-emoji">{city.emoji}</div>
            <h2 className="modal-city-name">
              {city.name}
              {city.country && <span className="modal-country">{city.country}</span>}
            </h2>
            <div className="modal-tags">
              {city.featureTags.map((tag) => (
                <span key={tag} className="modal-tag">{tag}</span>
              ))}
            </div>
            <div className="modal-intro">
              {city.intro || city.description}
            </div>
            <div className="modal-traits">
              <div className="modal-traits-title">城市性格画像</div>
              <div className="trait-bars">
                {[
                  { key: 'artistic', label: '文艺' },
                  { key: 'social', label: '社交' },
                  { key: 'adventure', label: '冒险' },
                  { key: 'career', label: '事业' },
                  { key: 'nature', label: '自然' },
                  { key: 'food', label: '美食' },
                  { key: 'freedom', label: '自由' },
                  { key: 'culture', label: '文化' },
                ].map(({ key, label }) => (
                  <div className="trait-row" key={key}>
                    <span className="trait-label">{label}</span>
                    <div className="trait-bar-bg">
                      <div
                        className="trait-bar-fill"
                        style={{
                          width: `${(city.traits[key] || 0) * 20}%`,
                          background: `linear-gradient(90deg, ${city.color || '#ff6b6b'}, #ffc947)`,
                        }}
                      />
                    </div>
                    <span className="trait-value">{city.traits[key] || 0}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
