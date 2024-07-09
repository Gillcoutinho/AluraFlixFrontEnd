import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import NovoVideo from "./componentes/NovoVideo/NovoVideo";
import Footer from "./componentes/Footer/Footer";
// import BannerMain from "./componentes/BannerMain/BannerMain";
// import Card from "./componentes/Card/Card";
// import EdiModal from "./componentes/EditModal/EditModal";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
