import React, { useState } from "react";
import { ArrowRight, Sparkles, X, CheckCircle, TrendingUp, BarChart, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CaseStudyItem } from "../types";

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState<CaseStudyItem | null>(null);

  const cases: CaseStudyItem[] = [
    {
      id: "dr-marie",
      image: "/Case-Study-Dr-Marie.png",
      badge: "+250% Inbox Tư Vấn",
      industry: "Hệ thống Phòng khám",
      title: "Sản Phụ Khoa Dr. Marie",
      description: "Tiếp cận hàng triệu phụ nữ Việt Nam, tăng trưởng vượt bậc lượt liên hệ đặt lịch tư vấn và khám sức khỏe chủ động.",
      fullCase: {
        problem: "Nhóm ngành y tế nhạy cảm khó quảng cáo trực diện, thông tin khô khan, người dùng e ngại tương tác công khai.",
        action: "Tối ưu chuẩn SEO định vị Fanpage thương hiệu. Sản xuất nội dung giáo dục chuyên sâu gần gũi, hữu ích được bác sĩ trực thuật. Triển khai Seeding tạo dựng niềm tin tại các hội nhóm phụ nữ kín.",
        result: "Lượt liên hệ inbox tư vấn và khám trực tiếp tại hệ thống tăng trưởng 250% trong 2 tháng đầu triển khai, tỷ lệ phản hồi cực kỳ tích cực.",
        metrics: [
          { label: "Tăng Trưởng Đặt Lịch", value: "+250%" },
          { label: "Lượng Khách Inbox", value: "+320%" },
          { label: "Chi Phí Trên Khách Hẹn", value: "-40%" }
        ]
      }
    },
    {
      id: "doctor-tuan",
      image: "/Case-Study-Bac-Si-Tuan.png",
      badge: "+180% Lịch Khám",
      industry: "Y khoa & Thẩm mỹ",
      title: "Bác Sĩ Tuấn - Thẩm Mỹ Chuyên Sâu",
      description: "Định vị thương hiệu cá nhân uy tín, phủ sóng rộng rãi các video quay dựng giải đáp chuyên môn lâm sàng đạt hàng nghìn lượt chia sẻ.",
      fullCase: {
        problem: "Thương hiệu cá nhân chưa nổi bật giữa thị trường spa và thẩm mỹ hỗn loạn. Khách hàng thiếu niềm tin khi đưa ra quyết định làm dịch vụ giá trị cao.",
        action: "Xây dựng tuyến nội dung 'Bác Sĩ Trực Tiếp Giải Đáp' thông qua Reels/Shorts kiểm chứng kết quả lâm sàng khoa học. Kết hợp Seeding tư vấn và gỡ rối thắc mắc chân thực.",
        result: "Kênh tiếp cận tự nhiên đạt hàng triệu lượt xem tự nhiên, tạo dựng lòng tin vững vàng và dòng khách hàng đăng ký thăm khám cực kỳ ổn định.",
        metrics: [
          { label: "Đặt Lịch Khám", value: "+180%" },
          { label: "Lượt Tiếp Cận Tự Nhiên", value: "3.5M+" },
          { label: "Chi Phí Mỗi SĐT Đăng Ký", value: "-50%" }
        ]
      }
    },
    {
      id: "ben-xua",
      image: "/Case-Study-Ben-Xua.png",
      badge: "Phủ Kín Bàn Cuối Tuần",
      industry: "F&B & Ẩm thực",
      title: "Khu Ẩm Thực Sinh Thái Bến Xưa",
      description: "Thu hút hàng nghìn thực khách ghé trải nghiệm ẩm thực gia đình, check-in không gian xanh thơ mộng qua chiến dịch truyền thông khơi gợi cảm xúc.",
      fullCase: {
        problem: "Địa điểm xa vùng trung tâm, khách hàng chỉ biết tới vào dịp lễ lớn, ngày thường vắng bóng người, bài đăng cũ đơn điệu kém cuốn hút.",
        action: "Thiết lập chiến dịch kể câu chuyện 'Hương Vị Quê Nhà Giữa Lòng Thành Phố' kết hợp video không gian sân vườn thư giãn. Triển khai kịch bản Seeding kích lộc tò mò.",
        result: "Lượng khách ghé ăn trực tiếp ngày cuối tuần tăng vọt 160% dẫn đến kín bàn liên tục, tối ưu tỷ suất lợi nhuận ròng bền vững.",
        metrics: [
          { label: "Lượng Khách Ghé Trực Tiếp", value: "+160%" },
          { label: "Doanh Thu Mặt Bằng", value: "+95%" },
          { label: "Chi Phí Chạy Ads Sát Sườn", value: "-45%" }
        ]
      }
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-bg-light/35" id="results">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full font-display">
            MINH CHỨNG THỰC TẾ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue">
            Kết quả thực tế từ khách hàng
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-brand-text-muted max-w-xl mx-auto font-sans">
            Những con số không biết nói dối. Hãy cùng xem các khách hàng đã lột xác diện mạo Fanpage thành công như thế nào cùng ViSocial:
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <motion.div
              key={c.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    alt={c.title}
                    src={c.image}
                  />
                  <div className="absolute top-4 left-4 bg-brand-success text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {c.badge}
                  </div>
                </div>

                <div className="p-8 space-y-4 text-left">
                  <span className="text-xs uppercase tracking-wider text-brand-orange font-bold font-sans">
                    {c.industry}
                  </span>
                  <h4 className="font-display text-xl font-bold text-brand-blue tracking-tight hover:text-brand-orange transition-colors">
                    {c.title}
                  </h4>
                  <p className="font-sans text-brand-text-muted text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 text-left">
                <button
                  onClick={() => setActiveCase(c)}
                  className="font-display text-brand-blue font-bold flex items-center gap-2 hover:text-brand-orange hover:gap-3 transition-all text-sm cursor-pointer border-t border-gray-100 pt-4 w-full"
                >
                  <span>Xem báo cáo chi tiết</span>
                  <ArrowRight className="w-4 h-4 text-brand-orange" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Modal */}
        <AnimatePresence>
          {activeCase && (
            <div className="fixed inset-0 bg-brand-blue/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100] transition-opacity">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveCase(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors z-10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Cover banner image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    src={activeCase.image}
                    alt={activeCase.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8">
                    <div>
                      <span className="text-xs font-bold text-brand-orange bg-white/20 px-3 py-1.5 rounded-full font-display">
                        {activeCase.badge}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-3">
                        {activeCase.title}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm font-sans mt-1">
                        {activeCase.industry}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6 text-left">
                  {/* Grid Metrics Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeCase.fullCase.metrics.map((met) => (
                      <div key={met.label} className="bg-brand-bg-light/50 border border-gray-100 rounded-2xl p-4 text-center">
                        <span className="block text-2xl sm:text-3xl font-bold font-display text-brand-orange">
                          {met.value}
                        </span>
                        <span className="text-xs font-semibold font-sans text-brand-navy mt-1 block">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Structural Case Details */}
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-400 pl-4">
                      <h4 className="text-xs uppercase tracking-wider text-red-500 font-bold font-display flex items-center gap-1.5">
                        <Users className="w-4 h-4" /> Vấn Đề Trước Khi Gặp ViSocial
                      </h4>
                      <p className="font-sans text-brand-navy/90 text-sm mt-1 leading-relaxed">
                        {activeCase.fullCase.problem}
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-blue pl-4">
                      <h4 className="text-xs uppercase tracking-wider text-brand-blue font-bold font-display flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" /> Hành Động Giải Pháp Đột Phá
                      </h4>
                      <p className="font-sans text-brand-navy/90 text-sm mt-1 leading-relaxed">
                        {activeCase.fullCase.action}
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-success pl-4">
                      <h4 className="text-xs uppercase tracking-wider text-brand-success font-bold font-display flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" /> Kết Quả Đạt Được Thực Tế
                      </h4>
                      <p className="font-sans text-brand-navy/90 text-sm mt-1 leading-relaxed text-brand-blue font-semibold">
                        {activeCase.fullCase.result}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 text-center">
                    <button
                      onClick={() => setActiveCase(null)}
                      className="bg-brand-blue text-white hover:bg-brand-orange hover:text-white transition-all px-6 py-3 rounded-xl font-display font-bold text-sm cursor-pointer shadow-md active:scale-95"
                    >
                      Xác nhận thông tin & Đóng báo cáo
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
