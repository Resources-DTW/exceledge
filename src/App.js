import "./App.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Course from "./screens/Course";
import Gallery from "./screens/Gallery";
import ContactUs from "./screens/ContactUs";
import Home1 from "./screens/Home1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/course" element={<Course />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
