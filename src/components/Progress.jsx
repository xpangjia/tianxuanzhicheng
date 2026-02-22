import '../styles/question.css';

export default function Progress({ current, total, onBack }) {
  const percent = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="progress-wrapper">
      <button
        className={`progress-back${onBack ? '' : ' hidden'}`}
        onClick={onBack}
        disabled={!onBack}
      >
        {'\u2039'}
      </button>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="progress-text">{current}/{total}</span>
    </div>
  );
}
