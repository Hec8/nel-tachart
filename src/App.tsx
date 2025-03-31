import { ReactNode } from 'react';
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
import Video from "./components/Videos";

// Définition des props avec TypeScript
interface LayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  return <div className="p-5 md:px-[8%]">{children}</div>;
}

function AboutPlusLayout({ children }: LayoutProps) {
  return <div className="px-2 md:px-[5%]">{children}</div>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <>
              <Home />
              <About />
              <Exposition />
              <Contact />
              <Temoignages />
            </>
          </MainLayout>
        } />
        <Route path="/portfolio" element={
          <MainLayout>
            <Portfolio />
          </MainLayout>
        } />
        <Route path="/videos" element={
          <MainLayout>
            <Video />
          </MainLayout>
        } />
        <Route path="/about-suite" element={
          <AboutPlusLayout>
            <AboutPlus />
          </AboutPlusLayout>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}