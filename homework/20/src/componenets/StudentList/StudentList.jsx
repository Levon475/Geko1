import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css";

export default function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return <p className="empty">No students yet. Add one above!</p>;
  }

  return (
    <div className="student-list">
      {students.map((s) => (
        <StudentCard
          key={s.id}
          name={s.name}
          age={s.age}
          profession={s.profession}
          color={s.color}
          onDelete={() => onDelete(s.id)}
        />
      ))}
    </div>
  );
}