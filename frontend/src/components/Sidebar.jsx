const navigation = [
  { label: "Overview", icon: "◫", href: "#overview", active: true },
  { label: "Work orders", icon: "▤", href: "#work-orders", count: "8" },
  { label: "Technicians", icon: "♙", href: "#technicians" },
  { label: "Reports", icon: "▥", href: "#activity" },
];

export default function Sidebar({ isOpen, onNavigate }) {
  return (
    <aside className={`sidebar${isOpen ? " sidebar-open" : ""}`}>
      <a className="brand" href="#overview" onClick={onNavigate}>
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="brand-name">dynamic<span>fix</span></span>
      </a>

      <div className="workspace-picker">
        <span className="workspace-icon">D</span>
        <span className="workspace-copy">
          <strong>DynamicFix</strong>
          <small>Operations team</small>
        </span>
        <span className="picker-chevron">⌄</span>
      </div>

      <p className="nav-caption">WORKSPACE</p>
      <nav className="primary-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            className={`nav-link${item.active ? " nav-link-active" : ""}`}
            href={item.href}
            key={item.label}
            onClick={onNavigate}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
            {item.count && <span className="nav-count">{item.count}</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="help-card">
          <span className="help-icon">?</span>
          <strong>Need a hand?</strong>
          <p>Visit the help center for tips and support.</p>
          <a href="mailto:support@dynamicfix.example">Get support <span>↗</span></a>
        </div>
        <button className="profile-button" type="button">
          <span className="avatar avatar-profile">JD</span>
          <span className="profile-copy"><strong>Jordan Davis</strong><small>Administrator</small></span>
          <span className="profile-menu">···</span>
        </button>
      </div>
    </aside>
  );
}
