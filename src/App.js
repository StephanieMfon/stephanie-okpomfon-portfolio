import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import "tailwindcss/tailwind.css";
// import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <div
      className="dark"
      style={{ minHeight: "100vh" }}
      // style={{ backgroundColor: "#1f2937", height: "100%" }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
export default App;
