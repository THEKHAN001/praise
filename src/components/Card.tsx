import './Card.css';

interface StatCardProps {
  icon: string;
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  label?: string;
}

export default function Card({ icon, title, value, subtitle, change, label }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-icon">{icon}</div>
        {label && <div className="stat-label">{label}</div>}
      </div>

      <div className="stat-body">
        <p className="stat-title">{title}</p>
        <p className="stat-value">{value}</p>
        {subtitle && <p className="stat-subtitle">{subtitle}</p>}
      </div>

      {change && (
        <div className="stat-change">
          ↑ {change}
        </div>
      )}
    </div>
  );
}