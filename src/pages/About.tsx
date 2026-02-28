import { Mail, Phone, Calculator, Gavel, Landmark, Building2, Users, Lightbulb, Scale } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

import { Page } from '../App';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] flex-col items-center justify-center gap-6 overflow-hidden bg-slate-900 px-4 py-20 text-center lg:py-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBpWn2BzQnMz9RhZb6VtL3meBOFHjRFxlBfYdlCrmXXlIElxxGS98joxdunWEvID_LKXwKZlCMCpBkIT_wuIRxoGz_OIv9oFIXiIIoz05pTHOA3Xh8ox4_8UriQfwVqDtEw_AzxNk8RlXiNNVWdKHrNlQfSUkg0jkDQo0GIUcmv6ULWW2ystGgLx-quZU_GK4kELN0Vk4pShGYdOJLu-u0CJulmf_OHbH65kSlJZgjrC83EyNj_GgGzZbmo5MeLs8aGXn4Ligq-pWw')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        <div className="relative z-20 flex max-w-4xl flex-col gap-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sunil Khurana & Associates:<br />Upholding Integrity
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-200 sm:text-xl">
            Since 1999, Sunil Khurana and Associates has been the premier choice for tax consultancy and legal advisory in Panipat and the wider Haryana region.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background-light section-padding">
        <div className="container-max flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <SectionHeader 
              subtitle="Our Story"
              title="A legacy of trust spanning nearly three decades."
            />
            <p className="text-lg leading-relaxed text-slate-600">
              Founded with a vision to simplify the complexities of the Indian legal and tax systems for businesses and individuals alike, our firm has grown from a modest practice to a leading consultancy in Haryana. We believe that legal counsel should not just be about solving problems, but preventing them.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Our deep roots in Panipat allow us to understand the local business landscape intimately, while our comprehensive knowledge of national laws ensures world-class compliance and advisory services.
            </p>
            <div className="mt-4 flex gap-8 border-l-4 border-primary pl-6">
              <div>
                <p className="text-3xl font-black text-slate-900">25+</p>
                <p className="text-sm font-medium text-slate-500">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">500+</p>
                <p className="text-sm font-medium text-slate-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">100%</p>
                <p className="text-sm font-medium text-slate-500">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/5]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZWgGqQ9zfi3xLI5mRju778-aK_wd62T_ub8kNk5Gbf_mnpGVI2ygOz0modQ27hI28YyCU4E1SjGeZHLnMroe_WR9q71-uOHeg6KToxUPNVJ2iIxEieTAFrFgkcy4fo6X81_zQel2yZlu_fqVFveFMisLftgPfzI_rQP1307VJHgA_RNlljiYDblKLiUkEZUmMLxWKbSl4VOcwW2RaVVoZYdIsBIyoz8ksZ9zQRe50exE44A5I1bqDI5ztxbkOm-RAq0_aB3dNprt7" 
                alt="Lawyers meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 size-full rounded-2xl bg-primary/10"></div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-20">
            <div className="flex-1">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl bg-slate-200 shadow-lg lg:mx-0">
                <img 
                  src="https://res.cloudinary.com/dgspnktah/image/upload/v1772288641/WhatsApp_Image_2026-02-28_at_19.52.08_kd20mb.jpg" 
                  alt="Sunil Khurana"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex flex-[1.5] flex-col gap-6">
              <h2 className="text-3xl font-bold leading-tight text-slate-900">Meet the Founder</h2>
              <h3 className="text-2xl font-bold text-primary">Sunil Khurana</h3>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Principal Attorney & Tax Consultant</p>
              <div className="space-y-4 text-slate-600">
                <p>
                  Sunil Khurana established this firm with a singular principle: <strong>Integrity above all</strong>. With over two decades of dedicated practice in the Punjab and Haryana High Court and various tribunals, he has garnered a reputation for astute legal strategy and an unshakeable commitment to his clients' interests.
                </p>
                <p>
                  Specializing in both direct and indirect taxation, as well as corporate law, Sunil brings a unique dual perspective that bridges the gap between financial planning and legal compliance.
                </p>
                <blockquote className="my-6 border-l-4 border-primary bg-slate-50 p-6 italic text-slate-700">
                  "Our goal isn't just to be your lawyers; we aim to be partners in your growth. Whether you are a startup in Panipat or an established conglomerate in Haryana, your peace of mind is our business."
                </blockquote>
              </div>
              <div className="flex gap-4 pt-4">
                <a 
                  href="mailto:khuranasunil15@gmail.com" 
                  className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-primary hover:text-white"
                  title="Email Sunil Khurana"
                >
                  <Mail className="size-5" />
                </a>
                <a 
                  href="tel:+919215377199" 
                  className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-primary hover:text-white"
                  title="Call Sunil Khurana"
                >
                  <Phone className="size-5" />
                </a>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="flex h-10 items-center justify-center rounded-full bg-slate-100 px-4 text-xs font-bold text-slate-600 transition hover:bg-primary hover:text-white"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <SectionHeader 
            centered
            subtitle="Our Expertise"
            title="Comprehensive Solutions for Complex Challenges"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Calculator, title: 'Tax Consultancy', desc: 'Expert guidance on Income Tax filing, GST compliance, and navigating complex regulatory audits for businesses.' },
              { icon: Gavel, title: 'Tax Appeals', desc: 'Representation in Income Tax and GST appeals before Commissioner (Appeals) and Tribunals, ensuring your rights are protected.' },
              { icon: Scale, title: 'Corporate Law', desc: 'Full-spectrum legal advisory for business incorporation, contract drafting, mergers, and dispute resolution.' },
              { icon: Landmark, title: 'Financial Planning', desc: 'Strategic wealth management and estate planning to secure your future assets and ensure legacy protection.' },
              { icon: Building2, title: 'Property Law', desc: 'Assistance with property registration, due diligence, lease agreements, and real estate litigation in Haryana.' },
              { icon: Lightbulb, title: 'Startup Advisory', desc: 'End-to-end guidance for new ventures, from IP protection to regulatory filings and funding compliance.' },
            ].map((item, idx) => (
              <Card key={idx} className="group flex flex-col gap-4 p-8">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
