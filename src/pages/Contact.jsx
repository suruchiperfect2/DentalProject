import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, Clock, Send, ChevronRight, 
  Calendar, User, ArrowRight 
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Professional dental clinic image
  const heroImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2069&auto=format&fit=crop";

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Dental Care Hospital", "Patna, Bihar 800001"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 12345 67890 (24/7)"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["drprityraushan@gmail.com", "care@dentalclinic.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon-Sat: 9:00 AM – 8:00 PM", "Sunday: Closed"]
    }
  ];

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You Need to Visit a Dentist Immediately",
      excerpt: "Persistent tooth pain, bleeding gums, and mouth sores shouldn't be ignored. Learn which symptoms require emergency dental care.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
      date: "Mar 15, 2024",
      author: "Dr. Prity Raushan",
      category: "Dental Health",
      slug: "/blog/signs-visit-dentist"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Children's Oral Health",
      excerpt: "From first tooth to teenage years: expert tips on brushing, flossing, and making dental visits fun for kids.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
      date: "Mar 10, 2024",
      author: "Dr. Prity Raushan",
      category: "Pediatric Dentistry",
      slug: "/blog/children-oral-health"
    },
    {
      id: 3,
      title: "Cosmetic Dentistry: Transform Your Smile in 2024",
      excerpt: "Discover the latest in veneers, teeth whitening, and invisible aligners – which option is right for you?",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop",
      date: "Mar 5, 2024",
      author: "Dr. Prity Raushan",
      category: "Cosmetic Dentistry",
      slug: "/blog/cosmetic-dentistry-guide"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section with Image */}
      <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
        {/* Background Image */}
        <img 
          src={heroImage}
          alt="Modern dental clinic"
          className="w-full h-full object-cover"
        />
        
        {/* Simple Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Centered Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            We're here to help you with any questions about our dental services
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact</span>
          </div>
        </div>
      </div>

      {/* Main Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Have questions? We're here to help. Fill out the form and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: CONTACT DETAILS */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simple Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {['f', '📱', '🐦', '💼'].map((icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-colors"
                      >
                        <span>{icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send Us a Message
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700">✓ Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700">! Failed to send message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontic">Orthodontics</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
                      placeholder="Tell us about your dental concern..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="w-4 h-4 rounded border-gray-300 text-teal-600" 
                      required 
                    />
                    <label htmlFor="terms" className="text-gray-600 text-sm">
                      I agree to the <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Simple Map Section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Our Location</h3>
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115134.20923468482!2d85.07110815!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58b6baf6c75f%3A0x32b6b7e2b8a6f3f1!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* BLOG SECTION */}
          <div className="mt-20">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Latest from Our Blog</h2>
              <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Expert dental advice, tips for healthy smiles, and updates from our clinic
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link to={post.slug} className="hover:text-teal-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link 
                      to={post.slug}
                      className="inline-flex items-center gap-2 text-teal-600 font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Blog Posts Button */}
            <div className="text-center mt-12">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;