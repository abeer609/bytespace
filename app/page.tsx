import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <header className="bg-grid bg-persian-blue-800 relative overflow-hidden">
        <Navbar />
        <Hero />
      </header>
      <Partners />
    </>
  );
}
