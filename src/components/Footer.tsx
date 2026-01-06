import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Cheshan. Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Projects
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
