// App.js
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
