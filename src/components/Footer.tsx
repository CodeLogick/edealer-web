import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-dark font-bold text-lg">eD</span>
              </div>
              <span className="font-bold text-xl">eDealer</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in automated passive income generation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition">How It Works</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/terms-policy" className="hover:text-white transition">Terms & Policy</Link></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+919884177607" className="hover:text-white transition">+91 9884177607</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contact@edealer.com" className="hover:text-white transition">contact@edealer.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} eDealer. All rights reserved. | Automated Trading System
          </p>
        </div>
      </div>
    </footer>
  );
}