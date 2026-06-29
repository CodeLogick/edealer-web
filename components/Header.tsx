import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">eD</span>
            </div>
            <span className="font-bold text-xl text-dark hidden sm:inline">eDealer</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-dark hover:text-primary transition">
              Home
            </Link>
            <Link href="#how-it-works" className="text-dark hover:text-primary transition">
              How It Works
            </Link>
            <Link href="#features" className="text-dark hover:text-primary transition">
              Features
            </Link>
            <Link href="/about" className="text-dark hover:text-primary transition">
              About
            </Link>
            <a
              href="https://wa.me/919884177607?text=Hi%20eDealer%2C%20I%20want%20to%20know%20more%20about%20your%20trading%20system"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-dark hover:text-primary">
              Home
            </Link>
            <Link href="#how-it-works" className="block text-dark hover:text-primary">
              How It Works
            </Link>
            <Link href="#features" className="block text-dark hover:text-primary">
              Features
            </Link>
            <Link href="/about" className="block text-dark hover:text-primary">
              About
            </Link>
            <a
              href="https://wa.me/919884177607?text=Hi%20eDealer%2C%20I%20want%20to%20know%20more%20about%20your%20trading%20system"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-secondary text-white px-6 py-2 rounded-lg hover:bg-green-600 transition text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}