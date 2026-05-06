import './DonationOverview.css';

export default function DonationOverview() {
  return (
    <div>
      <div className="donation-header">
        <h2>Donation Overview</h2>
        <p>Financial distribution for the current fiscal month.</p>
      </div>

      <div className="donation-bars">
        <div className="donation-row">
          <div className="donation-label">General Fund</div>
          <div className="progress-bar">
            <div className="progress general" style={{width: '66%'}}></div>
          </div>
          <div className="donation-amount">$8,250 <span>(66%)</span></div>
        </div>

        <div className="donation-row">
          <div className="donation-label">Missions</div>
          <div className="progress-bar">
            <div className="progress missions" style={{width: '22%'}}></div>
          </div>
          <div className="donation-amount">$2,750 <span>(22%)</span></div>
        </div>

        <div className="donation-row">
          <div className="donation-label">Building Project</div>
          <div className="progress-bar">
            <div className="progress building" style={{width: '12%'}}></div>
          </div>
          <div className="donation-amount">$1,500 <span>(12%)</span></div>
        </div>
      </div>

      <div className="projected-total">
        <p>Projected Total</p>
        <h3>$15,400</h3>
        <p className="growth">+12.5% vs Last Month</p>
      </div>
    </div>
  );
}