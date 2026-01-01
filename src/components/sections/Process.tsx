import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Análisis del caso",
    description: "Escuchamos tu situación y analizamos los hechos y documentos relevantes.",
  },
  {
    number: "02",
    title: "Asesoría clara y honesta",
    description: "Te explicamos tus derechos, opciones y posibles resultados de forma directa.",
  },
  {
    number: "03",
    title: "Definición de estrategia",
    description: "Diseñamos un plan de acción personalizado según tus objetivos.",
  },
  {
    number: "04",
    title: "Acompañamiento y representación",
    description: "Te acompañamos en cada paso y representamos tus intereses ante las autoridades.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream" id="proceso">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-[0.15em] uppercase mb-4 block">
            Metodología
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
            Nuestro proceso de atención legal
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                className={`relative md:flex md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                    <span className="font-display text-4xl font-bold text-gold/30">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-cream" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
