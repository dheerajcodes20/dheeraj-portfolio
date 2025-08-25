import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at dheeraj2082dk@gmail.com",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-primary text-xl mr-4" />
                    <div>
                      <p className="text-white/80 text-sm">Email</p>
                      <a
                        href="mailto:dheeraj2082dk@gmail.com"
                        className="text-white hover:text-primary transition-colors"
                        data-testid="link-contact-email"
                      >
                        dheeraj2082dk@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-secondary text-xl mr-4" />
                    <div>
                      <p className="text-white/80 text-sm">Phone</p>
                      <a
                        href="tel:+919640760915"
                        className="text-white hover:text-secondary transition-colors"
                        data-testid="link-contact-phone"
                      >
                        +91 9640760915
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-accent text-xl mr-4" />
                    <div>
                      <p className="text-white/80 text-sm">Location</p>
                      <p className="text-white" data-testid="text-contact-location">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/dheerajcodes20"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:text-primary border border-white/20 hover:bg-white/20 transition-all duration-300"
                data-testid="link-contact-github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/dheeraj-kumar-86bb96269/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:text-secondary border border-white/20 hover:bg-white/20 transition-all duration-300"
                data-testid="link-contact-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                <div>
                  <Label htmlFor="name" className="text-white/80 text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-primary"
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white/80 text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-primary"
                    data-testid="input-contact-email"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white/80 text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-primary"
                    data-testid="input-contact-subject"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white/80 text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-primary resize-none"
                    data-testid="textarea-contact-message"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
