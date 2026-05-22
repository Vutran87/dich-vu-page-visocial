import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  onAuditClick: () => void;
}

export default function Header({ onAuditClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Dịch vụ", href: "#services" },
    { label: "Quy trình", href: "#process" },
    { label: "Kết quả", href: "#results" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Hỏi đáp", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0px_4px_20px_rgba(0,35,143,0.05)] bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group hover:opacity-90 transition-opacity">
          <Logo variant="header" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-brand-navy/80 font-medium hover:text-brand-orange transition-colors duration-200 font-sans text-sm relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Audit Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onAuditClick}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-5 py-2.5 rounded-lg cta-shadow active:scale-95 transition-all text-sm cursor-pointer font-display"
          >
            Audit Fanpage miễn phí
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-navy hover:text-brand-orange transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-navy font-semibold hover:text-brand-orange transition-colors text-base py-2 block"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onAuditClick();
              }}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-4 rounded-lg cta-shadow text-center active:scale-95 transition-all font-display mt-2"
            >
              Audit Fanpage miễn phí
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
