import React from "react";
import PageHeader from "@/components/PageHeader";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import SEO from "@/components/SEO";
import { ContactInfoCard } from "@/components/ContactInfo/ContactInfoCard";
import { BusinessHours } from "@/components/ContactInfo/BusinessHours";
import { SocialMediaLinks } from "@/components/ContactInfo/SocialMediaLinks";
import { ContactForm } from "@/components/ContactForm";

import { Map } from "@/components/ContactInfo/Map";
import { FAQPreview } from "@/components/ContactInfo/FAQPreview";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-600" />,
      title: "Our Location",
      description: "Pag-asa St, Brgy. 24-C, Fatima, Davao City",
    },
    {
      icon: <FaPhone className="text-2xl text-primary-600" />,
      title: "Phone Number",
      description: "+63 (82) 285-1524 / +63 922 453 7331",
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-600" />,
      title: "Email Address",
      description: "info@ancdavao.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-2xl" />,
      name: "Facebook",
      url: "https://www.facebook.com/archdiocesannourishmentcenter/",
    },
    {
      icon: <FaLinkedinIn className="text-2xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/archdiocesan-nourishment-center/",
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
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg"
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
              <ContactInfoCard key={index} {...item} />
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Map and Social Media */}
              <div>
                <Map
                  title="ANC Davao Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6671.311127231876!2d125.6154992768213!3d7.070227392932443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d9a4b3d294b%3A0x81fbbf260f1a4095!2sArchdiocesan%20Nourishment%20Center!5e1!3m2!1sen!2sph!4v1753951980805!5m2!1sen!2sph"
                />

                {/* Business Hours */}
                <BusinessHours
                  hours={[
                    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ]}
                />

                {/* Social Media */}
                <SocialMediaLinks socialLinks={socialLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <FAQPreview />
    </div>
  );
};

export default Contact;
