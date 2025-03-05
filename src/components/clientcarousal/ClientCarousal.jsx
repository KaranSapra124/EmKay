import React from "react";

import raymondlogo from "../../assets/raymond.png";
import seedologycafe from "../../assets/seedologycafe.png";
import naseeeeem from "../../assets/naseeeeem.png";
import aim from "../../assets/aim.jpg";
import zulekhalogo from "../../assets/zulekhalogo.jpg";
import naivdyam from "../../assets/naivdyam.png";
import chinatown from "../../assets/chinatown.png";
import derafarms from "../../assets/derafarms.png";
import magicpin from "../../assets/magicpin.png";
import "./ClientCarousal.css";
import Image from "next/image";

const ClientCarousel = () => {
  const clients = [
    { id: 1, name: "Raymond", logo: raymondlogo },
    { id: 2, name: "Seedology Cafe", logo: seedologycafe },
    { id: 3, name: "Naseem", logo: naseeeeem },
    { id: 4, name: "AIM", logo: aim },
    { id: 5, name: "Zulekha", logo: zulekhalogo },
    { id: 6, name: "Naivdyam", logo: naivdyam },
    { id: 7, name: "Chinatown", logo: chinatown },
    { id: 8, name: "Dera Farms", logo: derafarms },
    { id: 9, name: "Magicpin", logo: magicpin },
  ];

  // Duplicate the clients array to create a seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="client-section">
      <div className="client-container">
        <h2 className="client-title">Our Trusted Clients</h2>
        <div className="divider"></div>
        
        <div className="carousel-container">
          <div className="carousel-gradient-left"></div>
          <div className="carousel-track-container">
            <div className="carousel-track">
              {allClients.map((client, index) => (
                <div className="client-logo-container" key={`${client.id}-${index}`}>
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    className="client-logo"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-gradient-right"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;