import { useState } from 'react'
import '../styles/version-select.css'

const difficulties = [
  {
    key: 'mini',
    icon: '⚡',
    title: '极简版',
    desc: '快速探索你的天选之城',
    meta: '5道题 · 约1分钟',
    badge: null,
  },
  {
    key: 'simple',
    icon: '✨',
    title: '简单版',
    desc: '标准性格城市匹配',
    meta: '10道题 · 约3分钟',
    badge: '推荐',
  },
  {
    key: 'complex',
    icon: '🔮',
    title: '复杂版',
    desc: '深度性格分析，匹配更精准',
    meta: '18道题 · 约5分钟',
    badge: '最精准',
  },
]

function VersionSelect({ onSelect, onBack }) {
  const [region, setRegion] = useState('cn')
  const [difficulty, setDifficulty] = useState('simple')

  const handleStart = () => {
    onSelect(region, difficulty)
  }

  return (
    <div className="version-select">
      <button className="version-back" onClick={onBack}>
        ← 返回
      </button>

      <h1 className="version-title">选择测试版本</h1>

      <div className="region-section">
        <div className="region-toggle">
          <button
            className={`region-tab ${region === 'cn' ? 'active' : ''}`}
            onClick={() => setRegion('cn')}
          >
            🇨🇳 国内版
          </button>
          <button
            className={`region-tab ${region === 'global' ? 'active' : ''}`}
            onClick={() => setRegion('global')}
          >
            🌍 全球版
          </button>
        </div>
      </div>

      <div className="difficulty-section">
        <div className="difficulty-cards">
          {difficulties.map((d) => (
            <div
              key={d.key}
              className={`difficulty-card ${difficulty === d.key ? 'active' : ''}`}
              onClick={() => setDifficulty(d.key)}
            >
              <div className="difficulty-header">
                <span className="difficulty-icon">{d.icon}</span>
                <span className="difficulty-title">{d.title}</span>
                {d.badge && <span className="difficulty-badge">{d.badge}</span>}
              </div>
              <p className="difficulty-desc">{d.desc}</p>
              <span className="difficulty-meta">{d.meta}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="version-start-btn" onClick={handleStart}>
        开始测试
      </button>
    </div>
  )
}

export default VersionSelect
