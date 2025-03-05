"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <span>
              <Link href="/">
                <Image
                  src="/emkaylogo.png"
                  alt="Emkay Infotech"
                  width={180}
                  height={50}
                />
              </Link>
            </span>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
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
            </div>
            <div className="fund-button">
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}
      <div className="nm-container">
        {/* logo */}
        <span>
          <Image
            src="/emkaylogo.png"
            alt="Emkay Infotech"
            width={100}
            height={35}
          />
        </span>

        {/* menu icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <span>
            <Link href="/">home</Link>
          </span>
          <span>
            <Link href="/our-services">Our Services</Link>
          </span>
          <span>
            <Link href="/about-us">About Us</Link>
          </span>
          <span>
            <Link href="/why-choose-us">Why Choose Us</Link>
          </span>
          <div className="m-funded-button">
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Navbar;
