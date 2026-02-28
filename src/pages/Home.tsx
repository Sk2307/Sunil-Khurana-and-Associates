import { Calendar, CheckCircle, ArrowRight, User, FileText, IndianRupee, Calculator, MapPin, UserCheck, Handshake, Gavel, Scale } from 'lucide-react';
import { Page } from '../App';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Card, { ServiceCard } from '../components/ui/Card';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 z-0"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-20 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Trusted Since 1998</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
                Sunil Khurana & Associates <br />
                <span className="text-primary relative inline-block">
                  Consultancy
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00025 6.99997C2.00025 6.99997 59.5002 2.99997 101 2.49997C142.5 1.99997 198 4.49997 198 4.49997" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                </span>
                &nbsp; in Panipat
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Dedicated to providing comprehensive legal and financial solutions for individuals and businesses. Led by Advocate Sunil Khurana, we navigate the complexities of law so you don't have to.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="h-12 px-8"
                  icon={Calendar}
                >
                  Book a Consultation
                </Button>
                <Button 
                  onClick={() => onNavigate('about')}
                  variant="outline"
                  size="lg"
                  className="h-12 px-8"
                >
                  Our Expertise
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-100">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="size-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <User className="text-slate-400 size-6" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold text-sm">500+ Clients Served</span>
                  <span className="text-slate-500 text-xs">Across Panipat & Haryana</span>
                </div>
              </div>
            </div>
            <div className="relative lg:h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-[4/5] lg:aspect-square max-w-md mx-auto lg:max-w-none group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl inline-block">
                    <p className="text-white font-bold text-lg">Advocate Sunil Khurana</p>
                    <p className="text-gold font-medium text-sm">Senior Consultant</p>
                  </div>
                </div>
                <img 
                  src="https://res.cloudinary.com/dgspnktah/image/upload/v1772288641/WhatsApp_Image_2026-02-28_at_19.52.08_kd20mb.jpg" 
                  alt="Advocate Sunil Khurana"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] z-30 hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Success Rate</p>
                    <p className="text-lg font-bold text-slate-900">98%</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-tight">Proven track record in tax disputes and resolution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background-light" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader 
              subtitle="Our Expertise"
              title="Professional Legal & Financial Services"
              description="We specialize in a wide range of financial and legal services tailored to your specific needs, ensuring compliance and peace of mind."
            />
            <button onClick={() => onNavigate('calculators')} className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
              Try our Calculators
              <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={Scale}
              title="GST Compliance"
              description="End-to-end GST solutions including registration, monthly/quarterly filing, annual returns, and advisory on complex GST matters."
              items={['GST Registration', 'GSTR-1 & 3B Filing', 'Notice Handling']}
              footer={
                <button onClick={() => onNavigate('contact')} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="size-4 ml-1" />
                </button>
              }
            />
            <ServiceCard 
              icon={IndianRupee}
              title="Income Tax Filing"
              description="Expert assistance with income tax returns for individuals and businesses. We help maximize your savings through strategic tax planning."
              accentColor="amber"
              items={['ITR Filing', 'Tax Planning', 'Audit Support']}
              footer={
                <button onClick={() => onNavigate('calculators')} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Calculate Tax <ArrowRight className="size-4 ml-1" />
                </button>
              }
            />
            <ServiceCard 
              icon={Gavel}
              title="Tax Appeals"
              description="Professional representation for Income Tax and GST appeals. We handle drafting of grounds of appeal and represent you before appellate authorities."
              accentColor="red"
              items={['Income Tax Appeals', 'GST Appeals', 'Tribunal Representation']}
              footer={
                <button onClick={() => onNavigate('contact')} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="size-4 ml-1" />
                </button>
              }
            />
            <ServiceCard 
              icon={Calculator}
              title="Accountancy"
              description="Comprehensive bookkeeping and financial statement preparation services to keep your business financial health in check."
              accentColor="purple"
              items={['Balance Sheets', 'P&L Accounts', 'Bookkeeping']}
              footer={
                <button onClick={() => onNavigate('contact')} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="size-4 ml-1" />
                </button>
              }
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            centered
            light
            subtitle="Why Choose Sunil Khurana & Associates"
            title="Local Expertise, Global Standards"
            description="We combine deep local knowledge of Panipat's business landscape with professional standards that rival top-tier firms."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { icon: MapPin, title: 'Panipat Based', desc: 'Deeply rooted in the local community with an office in the heart of the city.' },
              { icon: UserCheck, title: '25+ Years Experience', desc: 'Decades of experience handling complex tax and legal matters successfully.' },
              { icon: Handshake, title: 'Personalized Approach', desc: 'We treat every client as a partner, offering tailored solutions for your unique needs.' },
              { icon: Gavel, title: 'Legal Authority', desc: 'Representing clients in courts and tribunals with authority and confidence.' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <div className="size-16 rounded-full bg-slate-700 flex items-center justify-center mb-4 text-primary">
                  <item.icon className="size-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
              </svg>
            </div>
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to resolve your tax queries?</h2>
              <p className="text-blue-100 text-lg mb-0">Schedule a consultation with Advocate Sunil Khurana today and get professional guidance on your legal and financial matters.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <Button 
                onClick={() => onNavigate('contact')}
                variant="white"
                size="lg"
                className="py-4 px-8 rounded-xl hover:scale-105"
                icon={ArrowRight}
              >
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
