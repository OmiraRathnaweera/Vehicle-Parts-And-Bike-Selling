import React from "react";
import { Link } from "react-router-dom";
import bikeImage from "../assets/BikeImage.jpeg";
import discountImage from "../assets/Discount.jpg";
import partsImage from "../assets/Parts.jpg";
import MostSelling from "../assets/MostSelling.jpg";
import NewArrival from "../assets/BikeSideImage.jpg";
import LongBanner from "../assets/LongBanner.jpg";

const CATEGORIES = [
  { label: "Engine Parts", path: "" },
  { label: "Brakes", path: "" },
  { label: "Suspension", path: "" },
  { label: "Exhaust", path: "" },
  { label: "Lighting", path: "" },
  { label: "Wheels", path: "" },
  { label: "Body Kits", path: "" },
  { label: "Interior", path: "" },
  { label: "Filters", path: "" },
  { label: "Belts & Hoses", path: "" },
  { label: "Fuel System", path: "" },
  { label: "Cooling", path: "" },
];

const PROMOS = [
  {
    id: 1,
    image: partsImage,
    type: "DEAL OF THE WEEK",
    typeColor: "#fff",
    typeBg: "rgba(230,57,70,0.15)",
    title: "Up to 40% OFF",
    sub: "Don't Miss Out on Our Exclusive Offers",
    badge: "Hot Deal",
    bg: "from-[#1a1a2e] to-[#2d0a0a]",
    accent: "#e63946",
    cta: "Shop Brakes",
    path: "",
  },
  {
    id: 2,
    type: "MOST SELLING",
    image: MostSelling,
    typeColor: "#FFD77A",
    typeBg: "rgba(244,162,97,0.15)",
    title: "#1 This Week",
    sub: "Top-Rated Performance",
    badge: "Best Seller",
    bg: "from-[#1b1b1b] to-[#2d2010]",
    accent: "#FFD77A",
    cta: "View Product",
    path: "",
  },
  {
    id: 3,
    image: NewArrival,
    type: "NEW ARRIVAL",
    typeColor: "#7B7F85",
    typeBg: "#C1C4C8",
    title: "Just Dropped",
    sub: "Latest Additions to Our Collection",
    badge: "New",
    bg: "from-[#023e8a] to-[#03045e]",
    accent: "#FFF8E7",
    cta: "Explore Now",
    path: "",
  },
  {
    id: 4,
    image: discountImage,
    type: "RECOMMENDATION",
    typeColor: "#C1C4C8",
    typeBg: "#2B2E33",
    title: "Top Rated",
    sub: "Suspension Upgrade Kits",
    badge: "Recommended",
    bg: "from-[#0a1a0a] to-[#1a2e1a]",
    accent: "#7B7F85",
    cta: "Shop Now",
    path: "",
  },
];

const FEATURED = {
  image: LongBanner,
  type: "LIMITED TIME OFFER",
  typeColor: "#F5F6F7",
  typeBg: "#2B2E33",
  title: "Offer Ends Soon",
  sub: "50% - 70% off",
  badge: "Hot Deal",
  accent: "#F5F6F7",
  cta: "View Deals",
  path: "",
};

function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-5 pt-6">
      {/* Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-5 mb-6">
        {/* Login Card */}
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col gap-4 justify-center">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500">
              Sign in to access your account
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <Link to="/login" className="block">
            <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold tracking-widest text-base rounded-lg py-4 transition-all">
              LOG IN
            </button>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-bold transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Hero Banner */}
        <div
          className="relative rounded-2xl overflow-hidden min-h-[340px] flex items-end p-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bikeImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(37,99,235,0.22),transparent_60%)]" />

          <div className="relative z-10">
            <p className="text-blue-300 font-bold text-xs tracking-[0.2em] uppercase mb-3">
              The Ultimate Destination
            </p>
            <h1 className="text-white font-black leading-none text-5xl lg:text-6xl xl:text-7xl mb-4 tracking-tight">
              Vehicle Parts &<br />
              Accessories
            </h1>
            <p className="text-blue-200 text-sm font-medium tracking-widest uppercase">
              Upgrade Your Ride with Confidence
            </p>
            <div className="flex gap-3 mt-7">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-widest px-6 py-3 rounded-lg transition-colors">
                SHOP NOW
              </button>
              <button className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold text-sm tracking-widest px-6 py-3 rounded-lg transition-colors">
                VIEW DEALS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Cards */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-xl text-gray-900 tracking-wide uppercase">
            This Week's Highlights
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROMOS.map((promo) => (
            <Link
              key={promo.id}
              to={promo.path}
              className="relative rounded-xl overflow-hidden min-h-[450px] flex flex-col justify-between p-6 cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 no-underline group bg-gray-900 bg-cover bg-center"
              style={{ backgroundImage: `url(${promo.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-xl" />

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between">
                <span
                  className="text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase backdrop-blur-sm"
                  style={{ color: promo.typeColor, background: promo.typeBg }}
                >
                  {promo.type}
                </span>
                <span className="text-xs font-bold text-white/80 backdrop-blur-sm bg-black/20 px-2 py-0.5 rounded-full">
                  {promo.badge}
                </span>
              </div>

              {/* Bottom */}
              <div className="relative z-10">
                <div
                  className="font-black text-3xl leading-none mb-1 drop-shadow"
                  style={{ color: promo.accent }}
                >
                  {promo.title}
                </div>
                <div className="text-white/90 text-sm font-semibold mb-4 drop-shadow">
                  {promo.sub}
                </div>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase py-1.5 px-3 rounded-lg transition-all group-hover:gap-2.5 backdrop-blur-sm"
                  style={{ background: promo.typeBg, color: promo.accent }}
                >
                  {promo.cta}
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <br></br>

        {/* Wide featured banner */}
        <Link
          to={FEATURED.path}
          className="relative rounded-xl overflow-hidden flex items-end p-8 cursor-pointer hover:shadow-2xl transition-all duration-200 no-underline group block"
          style={{
            backgroundImage: `url(${FEATURED.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "400px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 rounded-xl" />

          <div className="absolute top-5 left-6 z-10">
            <span
              className="text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase backdrop-blur-sm"
              style={{ color: FEATURED.typeColor, background: FEATURED.typeBg }}
            >
              {FEATURED.type}
            </span>
          </div>

          <div className="absolute top-5 right-6 z-10">
            <span className="text-xs font-bold text-white/80 backdrop-blur-sm bg-black/20 px-2.5 py-1 rounded-full">
              {FEATURED.badge}
            </span>
          </div>

          <div className="relative z-10">
            <div
              className="font-black text-4xl md:text-5xl leading-none mb-1 drop-shadow"
              style={{ color: FEATURED.accent }}
            >
              {FEATURED.title}
            </div>
            <div className="text-white/80 text-sm font-medium mb-4 drop-shadow">
              {FEATURED.sub}
            </div>
            <div
              className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase py-2 px-4 rounded-lg transition-all group-hover:gap-3 backdrop-blur-sm"
              style={{ background: FEATURED.typeBg, color: FEATURED.accent }}
            >
              {FEATURED.cta}
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Category Grid */}
      <div className="mb-10">
        <h3 className="font-extrabold text-xl text-gray-900 mb-4 tracking-wide uppercase">
          Shop By Category
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              to={cat.path}
              className="bg-white border border-gray-200 rounded-xl py-4 px-3 text-center text-xs font-bold text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all no-underline"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
