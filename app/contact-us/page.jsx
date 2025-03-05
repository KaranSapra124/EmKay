"use client";
import { useState, useEffect, useRef } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Refs for animation elements
  const headerRef = useRef(null);
  const infoCardsRef = useRef([]);
  const formContainerRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all animation elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (formContainerRef.current) observer.observe(formContainerRef.current);
    if (mapContainerRef.current) observer.observe(mapContainerRef.current);

    infoCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (formContainerRef.current) observer.unobserve(formContainerRef.current);
      if (mapContainerRef.current) observer.unobserve(mapContainerRef.current);
      
      infoCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div ref={headerRef} className="contact-header fade-in-up">
        <h1>Get in Touch</h1>
        <p>
          Have a question or need assistance? Reach out to us and our team will
          get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div 
            ref={(el) => (infoCardsRef.current[0] = el)} 
            className="info-card slide-in-left"
          >
            <div className="icon-container">
              <i className="icon location-icon"></i>
            </div>
            <h3>Our Location</h3>
            <p>
              Emkay Infotech India, 3rd Floor, Plot no. 294A, Kehar Singh
              Estate, Lane Number 2, near Saket Metro Station, Saidulajab,
              Saket, New Delhi, Delhi - 110030
            </p>
          </div>

          <div 
            ref={(el) => (infoCardsRef.current[1] = el)} 
            className="info-card slide-in-left"
          >
            <div className="icon-container">
              <i className="icon email-icon"></i>
            </div>
            <h3>Email Us</h3>
            <p>info@emkayinfotech.com</p>
            <p>support@emkayinfotech.com</p>
          </div>

          <div 
            ref={(el) => (infoCardsRef.current[2] = el)} 
            className="info-card slide-in-left"
          >
            <div className="icon-container">
              <i className="icon phone-icon"></i>
            </div>
            <h3>Call Us</h3>
            <p>+91 11 4567 8900</p>
            <p>+91 98765 43210</p>
          </div>

          <div 
            ref={(el) => (infoCardsRef.current[3] = el)} 
            className="info-card slide-in-left"
          >
            <div className="icon-container">
              <i className="icon hours-icon"></i>
            </div>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div 
          ref={formContainerRef} 
          className="contact-form-container slide-in-right"
        >
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                </svg>
              </div>
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      <div ref={mapContainerRef} className="map-container fade-in-up">
        <h2>Find Us</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.076979113546!2d77.19729127549959!3d28.524373676899285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f7575b5cd1%3A0xfd00e98bfbb72cad!2sSaket%20Metro%20Station!5e0!3m2!1sen!2sin!4v1709137217188!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;