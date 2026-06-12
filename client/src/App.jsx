import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
//importing Loader
import { LoaderOne } from "./lib/Loader";
//page imports
const IndustriesSection = lazy(() => import("./Pages/IndustriesPage"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const App = () => {
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Suspense fallback={<LoaderOne />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/industries" element={<IndustriesSection />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Suspense>
  );
};

export default App;
