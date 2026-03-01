import React, { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="max-w-screen-xl mx-auto px-5 py-12">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Contact Us</h1>
          <p className="text-gray-500 text-sm">Have a question or need help? We're here for you.</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Message Sent!</h2>
            <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-5 shadow-sm">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">Full Name</label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  placeholder="John Doe"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">Email Address</label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">Subject</label>
              <input
                name="subject" value={form.subject} onChange={handleChange} required
                placeholder="How can we help?"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Tell us more about your issue or question..."
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold tracking-widest text-sm rounded-lg py-4 transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        )}

        {/* Contact Info */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { icon: "", label: "Phone", value: "0761229147" },
            { icon: "", label: "Email", value: "whalegallem@gmail.com" },
            { icon: "", label: "Hours", value: "Mon–Fri 9am–6pm" },
          ].map(item => (
            <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.label}</div>
              <div className="text-xs font-semibold text-gray-800 mt-0.5">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ContactUs;