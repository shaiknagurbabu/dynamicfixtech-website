const statusClass = {
  "In progress": "status-progress",
  Scheduled: "status-scheduled",
  Completed: "status-completed",
  "Needs review": "status-review",
};

export default function StatusBadge({ status }) {
  return <span className={`status-badge ${statusClass[status] ?? ""}`}>{status}</span>;
}
