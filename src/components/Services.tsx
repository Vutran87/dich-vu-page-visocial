import React, { useState } from "react";
import { Search, PenTool, BarChart3, Network, Users, Award, ShieldAlert, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const servicesList = [
    {
      icon: Search,
      title: "SEO Fanpage Setup",
      description: "Tối ưu chuẩn SEO để Fanpage xuất hiện top đầu khi khách hàng tìm kiếm sản phẩm trên Facebook.",
      bullets: [
        "Nghiên cứu bộ từ khóa có lượng tìm kiếm vượt trội",
        "Tối ưu lại URL rút gọn, danh mục và tiểu sử trang",
        "Setup thẻ meta tag và bản đồ Google Maps đồng bộ",
        "Kích hoạt các chế độ gợi ý hiển thị tự động trên feed"
      ]
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Lên kế hoạch nội dung hàng tháng bám sát insight, thiết kế hình ảnh & video chuyên nghiệp.",
      bullets: [
        "Xây dựng kế hoạch nội dung theo tuần chi tiết",
        "Viết content chuẩn cấu trúc thu hút (AIDA, PAS)",
        "Thiết kế 10-15 ấn phẩm hình ảnh đẹp, đồng bộ nhận diện",
        "Sản xuất kịch bản video ngắn Reels cuốn hút"
      ]
    },
    {
      icon: BarChart3,
      title: "Professional Management",
      description: "Quản trị bài đăng, theo dõi tương tác và báo cáo hiệu quả định kỳ theo tuần/tháng.",
      bullets: [
        "Lên lịch đăng bài tự động vào khung giờ vàng",
        "Theo dõi lượt tiếp cận, tương tác để điều chỉnh",
        "Trực tin nhắn khách hàng qua các kịch bản mẫu",
        "Báo cáo thống kê hiệu quả chiến dịch minh bạch"
      ]
    },
    {
      icon: Network,
      title: "Satellite Pages",
      description: "Xây dựng hệ thống fanpage vệ tinh bao phủ thị trường ngách để đánh chặn đối thủ.",
      bullets: [
        "Xây dựng combo 3 - 5 Fanpage vệ tinh chất lượng",
        "Cấu hình nội dung chia sẻ cộng hưởng chéo",
        "Đánh chiếm các bộ từ khóa ngách hữu hiệu",
        "Tăng lượng phủ sóng thương hiệu diện rộng"
      ]
    },
    {
      icon: Users,
      title: "Organic Seeding",
      description: "Tạo hiệu ứng đám đông, phản hồi tích cực từ 'khách hàng ảo' để tăng niềm tin thực tế.",
      bullets: [
        "Tạo các bình luận đánh giá 5 sao từ acc thật",
        "Seeding phản hồi tích cực về chất lượng dịch vụ",
        "Định hướng tâm lý giúp khách dễ quyết định mua hàng",
        "Bảo mật an toàn, tự nhiên chuẩn quy định Meta"
      ]
    },
    {
      icon: Award,
      title: "Fanpage Verification",
      description: "Hỗ trợ các thủ tục lên Tích Xanh (Verification Badge) khẳng định uy tín thương hiệu chính chủ.",
      bullets: [
        "Khảo sát, đánh giá tỷ lệ duyệt của Fanpage",
        "Hỗ trợ chuẩn bị bộ hồ sơ pháp lý chuẩn chỉnh",
        "Nộp đơn trực tiếp lên đại diện kiểm duyệt Meta",
        "Tăng uy tín thương hiệu chính chủ, chống giả mạo"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full font-display">
            DANH MỤC GIẢI PHÁP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue">
            Dịch vụ bao gồm
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-brand-text-muted max-w-xl mx-auto font-sans">
            Hệ sinh thái dịch vụ khép kín giúp Fanpage của bạn vận hành như một cỗ máy in tài lộc và tạo dựng uy tín một cách chuyên nghiệp nhất.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            const isSelected = selectedService === index;

            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedService(isSelected ? null : index)}
                className={`p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-brand-blue border-brand-blue text-white shadow-xl"
                    : "bg-brand-bg-light/10 hover:bg-white border-gray-200/50 text-brand-navy hover:shadow-xl hover:border-brand-blue/20"
                }`}
              >
                {/* Accent Line Left */}
                {!isSelected && <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue"></div>}

                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                      isSelected ? "bg-white/10 text-brand-orange" : "bg-brand-blue/5 text-brand-blue"
                    }`}
                  >
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className={`font-display text-xl font-bold mb-3 ${isSelected ? "text-white" : "text-brand-blue"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isSelected ? "text-white/85" : "text-brand-text-muted"}`}>
                    {service.description}
                  </p>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-white/10 space-y-3"
                      >
                        <h4 className="text-xs uppercase tracking-wider text-brand-orange font-bold font-display">
                          Chi tiết hạng mục:
                        </h4>
                        <ul className="space-y-2">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2 text-xs font-sans text-white/90">
                              <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8 pt-4 border-t border-dashed border-gray-200/10 flex justify-between items-center text-xs font-bold">
                  <span className={isSelected ? "text-brand-orange" : "text-brand-blue hover:text-brand-orange"}>
                    {isSelected ? "Thu gọn chi tiết" : "Click xem chi tiết hạng mục"}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-brand-orange animate-ping" : "bg-gray-300"}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
