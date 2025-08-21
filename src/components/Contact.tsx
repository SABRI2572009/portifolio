import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "john.doe@example.com",
      href: "mailto:john.doe@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567", 
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      href: "#"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn", 
      href: "#"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card-gradient border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl bg-text-gradient bg-clip-text text-transparent">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-secondary/50 border-border focus:border-primary-glow transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-secondary/50 border-border focus:border-primary-glow transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-secondary/50 border-border focus:border-primary-glow transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Discussion" 
                    className="bg-secondary/50 border-border focus:border-primary-glow transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary-glow transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-glow shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
                  size="lg"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-primary-glow">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="bg-card-gradient border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button 
                        key={index}
                        variant="ghost" 
                        size="icon"
                        className="hover:bg-primary/20 hover:text-primary-glow transition-all duration-300 hover:scale-110"
                      >
                        {social.icon}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-card-gradient border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="font-semibold text-foreground">
                      Available for Work
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Let's discuss how we can work together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;