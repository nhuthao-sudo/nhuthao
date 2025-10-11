export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">👕 Shop Áo</h1>
      <nav className="space-x-6">
        <a href="#" className="hover:text-yellow-400">Trang chủ</a>
        <a href="#" className="hover:text-yellow-400">Sản phẩm</a>
        <a href="#" className="hover:text-yellow-400">Liên hệ</a>
      </nav>
    </header>
  );
}

