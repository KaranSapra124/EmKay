
"use client"

import React, { useEffect, useRef } from "react";
import attentionDetail from "../../src/assets/attentionDetail.png";
import exportonly from "../../src/assets/expertonly.png";
import pricing from "../../src/assets/pricing.jpg";
import pricing2 from "../../src/assets/pricing2.jpg";
import "./WhyChooseUs.css";
import Image from "next/image";
import ClientCarousel from "@/src/components/clientcarousal/ClientCarousal";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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

    // Observe the section header
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="why-choose-section">
      <div className="container">
        <div 
          ref={sectionRef} 
          className="section-header fade-up"
        >
          <h2 className="section-title">Why Choose Us</h2>
          <div className="divider"></div>
          <p className="section-description">
            We combine industry expertise, innovative solutions, and
            personalized service to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="features-grid">
          {/* Card 1 */}
          <div 
            ref={(el) => (cardRefs.current[0] = el)} 
            className="feature-card slide-up"
          >
            <div className="card-image">
              <Image src={attentionDetail} alt="Attention to Detail" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Attention to Detail</h3>
              <p className="card-text">
                Our meticulous approach ensures that every aspect of your
                project is handled with precision and care.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="learn-more">
                Learn more <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            ref={(el) => (cardRefs.current[1] = el)} 
            className="feature-card slide-up"
          >
            <div className="card-image">
              <Image src={exportonly} alt="Expert Team" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Expert Team</h3>
              <p className="card-text">
                Our specialists bring years of industry experience and knowledge
                to deliver outstanding results.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="learn-more">
                Learn more <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            ref={(el) => (cardRefs.current[2] = el)} 
            className="feature-card slide-up"
          >
            <div className="card-image">
              <Image src={pricing} alt="Competitive Pricing" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Competitive Pricing</h3>
              <p className="card-text">
                We offer transparent, value-driven pricing options that deliver
                exceptional return on investment.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="learn-more">
                Learn more <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            ref={(el) => (cardRefs.current[3] = el)} 
            className="feature-card slide-up"
          >
            <div className="card-image">
              <Image src={pricing2} alt="Customized Solutions" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Customized Solutions</h3>
              <p className="card-text">
                We tailor our services to meet your specific needs, ensuring
                personalized solutions for every client.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="learn-more">
                Learn more <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ClientCarousel />
    </section>
  );
};

export default WhyChooseUs;