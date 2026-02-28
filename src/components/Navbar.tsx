import { Scale, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Calculators', value: 'calculators' },
    { label: 'Contact Us', value: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="flex items-center justify-center size-10 rounded-lg bg-slate-900 text-gold">
              <Scale className="size-6" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Sunil Khurana & Associates</h2>
              <p className="text-slate-500 text-xs font-medium">Tax & Law Consultancy</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === link.value ? 'text-primary' : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <span>Consultation</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                onNavigate(link.value);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-base font-medium py-2 ${
                currentPage === link.value ? 'text-primary' : 'text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => {
              onNavigate('contact');
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-primary text-white text-center font-bold py-3 rounded-lg"
          >
            Get Consultation
          </button>
        </div>
      )}
    </header>
  );
}
