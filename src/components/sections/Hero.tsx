import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <>
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hola, soy <span className="text-accent">Jean Marco Miranda</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-8 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Desarrollador de aplicaciones web y móviles, especializado en React y Kotlin con Jetpack Compose.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Button className="px-6 py-3 text-lg font-semibold bg-highlight hover:bg-accent text-background hover:text-white rounded-lg shadow-lg">
          Ver mis proyectos
        </Button>
      </motion.div>
    </>
  );
}

