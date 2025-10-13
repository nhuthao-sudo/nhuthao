import { useCartStore } from "../store/cartStore";
import { formatPrice } from "../utils/format";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="mt-2 font-semibold text-sm">{product.title}</h3>
      <p className="text-blue-600 font-bold">{formatPrice(product.price * 1000)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
      >
        Thêm vào giỏ
      </button>
    </div>
  );
}
