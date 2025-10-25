// my-portfolio/src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import TestPage from "./pages/TestPage.jsx";

function App() {
  return (
    <div className="App">
      <nav style={{ textAlign: "center", margin: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/test">Test Page</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <About />
                <Skills />
                <Experience />
                <Projects />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;