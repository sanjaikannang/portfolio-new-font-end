import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
