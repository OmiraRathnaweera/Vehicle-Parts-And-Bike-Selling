import React from "react";

const FOOTER_LINKS = {
  "Customer Service": [
    { label: "Track My Order", path: "/track-order" },
    { label: "Returns & Exchanges", path: "/returns" },
    { label: "Shipping Policy", path: "/shipping" },
    { label: "FAQ", path: "/faq" },
  ],
  "Company": [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Press", path: "/press" },
    { label: "Reviews", path: "/reviews" },
  ],
  "Legal": [
    { label: "Terms of Service", path: "/terms", external: true },
    { label: "Privacy Policy", path: "/privacy", external: true },
  ],
  "Connect": [
    { label: "Facebook", path: "https://facebook.com/", external: true },
    { label: "TikTok", path: "https://tiktok.com/@", external: true },
    { label: "Contact us", path: "/contact", external: true },
  ],
};

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 mt-10">
      <div className="max-w-screen-xl mx-auto px-5 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="bg-red-600 rounded-md w-8 h-8 flex items-center justify-center font-black text-white text-xs tracking-tight">
                MJ
              </div>
              <span className="font-black text-xl tracking-wide text-white">
                M&J Enterprises
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              Your one-stop shop for car & bike parts, accessories, and everything automotive.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-3">{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.path}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="text-xs text-gray-500 hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© 2026 M&J Enterprises · All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="/terms" className="text-xs text-gray-600 hover:text-white transition-colors no-underline">Terms</a>
            <a href="/privacy" className="text-xs text-gray-600 hover:text-white transition-colors no-underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;