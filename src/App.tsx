import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contacts";
// import { SmartTaskManagerPage } from "./pages/SmartTaskManagerPage";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Projects />
              <Contact />
            </>
          }
        />
        {/* <Route path="/smart-task-manager" element={<SmartTaskManagerPage />} /> */}
      </Routes>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2025 Daevel. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
