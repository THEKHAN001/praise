import './AttendanceChart.css';

export default function AttendanceChart() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = [65, 78, 55, 95, 82, 70, 110];

  return (
    <div className="chart-container">
      <div className="bars">
        {days.map((day, index) => (
          <div key={day} className="bar-wrapper">
            <div 
              className={`bar ${index === 3 ? 'bar-highlight' : ''}`}
              style={{ height: `${values[index]}%` }}
            ></div>
            <p className="day-label">{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
}