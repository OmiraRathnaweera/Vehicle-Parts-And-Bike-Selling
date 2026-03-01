import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form Submitted:", form);
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-5 py-12 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">
            Sign In
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Welcome back! Enter your credentials to continue.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-600 tracking-wide uppercase">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </a>
              </div>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
                minLength={6}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold tracking-widest text-base rounded-lg py-4 transition-all mt-1"
            >
              LOG IN
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 hover:text-blue-700 font-bold">
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;