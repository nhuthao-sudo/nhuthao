import React from "react";

export default function HeroBanner() {
  return (
    <section className="bg-blue-600 text-white py-16 text-center rounded-2xl shadow-md">
      <h1 className="text-4xl font-bold mb-4">Bộ Sưu Tập Mới 2025</h1>
      <p className="text-lg mb-6">
        Khám phá phong cách thời trang xu hướng nhất hôm nay!
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition">
        Xem Ngay
      </button>
    </section>
  );
}
