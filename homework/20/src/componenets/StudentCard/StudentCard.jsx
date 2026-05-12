import "./StudentCard.css";

export default function StudentCard({ name, age, profession, color, onDelete }) {
  return (
    <div className="student-card" style={{ backgroundColor: color }}>
      <div className="card-info">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Profession: {profession}</p>
      </div>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
}