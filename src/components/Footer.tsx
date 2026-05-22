import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const introLinks = [
    { label: "Về chúng tôi", href: "#about" },
    { label: "Đội ngũ nhân sự", href: "#team" },
    { label: "Tuyển dụng", href: "#careers" },
    { label: "Cảm nhận học viên", href: "#testimonials" },
  ];

  const servicesLinks = [
    { label: "Dịch vụ Facebook", href: "#services" },
    { label: "Dịch vụ Zalo", href: "#services" },
    { label: "Dịch vụ khác", href: "#services" },
    { label: "Phần mềm Marketing", href: "#services" },
  ];

  const trainingLinks = [
    {
      label: "Zalo Marketing bán hàng thực chiến",
      href: "#training",
    },
    { label: "Đào tạo Ads Facebook", href: "#training" },
    { label: "Page vệ tinh", href: "#training" },
  ];

  const newsLinks = [
    { label: "Tin mới nhất", href: "#news" },
    { label: "Digital Marketing", href: "#news" },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-r from-[#8E2D1D] via-[#2F215A] to-[#12164A] text-white pt-16 pb-12 font-sans select-none"
      id="visocial-corporate-footer"
    >
      {/* Visual Tech/AI Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex justify-between">
        {/* Left background face wireframe ornament */}
        <div className="w-1/3 h-full flex items-center justify-start pl-6">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white" fill="none" stroke="currentColor">
            <path
              d="M30,50 Q60,20 100,50 T170,50 Q180,90 150,130 T100,170 Q40,150 30,50 Z"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle cx="100" cy="110" r="45" strokeWidth="0.5" />
            <line x1="50" y1="110" x2="150" y2="110" strokeWidth="0.5" />
            <line x1="100" y1="65" x2="100" y2="155" strokeWidth="0.5" />
            <circle cx="75" cy="100" r="8" strokeWidth="1" />
            <circle cx="125" cy="100" r="8" strokeWidth="1" />
            <path d="M 85,135 Q 100,150 115,135" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Right background tech constellation network */}
        <div className="w-1/3 h-full flex items-center justify-end pr-6">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white" fill="none" stroke="currentColor">
            <circle cx="40" cy="50" r="3" fill="currentColor" />
            <circle cx="120" cy="40" r="4" fill="currentColor" />
            <circle cx="70" cy="110" r="3" fill="currentColor" />
            <circle cx="150" cy="100" r="5" fill="currentColor" />
            <circle cx="100" cy="160" r="3" fill="currentColor" />
            <circle cx="160" cy="160" r="3" fill="currentColor" />
            <line x1="40" y1="50" x2="120" y2="40" strokeWidth="0.5" />
            <line x1="40" y1="50" x2="70" y2="110" strokeWidth="0.5" />
            <line x1="120" y1="40" x2="150" y2="100" strokeWidth="0.5" />
            <line x1="70" y1="110" x2="150" y2="100" strokeWidth="0.5" />
            <line x1="70" y1="110" x2="100" y2="160" strokeWidth="0.5" />
            <line x1="150" y1="100" x2="160" y2="160" strokeWidth="0.5" />
            <line x1="100" y1="160" x2="160" y2="160" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:items-start text-left pb-10">
          {/* Logo segment */}
          <div className="lg:col-span-5 flex justify-start">
            <Logo variant="footer" className="scale-110 origin-left" />
          </div>

          {/* Slogan details segment */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              <span className="font-bold">Đơn vị hàng đầu về Giải pháp Digital Marketing tại Việt Nam.</span>
              <br />
              Chúng tôi cung cấp giải pháp marketing toàn diện giúp doanh nghiệp phát triển bền vững trên các nền tảng mạng xã hội.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-t border-white/20 mb-12" />

        {/* Columns Segment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-left">
          {/* Col 1: Giới thiệu */}
          <div className="space-y-5">
            <div className="relative pb-2">
              <h4 className="font-display text-lg font-bold text-white tracking-wide">Giới thiệu</h4>
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#F58120]"></div>
            </div>
            <ul className="space-y-3">
              {introLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-start text-sm text-white/90 hover:text-[#F58120] transition-colors"
                  >
                    <span className="text-[#F58120] font-bold mr-2 transition-transform group-hover:translate-x-1">
                      &gt;
                    </span>
                    <span className="leading-tight">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Dịch vụ */}
          <div className="space-y-5">
            <div className="relative pb-2">
              <h4 className="font-display text-lg font-bold text-white tracking-wide">Dịch vụ</h4>
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#F58120]"></div>
            </div>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-start text-sm text-white/90 hover:text-[#F58120] transition-colors"
                  >
                    <span className="text-[#F58120] font-bold mr-2 transition-transform group-hover:translate-x-1">
                      &gt;
                    </span>
                    <span className="leading-tight">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Đào tạo */}
          <div className="space-y-5">
            <div className="relative pb-2">
              <h4 className="font-display text-lg font-bold text-white tracking-wide">Đào tạo</h4>
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#F58120]"></div>
            </div>
            <ul className="space-y-3">
              {trainingLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-start text-sm text-white/90 hover:text-[#F58120] transition-colors"
                  >
                    <span className="text-[#F58120] font-bold mr-2 transition-transform group-hover:translate-x-1">
                      &gt;
                    </span>
                    <span className="leading-tight">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tin tức */}
          <div className="space-y-5">
            <div className="relative pb-2">
              <h4 className="font-display text-lg font-bold text-white tracking-wide">Tin tức</h4>
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#F58120]"></div>
            </div>
            <ul className="space-y-3">
              {newsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-start text-sm text-white/90 hover:text-[#F58120] transition-colors"
                  >
                    <span className="text-[#F58120] font-bold mr-2 transition-transform group-hover:translate-x-1">
                      &gt;
                    </span>
                    <span className="leading-tight">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Liên hệ & Social Icons */}
          <div className="space-y-5">
            <div className="relative pb-2">
              <h4 className="font-display text-lg font-bold text-white tracking-wide">Liên hệ</h4>
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#F58120]"></div>
            </div>

            {/* Social Link Circles Row with accurate colored and styled items */}
            <div className="flex flex-wrap gap-3 pt-2" id="footer-social-wrapper">
              {/* Facebook Icon Circle */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
                aria-label="Facebook link"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              {/* YouTube Icon Circle */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FF0000] hover:bg-[#FF0000]/90 flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
                aria-label="YouTube link"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.54 12 3.54 12 3.54s-7.522 0-9.388.515a3.003 3.003 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.46 12 20.46 12 20.46s7.522 0 9.388-.515a3.003 3.003 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* TikTok Icon Circle */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#121212] hover:bg-black/90 flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
                aria-label="TikTok link"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.53.07a8 8 0 0 1 .18 1.6 5.25 5.25 0 0 0 3.28 2.1v4A9.2 9.2 0 0 1 12.85 6v10.3a4.5 4.5 0 1 1-3.32-4.3H9.5c0-.1 0-.18.01-.27V7.8a8.55 8.55 0 0 0-1.72.6a8.5 8.5 0 1 0 7.82 7.9V4.6A9.2 9.2 0 0 0 19.83 8V4a5.2 5.2 0 0 1-4.02-3.93H12.53z" />
                </svg>
              </a>

              {/* Zalo Icon Circle (Light blue with lowercase 'zalo' text) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0068FF] hover:bg-[#0068FF]/90 flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
                aria-label="Zalo link"
              >
                <span className="font-sans font-black text-[11px] uppercase tracking-tighter">Zalo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
