"use client"
import Navbar from "@/src/components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/src/components/Footer/Footer";


const Josef = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={Josef.className}>
        <Navbar />

        <div> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
