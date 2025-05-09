
import { experience, education } from "@/data/portfolioData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-soft-gray/50 py-20">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        
        <Tabs defaultValue="experience" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="experience">Work Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="experience" className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        {item.period}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center my-2">
                      <item.icon className="h-4 w-4 text-accent-purple mr-2" />
                      <span className="text-accent-purple font-medium">{item.company}</span>
                    </div>
                    
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="text-xl font-semibold text-navy">{item.degree}</h3>
                      <Badge variant="outline" className="w-fit">
                        {item.period}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center my-2">
                      <item.icon className="h-4 w-4 text-accent-purple mr-2" />
                      <span className="text-accent-purple font-medium">{item.institution}</span>
                    </div>
                    
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-accent-purple hover:underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              // Would link to a resume download or external profile
              alert('Resume download functionality would be here');
            }}
          >
            Download my full resume
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
