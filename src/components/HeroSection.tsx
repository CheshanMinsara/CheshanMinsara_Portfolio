import { Github, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-subtle pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              ICT Undergraduate at SLIIT
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Cheshan</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            A passionate beginner in the IT field, exploring web development and coding
            through hands-on projects and continuous learning.
          </p>

          <div
            className="flex items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors duration-200"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-glow"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
