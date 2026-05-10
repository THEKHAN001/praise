import StatCard from "@/components/StatsCard";
import { mockDashboard } from "@/data/mockData";


export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="dashboard-main">
          <div className="welcome-section">
            <h1>Church Dashboard</h1>
            <p>
              Welcome back, Admin. Here is what's happening at VBCI Systems
              today.
            </p>
          </div>

<div className="grid gap-4 p-4 grid-flow-col auto-cols-fr">     
           {mockDashboard.map((stat) => (
              <StatCard
                key={stat.label}
                {...stat}
              />
            ))}
          </div>

          <div className="date">📅 Aug 24, 2024</div>

          <button className="export-btn">⬇️ Export Report</button>

          {/* Stats Cards */}
          <div className="stats-grid">
           
          </div>

          <div className="grid-two">
            {/* Attendance Trends */}
            <div className="card attendance-card">
              <div className="card-header">
                <h2>Attendance Trends</h2>
                <select className="period-select">
                  <option>Last 7 Days</option>
                </select>
              </div>            </div>

            {/* Recent Activity */}
            <div className="card">
              <div className="card-header">
                <h2>Recent Activity</h2>
                <button className="view-all-btn">View All</button>
              </div>
            </div>
          </div>

          {/* Donation Overview */}
          <div className="card donation-card">
          </div>
        </div>
      </div>
    </div>
  );
}
