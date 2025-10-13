import axios from "axios";

export const getProducts = async () => {
  // Giả lập API (bạn có thể thay bằng link thật)
  const { data } = await axios.get("https://fakestoreapi.com/products?limit=8");
  return data;
};
