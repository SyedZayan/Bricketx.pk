// app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Home/Hero";
import About from "@/components/sections/Home/About";
import Stats from "@/components/sections/Home/Stats";
import EcosystemRole from "@/components/sections/EcosystemRole";
import SmartStructure from "@/components/sections/SmartStructure";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <About />
        <EcosystemRole />
        <SmartStructure/>
        <Stats />
        
        <Contact />
      </div>
      <Footer/>
    </main>
  );
}