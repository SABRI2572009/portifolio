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
      style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQe_RKkjc33YBgkK212t9WK4dMFMC_TY-TOA&s')",
      backgroundSize: "cover", backgroundPosition: "center"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-hero-glow opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-xl md:max-w-lg lg:max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent animate-in slide-in-from-left duration-1000">
              NGAMBA ISHIMWE Sabri
            </h1>

            <p className="text-lg text-white font-bold sm:text-xl md:text-2xl mb-4 animate-in slide-in-from-left duration-1000 delay-200">
              Website and System Developer
            </p>

            <p className="text-base sm:text-lg md:text-xl mb-8 animate-in slide-in-from-left duration-1000 delay-400">
              &lt; Hello World! /&gt; I&apos;m <span className="font-semibold">Sabri</span>, a developer creating modern and responsive websites and Systems.
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
            <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-12 animate-in slide-in-from-left duration-1000 delay-800">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary-glow transition-colors"
                onClick={() => window.open("https://github.com/SABRI2572009")}
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary-glow transition-colors"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/your-profile")
                }
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary-glow transition-colors"
                onClick={() =>
                  window.open("mailto:ishimwengambasabri@gmail.com")
                }
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
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
          <div className="flex-shrink-0 animate-in slide-in-from-right duration-1000 mt-8 md:mt-0">
            <img
              src="https://avatars.githubusercontent.com/u/192989265?v=4"
              alt="Profile"
              className="rounded-full shadow-lg mx-auto md:mx-0 hover:scale-105 transition-transform w-48 sm:w-56 md:w-96 h-48 sm:h-56 md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
