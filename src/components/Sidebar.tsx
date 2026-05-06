import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo">
          <span>V</span>
        </div>
        <div>
          <h2>VBCI Systems</h2>
          <p>Church Management</p>
        </div>
      </div>

      <div className="new-record">
        <button className="new-btn">+ New Record</button>
      </div>

      <nav className="nav-menu">
        <a href="#" className="nav-item active">
          📊 Dashboard
        </a>
        <a href="#" className="nav-item">👥 Members</a>
        <a href="#" className="nav-item">📅 Attendance</a>
        <a href="#" className="nav-item">🎉 Events</a>
        <a href="#" className="nav-item">💵 Finance</a>
        <a href="#" className="nav-item">📖 Sermons</a>
        <a href="#" className="nav-item">👥 Cell Groups</a>
        <a href="#" className="nav-item">📢 Announcements</a>
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="nav-item">⚙️ Settings</a>
        <a href="#" className="nav-item">↪️ Logout</a>
      </div>
    </div>
  );
}