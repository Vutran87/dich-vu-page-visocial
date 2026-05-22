import React from "react";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer";
  iconOnly?: boolean;
}

export default function Logo({ className = "", variant = "header", iconOnly = false }: LogoProps) {
  const isFooter = variant === "footer";

  // The official logo images directly from visocial.vn
  // Header: LOGO-VISOCIAL-6.png (Colored version for light backgrounds)
  // Footer: LOGO-VISOCIAL-1.png (White version for dark backgrounds)
  const logoUrl = isFooter
    ? "https://visocial.vn/wp-content/uploads/2026/02/LOGO-VISOCIAL-1.png"
    : "https://visocial.vn/wp-content/uploads/2026/02/LOGO-VISOCIAL-6.png";

  return (
    <div className={`flex items-center select-none ${className}`} id="visocial-brand-logo-container">
      <img
        src={logoUrl}
        alt="ViSocial Logo"
        className={isFooter ? "h-14 sm:h-16 w-auto object-contain" : "h-10 sm:h-11 w-auto object-contain"}
        referrerPolicy="no-referrer"
        id={isFooter ? "visocial-logo-footer" : "visocial-logo-header"}
      />
    </div>
  );
}
