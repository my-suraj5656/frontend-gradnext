import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-4">GradNext</h2>
          <p className="text-sm text-gray-400">
            Empowering students through expert guidance and curated cohorts.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">CaseBuddy</a></li>
            <li><a href="#" className="hover:text-white">Consulting Cohorts</a></li>
            <li><a href="#" className="hover:text-white">Mini MBA</a></li>
            <li><a href="#" className="hover:text-white">All Courses</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GradNext. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
