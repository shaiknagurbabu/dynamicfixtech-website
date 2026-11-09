import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

export default function DashboardLayout({ children, onSearch, searchValue }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar isOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
      {menuOpen && (
        <button
          aria-label="Close navigation"
          className="sidebar-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <main className="main-panel">
        <Topbar
          onMenuClick={() => setMenuOpen((open) => !open)}
          onSearch={onSearch}
          searchValue={searchValue}
        />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}
