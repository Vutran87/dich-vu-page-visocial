import React, { useState } from "react";
import { MessageSquareCode, X, Send, Network, Smile, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ChatFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    {
      id: "init",
      sender: "bot",
      text: "Xin chào! Mình là cố vấn ảo của ViSocial, bạn cần mình hỗ trợ các thông tin gì về việc tối ưu hóa Fanpage ạ?"
    }
  ]);
  const [inputText, setInputText] = useState("");

  const presetFAQAnswers: Record<string, string> = {
    "chi-phi": "Gói setup nền tảng có ngân sách cực kỳ tiết kiệm chỉ tương đương vài buổi cafe, phục vụ tối ưu lâu dài cho shop bán hàng.",
    "kpi": "ViSocial cam kết KPI tăng tối thiểu 150-200% lượng tiếp cận tự nhiên sau tháng đầu tiên triển khai nội dung bài bản.",
    "hop-dong": "Hai bên ký kết hợp đồng pháp lý rõ ràng, xuất hóa đơn VAT đầy đủ cho doanh nghiệp, yên tâm tuyệt đối.",
    "lien-he": "Quý khách vui lòng điền form ở dưới cùng website, đội ngũ chuyên gia của chúng tôi sẽ gọi điện tư vấn chi tiết nhất kèm báo giá sau 30 phút!"
  };

  const handlePresetClick = (key: string, label: string) => {
    // Add user message
    const userMsg = { id: Date.now().toString(), sender: "user", text: label };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const answerText = presetFAQAnswers[key] || "Cảm ơn bạn! Để nhận tư vấn chi tiết hơn, bạn hãy điền Form nhận Audit miễn phí ở phía dưới website nhé.";
      const botMsg = { id: (Date.now() + 1).toString(), sender: "bot", text: answerText };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { id: Date.now().toString(), sender: "user", text: inputText };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    setTimeout(() => {
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Tin nhắn của bạn đã được lưu lại trên hệ thống. Trưởng phòng chiến lược nội dung sẽ phản hồi sớm nhất qua Zalo của số điện thoại trên nhé! Trân trọng!"
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 700);
  };

  return (
    <>
      {/* FAB toggle button overlay */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 group cursor-pointer"
        aria-label="Hỗ trợ"
      >
        <MessageSquareCode className="w-7 h-7" />
        <span className="absolute right-20 bg-brand-blue text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-display font-semibold shadow-md">
          Chat Tư Vấn Ngay
        </span>
      </button>

      {/* Slide-out consultation chat popup console */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-28 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden flex flex-col justify-between max-h-[500px]"
          >
            {/* Box Header */}
            <div className="bg-brand-blue p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Network className="text-brand-orange w-5 h-5" />
                <div className="text-left">
                  <h4 className="font-display font-bold text-sm tracking-tight">Trợ Lý Ảo ViSocial</h4>
                  <p className="text-[10px] text-brand-orange font-sans">● Đang trực tuyến phản hồi tức thì</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body Screen */}
            <div className="p-4 space-y-4 flex-grow overflow-y-auto max-h-[280px] bg-slate-50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-xs text-left ${
                      m.sender === "user"
                        ? "bg-brand-orange text-white rounded-tr-none"
                        : "bg-white text-brand-navy shadow-sm border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    <p className="font-sans leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Preset select options and text inputs area */}
            <div className="p-3 border-t bg-white space-y-3">
              <div className="flex flex-wrap gap-1.5 justify-start">
                <button
                  onClick={() => handlePresetClick("chi-phi", "Chi phí thế nào?")}
                  className="text-[10px] font-sans border border-brand-blue/35 text-brand-blue hover:bg-brand-blue/5 rounded-full px-2 py-1 select-none cursor-pointer"
                >
                  Gói setup chi phí sao?
                </button>
                <button
                  onClick={() => handlePresetClick("kpi", "Cam kết KPI?")}
                  className="text-[10px] font-sans border border-brand-blue/35 text-brand-blue hover:bg-brand-blue/5 rounded-full px-2 py-1 select-none cursor-pointer"
                >
                  Có cam kết KPI không?
                </button>
                <button
                  onClick={() => handlePresetClick("hop-dong", "Hợp đồng ra sao?")}
                  className="text-[10px] font-sans border border-brand-blue/35 text-brand-blue hover:bg-brand-blue/5 rounded-full px-2 py-1 select-none cursor-pointer"
                >
                  Hợp đồng thế nào?
                </button>
              </div>

              <form onSubmit={handleSendCustom} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Nhập nội dung câu hỏi..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full border border-gray-200 outline-none rounded-xl px-4 py-2.5 text-xs focus:border-brand-blue"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-brand-orange text-white rounded-xl hover:bg-brand-orange-hover shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
