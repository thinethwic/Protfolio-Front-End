import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "thinethwic@gmail.com",
    description: "Send me an email anytime!",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 (76) 809 0515",
    description: "Call me during business hours",
    href: "tel:+94 (76) 809 0515",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "No 74, Matara Road, Kamburupitiya",
    description: "Available for remote work",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/thinethwic",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/thineth-wick",
    description: "Professional network",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/",
    description: "Follow my thoughts",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real app, you would send the data to your backend
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in hearing about new opportunities,
              collaborations, or just having a friendly chat about technology
              and development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageCircle className="h-6 w-6" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted && (
                    <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-900/20">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <AlertDescription className="text-green-800 dark:text-green-300">
                        Thanks for your message! I'll get back to you within 24
                        hours.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-red-500" : ""}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`min-h-[120px] ${
                          errors.message ? "border-red-500" : ""
                        }`}
                        placeholder="Tell me about your project, ideas, or just say hello!"
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                {contactInfo.map((item) => (
                  <Card
                    key={item.title}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            {item.title}
                          </h3>
                          <p className="text-foreground font-medium">
                            {item.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Connect With Me</h2>
                <div className="grid gap-4">
                  {socialLinks.map((social) => (
                    <Card
                      key={social.name}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <social.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {social.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {social.description}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                      <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        I typically respond to messages within 24 hours during
                        business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.section variants={fadeInUp} className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'm always excited to connect with fellow
                developers and creative minds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:your.email@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me Directly
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/thineth-wick/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
