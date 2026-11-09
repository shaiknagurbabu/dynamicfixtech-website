export default function Topbar({ onMenuClick, onSearch, searchValue }) {
  return (
    <header className="topbar">
      <button className="mobile-menu" type="button" aria-label="Open navigation" onClick={onMenuClick}>
        <span />
        <span />
        <span />
      </button>
      <label className="search-box">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          aria-label="Search work orders"
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search anything..."
          value={searchValue}
        />
        <kbd>⌘ K</kbd>
      </label>
      <div className="topbar-actions">
        <span className="today-label">Thursday, November 5</span>
        <button className="icon-button notification-button" type="button" aria-label="Notifications">
          <span aria-hidden="true">♧</span>
          <i />
        </button>
        <span className="avatar avatar-top">JD</span>
      </div>
    </header>
  );
}
