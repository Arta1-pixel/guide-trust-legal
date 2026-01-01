import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Atienden casos fuera de Acapulco?",
    answer: "Sí, brindamos asesoría jurídica en todo el estado de Guerrero y a nivel nacional. Aunque nuestra sede está en Acapulco, contamos con la capacidad para atender asuntos legales en cualquier parte del país.",
  },
  {
    question: "¿Trabajan con empresas y particulares?",
    answer: "Sí, atendemos tanto a personas físicas como a empresas. Nuestro equipo está preparado para manejar asuntos legales personales, familiares, laborales, así como necesidades jurídicas corporativas y comerciales.",
  },
  {
    question: "¿Cuánto cuesta una consulta inicial?",
    answer: "La consulta inicial nos permite evaluar tu caso y darte una orientación clara. Te invitamos a contactarnos para conocer las condiciones de atención según el tipo de asunto.",
  },
  {
    question: "¿En cuánto tiempo pueden atender mi caso?",
    answer: "Nos comunicamos contigo dentro de las primeras 24 horas hábiles después de recibir tu mensaje. La duración del proceso legal depende de cada caso, pero siempre te mantenemos informado.",
  },
  {
    question: "¿Qué documentos necesito para mi consulta?",
    answer: "Depende del tipo de caso, pero generalmente es útil traer identificación oficial, documentos relacionados con tu asunto (contratos, notificaciones, demandas, etc.) y una relación de los hechos por escrito.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background" id="faq">
      <div className="container-narrow max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-body text-sm tracking-[0.15em] uppercase mb-4 block">
            Dudas frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
            Preguntas frecuentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-soft transition-shadow duration-300"
              >
                <AccordionTrigger className="font-display text-lg text-foreground hover:text-gold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
