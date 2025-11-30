import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Have a project in mind or just want to chat? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div>
              {/* Contact Info */}
              <div>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
                    <div className="space-y-4">
                      <a 
                        href="mailto:hello@example.com"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                      >
                        <Mail className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold group-hover:text-primary transition-colors">Email</p>
                          <p className="text-sm text-muted-foreground">hello@example.com</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                      >
                        <Github className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold group-hover:text-primary transition-colors">GitHub</p>
                          <p className="text-sm text-muted-foreground">@yourusername</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                      >
                        <Linkedin className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold group-hover:text-primary transition-colors">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">/in/yourname</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Availability</h3>
                    <p className="text-muted-foreground">
                      I'm currently <span className="text-primary font-semibold">available</span> for 
                      freelance projects and consulting opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
