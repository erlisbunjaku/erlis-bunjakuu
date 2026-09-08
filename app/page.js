'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Path from "./components/Path";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageAtmosphere from "./components/PageAtmosphere";

export default function Home() {
  return (
    <>
      <PageAtmosphere />
      <Navbar />
      <div className="relative z-10">
        <Header />
        <About />
        <Path />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
