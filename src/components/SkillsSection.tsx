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
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-lg ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
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
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
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
