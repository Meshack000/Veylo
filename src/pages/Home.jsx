// Home.jsx
// The landing page. We add one section at a time as we build.

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <HowItWorks />
    </>
  );
}

export default Home;