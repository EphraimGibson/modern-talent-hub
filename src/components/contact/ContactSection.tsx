
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="section-pattern pattern-grid bg-soft-gray/50 py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>

          <div className="animate-fade-in">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
