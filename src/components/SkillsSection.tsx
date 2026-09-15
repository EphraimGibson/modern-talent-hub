import { useState, useEffect, useRef } from "react";
import { skills } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section-pattern pattern-diagonal bg-soft-gray/50 py-20" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => {
            const delay = index * 0.1;

            return (
              <Card
                key={skill.name}
                className={`overflow-hidden card-hover transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent-green/15 p-2 rounded-md">
                      <skill.icon className="h-5 w-5 text-accent-green" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={
                        {
                          "--progress-width": `${skill.level}%`,
                          width: isVisible ? `${skill.level}%` : "0%",
                        } as React.CSSProperties
                      }
                    ></div>
                  </div>

                  <div className="flex justify-between mt-2 text-sm font-mono text-muted-foreground">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 glass-panel p-8 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
            Other Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "Docker",
              "AWS",
              "TypeScript",
              "Spring Boot",
              "Figma",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "Redux",
              "RESTful API",
              "TailwindCSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono font-medium text-sm text-accent-green"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
