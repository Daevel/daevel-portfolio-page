import "./App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <main className="maintenance-page" aria-labelledby="maintenance-title">
        <motion.section
          className="maintenance-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="maintenance-label">Website paused</p>
          <h1 id="maintenance-title">We are building something better.</h1>
          <p className="maintenance-copy">
            This website and all of its pages are temporarily unavailable while
            we prepare a new version.
          </p>
          <p className="maintenance-note">We will be back online soon.</p>
        </motion.section>
      </main>

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
