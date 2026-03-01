import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

import ContactUs from "./components/ContactUs";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route path="/"         element={<Home />}      />
            <Route path="/login"    element={<Login />}     />
            <Route path="/register" element={<Register />}  />
            <Route path="/profile"  element={<Profile />}   />
            <Route path="/contact"  element={<ContactUs />} />
            <Route path="/privacy"  element={<Privacy />}   />
            <Route path="/terms"    element={<Terms />}     />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;