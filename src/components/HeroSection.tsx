
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-soft-purple pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(155,135,245,0.2)_0%,rgba(255,255,255,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,174,219,0.15)_0%,rgba(255,255,255,0)_50%)]"></div>
      </div>
      
      <div className="section-container z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 animate-slide-from-left">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-soft-purple text-accent-purple rounded-full mb-2">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              Hi, I'm {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              {personalInfo.tagline}
            </h2>
            <p className="text-gray-600 max-w-lg mb-8">
              {personalInfo.bio}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-accent-purple hover:bg-accent-purple/90 text-white"
              onClick={scrollToAbout}
            >
              Learn more
            </Button>
            <Button 
              variant="outline" 
              className="border-accent-purple text-accent-purple hover:bg-accent-purple/10"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end animate-slide-from-right">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-semibold text-accent-purple">
                2+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout}
          className="rounded-full border border-gray-300"
        >
          <ArrowDown className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
