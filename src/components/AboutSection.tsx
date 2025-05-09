
import { personalInfo } from "@/data/portfolioData";
import { User, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-navy">Who Am I?</h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate developer with a strong focus on creating clean, efficient, and user-friendly web applications. My journey in tech started over 5 years ago, and since then, I've been constantly learning and improving my skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a full-stack developer, I enjoy tackling complex problems and turning them into simple and beautiful solutions. My expertise spans front-end and back-end technologies, with a special interest in creating responsive interfaces and optimized user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring hiking trails, experimenting with photography, or attending tech meetups to stay connected with the community.
              </p>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-soft-purple/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-purple/20 p-3 rounded-full">
                    <User className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Full Name</h4>
                    <p className="text-gray-700">{personalInfo.name}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-soft-purple/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-purple/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Email</h4>
                    <p className="text-gray-700">{personalInfo.email}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-soft-purple/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-purple/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Phone</h4>
                    <p className="text-gray-700">{personalInfo.phone}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-soft-purple/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-purple/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Location</h4>
                    <p className="text-gray-700">{personalInfo.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-navy">My Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Web Development", icon: "💻" },
                { name: "UX Design", icon: "🎨" },
                { name: "Photography", icon: "📷" },
                { name: "Hiking", icon: "🥾" },
                { name: "Reading", icon: "📚" },
                { name: "Travel", icon: "✈️" },
              ].map((interest, index) => (
                <div 
                  key={index}
                  className="p-4 bg-soft-gray rounded-lg flex flex-col items-center text-center hover:bg-soft-purple transition-colors"
                >
                  <span className="text-3xl mb-2">{interest.icon}</span>
                  <span className="font-medium text-navy">{interest.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 p-5 rounded-lg">
              <h4 className="font-semibold text-navy mb-2">Fun Fact</h4>
              <p className="text-gray-700">
                I once coded an entire project during a 12-hour flight without internet—relying only on documentation I had downloaded beforehand!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
