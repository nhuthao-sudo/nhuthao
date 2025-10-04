import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

// ====== MongoDB Kết nối ======
mongoose.connect("mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ====== Model ======
const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  bio: String,
});
const Profile = mongoose.model("Profile", profileSchema);

// ====== API ======
app.get("/api/profile", async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create({
        name: "Nguyễn Nhựt Hào",
        age: 22,
        email: "hao@example.com",
        bio: "Mình là sinh viên Công nghệ Thông tin, yêu thích lập trình web (MERN stack).",
      });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ====== Server chạy ======
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));
