import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary-glow" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: <Palette className="h-8 w-8 text-accent-glow" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary-glow" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver results and exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with 1+ years of experience creating digital solutions that make a difference.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Sabri, I'm a student at INSTITUT DON BOSCO KABARONDO TSS with a passion for crafting 
                innovative digital solutions from Rwanda. With over a year of experience in the tech industry, 
                I've honed my skills in various programming languages and frameworks, allowing me 
                to tackle diverse projects with confidence and creativity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-glow mb-2">10+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent-glow mb-2">1+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent-glow mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;