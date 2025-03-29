import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Exposition from "./components/Exposition";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Temoignages from "./components/Temoignages";
import Portfolio from "./components/Portfolio";
import AboutPlus from "./components/AboutPlus";

export default function App() {
  return (
    <>
      <Router>
        <div className="p-5 md:px-[10%]">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Exposition />
                <Contact />
                <Temoignages />
              </>
            } />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-suite" element={<AboutPlus />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}
