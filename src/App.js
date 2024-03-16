// App.js
import "tailwindcss/tailwind.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Menu /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
