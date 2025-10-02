import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}







import axios from "axios";

function CreateUser() {
  const handleAdd = async () => {
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: "Hào",
        email: "hao@example.com"
      });
      console.log("User created:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleAdd}>Thêm User</button>;
}







// PUT: cập nhật user
axios.put("https://jsonplaceholder.typicode.com/users/1", {
  name: "Updated Name"
});

// DELETE: xóa user
axios.delete("https://jsonplaceholder.typicode.com/users/1");



// api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" }
});

// App.jsx
import { api } from "./api";

api.get("/users").then(res => console.log(res.data));









import axios from "axios";

axios.interceptors.request.use(config => {
  console.log("Sending request:", config.url);
  return config;
});

axios.interceptors.response.use(
  res => res,
  err => {
    console.error("Error:", err.response?.status);
    return Promise.reject(err);
  }
);





import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
        setTodos(res.data);
      } catch (err) {
        console.error("Lỗi:", err);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Công việc</h2>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;


















































