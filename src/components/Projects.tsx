import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "ISOKO",
      description: "A platform that connects farmers and buyers to the markets information and helps to buy and sell agricultural products online and assist in weather information.",
      image: "/api/placeholder/400/250",
      technologies: ["Html", "Css", "JavaScript", "PHP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my work and skills. Built with performance and accessibility in mind, featuring smooth animations and clean design.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite" ,"JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SABRI2572009/my-creative-build.git"
    },
    {
      title: "Maternal Hub",
      description: "A platform that connects mothers with resources, support, and community. Features include a directory of services, forums, and educational content.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite" ,"JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SABRI2572009/my-creative-build.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-[1.02] group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📱</div>
                  </div>
                  <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="hover:text-primary-glow transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="hover:text-primary-glow transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary-glow transition-all duration-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;