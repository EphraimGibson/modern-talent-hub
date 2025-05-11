
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
              className="h-6 w-6 text-accent-purple"
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
              className="text-accent-purple hover:underline"
            >
              {personalInfo.email}
            </a>
          }
        />

        <ContactInfoCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-accent-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          }
          title="Phone"
          content={
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-accent-purple hover:underline"
            >
              {personalInfo.phone}
            </a>
          }
        />

        <ContactInfoCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-accent-purple"
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

        <ContactInfoCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-accent-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          }
          title="Website"
          content={<p className="text-accent-purple">ephraimgibson.pro</p>}
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
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white hover:bg-accent-purple/10 transition-colors border border-gray-200"
          >
            <social.icon className="h-5 w-5 text-accent-purple" />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
