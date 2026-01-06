import { Code, Database, Wrench, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "primary",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "accent",
    skills: ["SQL", "Supabase", "MongoDB (Basic)"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "primary",
    skills: ["Visual Studio Code", "Visual Studio", "SQL Server Management Studio"],
  },
  {
    title: "Other",
    icon: Cpu,
    color: "accent",
    skills: ["Arduino (Basic)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Skills
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technologies I work with
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a beginner, I'm continuously learning and expanding my skill set through 
              coursework and personal projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-lg transition-colors duration-300 ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    }`}
                  >
                    <category.icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
