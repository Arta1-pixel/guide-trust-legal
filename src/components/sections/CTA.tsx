import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logoImage from "@/assets/logo.webp";
const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="section-padding bg-primary relative overflow-hidden" id="contacto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container-narrow relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={isInView ? {
          scale: 1,
          opacity: 1
        } : {}} transition={{
          duration: 0.6
        }} className="mb-8 flex justify-center">
            <img src={logoImage} alt="Corporativo Jurídico Sánchez" className="w-40 h-40" />
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 0.2,
          duration: 0.6
        }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6">
              Habla hoy con un abogado especialista
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Recibe orientación legal profesional y toma decisiones informadas. 
              Estamos listos para ayudarte.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:7441580181" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Llámanos: 744 158 0181
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:corp.lunasanchez@gmail.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Escríbenos
              </a>
            </Button>
          </motion.div>

          {/* Schedule note */}
          <motion.p initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="font-body text-sm text-primary-foreground/50 mt-8">
            Horario de atención: Lunes a Viernes, 9:00 - 18:00
          </motion.p>
        </div>
      </div>
    </section>;
};
export default CTA;