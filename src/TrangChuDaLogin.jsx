import React from "react";

// Tailwind CSS is assumed to be included globally in your project
// Inline <script> and <style> tags are omitted or moved to external files for best practice

const TrangChuDaLogin = () => {
  // Event handlers for interactivity
  const handleNotificationClick = () => {
    alert('Bạn có thông báo mới: "Bài tập lớn CTDL đã được chấm."');
    // Hide notification dot logic would be handled with state in a real app
  };

  const handleDownload = () => {
    alert('Tài liệu đang được tải xuống...');
  };

  const handleContinueLearning = (courseName) => {
    alert('Chuyển hướng đến trang học tập môn: ' + courseName);
  };

  const handleViewFullSchedule = () => {
    alert('Đang tải lịch học đầy đủ của bạn...');
  };

  const handleUserProfile = () => {
    alert('Chuyển hướng đến trang cá nhân của bạn.');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#C00000] rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">PEPE</h1>
                <p className="text-xs text-gray-500">Học tập thông minh</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 border-b-2 border-blue-600 font-semibold">Trang chủ</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tài liệu</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Đề thi</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Cộng đồng</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Lịch học</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative cursor-pointer" onClick={handleNotificationClick}>
                <svg className="w-6 h-6 text-gray-600 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
              </div>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={handleUserProfile}>
                <img className="w-9 h-9 rounded-full object-cover" src="https://source.unsplash.com/random/100x100/?portrait" alt="User avatar" />
                <span className="font-medium text-gray-700 hidden sm:block">Nguyễn Văn A</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Chào mừng trở lại, Nguyễn Văn A!</h1>
          <p className="text-gray-500 mt-1">Hãy bắt đầu một ngày học tập hiệu quả nhé.</p>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow">
                <h4 className="text-sm font-medium text-gray-500">Môn đang học</h4>
                <p className="text-3xl font-bold text-blue-600 mt-1">5</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <h4 className="text-sm font-medium text-gray-500">Bài tập sắp hết hạn</h4>
                <p className="text-3xl font-bold text-orange-500 mt-1">2</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <h4 className="text-sm font-medium text-gray-500">Thông báo chưa đọc</h4>
                <p className="text-3xl font-bold text-red-500 mt-1">3</p>
              </div>
            </div>
            {/* Tiếp tục học */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tiếp tục học</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl shadow card-hover">
                  <h3 className="font-bold text-gray-800">Cấu trúc dữ liệu và giải thuật</h3>
                  <p className="text-sm text-gray-500 mb-3">Chương 3: Cây nhị phân</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <button className="mt-4 inline-block text-blue-600 font-semibold hover:underline" onClick={() => handleContinueLearning('Cấu trúc dữ liệu và giải thuật')}>Học tiếp →</button>
                </div>
                <div className="bg-white p-5 rounded-xl shadow card-hover">
                  <h3 className="font-bold text-gray-800">Mạng máy tính</h3>
                  <p className="text-sm text-gray-500 mb-3">Bài 5: Tầng Giao vận (Transport)</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <button className="mt-4 inline-block text-blue-600 font-semibold hover:underline" onClick={() => handleContinueLearning('Mạng máy tính')}>Học tiếp →</button>
                </div>
              </div>
            </section>
            {/* Tài liệu cho bạn */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tài liệu cho bạn</h2>
              <div className="bg-white rounded-xl shadow p-5">
                <ul className="space-y-4">
                  <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <p className="font-semibold text-gray-700">Đề thi cuối kỳ Mạng máy tính 2024</p>
                        <p className="text-xs text-gray-500">Môn: Mạng máy tính</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200" onClick={handleDownload}>Tải xuống</button>
                  </li>
                  <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📑</span>
                      <div>
                        <p className="font-semibold text-gray-700">Tổng hợp giải thuật sắp xếp</p>
                        <p className="text-xs text-gray-500">Môn: CTDL và Giải thuật</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200" onClick={handleDownload}>Tải xuống</button>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Lịch hôm nay</h2>
              <div className="bg-white rounded-xl shadow p-5">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-10 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Lớp học: Mạng máy tính</p>
                      <p className="text-sm text-gray-500">9:00 - 11:30 | Phòng A2-301</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-10 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Deadline: Bài tập lớn CTDL</p>
                      <p className="text-sm text-gray-500">Hạn chót: 23:59 hôm nay</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-10 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">CLB IT: Họp triển khai dự án</p>
                      <p className="text-sm text-gray-500">18:00 | Phòng họp Thư viện</p>
                    </div>
                  </li>
                </ul>
                <button className="mt-4 block w-full text-center text-blue-600 font-semibold hover:underline" onClick={handleViewFullSchedule}>Xem lịch đầy đủ</button>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hoạt động cộng đồng</h2>
              <div className="bg-white rounded-xl shadow p-5">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <img className="w-9 h-9 rounded-full object-cover mt-1" src="https://source.unsplash.com/random/100x100/?person,woman" alt="User avatar" />
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">Trần Thị B</span> đã đăng một câu hỏi trong nhóm
                        <a href="#" className="font-semibold text-blue-600">Hỏi đáp CTDL & GT</a>
                      </p>
                      <p className="text-xs text-gray-500">5 phút trước</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <img className="w-9 h-9 rounded-full object-cover mt-1" src="https://source.unsplash.com/random/100x100/?person,man" alt="User avatar" />
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">Lê Văn C</span> đã chia sẻ một tài liệu trong
                        <a href="#" className="font-semibold text-blue-600">Chia sẻ tài liệu PTIT</a>
                      </p>
                      <p className="text-xs text-gray-500">1 giờ trước</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 PEPE. Mạng xã hội học tập dành cho sinh viên PTIT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrangChuDaLogin;
