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
                I'm a passionate developer with a strong focus on building
                clean, efficient, and user-friendly web applications. My journey
                in tech began in 2023 when I joined the{" "}
                <a
                  href="https://42wolfsburg.de/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-green"
                >
                  42 program
                </a>
                , where we coded in C. It was there that I discovered my love
                for programming and the thrill of problem-solving through
                hands-on challenges. I later continued my studies in college,
                building a solid foundation in computer science using C++, and
                have been continuously learning and growing ever since.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I enjoy solving problems and turning complex ideas into simple,
                beautiful digital experiences. My skills span both front-end and
                back-end technologies, and I’m especially interested in
                developing scalable backend systems that implement smart
                algorithms and support smooth, seamless user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you’ll find me engaging in different kinds
                of sports to break a sweat and get my heart racing, attending
                tech meetups, or traveling to explore places I’ve never been
                before.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-soft-green/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-green/20 p-3 rounded-full">
                    <User className="h-5 w-5 text-accent-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Full Name</h4>
                    <p className="text-gray-700">{personalInfo.name}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-soft-green/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-green/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-accent-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Email</h4>
                    <p className="text-gray-700">{personalInfo.email}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-soft-green/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-green/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-accent-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Phone</h4>
                    <p className="text-gray-700">{personalInfo.phone}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-soft-green/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-accent-green/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-accent-green" />
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
            <h3 className="text-2xl font-semibold mb-4 text-navy">
              My Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Web Development", icon: "💻" },
                { name: "Mobile Development", icon: "📱" },
                { name: "Sports", icon: "🏀" },
                { name: "Reading", icon: "📚" },
                { name: "Travel", icon: "✈️" },
              ].map((interest, index) => (
                <div
                  key={index}
                  className="p-4 bg-soft-gray rounded-lg flex flex-col items-center text-center hover:bg-soft-green transition-colors"
                >
                  <span className="text-3xl mb-2">{interest.icon}</span>
                  <span className="font-medium text-navy">{interest.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-accent-green-dark/20 to-accent-green/20 p-5 rounded-lg">
              <h4 className="font-semibold text-navy mb-2">Fun Fact</h4>
              <p className="text-gray-700">
                My motto for the past year has been: 'One LeetCode a day keeps
                the doctor away,' and I try to stick to it.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
