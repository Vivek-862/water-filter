import React from 'react';
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 px-4 py-2">

          {/* Brand & Location */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                PAANI
                <span className="text-4xl animate-pulse">💧</span>
              </h2>
              <p className="text-blue-400 text-sm mt-1">Pure Water Solutions</p>
            </div>
            {/* <p className="text-gray-400 leading-relaxed">
              Your trusted partner for premium water purifiers, expert installation, and reliable after-sales service in Mumbai.
            </p> */}
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin size={20} className="text-blue-400" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400" />
                <a href="mailto:support@paani.com" className="hover:text-blue-400 transition">
                  support@paani.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition">
                  +91 98765 43210
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              We're here to help 24/7 for sales, service & emergencies.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-start md:items-end justify-center gap-6">
            <div className="text-right md:text-left">
              <h3 className="text-xl font-semibold text-white">Pure Water Today?</h3>
              <p className="text-gray-400 mt-2">Call us for instant quote or service booking</p>
            </div>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <Phone size={24} />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PAANI Pure Water Solutions. All rights reserved.</p>
          <p>Serving Mumbai with Pride 💧</p>
        </div> */}
      </div>
    </footer>
  );
}