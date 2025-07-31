import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import SEO from "@/components/SEO";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: "submitting", message: "Sending your message..." });

    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus({
        status: "success",
        message: "Thank you for your message! We will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ status: "idle", message: "" });
      }, 5000);
    } catch {
      setFormStatus({
        status: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-600" />,
      title: "Our Location",
      description: "1234 Street Name, Barangay 76-A, Davao City, Philippines",
    },
    {
      icon: <FaPhone className="text-2xl text-primary-600" />,
      title: "Phone Number",
      description: "+63 82 123 4567",
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-600" />,
      title: "Email Address",
      description: "info@ancdavao.org",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-2xl" />,
      name: "Facebook",
      url: "https://facebook.com/ancdavao",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      name: "Twitter",
      url: "https://twitter.com/ancdavao",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      name: "Instagram",
      url: "https://instagram.com/ancdavao",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us"
        description="Get in touch with ANC Davao. Find our contact information, office hours, location, and send us a message. Connect with us on social media."
        keywords="ANC Davao contact, contact information, email, phone, address, social media, message, get in touch"
      />
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us today!"
        backgroundImage="https://picsum.photos/1920/1080?random"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to learn more about our programs? Reach out
              to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>

                {formStatus.status !== "idle" && (
                  <div
                    className={`mb-6 p-4 rounded ${formStatus.status === "success" ? "bg-green-100 text-green-700" : formStatus.status === "error" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Donation">Donation</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.status === "submitting"}
                    className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus.status === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Map and Social Media */}
              <div>
                {/* Map */}
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 h-64">
                  <iframe
                    title="ANC Davao Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.460350054543!2d125.6088!3d7.0646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDMnNTIuNiJOIDEyNcKwMzYnMzEuNyJF!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <ul className="space-y-2">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-gray-700">{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center hover:bg-teal-200 transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Check out our FAQ page
            for more information.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
          >
            Visit FAQ Page
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
