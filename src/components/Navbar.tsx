import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search members, events, or reports..." 
          className="search-input"
        />
      </div>

      <div className="header-right">
        <div className="date">
          📅 Aug 24, 2024
        </div>

        <button className="export-btn">
          ⬇️ Export Report
        </button>

        <div className="header-actions">
          <button className="icon-btn notification-btn">🛎️</button>
          <button className="icon-btn">❔</button>

          <div className="user-profile">
            <div className="user-info">
              <p className="user-name">Admin User</p>
              <p className="user-role">Super Administrator</p>
            </div>
            <div className="avatar">AU</div>
          </div>
        </div>
      </div>
    </nav>
  );
}