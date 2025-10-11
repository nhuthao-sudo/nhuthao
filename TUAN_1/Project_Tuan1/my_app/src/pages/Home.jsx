import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner";

export default function Home({ addToCart, query = "" }) {
  // Lọc sản phẩm theo từ khóa (nếu có)
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 flex-1">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Danh sách sản phẩm */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sản phẩm nổi bật</h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-6">
            Không tìm thấy sản phẩm phù hợp 😢
          </p>
        )}
      </section>
    </main>
  );
}
