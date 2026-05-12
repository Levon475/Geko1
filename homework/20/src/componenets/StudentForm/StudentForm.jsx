import { useState } from "react";
import "./StudentForm.css";

const PROFESSIONS = ["Frontend", "Backend", "Design", "DevOps", "QA"];

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState(PROFESSIONS[0]);

  const handleAdd = () => {
    if (!name.trim() || !age) return;
    onAdd({ name: name.trim(), age: Number(age), profession });
    setName("");
    setAge("");
    setProfession(PROFESSIONS[0]);
  };

  return (
    <div className="student-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <select value={profession} onChange={(e) => setProfession(e.target.value)}>
        {PROFESSIONS.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <button onClick={handleAdd}>Add Student</button>
    </div>
  );
}