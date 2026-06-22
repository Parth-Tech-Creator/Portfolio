import { GitBranch, Mail, Phone, Cpu } from "lucide-react";

const socialLinks = [
  { icon: GitBranch, href: "https://github.com/Parth-Tech-Creator", label: "GitHub" },
  { icon: Mail, href: "mailto:parth.321.06@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+918168781031", label: "Phone" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#reflection", label: "Reflection" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <a
              href="#top"
              className="text-xl font-bold tracking-tight flex items-center gap-1"
            >
              <Cpu size={20} />
              P<span className="text-primary">.</span>
            </a>

            <p className="mt-2 text-sm text-muted-foreground">
              © {currentYear} Parth. Crafted with curiosity and code.
            </p>
          </div>

          {/* Center */}
          <nav className="flex-1 flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex-1 flex justify-center md:justify-end items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="
                  w-10 h-10
                  rounded-full
                  glass
                  flex items-center justify-center
                  hover:bg-primary/10
                  hover:text-primary
                  transition-all
                  duration-300
                "
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};