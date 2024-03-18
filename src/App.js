// App.js
import "tailwindcss/tailwind.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js-na1.hs-scripts.com/45589930.js"; // Replace with your HubSpot JS URL
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/about" element={<SubFooter />} />
        <Route path="/menu" element={<Menu pdf="src/assets/menu.pdf" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
