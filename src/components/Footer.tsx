import { Mail, Phone, MapPin, Globe, Shield, Calendar, CreditCard } from 'lucide-react';

interface FooterProps {
  setView: (view: string, extraData?: any) => void;
}

export default function Footer({ setView }: FooterProps) {
  const regionalCities = [
    { name: "Douala", country: "Cameroon" },
    { name: "Lagos", country: "Nigeria" },
    { name: "Nairobi", country: "Kenya" },
    { name: "Johannesburg", country: "South Africa" },
    { name: "Accra", country: "Ghana" },
    { name: "Abidjan", country: "Cote dIvoire" },
    { name: "Cairo", country: "Egypt" },
    { name: "Addis Ababa", country: "Ethiopia" },
    { name: "Dakar", country: "Senegal" },
    { name: "Dar es Salaam", country: "Tanzania" }
  ];

  return (
    <footer className="bg-brand-navy border-t border-white/10 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Row 1: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
              <div className="bg-brand-orange text-brand-navy p-2 rounded-sm mr-3 font-black text-xl italic">
                WBR
              </div>
              <div>
                <div className="font-black text-lg leading-none tracking-tighter">WBR TRANS LOGISTICS</div>
                <div className="text-[9px] text-brand-orange font-bold tracking-[0.2em] uppercase">Moving Africa Forward</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting people, goods and opportunities across all 54 African countries and the world through reliable, innovative logistics solutions.
            </p>
            <div className="flex space-x-3 text-xs">
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400 font-bold uppercase tracking-wider">ISO 9001:2015</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400 font-bold uppercase tracking-wider">IATA Member</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400 font-bold uppercase tracking-wider">FIATA Licensed</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => setView('services', { serviceId: 'road' })} className="hover:text-brand-orange transition-colors cursor-pointer text-left">
                  Road Freight (FTL & LTL)
                </button>
              </li>
              <li>
                <button onClick={() => setView('services', { serviceId: 'air' })} className="hover:text-brand-orange transition-colors cursor-pointer text-left">
                  Air Cargo Solutions
                </button>
              </li>
              <li>
                <button onClick={() => setView('services', { serviceId: 'ocean' })} className="hover:text-brand-orange transition-colors cursor-pointer text-left">
                  Ocean Container Freight
                </button>
              </li>
              <li>
                <button onClick={() => setView('services', { serviceId: 'rail' })} className="hover:text-brand-orange transition-colors cursor-pointer text-left">
                  Rail Freight Corridors
                </button>
              </li>
              <li>
                <button onClick={() => setView('services', { serviceId: 'warehouse' })} className="hover:text-brand-orange transition-colors cursor-pointer text-left">
                  Bonded & Cold Chain Warehousing
                </button>
              </li>
              <li>
                <button onClick={() => setView('services', { serviceId: 'customs' })} className="hover:text-brand-orange transition-colors cursor-pointer text-left">
                  Customs Brokerage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setView('about')} className="hover:text-brand-orange transition-colors cursor-pointer">Our Story & Leadership</button></li>
              <li><button onClick={() => setView('network')} className="hover:text-brand-orange transition-colors cursor-pointer">African Network Hubs</button></li>
              <li><button onClick={() => setView('industries')} className="hover:text-brand-orange transition-colors cursor-pointer">Industry Verticals</button></li>
              <li><button onClick={() => setView('quote')} className="hover:text-brand-orange transition-colors cursor-pointer">Get a Free Freight Quote</button></li>
              <li><button onClick={() => setView('contact')} className="hover:text-brand-orange transition-colors cursor-pointer">Contact Our Offices</button></li>
              <li><button onClick={() => setView('admin')} className="hover:text-brand-orange transition-colors cursor-pointer text-left">Admin Portal</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Douala HQ</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={16} className="text-brand-orange mr-2 mt-0.5 shrink-0" />
                <span>102 Boulevard de la Liberte, Douala Port Area, Cameroon</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-brand-orange mr-2 shrink-0" />
                <a href="tel:+237650000000" className="hover:text-brand-orange transition-colors">+237 650 000 000</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-brand-orange mr-2 shrink-0" />
                <a href="mailto:logistics@wbrtrans.com" className="hover:text-brand-orange transition-colors">logistics@wbrtrans.com</a>
              </li>
              <li className="flex items-center">
                <Calendar size={16} className="text-brand-orange mr-2 shrink-0" />
                <span>24 Hours / 7 Days Operational</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Regional offices strip */}
        <div className="py-6 border-b border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">Regional Hub Offices</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            {regionalCities.map((city, idx) => (
              <button
                key={city.name}
                onClick={() => setView('network')}
                className="text-gray-400 hover:text-brand-orange font-semibold transition-colors cursor-pointer"
              >
                {city.name} ({city.country}) {idx < regionalCities.length - 1 ? " |" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>
            &copy; 2025 WBR Trans Logistics. All rights reserved. Built for pan-African cargo excellence.
          </div>
          
          <div className="flex items-center space-x-2 text-[10px] text-gray-400 uppercase tracking-widest font-bold bg-white/5 px-3 py-1.5 rounded border border-white/5">
            <span className="mr-2">Accepted Payment Standards:</span>
            <span className="text-white">Bank Transfer</span>
            <span>•</span>
            <span className="text-white">Visa / Mastercard</span>
            <span>•</span>
            <span className="text-white">Mobile Money Pay</span>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Carriage</a>
            <span>|</span>
            <a href="#" className="hover:text-brand-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
