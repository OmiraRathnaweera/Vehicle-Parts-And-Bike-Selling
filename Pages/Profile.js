import React, { useState } from "react";

const ORDERS = [
  { id: "#ORD-10452", date: "Feb 20, 2026", status: "Delivered",  total: "$149.99", items: "Brake Pads (x2)" },
  { id: "#ORD-10381", date: "Jan 15, 2026", status: "Shipped",    total: "$89.50",  items: "Air Filter, Oil Filter" },
  { id: "#ORD-10290", date: "Dec 5, 2025",  status: "Delivered",  total: "$320.00", items: "Suspension Kit" },
];

const STATUS_COLORS = {
  Delivered: "bg-green-100 text-green-700",
  Shipped:   "bg-blue-100 text-blue-700",
  Processing:"bg-yellow-100 text-yellow-700",
};

function Profile() {
  const [activeTab, setActiveTab] = useState("orders");

  const tabs = [
    { id: "orders",   label: "My Orders" },
    { id: "account",  label: "Account Info" },
    { id: "vehicles", label: "My Vehicles" },
  ];

  return (
    <main className="max-w-screen-xl mx-auto px-5 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Profile Header */}
        <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1b2d45] rounded-2xl p-8 mb-6 flex items-center gap-5">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center font-black text-white text-2xl shrink-0">
            J
          </div>
          <div>
            <h1 className="text-white font-extrabold text-2xl tracking-tight">John Doe</h1>
            <p className="text-blue-300 text-sm">john.doe@example.com</p>
            <p className="text-blue-400 text-xs mt-1">Member since January 2024</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-bold transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="flex flex-col gap-3">
            {ORDERS.map(order => (
              <div key={order.id} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-extrabold text-gray-900 text-sm">{order.id}</span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${STATUS_COLORS[order.status]}`}>{order.status}</span>
                  </div>
                  <p className="text-xs text-gray-500">{order.items}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-gray-900">{order.total}</span>
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 rounded-lg px-3 py-1.5 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Account Tab */}
        {activeTab === "account" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="font-extrabold text-gray-900 mb-5">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "First Name", value: "John" },
                { label: "Last Name",  value: "Doe"  },
                { label: "Email",      value: "john.doe@example.com" },
                { label: "Phone",      value: "+1 (555) 000-0000" },
              ].map(field => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">{field.label}</label>
                  <input defaultValue={field.value}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              ))}
            </div>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-extrabold tracking-widest text-sm rounded-lg px-8 py-3 transition-colors">
              SAVE CHANGES
            </button>
          </div>
        )}

        {/* Vehicles Tab */}
        {activeTab === "vehicles" && (
          <div className="flex flex-col gap-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="font-extrabold text-gray-900">2021 Toyota Camry</p>
                <p className="text-xs text-gray-500 mt-0.5">LE · 2.5L 4-Cylinder</p>
              </div>
              <button className="text-xs font-bold text-red-500 hover:text-red-600 border border-red-200 hover:border-red-400 rounded-lg px-3 py-1.5 transition-colors">Remove</button>
            </div>
            <button className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-2xl p-5 text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              Add a Vehicle
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Profile;