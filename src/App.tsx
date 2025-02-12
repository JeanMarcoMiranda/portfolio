import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home"

// const sections = ["Inicio", "Sobre mí", "Proyectos", "Contacto"];
const sections = [<Home/>, "Sobre mí", "Proyectos", "Contacto"];

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };
    
    const container = scrollContainerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => container?.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen overflow-x-auto overflow-y-hidden flex flex-nowrap snap-x snap-mandatory scroll-smooth scrollbar-hide"
    >
      {sections.map((section, index) => (
        <motion.section
          key={index}
          className="min-w-full h-screen flex flex-col justify-center items-center text-center bg-background text-foreground bg-gradient-to-b from-secondary to-background snap-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {section}
        </motion.section>
      ))}
    </div>
  );

  // return (
  //   <Home/>
  // )
}

export default App
