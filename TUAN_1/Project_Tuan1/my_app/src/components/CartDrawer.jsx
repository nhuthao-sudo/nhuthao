import React from "react";

export default function CartDrawer({ cart, onClose, changeQty, removeFromCart }) {
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="fixed inset-0 bg-black/40 z-40 flex justify-end">
      <div className="w-full sm:w-96 bg-white h-full p-6 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Giỏ hàng</h3>
          <button onClick={onClose} className="text-gray-600">Đóng</button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500">Chưa có sản phẩm nào.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((c) => (
              <div key={c.id} className="flex items-center gap-4">
                <img src={c.img} alt={c.title} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-gray-600">{c.price.toLocaleString()}₫</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={() => changeQty(c.id, -1)} className="px-2 py-1 border rounded-md">-</button>
                    <div>{c.qty}</div>
                    <button onClick={() => changeQty(c.id, +1)} className="px-2 py-1 border rounded-md">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{(c.price * c.qty).toLocaleString()}₫</div>
                  <button onClick={() => removeFromCart(c.id)} className="text-sm text-red-500 mt-2">Xóa</button>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t flex items-center justify-between">
              <div className="font-bold">Tổng: {total.toLocaleString()}₫</div>
              <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">Thanh toán</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
