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






npm install react-hook-form




import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  name: string;
  email: string;
  age: number;
}

const BasicForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log("Dữ liệu nhập:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Tên:</label>
        <input {...register("name", { required: "Tên là bắt buộc" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email là bắt buộc",
            pattern: { value: /^\S+@\S+$/i, message: "Email không hợp lệ" },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Tuổi:</label>
        <input
          type="number"
          {...register("age", {
            required: "Tuổi là bắt buộc",
            min: { value: 18, message: "Tuổi phải ≥ 18" },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">Gửi</button>
    </form>
  );
};

export default BasicForm;






import { useForm } from "react-hook-form";

interface UserForm {
  username: string;
  email: string;
}

const DefaultForm = () => {
  const { register, handleSubmit, reset } = useForm<UserForm>({
    defaultValues: { username: "Hào", email: "hao@gmail.com" },
  });

  const onSubmit = (data: UserForm) => {
    console.log(data);
    reset(); // reset form sau khi submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      <input {...register("email")} />
      <button type="submit">Lưu</button>
    </form>
  );
};

export default DefaultForm;


npm install @hookform/resolvers yup



import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  username: yup.string().required("Bắt buộc nhập tên"),
  password: yup.string().min(6, "Tối thiểu 6 ký tự").required("Bắt buộc nhập mật khẩu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu không trùng khớp")
    .required("Bắt buộc nhập lại mật khẩu"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterForm) => {
    console.log("Đăng ký thành công:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Tên đăng nhập:</label>
        <input {...register("username")} />
        <p>{errors.username?.message}</p>
      </div>

      <div>
        <label>Mật khẩu:</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <label>Nhập lại mật khẩu:</label>
        <input type="password" {...register("confirmPassword")} />
        <p>{errors.confirmPassword?.message}</p>
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Register;



import { useForm } from "react-hook-form";

interface ProfileForm {
  username: string;
  gender: string;
  skills: string[];
  country: string;
}

const ProfileForm = () => {
  const { register, handleSubmit } = useForm<ProfileForm>();

  const onSubmit = (data: ProfileForm) => {
    console.log("Thông tin:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Tên:</label>
      <input {...register("username", { required: true })} />

      <label>Giới tính:</label>
      <div>
        <label>
          <input type="radio" value="male" {...register("gender")} /> Nam
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} /> Nữ
        </label>
      </div>

      <label>Kỹ năng:</label>
      <div>
        <label>
          <input type="checkbox" value="React" {...register("skills")} /> React
        </label>
        <label>
          <input type="checkbox" value="TypeScript" {...register("skills")} /> TypeScript
        </label>
      </div>

      <label>Quốc gia:</label>
      <select {...register("country")}>
        <option value="VN">Việt Nam</option>
        <option value="JP">Nhật Bản</option>
      </select>

      <button type="submit">Lưu</button>
    </form>
  );
};

export default ProfileForm;







import axios from "axios";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", data);
      alert("Đăng nhập thành công!");
      console.log(res.data);
    } catch (error) {
      alert("Đăng nhập thất bại!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      <input type="password" {...register("password")} placeholder="Mật khẩu" />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default LoginForm;









import { useForm, useFieldArray } from "react-hook-form";

interface HobbyForm {
  hobbies: { name: string }[];
}

const DynamicForm = () => {
  const { control, register, handleSubmit } = useForm<HobbyForm>({
    defaultValues: { hobbies: [{ name: "" }] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "hobbies" });

  const onSubmit = (data: HobbyForm) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`hobbies.${index}.name` as const)} />
          <button type="button" onClick={() => remove(index)}>Xóa</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "" })}>
        + Thêm sở thích
      </button>
      <button type="submit">Lưu</button>
    </form>
  );
};

export default DynamicForm;








npm install @tanstack/react-query axios




import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);














