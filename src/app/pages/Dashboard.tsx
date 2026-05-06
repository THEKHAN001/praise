import Card from '../../components/Card';
import AttendanceChart from '../../components/AttendanceChart';
import RecentActivity from '../../components/RecentActivity';
import DonationOverview from '../../components/DonationOverview';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      {/* https://stitch.withgoogle.com/projects/772835138836576749 */}
      <div className="main-content">
        <Navbar />
        
        <div className="dashboard-main">
          <div className="welcome-section">
            <h1>Church Dashboard</h1>
            <p>Welcome back, Admin. Here is what's happening at VBCI Systems today.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <Card 
              icon="👥" 
              title="Total Members" 
              value="1,240" 
              change="+5%"
            />
            <Card 
              icon="🙏" 
              title="Attendance Today" 
              value="850" 
              subtitle="68.5% of total members"
              change="+2%"
            />
            <Card 
              icon="💰" 
              title="Total Donations" 
              value="$12,500" 
              subtitle="Goal: $15,000"
              label="This Month"
            />
            <Card 
              icon="📅" 
              title="Upcoming Events" 
              value="3" 
              subtitle="Next: Sunday Service (10 AM)"
              label="This Week"
            />
          </div>

          <div className="grid-two">
            {/* Attendance Trends */}
            <div className="card attendance-card">
              <div className="card-header">
                <h2>Attendance Trends</h2>
                <select className="period-select">
                  <option>Last 7 Days</option>
                </select>
              </div>
              <AttendanceChart />
            </div>

            {/* Recent Activity */}
            <div className="card">
              <div className="card-header">
                <h2>Recent Activity</h2>
                <button className="view-all-btn">View All</button>
              </div>
              <RecentActivity />
            </div>
          </div>

          {/* Donation Overview */}
          <div className="card donation-card">
            <DonationOverview />
          </div>
        </div>
      </div>
    </div>
  );
}