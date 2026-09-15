import { personalInfo } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-pattern pattern-grid bg-navy text-white py-10 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/5 border-white/15 text-white hover:bg-accent-green hover:border-accent-green hover:text-white rounded-full mb-8"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-1">
              {personalInfo.name}
              <span className="text-accent-green"></span>
            </h3>
            <p className="text-white/60">{personalInfo.tagline}</p>
          </div>

          <div className="flex gap-4 mb-8">
            {personalInfo.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-full hover:bg-accent-green transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <p className="mt-1">
              Designed and developed by{" "}
              <span className="text-accent-green">Ephraim Gibson</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
