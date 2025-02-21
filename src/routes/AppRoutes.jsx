import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Extra from "../pages/Extra";
import Other from "../pages/Other";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/portafolio_web/" element={<Home />} />
      <Route path="/portafolio_web/about-me" element={<AboutMe />} />
      {/* <Route path="/portafolio_web/experience" element={<Experience />} />
      <Route path="/portafolio_web/education" element={<Education />} />
      <Route path="/portafolio_web/skills" element={<Skills />} />
      <Route path="/portafolio_web/extra" element={<Extra />} />
      <Route path="/portafolio_web/other" element={<Other />} /> */}
    </Routes>
  );
}

export default AppRoutes;
