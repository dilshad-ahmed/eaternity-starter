import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner.jsx";
import OurMenu from "./components/OurMenu/OurMenu.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <OurMenu />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;
