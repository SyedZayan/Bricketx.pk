// app/page.tsx
import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/sections/Hero";
import EcosystemRole from "@/app/components/sections/EcosystemRole";
import SmartStructure from "./components/sections/SmartStructure";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <EcosystemRole />
        <SmartStructure/>
        <Contact />
      </div>
      <Footer/>
    </main>
  );
}