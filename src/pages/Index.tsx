import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Corporativo Jurídico Sánchez | Abogados en Acapulco</title>
        <meta 
          name="description" 
          content="Asesoría y representación legal con más de 30 años de experiencia. Abogados especialistas en Acapulco y Guerrero. Derecho Civil, Laboral, Mercantil, Familiar, Agrario y Administrativo."
        />
        <meta 
          name="keywords" 
          content="corporativo jurídico en Acapulco, abogados en Acapulco, asesoría legal Guerrero, derecho civil Acapulco, derecho laboral Guerrero, abogados mercantiles Acapulco"
        />
        <meta property="og:title" content="Corporativo Jurídico Sánchez | Abogados en Acapulco" />
        <meta property="og:description" content="Asesoría y representación legal con más de 30 años de experiencia. Abogados especialistas en Acapulco y Guerrero." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://corporativojuridicosanchez.com" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Corporativo Jurídico Sánchez",
            "description": "Asesoría y representación legal con más de 30 años de experiencia",
            "url": "https://corporativojuridicosanchez.com",
            "telephone": "+527441580181",
            "email": "corp.lunasanchez@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Chinacos, Edificio Uno, Depto. 102, Col. Centro",
              "addressLocality": "Acapulco de Juárez",
              "addressRegion": "Guerrero",
              "postalCode": "39300",
              "addressCountry": "MX"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Guerrero"
              },
              {
                "@type": "Country",
                "name": "México"
              }
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00"
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <Trust />
        <PracticeAreas />
        <Benefits />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Index;