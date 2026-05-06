import './RecentActivity.css';

export default function RecentActivity() {
  return (
    <div className="activity-list">
      <div className="activity-item">
        <div className="activity-icon">👤</div>
        <div className="activity-content">
          <p><strong>New member joined</strong></p>
          <p className="activity-detail">Sarah Jenkins completed registration.</p>
          <p className="activity-time">2 HOURS AGO</p>
        </div>
      </div>

      <div className="activity-item">
        <div className="activity-icon">🎉</div>
        <div className="activity-content">
          <p><strong>Event: Youth Summit created</strong></p>
          <p className="activity-detail">Assigned to: Pastor Mark</p>
          <p className="activity-time">5 HOURS AGO</p>
        </div>
      </div>

      <div className="activity-item">
        <div className="activity-icon">💰</div>
        <div className="activity-content">
          <p><strong>Donation received from John Doe</strong></p>
          <p className="activity-detail">Amount: $500.00 (General Fund)</p>
          <p className="activity-time">YESTERDAY</p>
        </div>
      </div>
    </div>
  );
}