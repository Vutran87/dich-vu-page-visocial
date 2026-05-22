import React, { useState } from "react";
import { TrendingDown, Coins, HelpCircle, EyeOff, UserX, AlertCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Problems() {
  const [activeProblem, setActiveProblem] = useState<string | null>(null);

  const problemsList = [
    {
      id: "reach",
      icon: TrendingDown,
      title: "Lượt tiếp cận thấp",
      description: "Lượt tiếp cận tự nhiên sụt giảm, bài đăng không có ai tương tác.",
      solution: "Giải pháp: ViSocial tối ưu SEO từ khoá và lập kế hoạch hashtag chuẩn thuật toán, kết hợp Reels ngắn kéo traffic tự nhiên tức thì."
    },
    {
      id: "ads",
      icon: Coins,
      title: "Chi phí Ads cao",
      description: "Chi phí quảng cáo ngày càng đắt đỏ nhưng không thể chuyển đổi ra đơn hàng.",
      solution: "Giải pháp: Cơ cấu lại ngân sách tối ưu phễu đối tượng mục tiêu, lọc clone và tối ưu nội dung thông điệp chuyển đổi sâu."
    },
    {
      id: "brand",
      icon: EyeOff,
      title: "Thương hiệu mờ nhạt",
      description: "Thương hiệu mờ nhạt, thiếu màu sắc riêng và không nhất quán trên social.",
      solution: "Giải pháp: Định vị cá tính, xây dựng bộ chuẩn hình ảnh thương hiệu (Cover, Avatar, Social Grid) độc bản và chỉn chu nhất."
    },
    {
      id: "conversion",
      icon: UserX,
      title: "Không chuyển đổi",
      description: "Nhiều lượt click nhắn tin hỏi giá nhưng tỉ lệ chốt đơn rất thấp.",
      solution: "Giải pháp: Thiết kế các nút kêu gọi hành động (CTA), lập kịch bản chăm sóc khách hàng tự động thông minh bằng Chatbot 1:1."
    },
    {
      id: "content",
      icon: AlertCircle,
      title: "Nội dung rời rạc",
      description: "Nội dung rời rạc, không bám sát vào hành trình cảm xúc của khách.",
      solution: "Giải pháp: Lắp ghép ma trận nội dung 3E (Educate, Entertain, Engage) định hướng chuyển đổi tự nhiên."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full font-display">
            Thực Trạng Doanh Nghiệp
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue">
            Fanpage của bạn đang gặp vấn đề?
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-brand-text-muted max-w-xl mx-auto">
            Hầu hết các doanh nghiệp SME đang lãng phí 80% lực lượng và tiềm năng phát triển vì bố cục Fanpage thiếu chuyên nghiệp. Click vào vấn đề của bạn để xem giải pháp:
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {problemsList.map((prob) => {
            const IconComponent = prob.icon;
            const isSelected = activeProblem === prob.id;

            return (
              <motion.div
                key={prob.id}
                onClick={() => setActiveProblem(isSelected ? null : prob.id)}
                layout
                className={`group relative p-6 rounded-2xl border cursor-pointer select-none transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-brand-blue border-brand-blue text-white shadow-xl scale-[1.03]"
                    : "bg-brand-bg-light/30 hover:bg-white border-gray-200/60 text-brand-navy hover:shadow-lg hover:border-brand-blue/30"
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                      isSelected ? "bg-white/15 text-white" : "bg-red-50 text-red-500 group-hover:bg-red-100/70"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className={`font-display text-lg font-bold mb-2 ${isSelected ? "text-white" : "text-brand-blue"}`}>
                    {prob.title}
                  </h3>
                  <p className={`text-xs ml-0 leading-relaxed ${isSelected ? "text-white/85" : "text-brand-text-muted"}`}>
                    {prob.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-gray-200/20 flex items-center justify-between">
                  <span className={`text-xs font-semibold ${isSelected ? "text-brand-orange" : "text-brand-blue group-hover:text-brand-orange"}`}>
                    {isSelected ? "Đóng giải pháp" : "Chữa bệnh ngay"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? "rotate-90 text-brand-orange" : "group-hover:translate-x-1"}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Solution Drawer */}
        <AnimatePresence mode="wait">
          {activeProblem && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="mt-8 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl p-6 text-left max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-orange/10 rounded-lg shrink-0 mt-1">
                  <HelpCircle className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-blue text-base sm:text-lg mb-1">
                    Vì sao ViSocial giải quyết triệt để được vấn đề{" "}
                    {problemsList.find((p) => p.id === activeProblem)?.title}?
                  </h4>
                  <p className="font-sans text-brand-navy/90 text-sm sm:text-base leading-relaxed">
                    {problemsList.find((p) => p.id === activeProblem)?.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
