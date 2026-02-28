import { Scale, Linkedin, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-background-light border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
                <Scale className="size-5" />
              </div>
              <span className="text-slate-900 font-bold text-lg">Sunil Khurana & Assoc.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your trusted partner for all tax, legal, and financial compliances in Panipat. Professional integrity and client satisfaction are our top priorities.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('home')} className="text-slate-500 hover:text-primary transition-colors text-sm">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-slate-500 hover:text-primary transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => onNavigate('calculators')} className="text-slate-500 hover:text-primary transition-colors text-sm">Calculators</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-slate-500 hover:text-primary transition-colors text-sm">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-slate-500 text-sm">GST Registration</li>
              <li className="text-slate-500 text-sm">Income Tax Filing</li>
              <li className="text-slate-500 text-sm">Company Registration</li>
              <li className="text-slate-500 text-sm">Legal Advisory</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="text-primary size-5 mt-0.5" />
                <span>SCO 34-35, Kisan Bhawan, Under Fly Over, Assandh - Panipat Road,<br />Panipat, Haryana 132103</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="text-primary size-5" />
                <a href="tel:+919215377199" className="hover:text-primary">+91 92153 77199</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="text-primary size-5" />
                <a href="mailto:khuranasunil15@gmail.com" className="hover:text-primary">khuranasunil15@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Clock className="text-primary size-5" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2024 Sunil Khurana & Associates. All rights reserved.</p>
          <p className="text-slate-400 text-sm">Designed for Professional Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
