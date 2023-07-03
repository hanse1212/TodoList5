import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

function App() {
  const [todo, setTodo] = useState([]);

  console.log(todo);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/todos");
    const jsonData = await response.json();
    setTodo(jsonData);
  }

  const onCreate = async (contentI, contentC) => {
    const newTodo = { contentI, contentC };

    await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    fetchData();
  }

  const onUpdate = async (targetId) => {
    const itemToUpdate = todo.find((item) => item.id === targetId);

    await fetch(`http://localhost:4000/todos/${targetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone: !itemToUpdate.isDone })
    });

    fetchData();
  }

  const onDelete = async (targetId) => {
    await fetch(`http://localhost:4000/todos/${targetId}`, {
      method: "DELETE"
    });
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList
        todo={todo}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
