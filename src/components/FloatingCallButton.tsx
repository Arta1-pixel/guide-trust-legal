import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:7441580181"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-primary rounded-full shadow-gold flex items-center justify-center hover:bg-gold-light transition-colors duration-300 md:hidden"
      aria-label="Llamar ahora"
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  );
};

export default FloatingCallButton;
