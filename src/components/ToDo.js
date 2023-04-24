import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDo({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [newTime, setNewTime] = React.useState(todo.time);
  const [newDate, setNewDate] = React.useState(todo.date);

  const handleChange = (e) => {
    e.preventDeafult();
    if (todo.complete === true) {
      setNewTitle(todo.title);
      setNewTime(todo.time);
      setNewDate(todo.date);
    } else {
      todo.title = "";
      todo.time = ""
      todo.date = ""
      setNewTitle(e.target.value);
      setNewTime(e.target.value);
      setNewDate(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        type="text"
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <input
        // type="time"
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.time === "" ? newTime : todo.time}
        className="list"
        onChange={handleChange}
      />
      <input
        // type="date"
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.date === "" ? newDate : todo.date}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>

        {/* <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button> */}

        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}

export default ToDo;
