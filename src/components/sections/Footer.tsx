import logoImage from "@/assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary py-12">
      <div className="container-narrow section-padding py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Corporativo Jurídico Sánchez" className="w-20 h-20 " />
            <div>
              <span className="font-display text-lg font-semibold text-primary-foreground">
                Corporativo Jurídico Sánchez
              </span>
              <p className="font-body text-xs text-primary-foreground/50">
                Más de 30 años de experiencia
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#aviso-privacidad" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
              Aviso de privacidad
            </a>
            <a href="#aviso-legal" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
              Aviso legal
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <p className="font-body text-sm text-primary-foreground/50 text-center">
            © {currentYear} Corporativo Jurídico Sánchez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;