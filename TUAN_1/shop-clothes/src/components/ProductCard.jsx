export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-blue-600 font-bold">{product.price.toLocaleString()}đ</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Mua ngay
      </button>
    </div>
  );
}
