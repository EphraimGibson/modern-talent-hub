
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.22)_0%,rgba(0,0,0,0)_45%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.18)_0%,rgba(0,0,0,0)_45%)]"></div>
      </div>
      
      <div className="section-container z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium bg-white/5 border border-white/10 text-accent-green rounded-full mb-4 animate-hero-bounce-in">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4 whitespace-nowrap">
             {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
              {personalInfo.tagline}
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              {personalInfo.bio}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-accent-green hover:bg-accent-green/90 text-white shadow-[0_0_25px_-8px_rgba(59,130,246,0.7)]"
              onClick={scrollToAbout}
            >
              Learn more
            </Button>
            <Button 
              variant="outline" 
              className="border-white/15 bg-white/[0.02] text-foreground hover:bg-accent-green/10 hover:border-accent-green/40"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)] animate-rotate-in-frame">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-lg shadow-lg">
              <span className="font-semibold font-mono text-sm text-accent-green">
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
          className="rounded-full border border-white/15"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;