import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

// Page Components (can be moved to src/pages later)
const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Helmet>
          <title>Honnete - Full Stack Portfolio</title>
          <meta name="description" content="Professional portfolio of a Full Stack Developer specializing in React and Node.js." />
        </Helmet>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
