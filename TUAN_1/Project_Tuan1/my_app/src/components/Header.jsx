import React from "react";

export default function Header({ cartCount, onToggleCart, query, setQuery }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">Clothify</div>
          <nav className="hidden md:flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">Trang chủ</a>
            <a href="#" className="hover:underline">Nam</a>
            <a href="#" className="hover:underline">Nữ</a>
            <a href="#" className="hover:underline">Sale</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="hidden sm:block border rounded-md px-3 py-2 w-64 text-sm"
            placeholder="Tìm kiếm áo, quần..."
          />

          <button
            onClick={onToggleCart}
            className="relative inline-flex items-center gap-2 px-3 py-2 border rounded-md"
          >
            🛒 Giỏ hàng
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
