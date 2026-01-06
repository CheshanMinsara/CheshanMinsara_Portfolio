import { GraduationCap, School, BookOpen, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Getting to know me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm <span className="text-foreground font-medium">Cheshan</span>, an ICT undergraduate 
                currently studying at{" "}
                <span className="text-primary font-medium">Sri Lanka Institute of Information Technology (SLIIT)</span>. 
                I'm a beginner in the IT field with a strong interest in coding and web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy learning by building projects independently (vibe coding) and continuously 
                improving my skills through hands-on practice. Every project is an opportunity 
                to learn something new and grow as a developer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With intermediate English skills, I can communicate effectively and am always 
                eager to connect with fellow developers and learn from the community.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      University
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      SLIIT - ICT Undergraduate (First Semester)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <School size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      School
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Kalawana National School - Physical Science Stream
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Medium
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      O/L completed in English medium
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Passion
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Web Development & Self-learning (Vibe Coding)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
