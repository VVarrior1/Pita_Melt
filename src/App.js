// App.js
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catering from "./components/Catering";
import Order from "./components/Order";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<SubFooter />} />
        <Route path="/order" element={<Order />} />
        <Route path="/catering" element={<Catering />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// toDo: carousel and add menu call to action
