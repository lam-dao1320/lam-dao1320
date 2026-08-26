'use client';
import { useState, useEffect } from 'react';

export default function AutoImageSlider({ images, title }: { images: string[]; title: string }) {
  // Danh sách hình ảnh mẫu (Hãy thay bằng link ảnh thật của bạn)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Tạo bộ đếm thời gian tự động chuyển ảnh sau mỗi 3000ms (3 giây)
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        // Nếu đang ở ảnh cuối cùng, quay về ảnh đầu tiên (index = 0)
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Dọn dẹp bộ đếm khi component bị hủy để tránh rò rỉ bộ nhớ
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Khung chứa ảnh cố định kích thước (Chuẩn style khung bo góc của Apple) */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl">
        
        {/* Dải băng chứa các hình ảnh dịch chuyển ngang */}
        <div 
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((url, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img 
                src={url} 
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Nút chấm tròn chỉ vị trí (Pagination Dots) nằm ở góc dưới */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-zinc-500'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
