// src/components/About.jsx
export default function Profile() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Giới thiệu bản thân
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">

          {/* Nội dung giới thiệu */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="mb-4">
              Xin chào 👋, mình là <span className="font-semibold">Nguyễn Nhựt Hào</span>, <br />
              Một sinh viên năm 3 ngành Công nghệ Thông tin tại Đại học Nguyễn Tất Thành. <br />
              Mình đang định hướng trở thành một <span className="text-blue-600 font-semibold">Front-End Developer</span>.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
