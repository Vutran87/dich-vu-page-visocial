import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

// Static public path to avoid Vite dev-server import proxy and routing limitations
const heroMockup = "/anh-1.png";

interface HeroProps {
  onAuditClick: () => void;
  onPlanClick: () => void;
}

export default function Hero({ onAuditClick, onPlanClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-white via-brand-bg-light/30 to-brand-bg-light/70">
      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-[40%] left-0 w-[30%] h-[30%] bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column - content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue"
          >
            <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider font-display">
              Giải Pháp Đột Phá Cho Doanh Nghiệp SME
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-blue leading-[1.12] tracking-tight"
          >
            Biến Fanpage từ nơi <span className="text-brand-orange">đăng bài</span> thành kênh{" "}
            <span className="relative inline-block text-brand-orange">
              tạo khách hàng
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-orange/15 rounded-full -rotate-1"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-brand-text-muted max-w-2xl leading-relaxed"
          >
            Giải pháp tối ưu hóa Fanpage toàn diện cho doanh nghiệp SME. Tăng tỷ lệ chuyển đổi, giảm chi phí quảng cáo và xây dựng uy tín thương hiệu vững bền trên môi trường mạng xã hội.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onAuditClick}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-4 rounded-xl cta-shadow text-lg active:scale-95 transition-all text-center cursor-pointer font-display"
            >
              Audit Fanpage miễn phí
            </button>
            <button
              onClick={onPlanClick}
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold px-8 py-4 rounded-xl transition-all text-lg active:scale-95 text-center cursor-pointer font-display"
            >
              Nhận lộ trình phát triển
            </button>
          </motion.div>
        </div>

        {/* Right column - visual mockup with hover reflection */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Outer blur glow decoration */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-brand-orange/20 to-brand-blue/20 rounded-3xl blur-2xl opacity-40 -z-10 transition-all duration-500"></div>

            {/* Simulated Tablet/Mockup frame with high-quality shadow */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white">
              <img
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
                alt="ViSocial Facebook Growth Mockup"
                src={heroMockup}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
