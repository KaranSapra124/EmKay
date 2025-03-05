"use client";
import React, { useState } from "react";
import "./OurServices.css";
import ClientCarousel from "@/src/components/clientcarousal/ClientCarousal";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("all");

  const premiumServices = [
    {
      id: 1,
      title: "Custom Software Development",
      description:
        "Tailor-made software solutions designed to address your unique business challenges and requirements.",
      icon: "code-icon",
      features: [
        "Enterprise Applications",
        "Web Applications",
        "Mobile Apps",
        "API Development",
      ],
    },
    {
      id: 2,
      title: "Cloud Computing Solutions",
      description:
        "Comprehensive cloud services to modernize your infrastructure and enhance your business agility.",
      icon: "cloud-icon",
      features: [
        "Cloud Migration",
        "AWS/Azure/GCP Solutions",
        "Cloud Architecture",
        "Serverless Applications",
      ],
    },
    {
      id: 3,
      title: "Data Analytics & Business Intelligence",
      description:
        "Transform your raw data into actionable insights to drive strategic business decisions.",
      icon: "analytics-icon",
      features: [
        "Data Warehousing",
        "Predictive Analytics",
        "Custom Dashboards",
        "Big Data Processing",
      ],
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to automate processes and gain competitive advantage.",
      icon: "ai-icon",
      features: [
        "Natural Language Processing",
        "Computer Vision",
        "Recommendation Systems",
        "Predictive Modeling",
      ],
    },
  ];

  const additionalServices = [
    {
      id: 5,
      title: "IT Consulting",
      description:
        "Strategic technology advice to align your IT investments with business objectives.",
      icon: "consulting-icon",
      features: [
        "Technology Roadmapping",
        "Digital Transformation",
        "IT Strategy",
        "Process Optimization",
      ],
    },
    {
      id: 6,
      title: "Cybersecurity Services",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      icon: "security-icon",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Incident Response",
      ],
    },
    {
      id: 7,
      title: "Managed IT Services",
      description:
        "End-to-end IT management to optimize operations and reduce downtime.",
      icon: "managed-icon",
      features: [
        "24/7 Monitoring",
        "Help Desk Support",
        "Network Management",
        "Backup & Recovery",
      ],
    },
    {
      id: 8,
      title: "Web & Mobile Development",
      description:
        "Engaging digital experiences across all platforms to enhance your brand presence.",
      icon: "web-mobile-icon",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "Cross-Platform Mobile Apps",
      ],
    },
  ];

  const allServices = [...premiumServices, ...additionalServices];

  const filterServices = (category) => {
    setActiveTab(category);
  };

  const displayServices = () => {
    switch (activeTab) {
      case "premium":
        return premiumServices;
      case "additional":
        return additionalServices;
      default:
        return allServices;
    }
  };

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Discover how Emkay Infotech can transform your business with our
          comprehensive range of IT solutions
        </p>
      </div>

      <div className="services-tabs">
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => filterServices("all")}
        >
          All Services
        </button>
        <button
          className={`tab-btn ${activeTab === "premium" ? "active" : ""}`}
          onClick={() => filterServices("premium")}
        >
          Premium Services
        </button>
        <button
          className={`tab-btn ${activeTab === "additional" ? "active" : ""}`}
          onClick={() => filterServices("additional")}
        >
          Additional Services
        </button>
      </div>

      <div className="services-container">
        {displayServices().map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon-container">
              <div className={`service-icon ${service.icon}`}></div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-features">
              <h4>Key Features</h4>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Our team of experts is ready to help you achieve your technology
            goals
          </p>
          <button className="cta-btn">Schedule a Consultation</button>
        </div>
      </div>

      <div className="process-section">
        <h2>Our Service Delivery Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Discovery</h3>
              <p>
                We analyze your requirements and business objectives to
                understand your unique challenges
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Strategy</h3>
              <p>
                Our experts create a tailored plan that aligns with your goals
                and timeline
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Implementation</h3>
              <p>
                We execute the plan with precision, ensuring quality at every
                step
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Support</h3>
              <p>
                We provide ongoing maintenance and optimization to ensure
                long-term success
              </p>
            </div>
          </div>
        </div>
      </div>

      <ClientCarousel/>

      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              Emkay Infotech transformed our IT infrastructure, resulting in a
              30% increase in operational efficiency. Their team's expertise and
              dedication exceeded our expectations.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Rajiv Kumar</h4>
                <p>CTO, Global Solutions</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              The custom software application developed by Emkay Infotech has
              revolutionized our customer service workflow. Their attention to
              detail and responsive support team make them a valued partner.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Priya Sharma</h4>
                <p>Director of Operations, TechVision India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
