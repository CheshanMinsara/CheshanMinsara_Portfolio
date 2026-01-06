import { GraduationCap, Sparkles, Network, ExternalLink } from "lucide-react";

const projectCategories = [
  {
    title: "Coursework / University Projects",
    icon: GraduationCap,
    projects: [
      {
        name: "Student Management System",
        description:
          "Built using Visual Studio and SQL with database concepts like primary keys and foreign keys.",
        tags: ["Visual Studio", "SQL"],
      },
      {
        name: "Static Website Designs",
        description: "Various static websites built using fundamental web technologies.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        name: "Arduino Projects",
        description: "Basic university-level hardware projects using Arduino.",
        tags: ["Arduino", "Hardware"],
      },
    ],
  },
  {
    title: "Other Academic Projects",
    icon: Network,
    projects: [
      {
        name: "Network Design Project",
        description:
          "Designed basic computer networks as part of university coursework, focusing on network structure, connectivity, and fundamentals.",
        tags: ["Networking", "Design"],
      },
    ],
  },
  {
    title: "Personal Projects (Self-Learned)",
    icon: Sparkles,
    note: "These are learning-focused personal projects, not production systems.",
    projects: [
      {
        name: "Movie & Series Streaming Platform",
        description:
          "Built independently for learning purposes, integrated with the TMDB API.",
        tags: ["React", "API Integration", "TMDB"],
      },
      {
        name: "Real Estate Website",
        description:
          "Built independently using Supabase / MongoDB. Allows users to upload and manage property listings.",
        tags: ["React", "Supabase", "MongoDB"],
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              What I've built
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects from university coursework and personal learning endeavors.
            </p>
          </div>

          <div className="space-y-12">
            {projectCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {category.note && (
                  <p className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg mb-4 inline-block">
                    ℹ️ {category.note}
                  </p>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project) => (
                    <div
                      key={project.name}
                      className="group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                          {project.name}
                        </h4>
                        <ExternalLink
                          size={16}
                          className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                        />
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default ProjectsSection;
