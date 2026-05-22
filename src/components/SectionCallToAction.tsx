import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

interface SectionCallToActionProps {
  onClick: () => void;
  badge?: string;
  title?: string;
  theme?: "light" | "navy" | "orange";
}

export default function SectionCallToAction({
  onClick,
  theme = "light",
}: SectionCallToActionProps) {
  // Determine style classes based on theme
  let containerBg = "bg-white border-y border-gray-100";
  let buttonStyle = "bg-brand-orange hover:bg-brand-orange-hover text-white cta-shadow ring-brand-orange/20";

  if (theme === "navy") {
    containerBg = "bg-brand-blue border-t border-white/5";
    buttonStyle = "bg-brand-orange hover:bg-brand-orange-hover text-white cta-shadow ring-brand-orange/20";
  } else if (theme === "orange") {
    containerBg = "bg-brand-orange/10 border-y border-brand-orange/20";
    buttonStyle = "bg-brand-blue hover:bg-brand-blue-dark text-white shadow-xl ring-brand-blue/20";
  }

  return (
    <div className={`py-8 px-6 ${containerBg} flex justify-center items-center relative overflow-hidden transition-all duration-300`}>
      {/* Absolute decorative subtle glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      
      <div className="relative z-10 w-full flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className={`w-full sm:w-auto max-w-md flex items-center justify-center gap-3 px-10 py-4.5 rounded-full font-display text-sm md:text-base font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 ${buttonStyle}`}
        >
          <Sparkles className="w-5 h-5 animate-pulse text-yellow-300" />
          <span>TƯ VẤN MIỄN PHÍ</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </div>
  );
}

