import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold">Clothify</div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Clothify. Tất cả quyền được bảo lưu.
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Liên hệ: hello@clothify.example
        </div>
      </div>
    </footer>
  );
}
