import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SCSS", "JavaScript", "HTML5"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Linux", "Jest", "Cypress"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-center bg-text-gradient bg-clip-text text-transparent">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary-glow transition-all duration-300 text-sm py-2 px-4 hover:scale-110"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-card-gradient border-border shadow-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Always Learning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  tools, and methodologies to stay at the forefront of web development. 
                  Currently diving deep into AI integration and serverless architectures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;