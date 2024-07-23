import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <Router>
      <div className="App">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
