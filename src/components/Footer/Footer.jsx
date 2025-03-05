import React from "react";
import "./Footer.css";
import EmailBox from "../EmailBox/EmailBox";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <h2 className="title">
            Let&apos;s Build Your Digital Presence Together!
          </h2>
          <EmailBox />

          <hr />
          <div className="f-menu">
            <Link href="/">
              <span>Home</span>
            </Link>
            <Link href="/our-services">
              <span>Our Services</span>
            </Link>
            <Link href="/about-us">
              <span>About Us</span>
            </Link>
            <Link href="/why-choose-us">
              <span>Why Choose Us</span>
            </Link>
            <span className="m-funded-button">
              <Link href="/contact-us">Contact Us</Link>
            </span>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
