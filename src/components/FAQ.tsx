import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "time",
      question: "Bao lâu thì thấy được kết quả rõ rệt?",
      answer: "Thông thường sau 2-4 tuần đầu tiên sau khi hoàn tất quy trình Setup và Content ban đầu, bạn sẽ cảm nhận sự thay đổi vượt bậc về lượt tiếp cận tự nhiên và độ uy tín, bóng bẩy của trang. Hiệu suất chuyển đổi đơn hàng và doanh số quảng cáo tối ưu sâu nhất từ tháng thứ 2 trở đi khi các tệp đối tượng đã quen thuộc với phễu thương hiệu."
    },
    {
      id: "kpi",
      question: "ViSocial có cam kết chỉ số KPI không?",
      answer: "Có. ViSocial cam kết chỉ số đo lường hiệu quả rõ ràng (SL bài viết, chỉ số tiếp cận Reach tự nhiên, tỉ lệ tương tác Engagement) được ghi nhận cam kết trực tiếp trong hợp đồng pháp lý dựa trên kết quả khảo sát thực tế trạng thái Fanpage của bạn."
    },
    {
      id: "image",
      question: "Chúng tôi có cần tự cung cấp hay thiết kế hình ảnh không?",
      answer: "Không cần thiết. ViSocial sở hữu đội ngũ Content Creator và Designer thiết kế đồ họa chuyên nghiệp. Phía bạn chỉ cần cung cấp hình ảnh/video sản phẩm thô, chưa qua xử lý, chúng tôi chịu trách nhiệm bóc tách, lên kịch bản, làm hậu kỳ và đóng gói thành chuỗi ấn phẩm Social chuẩn chỉ nhất!"
    },
    {
      id: "cost",
      question: "Hình thức thanh toán và ký kết hợp đồng như thế nào?",
      answer: "Sau khi liên hệ tư vấn, hai bên sẽ thỏa thuận lộ trình tối ưu và ký kết hợp đồng điện tử/giấy chính thức. Bạn có thể thanh toán đặt cọc theo giai đoạn hoặc trả trước theo chu kỳ tháng tùy thuộc vào gói dịch vụ lựa chọn ban đầu."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full font-display inline-block">
            HỖ TRỢ GIẢI ĐÁP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue">
            Các câu hỏi thường gặp
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-brand-text-muted max-w-xl mx-auto font-sans">
            Mọi thắc mắc của bạn đều được chúng tôi giải đáp một cách rõ ràng và trung thực nhất:
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-brand-blue/30 shadow-lg bg-brand-bg-light/20" : "border-gray-200/60"
                }`}
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center bg-transparent hover:bg-brand-bg-light/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-brand-orange" : "text-brand-blue"}`} />
                    <span className={`font-display text-sm sm:text-base font-bold ${isOpen ? "text-brand-orange" : "text-brand-blue"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full ${isOpen ? "bg-brand-orange text-white" : "bg-brand-blue/5 text-brand-blue"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-gray-100 font-sans text-brand-navy/90 text-xs sm:text-sm leading-relaxed space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
