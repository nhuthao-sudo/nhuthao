import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <img src={product.img} alt={product.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-bold">{product.price.toLocaleString()}₫</div>
          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1 rounded-md border hover:bg-gray-100 text-sm"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </article>
  );
}
