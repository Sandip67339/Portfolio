import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { portfolioData } from "../../data/portfolio";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("1Dolzul3heZ2d5NzE");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Send email using EmailJS
      const result = await emailjs.send("service_faovww5", "template_vyc3j11", {
        from_name: formData.name,
        from_email: formData.email,
        to_email: portfolioData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      });

      console.log("Email sent successfully:", result);
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Email sending failed:", error);
      console.error("Error details:", error.status, error.text);
      setIsSubmitting(false);
      setError("Failed to send message. Please check your connection and try again, or contact me at " + portfolioData.email);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: portfolioData.email },
    { icon: Phone, label: "Phone", value: portfolioData.phone },
    { icon: MapPin, label: "Location", value: portfolioData.location }
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-lg">
              Let's collaborate and build something amazing. Feel free to reach out to me anytime!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.label === "Email" ? `mailto:${info.value}` : "#"}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all">
                    <info.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.label}</h3>
                    <p className="text-gray-400 group-hover:text-accent transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-accent/20">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", url: portfolioData.social.github, icon: Github },
                  { name: "LinkedIn", url: portfolioData.social.linkedin, icon: Linkedin },
                  { name: "Twitter", url: portfolioData.social.twitter, icon: Twitter }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 font-semibold"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Subject</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all"
                placeholder="Email subject"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all resize-none"
                placeholder="Your message"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting || submitted}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-blue-400 text-primary font-bold hover:shadow-lg hover:shadow-accent/50 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : submitted ? "✓ Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
