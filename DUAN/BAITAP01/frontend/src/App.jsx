import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile")
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">👋 Giới thiệu bản thân</h1>
      {profile ? (
        <div className="bg-gray-100 p-4 rounded-md shadow-md w-96">
          <p><b>Họ tên:</b> {profile.name}</p>
          <p><b>Tuổi:</b> {profile.age}</p>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Giới thiệu:</b> {profile.bio}</p>
        </div>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
}

export default App;
