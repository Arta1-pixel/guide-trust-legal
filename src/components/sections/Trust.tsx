import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPoints = [
  {
    icon: Award,
    title: "Más de 30 años",
    description: "de experiencia jurídica",
  },
  {
    icon: Users,
    title: "Especialistas",
    description: "por materia legal",
  },
  {
    icon: MapPin,
    title: "Presencia nacional",
    description: "con sede en Guerrero",
  },
];

const Trust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream" id="experiencia">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-body text-sm tracking-[0.15em] uppercase mb-4 block">
              Trayectoria comprobada
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6 leading-tight">
              Un corporativo jurídico con experiencia comprobada
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Contamos con más de tres décadas de trayectoria ofreciendo servicios 
              jurídicos profesionales. Nuestro equipo está conformado por abogados 
              especialistas que trabajan de manera coordinada para brindar soluciones 
              legales sólidas y responsables.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Más de 30 años de experiencia jurídica",
                "Abogados especialistas por materia",
                "Atención en Guerrero y a nivel nacional",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 font-body text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="navy" size="lg" asChild>
              <a href="#areas">Conoce cómo podemos ayudarte</a>
            </Button>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                className="bg-card p-6 rounded-lg shadow-card border border-border flex items-center gap-5 hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
