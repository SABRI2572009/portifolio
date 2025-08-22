import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden md:pt-[90px]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-hero-glow opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Flex row for content & image */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent animate-in slide-in-from-left duration-1000">
              NGAMBA ISHIMWE Sabri
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in slide-in-from-left duration-1000 delay-200">
              Website and App Developer
            </p>

            <p className="text-lg text-muted-foreground mb-8 animate-in slide-in-from-left duration-1000 delay-400">
              I craft exceptional digital experiences with modern technologies.
              Passionate about clean code, innovative solutions, and bringing
              ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12 animate-in slide-in-from-left duration-1000 delay-600">
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
            <div className="flex justify-center md:justify-start gap-6 mb-12 animate-in slide-in-from-left duration-1000 delay-800">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 text-center hover:text-primary-glow transition-colors"
              >
                <Github
                  className="h-6 w-6"
                  onClick={() => window.open("https://github.com/SABRI2572009")}
                />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary-glow transition-colors"
              >
                <Linkedin
                  className="h-6 w-6"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/your-profile")
                  }
                />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary-glow transition-colors"
              >
                <Mail
                  className="h-6 w-6"
                  onClick={() =>
                    window.open("mailto:ishimwengambasabri@gmail.com")
                  }
                />
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

          {/* Right Image */}
          <div className="flex-shrink-0 animate-in slide-in-from-right duration-1000">
            <img
              src="https://avatars.githubusercontent.com/u/192989265?v=4"
              alt="Profile"
              className="rounded-full shadow-lg mx-auto md:mx-0 hover:scale-105 transition-transform"
              style={{ width: "400px", height: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
