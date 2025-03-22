
import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-rock-light-gray -z-10"></div>
      
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-lg shadow-elevation overflow-hidden reveal-on-scroll">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-rock-brown text-white p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8 text-white/80">
                Ready to start your next project? Contact us for a consultation 
                and free estimate. Our team is ready to help bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+18015470844" className="text-white/80 hover:text-white transition-colors">
                      (801) 547-0844
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@rockstructures.com" className="text-white/80 hover:text-white transition-colors">
                      info@rockstructures.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-white/80">
                      Kaysville, Utah<br />
                      Serving the entire Wasatch Front
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-white/80">
                      Monday - Friday: 7am - 5pm<br />
                      Saturday: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-rock-dark">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-rock-gray mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-rock-light-gray border-0 focus:ring-2 focus:ring-rock-brown/50 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-rock-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-rock-light-gray border-0 focus:ring-2 focus:ring-rock-brown/50 transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-rock-gray mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-rock-light-gray border-0 focus:ring-2 focus:ring-rock-brown/50 transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-rock-gray mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-rock-light-gray border-0 focus:ring-2 focus:ring-rock-brown/50 transition-all"
                      required
                    >
                      <option value="" disabled>Select project type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Municipal">Municipal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-rock-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-rock-light-gray border-0 focus:ring-2 focus:ring-rock-brown/50 transition-all"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-rock-brown text-white rounded-md font-medium flex items-center justify-center transition-all button-hover"
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  ) : (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
