import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json() as ContactFormData;

    // Send confirmation email to the user
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [email],
      subject: "We've received your message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9;">Thank you for your message, ${name}!</h2>
          <p>We've received your inquiry about "${subject}" and will get back to you as soon as possible.</p>
          <p>For your records, here's a copy of your message:</p>
          <div style="background-color: #f4f4f8; padding: 15px; border-left: 4px solid #6d28d9; margin: 20px 0;">
            <p>${message}</p>
          </div>
          <p>Best regards,<br>Portfolio Team</p>
        </div>
      `,
    });
    
    // Also send notification to yourself
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mrgibs97@gmail.com"], // Replace with your actual email
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9;">New contact form submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f4f4f8; padding: 15px; border-left: 4px solid #6d28d9; margin: 20px 0;">
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
