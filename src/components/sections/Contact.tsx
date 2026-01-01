import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream" id="ubicacion">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-body text-sm tracking-[0.15em] uppercase mb-4 block">
              Ubicación
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-8">
              Visítanos en nuestra oficina
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Dirección
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Calle Chinacos, Edificio Uno, Depto. 102,<br />
                    Col. Centro, CP 39300,<br />
                    Acapulco de Juárez, Guerrero
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Teléfono
                  </h3>
                  <a 
                    href="tel:7441580181" 
                    className="font-body text-muted-foreground hover:text-gold transition-colors"
                  >
                    744 158 0181
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Correo electrónico
                  </h3>
                  <a 
                    href="mailto:corp.lunasanchez@gmail.com" 
                    className="font-body text-muted-foreground hover:text-gold transition-colors"
                  >
                    corp.lunasanchez@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Horario de atención
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.8847068066687!2d-99.9089!3d16.8531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca6e944cc33f2f%3A0x1d7d1d4b9d8d8d8d!2sAcapulco%20de%20Ju%C3%A1rez%2C%20Gro.!5e0!3m2!1ses!2smx!4v1699999999999!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Corporativo Jurídico Sánchez"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
