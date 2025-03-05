"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./AboutUs.css";
import team from "../../src/assets/team.png";
import teammember1 from "../../src/assets/teammember1.jpg";
import teammember2 from "../../src/assets/teammember2.jpg";
import teammember3 from "../../src/assets/teammember3.jpg";
import ClientCarousel from "@/src/components/clientcarousal/ClientCarousal";

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Emkay Infotech
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering Businesses Through Technology Solutions
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="flex-container">
            <motion.div
              className="content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2>Our Story</h2>
              <p>
                Emkay Infotech was founded in 2005 with a vision to provide
                innovative IT solutions to businesses of all sizes. What started
                as a small team of passionate tech enthusiasts has now grown
                into a full-service technology partner trusted by clients across
                industries.
              </p>
              <p>
                Over the years, we have expanded our expertise to cover software
                development, IT infrastructure, cloud solutions, cybersecurity,
                and digital transformation services. Our commitment to
                excellence and customer satisfaction remains at the core of
                everything we do.
              </p>
            </motion.div>
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="image-wrapper">
                <Image
                  src={team}
                  alt="Emkay Infotech team"
                  width={500}
                  height={350}
                  className="rounded-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <motion.div
            className="grid-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="mission-box" variants={scaleIn}>
              <h3>Our Mission</h3>
              <p>
                To deliver transformative technology solutions that help our
                clients achieve their business objectives, optimize operations,
                and stay ahead in the digital landscape.
              </p>
            </motion.div>
            <motion.div className="vision-box" variants={scaleIn}>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted technology partner that drives innovation
                and creates sustainable value for businesses worldwide.
              </p>
            </motion.div>
            <motion.div className="values-box" variants={scaleIn}>
              <h3>Our Values</h3>
              <ul>
                <li>Excellence in delivery</li>
                <li>Customer-centricity</li>
                <li>Innovation and adaptability</li>
                <li>Integrity and transparency</li>
                <li>Collaborative growth</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Leadership Team
          </motion.h2>
          <motion.div
            className="team-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Team Member 1 */}
            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <Image
                  src={teammember1}
                  alt="CEO"
                  width={200}
                  height={250}
                  className="rounded-image"
                />
              </div>
              <h4>John Smith</h4>
              <p className="designation">CEO & Founder</p>
              <p className="bio">
                With over 20 years of experience in IT leadership, John has been
                instrumental in shaping the vision and growth trajectory of
                Emkay Infotech.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <Image
                  src={teammember2}
                  alt="CTO"
                  width={200}
                  height={250}
                  className="rounded-image"
                />
              </div>
              <h4>Sarah Johnson</h4>
              <p className="designation">Chief Technology Officer</p>
              <p className="bio">
                Sarah leads our technology initiatives with her extensive
                background in software architecture and emerging technologies.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <Image
                  src={teammember3}
                  alt="COO"
                  width={200}
                  height={250}
                  className="rounded-image"
                />
              </div>
              <h4>Michael Chen</h4>
              <p className="designation">Chief Operations Officer</p>
              <p className="bio">
                Michael oversees our operational excellence and ensures seamless
                delivery of projects to our valued clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </motion.h2>
          <motion.div
            className="stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="stat-box"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </motion.div>
            <motion.div
              className="stat-box"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3>500+</h3>
              <p>Projects Delivered</p>
            </motion.div>
            <motion.div
              className="stat-box"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3>50+</h3>
              <p>Expert Team Members</p>
            </motion.div>
            <motion.div
              className="stat-box"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3>200+</h3>
              <p>Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="testimonial"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="quote">
              "Emkay Infotech has been an invaluable technology partner for our
              business. Their expertise and dedication to our success have
              helped us achieve remarkable growth over the past three years."
            </p>
            <p className="client-name">
              - David Williams, CEO of GrowTech Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect with us today to discuss how we can help you achieve your
            technology goals.
          </motion.p>
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      <ClientCarousel />
    </div>
  );
};

export default AboutUs;
