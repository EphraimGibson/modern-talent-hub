
import { useState } from "react";
import { projects } from "@/data/portfolioData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);

  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={filter === null ? "default" : "outline"}
            className={filter === null ? "bg-accent-purple" : ""}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              className={filter === tag ? "bg-accent-purple" : ""}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden card-hover"
            >
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-accent-purple/90 rounded-md text-xs font-medium text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-navy">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                <Button
                  variant="default"
                  className="bg-accent-purple"
                  asChild
                >
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <project.buttonIcons.live className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-accent-purple text-accent-purple"
                  asChild
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <project.buttonIcons.github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
