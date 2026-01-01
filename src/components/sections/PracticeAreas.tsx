import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Scale, 
  Briefcase, 
  Building2, 
  Heart, 
  Landmark, 
  FileText,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  {
    icon: Scale,
    title: "Derecho Civil",
    description: "Contratos, propiedad, sucesiones, obligaciones y responsabilidad civil.",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description: "Despidos, liquidaciones, conflictos laborales y derechos del trabajador.",
  },
  {
    icon: Building2,
    title: "Derecho Mercantil",
    description: "Sociedades, contratos comerciales, títulos de crédito y quiebras.",
  },
  {
    icon: Heart,
    title: "Derecho Familiar",
    description: "Divorcios, pensiones alimenticias, custodia y reconocimiento de paternidad.",
  },
  {
    icon: Landmark,
    title: "Derecho Agrario",
    description: "Ejidos, tierras comunales, conflictos de tenencia y certificación.",
  },
  {
    icon: FileText,
    title: "Derecho Administrativo",
    description: "Procedimientos ante autoridades, permisos, licencias y recursos administrativos.",
  },
];

const PracticeAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background" id="areas">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-[0.15em] uppercase mb-4 block">
            Especialización legal
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
            Nuestras áreas de práctica legal
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Atendemos de forma integral diversas materias del Derecho, ofreciendo 
            asesoría y representación según las necesidades de cada cliente.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="group bg-card p-8 rounded-lg border border-border hover:border-gold/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-gold/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <area.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {area.description}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors duration-300"
              >
                Consultar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="goldOutline" size="lg" asChild>
            <a href="#contacto">Consulta tu caso</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
