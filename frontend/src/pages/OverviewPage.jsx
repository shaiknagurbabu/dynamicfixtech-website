import MetricCard from "../components/MetricCard.jsx";
import StatusBadge from "../components/StatusBadge.jsx";

const metrics = [
  { key: "activeJobs", label: "Active work orders", change: "+12.5%", note: "vs. last month", icon: "↗", tone: "blue", format: (value) => value },
  { key: "completedToday", label: "Completed today", change: "+8.2%", note: "vs. yesterday", icon: "✓", tone: "green", format: (value) => value },
  { key: "revenueThisMonth", label: "Revenue this month", change: "+6.4%", note: "vs. last month", icon: "$", tone: "purple", format: (value) => `$${Number(value).toLocaleString()}` },
  { key: "customerSatisfaction", label: "Customer satisfaction", change: "+0.3", note: "vs. last month", icon: "☆", tone: "orange", format: (value) => `${value} / 5` },
];

const initials = (name = "") =>
  name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();

export default function OverviewPage({ summary, jobs, isLoading, error }) {
  return (
    <>
      <section className="welcome-row" id="overview">
        <div>
          <p className="eyebrow">THURSDAY, NOVEMBER 5, 2026</p>
          <h1>Good morning, Jordan <span>✦</span></h1>
          <p className="welcome-subtitle">Here&apos;s what&apos;s happening with your service operations today.</p>
        </div>
        <button className="primary-button" type="button" onClick={() => window.location.hash = "work-orders"}>
          <span>＋</span> New work order
        </button>
      </section>

      {error && <div className="error-banner" role="alert">{error}</div>}

      <section className="metrics-grid" aria-label="Business metrics">
        {metrics.map((metric) => (
          <MetricCard
            change={metric.change}
            icon={metric.icon}
            key={metric.key}
            label={metric.label}
            note={metric.note}
            tone={metric.tone}
            value={summary ? metric.format(summary.metrics[metric.key]) : "—"}
          />
        ))}
      </section>

      <section className="content-grid">
        <article className="panel orders-panel" id="work-orders">
          <div className="panel-heading">
            <div>
              <h2>Recent work orders</h2>
              <p>Keep track of your team&apos;s latest jobs</p>
            </div>
            <a className="text-link" href="#work-orders">View all <span>→</span></a>
          </div>
          {isLoading ? (
            <div className="loading-state">Loading work orders...</div>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr><th>ORDER</th><th>CUSTOMER</th><th>SERVICE</th><th>TECHNICIAN</th><th>STATUS</th></tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      <td><span className="order-id">{job.id}</span></td>
                      <td>
                        <div className="customer-cell">
                          <span className={`avatar avatar-${job.avatarTone}`}>{initials(job.customer)}</span>
                          <span><strong>{job.customer}</strong><small>{job.location}</small></span>
                        </div>
                      </td>
                      <td>{job.service}</td>
                      <td>{job.technician}</td>
                      <td><StatusBadge status={job.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {jobs.length === 0 && <div className="empty-state">No work orders match your search.</div>}
            </div>
          )}
        </article>

        <article className="panel team-panel" id="technicians">
          <div className="panel-heading">
            <div><h2>Team availability</h2><p>Your technicians&apos; status today</p></div>
            <button className="more-button" type="button" aria-label="More team options">···</button>
          </div>
          {summary?.technicians?.map((technician) => (
            <div className="technician-row" key={technician.name}>
              <span className={`avatar avatar-${technician.avatarTone}`}>{initials(technician.name)}</span>
              <span className="technician-copy"><strong>{technician.name}</strong><small>{technician.role}</small></span>
              <span className={`availability availability-${technician.availability.toLowerCase().replace(" ", "-")}`}>
                <i />{technician.availability}
              </span>
            </div>
          ))}
          {!summary && !error && <div className="loading-state">Loading team...</div>}
          <a className="team-link" href="#technicians">View team schedule <span>→</span></a>
        </article>
      </section>

      <section className="bottom-grid">
        <article className="panel performance-panel">
          <div className="panel-heading">
            <div><h2>Performance overview</h2><p>Work orders completed this week</p></div>
            <button className="select-button" type="button">This week <span>⌄</span></button>
          </div>
          <div className="chart-summary"><strong>{summary?.weeklyCompleted ?? "—"}</strong><span>work orders</span><span className="chart-growth">↗ 14.8%</span></div>
          <div className="chart" role="img" aria-label="Work orders completed from Monday to Sunday">
            {[42, 64, 51, 82, 61, 93, 73].map((height, index) => (
              <div className="chart-column" key={index}>
                <div className={`chart-bar${index === 5 ? " chart-bar-highlight" : ""}`} style={{ height: `${height}%` }} />
                <span>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="panel activity-panel" id="activity">
          <div className="panel-heading">
            <div><h2>Recent activity</h2><p>The latest updates from your team</p></div>
            <button className="more-button" type="button" aria-label="More activity options">···</button>
          </div>
          {summary?.activity?.map((item, index) => (
            <div className="activity-row" key={`${item.title}-${index}`}>
              <span className={`activity-marker activity-marker-${index % 3}`}>{item.icon}</span>
              <div><strong>{item.title}</strong><p>{item.description}</p><small>{item.time}</small></div>
            </div>
          ))}
          {!summary && !error && <div className="loading-state">Loading activity...</div>}
        </article>
      </section>
    </>
  );
}
