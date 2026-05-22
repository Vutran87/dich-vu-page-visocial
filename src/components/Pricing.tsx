import React from "react";
import { CheckCircle2, Star } from "lucide-react";
import { motion } from "motion/react";
import { PricingPlanItem } from "../types";

interface PricingProps {
  onSelectPlan: (planTitle: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans: PricingPlanItem[] = [
    {
      id: "setup",
      title: "Thiết lập Fanpage chuẩn",
      description: "Dành cho Fanpage mới bắt đầu hoặc trang lâu ngày cần tái định vị, nâng cấp giao diện chuẩn hóa.",
      features: [
        "Tối ưu hóa cấu trúc chuẩn SEO Fanpage",
        "Thiết chế bộ Cover & Avatar Professional đồng bộ thương hiệu",
        "Cài đặt kịch bản Chatbot trả lời khách hàng tự động cơ bản",
        "Audit tổng quan tệp đối thủ cạnh tranh cùng ngành"
      ]
    },
    {
      id: "care",
      title: "Chăm sóc & Tương tác",
      description: "Tập trung xây dựng giá trị cốt lõi bền vững, tiếp cận khách hàng tự nhiên và thúc đẩy tương tác.",
      features: [
        "Sản xuất 15 - 20 bài đăng nội dung sáng tạo chuẩn cấu trúc/tháng",
        "Thiết kế hình ảnh đồ họa chất lượng & sản xuất 2 Video Reels",
        "Hệ thống Seeding dư luận chất lượng đẩy tương tác uy tín",
        "Hỗ trợ quản trị tin nhắn khách hàng & giải đáp khủng hoảng"
      ],
      recommended: true
    },
    {
      id: "growth",
      title: "Tăng trưởng & Chuyển đổi",
      description: "Tối đa hóa hiệu suất quảng cáo, thúc đẩy trực tiếp doanh số đơn hàng và mở rộng độ bao phủ thị trường.",
      features: [
        "Tuyến bài viết Content Sales chuyên biệt cho việc chốt đơn, Retargeting",
        "Xây dựng & tối ưu hệ thống 3 Fanpage vệ tinh chất lượng",
        "Thiết lập cấu hình kịch bản quảng cáo tối ưu ngân sách Ads",
        "Hệ thống báo cáo chỉ số kinh doanh Real-time minh bạch"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-bg-light/45" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 bg-white rounded-full font-display inline-block">
            BẢNG GIÁ ƯU ĐÃI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue">
            Bảng gói dịch vụ tối ưu
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-brand-text-muted max-w-xl mx-auto font-sans">
            Lựa chọn gói dịch vụ phù hợp nhất với tầm nhìn tài chính và giai đoạn phát triển của doanh nghiệp bạn ngay hôm nay:
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
          {plans.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              className={`bg-white p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative ${
                p.recommended
                  ? "border-brand-orange shadow-2xl scale-[1.02] md:scale-[1.04]"
                  : "border-gray-200/50 shadow-md"
              }`}
            >
              {p.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>Phổ biến nhất</span>
                </div>
              )}

              <div className="text-left">
                <h3 className="font-display text-2xl font-bold text-brand-blue mb-2 flex items-center justify-between">
                  <span>{p.title}</span>
                </h3>
                <p className="font-sans text-brand-text-muted text-sm leading-relaxed mb-8 min-h-[60px]">
                  {p.description}
                </p>

                <div className="w-full h-[1px] bg-gray-100 my-6"></div>

                <h4 className="text-xs font-bold text-brand-orange font-display tracking-wider uppercase mb-4">
                  Các quyền lợi bao gồm:
                </h4>
                <ul className="space-y-4 mb-10">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-brand-navy">
                      <CheckCircle2 className="w-5 h-5 text-brand-success shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPlan(p.title)}
                className={`w-full py-3.5 px-4 font-bold rounded-xl transition-all font-display cursor-pointer text-center text-sm active:scale-95 ${
                  p.recommended
                    ? "bg-brand-orange hover:bg-brand-orange-hover text-white cta-shadow"
                    : "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                }`}
              >
                Đăng ký {p.title}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
