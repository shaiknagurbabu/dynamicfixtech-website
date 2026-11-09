export default function MetricCard({ label, value, change, note, icon, tone }) {
  return (
    <article className="metric-card">
      <div className="metric-card-top">
        <span className="metric-label">{label}</span>
        <span className={`metric-icon metric-icon-${tone}`} aria-hidden="true">{icon}</span>
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-foot">
        <span className="metric-change">{change}</span>
        <span>{note}</span>
      </div>
    </article>
  );
}
