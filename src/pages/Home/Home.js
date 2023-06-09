import React from "react";
import Title from "../../components/Title";
import AddToDo from "../../components/AddToDo";
import ToDo from "../../components/ToDo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

function Home() {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  // cost handleEdit = async (todo, title) => {
  //   await updateDoc(doc(db, "todos", todo.id), { title: title });
  // };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div>
      <Title />
      <AddToDo />
      
      <div className="todo_container">
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            // handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
