import { useCartStore } from "../store/cartStore";
import { formatPrice } from "../utils/format";

export default function CartSidebar() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity * 1000, 0);

  return (
    <div className="bg-gray-50 p-4 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-2">🛒 Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span>{item.title}</span>
                <span>{item.quantity}x</span>
                <span>{formatPrice(item.price * 1000)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-2"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t pt-2 font-semibold">
            Tổng: {formatPrice(total)}
          </div>
          <button
            onClick={clearCart}
            className="mt-2 w-full bg-red-500 text-white py-1 rounded"
          >
            Xoá giỏ hàng
          </button>
        </>
      )}
    </div>
  );
}
