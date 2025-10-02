import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaServer,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-20 bg-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-start ">
            <div className="flex items-center gap-2 mb-6">
              <FaServer className="text-2xl font-bold text-primary" />
              <span className="text-white font-bold text-2xl">
                EliteHosting
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium web hosting solutions with blazing fast speed and reliable
              performance.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaFacebook className="hover:text-white cursor-pointer" />
              <FaLinkedin className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
            </div>  
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 ">
                <li className="hover:text-white">
                    <Link>Web Hosting</Link>
                </li>
                <li className="hover:text-white">
                    <Link>VPS Hosting</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Dedicated Server</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Domain Name</Link>
                </li>
            </ul>

          </div>

           <div className="flex flex-col items-start">
            <h3 className="text-2xl text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 ">
                <li className="hover:text-white">
                    <Link>About us</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Blog</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Careers</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Press</Link>
                </li>
            </ul>

          </div>

           <div className="flex flex-col items-start relative">
            <h3 className="text-2xl text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400 ">
                <li className="hover:text-white">
                    <Link>Help Center</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Contact</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Privacy Policy</Link>
                </li>
                <li className="hover:text-white">
                    <Link>Term of Service</Link>
                </li>
            </ul>

            <div className="text-white absolute -bottom-20 italic"> © 2025 Elitehosting | Developed with ❤️ by Soham</div>
          </div>
          
          
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
