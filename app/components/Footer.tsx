import { Orbitron } from "next/font/google";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const schoolFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
          {/* Logo & About */}
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Kawempe Muslim Secondary School
            </h1>
            <p className="text-gray-400 max-w-xs">
              Providing quality education and holistic development for students.
              Join us to grow, learn, and achieve excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/admissions" className="hover:text-white transition">
                  Academics
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Students Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Email: kawempemuslimss@yahoo.com</p>
            <p>Phone: +256 700 000 000</p>
            <p>Address: Kampala, Uganda</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-8 md:mt-12">
          <a href="#" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </div>

        <div
          className={`${schoolFont.className} w-fit my-4 p-2 text-center text-black bg-white`}
        >
          This site is Powered by <span className="font-bold">TAZON</span>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Kawempe Muslim Secondary School. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
