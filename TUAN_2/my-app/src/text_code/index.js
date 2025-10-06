npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev





import { FC } from 'react';

const App: FC = () => {
  return <div>App</div>;
};

export default App;



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App title='TypeScript Demo' />
  </React.StrictMode>
);






let name: string = "Hào";
let age: number = 22;
let isStudent: boolean = true;
let skills: string[] = ["React", "TypeScript", "Zustand"];

let id: string | number = 1; // union type





interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // ? nghĩa là optional
}

const user1: User = {
  id: 1,
  name: "Hào",
  email: "hao@gmail.com",
};







interface HelloProps {
  name: string;
  age?: number; // optional
}

const Hello: React.FC<HelloProps> = ({ name, age }) => {
  return (
    <div>
      <h2>Xin chào {name}</h2>
      {age && <p>Tuổi của bạn là {age}</p>}
    </div>
  );
};

export default Hello;






import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0); // 👈 kiểu number

  useEffect(() => {
    console.log("Giá trị hiện tại:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
};

export default Counter;





import { useState } from "react";

const FormExample = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Giá trị nhập: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button type="submit">Gửi</button>
    </form>
  );
};

export default FormExample;










interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Chuột", price: 25 },
];

const ProductList: React.FC = () => {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;















































