import '../styles/question.css';

export default function Progress({ current, total }) {
  const percent = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="progress-wrapper">
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
