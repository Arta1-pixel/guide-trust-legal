import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Shield, Target, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Evaluación objetiva",
    description: "Analizamos tu situación legal con criterio profesional para darte una visión clara de tus opciones.",
  },
  {
    icon: Shield,
    title: "Prevención de conflictos",
    description: "Te ayudamos a identificar y prevenir riesgos legales antes de que se conviertan en problemas.",
  },
  {
    icon: Target,
    title: "Estrategias claras",
    description: "Definimos un plan de acción fundamentado y realista para alcanzar tus objetivos legales.",
  },
  {
    icon: UserCheck,
    title: "Atención personalizada",
    description: "Cada caso recibe la dedicación y el seguimiento que merece, con comunicación constante.",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary" id="beneficios">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-[0.15em] uppercase mb-4 block">
            Nuestro compromiso
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Nuestra formación profesional y experiencia como corporativo jurídico 
            nos permiten analizar cada situación legal con criterio y responsabilidad.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="flex gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-primary-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
