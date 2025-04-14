import { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-5 md:px-[8%]"
    >
      {children}
    </motion.div>
  );
}

function AboutPlusLayout({ children }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="px-2 md:px-[5%]"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <About />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Exposition />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Temoignages />
                </motion.div>
              </>
            </MainLayout>
          } />
          <Route path="/portfolio" element={
            <MainLayout>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Portfolio />
              </motion.div>
            </MainLayout>
          } />
          <Route path="/videos" element={
            <MainLayout>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Video />
              </motion.div>
            </MainLayout>
          } />
          <Route path="/about-suite" element={
            <AboutPlusLayout>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AboutPlus />
              </motion.div>
            </AboutPlusLayout>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}