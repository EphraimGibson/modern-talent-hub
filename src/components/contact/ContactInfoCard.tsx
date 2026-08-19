import { Card, CardContent } from "@/components/ui/card";

type ContactInfoCardProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
};

const ContactInfoCard = ({ icon, title, content }: ContactInfoCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="bg-accent-green/20 p-4 rounded-full mb-4">{icon}</div>
        <h4 className="font-semibold text-navy">{title}</h4>
        {content}
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;
