import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-hero-glow opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000">
            John Doe
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in slide-in-from-bottom duration-1000 delay-200">
            Full-Stack Developer
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-400">
            I craft exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in slide-in-from-bottom duration-1000 delay-600">
            <Button 
              onClick={() => scrollToSection("projects")}
              size="lg" 
              className="bg-primary hover:bg-primary-glow shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              size="lg"
              className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-in slide-in-from-bottom duration-1000 delay-800">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary-glow transition-colors">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary-glow transition-colors">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary-glow transition-colors">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <Button 
            onClick={() => scrollToSection("about")}
            variant="ghost" 
            size="icon"
            className="animate-bounce hover:text-primary-glow transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;