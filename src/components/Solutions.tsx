import React, { useState } from "react";
import { motion } from "motion/react";
import { Eye, MessageSquare, BadgeCent, ArrowRight } from "lucide-react";

export default function Solutions() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      num: 1,
      title: "Awareness (Nhận diện)",
      icon: Eye,
      text: "Tiếp cận khách hàng mục tiêu thông qua nội dung viral định dạng video ngắn Reels, Tiktok và SEO từ khoá chuẩn trên trang.",
      detail: "Chúng tôi phân tích tập từ khóa có volume tìm kiếm cao của ngành hàng, cải biến tiêu đề phụ, cập nhật các hashtag tối ưu nhất để Fanpage luôn xuất hiện đầu tiên khi khách hàng tìm kiếm.",
    },
    {
      num: 2,
      title: "Engagement (Tương tác)",
      icon: MessageSquare,
      text: "Xây dựng tương tác sâu, tận tâm giải quyết các thắc mắc ẩn và giải tỏa nỗi lo ngại thầm kín của khách hàng.",
      detail: "Bằng cấu trúc kịch bản nội dung 10-20-70 chuyên nghiệp kết hợp cùng đội ngũ kỹ thuật seeding định hướng dư luận, fanpage sẽ đạt mức tương tác tự nhiên đầy uy tín.",
    },
    {
      num: 3,
      title: "Conversion (Chuyển đổi)",
      icon: BadgeCent,
      text: "Tối ưu hóa các điểm chạm bán hàng chuyên nghiệp để chuyển đổi followers thành dòng doanh thu thực tế.",
      detail: "Ứng dụng Chatbot tự động phân luồng khách hàng theo nhu cầu mua sắm. Nhân bản các kịch bản ưu đãi, tối ưu hoá form thu thập thông tin để tăng tỉ lệ chốt đơn tới 300%.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-brand-bg-light/45" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: List info */}
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 bg-white rounded-full font-display">
                MÔ HÌNH TOÀN DIỆN
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue leading-tight">
                Giải pháp Fanpage toàn diện
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-text-muted leading-relaxed">
                Chúng tôi không chỉ đăng bài đơn thuần. ViSocial xây dựng một hệ sinh thái nội dung có tính toán chiến lược để dẫn dắt hành trình tâm lý khách hàng: tò mò → tin tưởng → mua hàng bền bỉ.
              </p>
            </div>

            {/* Stepper with tabs */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = selectedStep === index;

                return (
                  <div
                    key={step.num}
                    onClick={() => setSelectedStep(index)}
                    className={`p-5 rounded-xl transition-all duration-300 border cursor-pointer flex gap-4 ${
                      isActive
                        ? "bg-white border-brand-blue/20 shadow-md translate-x-2"
                        : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold transition-all ${
                        isActive
                          ? "bg-brand-blue text-white scale-110"
                          : "bg-brand-blue/15 text-brand-blue"
                      }`}
                    >
                      {step.num}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-display text-base font-bold ${isActive ? "text-brand-orange" : "text-brand-blue"}`}>
                          {step.title}
                        </h4>
                        {isActive && <IconComponent className="w-4 h-4 text-brand-orange animate-bounce" />}
                      </div>
                      <p className="text-sm font-sans text-brand-navy leading-relaxed">
                        {step.text}
                      </p>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-xs sm:text-sm text-brand-text-muted pt-2 border-t border-gray-100 mt-2 italic font-sans"
                        >
                          {step.detail}
                        </motion.p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Infographic with smooth card frame look */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-orange/5 rounded-[40px] blur-3xl -z-10"></div>
            <div className="bg-white p-5 rounded-3xl shadow-xl transform hover:rotate-0 transition-transform duration-500 max-w-lg mx-auto md:-rotate-1 border border-gray-100">
              <img
                className="rounded-2xl w-full object-cover shadow-sm bg-brand-blue/5"
                referrerPolicy="no-referrer"
                alt="Giải pháp Fanpage toàn diện"
                src="/anh-page-2.png"
              />
              <div className="p-4 mt-2">
                <span className="text-xs font-mono font-medium text-brand-orange tracking-widest block uppercase">
                  VI-FUNNEL ARCHITECTURE
                </span>
                <p className="text-xs font-sans text-brand-text-muted mt-1">
                  Đã áp dụng thành công cho +120 đối tác đạt chỉ số ROI vượt mốc kì vọng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
