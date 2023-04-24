import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddToDo() {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        date,
        time,
        completed: false,
      });
      setTitle("");
      setDate("");
      setTime("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Task Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Set Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}

export default AddToDo;
