import React, { useState } from "react";
import { LineChart, Lightbulb, Settings, Zap, Gauge, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Analysis",
      sub: "Phân tích Fanpage & Đối thủ",
      desc: "Nghiên cứu kỹ lưỡng vị thế hiện tại của trang, phân tích tệp khách hàng tiềm năng cốt lõi và các bài học thành bại từ các đối thủ cùng lĩnh vực.",
      bullets: ["Audit tình trạng tài khoản quảng cáo", "Phân tích top 3 của đối thủ cạnh tranh trực tiếp", "Xác định chân dung hành vi người mua hàng"],
      icon: LineChart,
    },
    {
      title: "Strategy",
      sub: "Lên chiến lược nội dung",
      desc: "Lập sơ đồ xương sống nội dung (Content Pillar) nhất quán và sơ đồ tuyến bài đăng phù hợp với định vị màu sắc cá tính của trang.",
      bullets: ["Thiết lập tỷ lệ nội dung bán hàng - giáo dục", "Xác định tone of voice đại diện thương hiệu", "Lên kế hoạch sản xuất Concept Reels/Videos"],
      icon: Lightbulb,
    },
    {
      title: "Setup",
      sub: "Tối ưu cấu trúc Fanpage",
      desc: "Cách tân lại toàn diện thiết kế thẩm mỹ (Avatar, Cover, Highlights). Đồng thời cập nhật các cài đặt cấu hình chuẩn SEO ưu việt nhất.",
      bullets: ["Thiết kế bộ banner nhận diện đồng bộ", "Tối ưu từ khoá mô tả và danh mục chuẩn SEO", "Cài đặt Chatbot trả lời thông tin tự động"],
      icon: Settings,
    },
    {
      title: "Execution",
      sub: "Triển khai & Seeding",
      desc: "Thực thi đăng tải các ấn phẩm content chất lượng kết hợp với đội ngũ seeding kiểm soát khủng hoảng dư luận và tạo dựng niềm tin đầu phễu.",
      bullets: ["Sản xuất hình ảnh đồ họa & content chuẩn", "Lên lịch bài viết tự động theo khung giờ vàng", "Triển khai kịch bản seeding đẩy tương tác tự nhiên"],
      icon: Zap,
    },
    {
      title: "Optimization",
      sub: "Tối ưu & Báo cáo kết quả",
      desc: "Phân tích số liệu thực tế thông qua các biểu đồ tiếp cận, điều chỉnh chi phí quảng cáo phù hợp và tổng hợp báo cáo định kỳ chính xác.",
      bullets: ["Điều chỉnh tối ưu chi phí phân phối CPA/CPL", "Báo cáo chi tiết số liệu hàng tuần / hàng tháng", "Tư vấn cải tiến sản phẩm và hành trình mua sắm"],
      icon: Gauge,
    },
  ];

  return (
    <section className="py-24 px-6 bg-brand-blue text-white overflow-hidden relative" id="process-timeline">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-white/10 px-4 py-1.5 rounded-full font-display inline-block">
            LỘ TRÌNH 5 BƯỚC CHUẨN MỰC
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Quy trình triển khai 5 bước
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Chúng tôi cam kết mang lại quy trình làm việc chuẩn chỉnh, minh bạch, áp dụng tốc độ cao hướng tới con số chuyển đổi thực cho doanh nghiệp.
          </p>
        </div>

        {/* Progress Line and Nodes */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[3px] bg-white/15 -z-10"></div>
          {/* Active indicator bar */}
          <div
            className="hidden lg:block absolute top-12 left-0 h-[3px] bg-brand-orange -z-10 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isPassed = index <= activeStep;
              const isActive = index === activeStep;

              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className="text-center cursor-pointer group flex flex-col items-center select-none"
                >
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-300 relative ${
                      isActive
                        ? "bg-brand-orange text-white ring-8 ring-brand-orange/20 scale-110"
                        : isPassed
                        ? "bg-brand-blue-dark text-brand-orange border-4 border-brand-orange"
                        : "bg-brand-blue-dark text-white/50 border-4 border-white/15 group-hover:border-white/40"
                    }`}
                  >
                    <IconComp className="w-8 h-8" />
                    {/* Floating Step Number */}
                    <span className="absolute -top-1 -right-1 bg-brand-blue-dark text-brand-orange border border-brand-orange/30 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className={`font-display text-lg font-bold mb-1 ${isActive ? "text-brand-orange" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs font-sans max-w-[180px] leading-relaxed">
                    {step.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card with animations */}
        <div className="mt-16 bg-gradient-to-br from-[#0c2461] to-[#010924] border-2 border-brand-orange/40 rounded-3xl p-8 max-w-4xl mx-auto text-left hover:border-brand-orange/60 transition-all duration-300 shadow-2xl shadow-brand-orange/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono font-medium text-brand-orange uppercase tracking-wider block">
                BƯỚC {activeStep + 1} - CHI TIẾT CÔNG VIỆC
              </span>
              <h4 className="font-display text-2xl font-bold text-white">
                {steps[activeStep].title}: {steps[activeStep].sub}
              </h4>
              <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="md:col-span-4 bg-[#051336] border border-white/10 p-6 rounded-2xl">
              <h5 className="text-xs font-semibold text-brand-orange uppercase tracking-wider font-display mb-3">
                Cam kết đầu ra:
              </h5>
              <ul className="space-y-2.5">
                {steps[activeStep].bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
