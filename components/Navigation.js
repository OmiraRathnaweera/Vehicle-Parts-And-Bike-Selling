import React, { useState } from "react";

// 1. Updated NAV_ITEMS with paths
const NAV_ITEMS = [
  { label: "Parts", path: "" },
  { label: "Performance", path: "" },
  { label: "Wheels", path: "" },
  { label: "Exterior", path: "" },
  { label: "Lighting", path: "" },
  { label: "Body Parts", path: "" },
  { label: "Interior", path: "" },
  { label: "Audio & Electronics", path: "" },
  { label: "Automotive Tools", path: "" },
  { label: "Specialty", path: "" },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Side Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${menuOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-5 border-b flex justify-between items-center">
            <span className="font-bold text-lg">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4 border-b">
              <a
                href="#"
                className="flex items-center gap-3 text-sm font-medium"
              >
                Live Chatbot
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm font-medium"
              >
                Contact Us
              </a>
              <a href="/login" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-bold">My Account</p>
                    <p className="text-xs text-gray-400">Hello. Sign In</p>
                  </div>
                </div>
                <span className="text-gray-300">→</span>
              </a>
            </div>

            <div className="py-4">
              <h3 className="px-6 text-xl font-bold mb-4">Departments</h3>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                  <span className="text-gray-300 group-hover:text-blue-600">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5">
        {/* Top Bar */}
        <div className="flex items-center gap-4 py-3 border-b border-gray-100">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <a
            href="/"
            className="flex items-center gap-1.5 cursor-pointer shrink-0 no-underline"
          >
            <div className="bg-red-600 rounded-md w-9 h-9 flex items-center justify-center font-black text-white text-sm tracking-tight">
              MJ
            </div>
            <span className="font-black text-2xl tracking-wide text-gray-900 leading-none">
              M&J Enterprises
            </span>
          </a>

          <div className="flex flex-1 items-center bg-gray-50 border border-gray-200 rounded-lg px-4 gap-2 max-w-2xl">
            <input
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 py-2.5"
              placeholder="Search..."
            />
            <button className="text-gray-400 hover:text-blue-600 transition-colors p-1">
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />

                <path
                  d="m17 17 4 4"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            {/* Profile */}
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition-colors p-1.5"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            {/* Cart */}
            <button className="relative text-gray-700 hover:text-blue-600 transition-colors p-1.5">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 10a4 4 0 01-8 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 py-2.5 overflow-x-auto scrollbar-hide">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-gray-800 font-semibold text-[13.5px] whitespace-nowrap hover:text-blue-600 transition-colors no-underline border-b-2 border-transparent hover:border-blue-600 pb-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
