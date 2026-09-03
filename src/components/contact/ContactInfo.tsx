import { personalInfo } from "@/data/portfolioData";
import ContactInfoCard from "./ContactInfoCard";
import { Card } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-navy">
        Contact Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <ContactInfoCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-accent-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
          title="Email"
          content={
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-accent-green hover:underline"
            >
              {personalInfo.email}
            </a>
          }
        />

        <ContactInfoCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-accent-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
          title="Location"
          content={<p className="text-gray-700">{personalInfo.location}</p>}
        />

      </div>

      <h4 className="font-semibold text-navy mb-4">Connect With Me</h4>
      <div className="flex flex-wrap gap-3">
        {personalInfo.socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white hover:bg-accent-green/10 transition-colors border border-gray-200"
          >
            <social.icon className="h-5 w-5 text-accent-green" />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
