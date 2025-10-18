import { motion } from "framer-motion";
//import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  //TODO impostare navigazione per pagine progetti
  //const navigate = useNavigate();

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          //onClick={() => navigate("smart-task-manager")}
          //style={{cursor: "pointer"}}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('src/assets/work-in-progress.png')",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Smart Task Manager</h3>
          <p>
            A modern platform built with React + Vite and OpenAI, where you can
            manage tasks using AI to boost productivity and organization.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>TailwindCSS</span>
            <span>Shadcn</span>
            <span>Typescript</span>
            <span>OpenAI</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          //onClick={() => navigate("daevel-uikit")}
          //style={{cursor: "pointer"}}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('src/assets/work-in-progress.png')",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>@daevel/uikit</h3>
          <p>
            A library of reusable Angular components and styles to build from
            scratch web applications quickly and efficiently.
          </p>
          <div className="project-tech">
            <span>Angular</span>
            <span>Typescript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          //onClick={() => navigate("blogit")}
          //style={{cursor: "pointer"}}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('src/assets/work-in-progress.png')",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>BlogIT!</h3>
          <p>
            A platform where you can read and share articles on various topics,
            based on your interests. Built with Angular, this app use the{" "}
            <b>@daevel/uikit</b> as main design system.
          </p>
          <div className="project-tech">
            <span>Angular</span>
            <span>TypeScript</span>
            <span>@daevel/uikit</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
