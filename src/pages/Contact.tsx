import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Input, TextArea, Select } from '../components/ui/Input';
import Card from '../components/ui/Card';

import { Page } from '../App';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'gst',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.name} - ${formData.service}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:khuranasuniladvocate@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const faqs = [
    {
      q: "What documents are required for GST registration?",
      a: "Typically, you need PAN card of the business/applicant, Aadhaar card, proof of business address (like electricity bill or rent agreement), and bank account details."
    },
    {
      q: "How long does it take to file Income Tax Returns?",
      a: "With all necessary documents (Form 16, bank statements, etc.), we can usually process and file your ITR within 24-48 hours."
    },
    {
      q: "Do you provide services outside of Panipat?",
      a: "Yes, while our physical office is in Panipat, we provide digital consultancy services to clients across India, especially for GST and Income Tax matters."
    },
    {
      q: "What are your consultation fees?",
      a: "Our fees vary depending on the complexity of the matter. We offer a free initial 15-minute discovery call to understand your requirements."
    }
  ];

  const serviceOptions = [
    { label: 'GST Registration/Filing', value: 'gst' },
    { label: 'Income Tax Filing', value: 'income-tax' },
    { label: 'Legal Advisory', value: 'legal' },
    { label: 'Company Incorporation', value: 'incorporation' },
    { label: 'Other Services', value: 'other' },
  ];

  return (
    <div className="flex-1 w-full">
      {/* Header Section */}
      <section className="bg-slate-900 section-padding px-4 flex flex-col items-center text-center">
        <SectionHeader 
          centered
          title="Contact Us"
          description="Have a legal query or need tax assistance? Our team is here to provide you with expert guidance and support."
          className="text-white"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button 
            variant="white" 
            size="lg" 
            icon={ArrowRight}
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Consultation
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-white border-white/20 hover:bg-white/10"
            onClick={() => window.open('https://wa.me/919215377199?text=Hello%20Sunil%20Khurana%20%26%20Associates%2C%20I%20would%20like%20to%20book%20a%20consultation%20regarding%20my%20tax%20and%20legal%20matters.', '_blank')}
          >
            WhatsApp Us
          </Button>
        </div>
      </section>

      <section className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <MessageSquare className="text-primary size-6" />
                Contact Information
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    icon: MapPin, 
                    title: 'Our Office', 
                    content: 'SCO 34-35, Kisan Bhawan, Under Fly Over, Assandh - Panipat Road. Panipat, Haryana 132103',
                    link: 'https://www.google.com/maps/dir//Sunil+Khurana+%26+Associates,+Under+Fly+Over,+Shop+No.+35,+Kisan+Bhawan,+Assandh+-+Panipat+Rd,+Panipat,+Haryana+132103/@29.3948138,76.9433436,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ddbb494ef56b9:0x8e30b38b674e2adf!2m2!1d76.9626396!2d29.3948102'
                  },
                  { 
                    icon: Phone, 
                    title: 'Phone Number', 
                    content: '+91 92153 77199', 
                    sub: 'Mon-Sat, 9am - 7pm',
                    link: 'tel:+919215377199'
                  },
                  { 
                    icon: Mail, 
                    title: 'Email Address', 
                    content: 'khuranasunil15@gmail.com', 
                    sub: 'khuranasuniladvocate@gmail.com',
                    link: 'mailto:khuranasunil15@gmail.com'
                  },
                  { 
                    icon: Clock, 
                    title: 'Working Hours', 
                    content: 'Monday - Saturday: 09:00 AM - 07:00 PM', 
                    sub: 'Sunday: Closed' 
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="shrink-0 size-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                      <item.icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-slate-600 text-sm leading-relaxed hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
                      )}
                      {item.sub && <p className="text-slate-400 text-xs mt-1">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 relative group">
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="size-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm font-medium">Interactive Map Loading...</p>
                  <a 
                    href="https://www.google.com/maps/dir//Sunil+Khurana+%26+Associates,+Under+Fly+Over,+Shop+No.+35,+Kisan+Bhawan,+Assandh+-+Panipat+Rd,+Panipat,+Haryana+132103/@29.3948138,76.9433436,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ddbb494ef56b9:0x8e30b38b674e2adf!2m2!1d76.9626396!2d29.3948102" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-primary text-xs font-bold hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.434446487192!2d76.9604509754868!3d29.39481487525547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbb494ef56b9%3A0x8e30b38b674e2adf!2sSunil%20Khurana%20%26%20Associates!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7" id="contact-form">
            <Card className="p-8 md:p-10 shadow-xl border border-slate-100 rounded-3xl" hover={false}>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid-2">
                  <Input 
                    label="Full Name" 
                    placeholder="John Doe" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <Input 
                    label="Email Address" 
                    type="email" 
                    placeholder="john@example.com" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="grid-2">
                  <Input 
                    label="Phone Number" 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Select 
                    label="Service Required" 
                    options={serviceOptions} 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  />
                </div>
                <TextArea 
                  label="Your Message" 
                  rows={5} 
                  placeholder="Briefly describe your requirements..." 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <Button className="w-full py-4" icon={Send} type="submit">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <HelpCircle className="text-primary size-6" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="overflow-hidden border border-slate-200" hover={false}>
                    <button 
                      className="w-full px-6 py-4 flex-between text-left hover:bg-slate-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="font-bold text-slate-900">{faq.q}</span>
                      {openFaq === index ? <ChevronUp className="size-5 text-slate-400" /> : <ChevronDown className="size-5 text-slate-400" />}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50">
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
