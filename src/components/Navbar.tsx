import { useState } from 'react';
import { Phone, Mail, Globe, Menu, X, ChevronDown, ShieldAlert, FileText, Map, Landmark, Info, Home, Truck, Landmark as ShipIcon, Plane, Warehouse, HelpCircle, HardHat, Link, Compass, Activity, Lock } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setView: (view: string, extraData?: any) => void;
}

export default function Navbar({ currentView, setView }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');

  const services = [
    { name: "Road Freight", id: "road" },
    { name: "Air Freight", id: "air" },
    { name: "Ocean Freight", id: "ocean" },
    { name: "Rail Freight", id: "rail" },
    { name: "Warehousing", id: "warehouse" },
    { name: "Customs Clearance", id: "customs" },
    { name: "Project Cargo", id: "project" },
    { name: "Supply Chain Solutions", id: "supply-chain" }
  ];

  const handleServiceClick = (serviceId: string) => {
    setView('services', { serviceId });
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", view: "home" },
    { label: "Track Shipment", view: "tracking" },
    { label: "Get Quote", view: "quote" },
    { label: "Network", view: "network" },
    { label: "Industries", view: "industries" },
    { label: "About", view: "about" },
    { label: "Contact", view: "contact" }
  ];

  return (
    <header className="w-full z-50 sticky top-0 shadow-md">
      {/* Top Bar */}
      <div className="bg-brand-orange text-white py-2 px-4 sm:px-6 lg:px-8 text-xs font-medium flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:+237650000000" className="flex items-center hover:text-brand-navy transition-colors">
            <Phone size={13} className="mr-1.5" />
            <span>24/7 Support: +237 650 000 000</span>
          </a>
          <span className="hidden md:inline text-orange-200">|</span>
          <a href="mailto:logistics@wbrtrans.com" className="hidden md:flex items-center hover:text-brand-navy transition-colors">
            <Mail size={13} className="mr-1.5" />
            <span>logistics@wbrtrans.com</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setView('tracking')} 
            className="hover:underline flex items-center cursor-pointer text-white"
          >
            <Activity size={13} className="mr-1" />
            <span>Quick Track</span>
          </button>
          <span className="text-orange-200">|</span>
          <div className="flex items-center space-x-1">
            <Globe size={13} />
            <button 
              onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')} 
              className="hover:text-brand-navy transition-colors font-semibold cursor-pointer"
            >
              {lang}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-brand-navy text-white py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => setView('home')} 
            className="flex items-center cursor-pointer group select-none"
          >
            <div className="bg-brand-orange text-brand-navy p-2 rounded-lg mr-3 flex items-center justify-center font-black text-xl tracking-wider transition-transform duration-300 group-hover:scale-105">
              WBR
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-brand-orange font-black text-xl tracking-wider mr-1.5">TRANS</span>
                <span className="text-white font-bold text-xl tracking-wider">LOGISTICS</span>
              </div>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Moving Africa Forward</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => setView('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md hover:text-brand-orange transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-brand-orange border-b-2 border-brand-orange rounded-none' : 'text-gray-200'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3 py-2 text-sm font-medium rounded-md hover:text-brand-orange transition-colors inline-flex items-center cursor-pointer ${
                  currentView === 'services' ? 'text-brand-orange border-b-2 border-brand-orange rounded-none' : 'text-gray-200'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={14} className="ml-1" />
              </button>

              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-brand-navy border border-gray-800 rounded-lg shadow-2xl py-2 z-50 animate-fade-in"
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="grid grid-cols-1 divide-y divide-gray-800">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.id)}
                        className="w-full text-left px-4 py-2.5 text-xs font-medium text-gray-200 hover:bg-gray-800 hover:text-brand-orange transition-all flex items-center justify-between cursor-pointer"
                      >
                        <span>{service.name}</span>
                        <span className="text-brand-orange opacity-0 hover:opacity-100 font-bold">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <button
                key={link.view}
                onClick={() => setView(link.view)}
                className={`px-3 py-2 text-sm font-medium rounded-md hover:text-brand-orange transition-colors cursor-pointer ${
                  currentView === link.view ? 'text-brand-orange border-b-2 border-brand-orange rounded-none' : 'text-gray-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setView('quote')}
              className="bg-brand-orange text-white hover:bg-orange-600 font-bold px-4 py-2 rounded text-sm transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => setView('admin')}
              className={`p-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer ${
                currentView === 'admin' ? 'text-brand-orange bg-gray-800' : 'text-gray-300'
              }`}
              title="Admin Panel"
            >
              <Lock size={18} />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setView('admin')}
              className="p-1.5 rounded-full hover:bg-gray-800 text-gray-300 cursor-pointer"
              title="Admin Panel"
            >
              <Lock size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-brand-orange focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navy border-t border-gray-800 py-4 px-4 space-y-3 absolute top-full left-0 w-full shadow-2xl z-40 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => { setView('home'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-md font-medium text-sm ${currentView === 'home' ? 'bg-gray-800 text-brand-orange' : 'text-gray-200 hover:bg-gray-800'}`}
            >
              Home
            </button>

            {/* Mobile Services list expanded */}
            <div className="border border-gray-800 rounded-md p-2 bg-gray-950/40">
              <p className="text-xs font-semibold text-gray-400 px-3 py-1 uppercase tracking-wider">Our Services</p>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full text-left px-3 py-1.5 text-xs text-gray-300 hover:text-brand-orange hover:bg-gray-800 rounded transition-colors"
                  >
                    • {service.name}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <button
                key={link.view}
                onClick={() => { setView(link.view); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-md font-medium text-sm ${currentView === link.view ? 'bg-gray-800 text-brand-orange' : 'text-gray-200 hover:bg-gray-800'}`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 border-t border-gray-800 flex flex-col space-y-2">
              <button
                onClick={() => { setView('quote'); setMobileMenuOpen(false); }}
                className="w-full bg-brand-orange text-white text-center py-2.5 rounded font-bold hover:bg-orange-600 transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
