import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setShowSuccess(true);
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setShowSuccess(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kartars162@gmail.com",
      href: "mailto:kartars162@gmail.com",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9646666959",
      href: "tel:+919646666959",
      bgColor: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kartar-singh",
      href: "https://www.linkedin.com/in/kartar-singh-259b17103",
      bgColor: "bg-blue-600/20",
      iconColor: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kartar-singh",
      href: "https://github.com/kartar-singh",
      bgColor: "bg-gray-600/20",
      iconColor: "text-gray-400",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kartar-singh-259b17103",
      bgColor: "bg-blue-600/20",
      hoverColor: "hover:bg-blue-600",
      iconColor: "text-blue-600",
      hoverIconColor: "hover:text-white",
    },
    {
      icon: Github,
      href: "https://github.com/kartar-singh",
      bgColor: "bg-gray-600/20",
      hoverColor: "hover:bg-gray-600",
      iconColor: "text-gray-400",
      hoverIconColor: "hover:text-white",
    },
    {
      icon: Mail,
      href: "mailto:kartars162@gmail.com",
      bgColor: "bg-primary/20",
      hoverColor: "hover:bg-primary",
      iconColor: "text-primary",
      hoverIconColor: "hover:text-white",
    },
    {
      icon: Phone,
      href: "tel:+919646666959",
      bgColor: "bg-accent/20",
      hoverColor: "hover:bg-accent",
      iconColor: "text-accent",
      hoverIconColor: "hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text" data-testid="contact-title">
            Let's Work Together
          </h2>
          <p className="text-xl text-accent font-semibold mb-2">
            Let's collaborate on your next project!
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">
                Send me a message
              </h3>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg" data-testid="contact-success">
                  <h4 className="font-semibold">Message sent successfully!</h4>
                  <p className="text-sm">Thank you for your message. I'll get back to you soon.</p>
                </div>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="bg-secondary border-border"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-secondary border-border"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="bg-secondary border-border resize-none"
                            rows={6}
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={contactMutation.isPending}
                    data-testid="button-send-message"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6" data-testid="contact-info-title">
                  Get in touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Ready to start your next project? Let's discuss how I can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                    data-testid={`contact-info-${index}`}
                  >
                    <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                      <info.icon className={info.iconColor} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.label}</h4>
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-accent hover:text-accent/80 transition-colors"
                        data-testid={`contact-link-${index}`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4" data-testid="social-media-title">
                  Follow me on social media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`w-10 h-10 ${social.bgColor} ${social.hoverColor} rounded-lg flex items-center justify-center ${social.iconColor} ${social.hoverIconColor} transition-all duration-200`}
                      data-testid={`social-link-${index}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
