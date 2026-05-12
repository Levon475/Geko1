import { useState } from "react";
import StudentForm from "./components/StudentForm/StudentForm";
import StudentList from "./components/StudentList/StudentList";
import "./index.css";

const COLORS = ["#ffd43b", "#74c0fc", "#b2f2bb", "#ffa94d", "#d0bfff", "#f783ac"];

export default function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    setStudents([...students, { ...student, id: Date.now(), color }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Student Card Manager</h1>
      <StudentForm onAdd={addStudent} />
      <input
        className="search-input"
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StudentList students={filtered} onDelete={deleteStudent} />
    </div>
  );
}