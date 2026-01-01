import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Scale } from "lucide-react";
import heroImage from "@/assets/hero-office.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Oficina del Corporativo Jurídico Sánchez" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-primary/85 to-navy-light/80" />

      <div className="relative z-10 container-narrow section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
              <Scale className="w-10 h-10 text-gold" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gold font-body text-sm md:text-base tracking-[0.2em] uppercase mb-6"
          >
            Corporativo Jurídico Sánchez
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-tight mb-6 max-w-4xl"
          >
            Asesoría legal profesional con más de{" "}
            <span className="text-gold">30 años</span> de experiencia
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed"
          >
            Defendemos y orientamos tus intereses legales con abogados especialistas en cada materia.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-body text-base text-primary-foreground/60 max-w-3xl mb-12 leading-relaxed"
          >
            En Corporativo Jurídico Sánchez brindamos consultoría, asesoría y representación legal 
            en asuntos civiles, laborales, mercantiles, familiares, agrarios y administrativos. 
            Nuestra experiencia nos permite evaluar cada caso de forma objetiva para ayudarte a 
            prevenir o resolver conflictos legales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto">
                Solicita asesoría legal
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:7441580181" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                744 158 0181
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
