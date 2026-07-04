import { useState, useEffect } from 'react';
import { Truck, Plane, Ship, Shield, Cpu, Sparkles, MapPin, Search, ArrowRight, Star, Award, Layers, Flame, FileText, ChevronRight, Anchor, Train, Box, Anchor as CraneIcon, Link as ChainIcon } from 'lucide-react';

interface HomeViewProps {
  setView: (view: string, extraData?: any) => void;
}

export default function HomeView({ setView }: HomeViewProps) {
  const [trackNum, setTrackNum] = useState('');
  const [counters, setCounters] = useState({
    countries: 0,
    fleet: 0,
    years: 0,
    tons: 0,
    airlines: 0,
    ontime: 0
  });

  // Count up animation
  useEffect(() => {
    const duration = 1200; // ms
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        countries: Math.min(Math.floor((54 / steps) * currentStep), 54),
        fleet: Math.min(Math.floor((2500 / steps) * currentStep), 2500),
        years: Math.min(Math.floor((15 / steps) * currentStep), 15),
        tons: Math.min(Math.floor((50000 / steps) * currentStep), 50000),
        airlines: Math.min(Math.floor((99 / steps) * currentStep), 99),
        ontime: Math.min(parseFloat(((98.7 / steps) * currentStep).toFixed(1)), 98.7)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackNum.trim()) {
      setView('tracking', { trackingNumber: trackNum.trim() });
    }
  };

  const servicePreviews = [
    { id: 'road', name: "Road Freight", icon: Truck, text: "Door-to-door trucking across all African road corridors. Full load (FTL) and partial load (LTL) solutions." },
    { id: 'air', name: "Air Freight", icon: Plane, text: "Express air cargo connecting Africa to 99 global airlines. Time-sensitive, high-value cargo specialists." },
    { id: 'ocean', name: "Ocean Freight", icon: Ship, text: "FCL and LCL container solutions through all major African ports. Competitive rates, full visibility." },
    { id: 'rail', name: "Rail Freight", icon: Train, text: "Emerging rail corridors including SGR Kenya, TAZARA, and new AfCFTA rail initiatives." },
    { id: 'warehouse', name: "Warehousing", icon: Box, text: "2.5 million sqm of warehouse space across 43 African cities. Bonded, cold chain and e-commerce fulfillment." },
    { id: 'customs', name: "Customs Clearance", icon: Shield, text: "Licensed customs brokers in all 54 African countries. Fast, compliant, hassle-free clearance." },
    { id: 'project', name: "Project Cargo", icon: CraneIcon, text: "Heavy lift, oversized, and project cargo specialists. Oil and gas, mining, infrastructure." },
    { id: 'supply-chain', name: "Supply Chain Solutions", icon: ChainIcon, text: "End-to-end supply chain design, optimization and management for African operations." }
  ];

  const corridors = [
    { name: "West Africa Corridor", route: "Lagos - Accra - Abidjan - Dakar", color: "from-[#FF6B00] to-orange-500" },
    { name: "East Africa Corridor", route: "Nairobi - Dar es Salaam - Kampala - Kigali", color: "from-[#00B4D8] to-blue-500" },
    { name: "Central Africa Corridor", route: "Douala - Bangui - Brazzaville - Kinshasa", color: "from-[#06D6A0] to-emerald-500" },
    { name: "Southern Africa Corridor", route: "Johannesburg - Lusaka - Harare - Maputo", color: "from-purple-500 to-indigo-500" },
    { name: "North Africa Corridor", route: "Cairo - Tunis - Algiers - Casablanca", color: "from-amber-500 to-yellow-500" },
    { name: "Trans-Saharan Corridor", route: "Algiers - Niamey - Kano - Lagos", color: "from-red-500 to-pink-500" }
  ];

  const partners = [
    "African Development Bank", "African Union", "ECOWAS", "Port of Mombasa", 
    "Port of Lagos", "Ethiopian Airlines", "Kenya Airways", "Air France Cargo", 
    "Maersk Africa", "MSC"
  ];

  return (
    <div className="bg-[#1A1A2E] text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" 
            className="w-full h-full object-cover brightness-50" 
            alt="Cargo Logistics" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto lg:mx-0 w-full">
          <div className="flex items-center gap-2 mb-4 animate-pulse">
            <div className="h-1 w-12 bg-brand-orange"></div>
            <span className="uppercase text-brand-orange font-bold tracking-[0.3em] text-xs">PAN-AFRICAN EXCELLENCE</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
            MOVING AFRICA<br />
            <span className="text-brand-orange">FORWARD</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            WBR Trans Logistics is the pan-African transport giant moving cargo across all 54 African countries. Connect your business to global corridors through our robust network.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button 
              onClick={() => setView('quote')}
              className="bg-brand-orange hover:bg-orange-600 text-white font-black px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-orange-500/40"
            >
              Get Instant Quote
            </button>
            <button 
              onClick={() => setView('tracking')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-black px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-all cursor-pointer"
            >
              Track Shipment
            </button>
          </div>

          {/* Connected Network Animation preview */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center gap-6 text-xs text-gray-400">
            <span className="font-semibold text-brand-orange uppercase tracking-wider">Active Hubs:</span>
            <div className="flex flex-wrap gap-3">
              {['Douala HQ', 'Lagos', 'Nairobi', 'Johannesburg', 'Cairo', 'Abidjan'].map((hub) => (
                <span key={hub} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded flex items-center space-x-1.5 hover:border-brand-orange/40 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-brand-orange animate-ping"></span>
                  <span className="text-gray-200">{hub}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Stats Graphic (Absolute desktop preview only) */}
        <div className="hidden xl:block absolute bottom-16 right-16 z-10 max-w-sm">
          <div className="bg-[#1A1A2E]/90 border-l-4 border-brand-orange p-6 backdrop-blur-md rounded-sm border border-white/5 shadow-2xl">
            <div className="text-4xl font-black text-white">1,250+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Shipments Dispatched Today</div>
            <p className="text-xs text-gray-400 mt-2">Continuous dispatching operational across all West, East, Central, and Southern regional land ports.</p>
            <div className="mt-4 flex gap-1">
              <div className="h-1 w-8 bg-brand-orange"></div>
              <div className="h-1 w-4 bg-brand-orange/40"></div>
              <div className="h-1 w-4 bg-brand-orange/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TICKER BAR */}
      <div className="bg-brand-navy border-y border-white/10 h-12 flex items-center overflow-hidden">
        <div className="w-full relative flex items-center">
          <div className="absolute left-0 bg-brand-orange text-brand-navy font-bold text-xs uppercase px-4 py-1 z-10 skew-x-12 select-none shrink-0 ml-4">
            NETWORK UPDATE
          </div>
          <div className="overflow-hidden w-full h-full flex items-center">
            <div className="animate-ticker text-[11px] font-bold uppercase tracking-widest text-gray-200 space-x-16">
              <span>WBR Trans Logistics now operating in Guinea, Gabon and Congo</span>
              <span className="text-brand-orange">•</span>
              <span>New Douala-Lagos express corridor launched - 48hr transit</span>
              <span className="text-brand-orange">•</span>
              <span>WBR achieves ISO 9001:2015 certification</span>
              <span className="text-brand-orange">•</span>
              <span>New cold chain facility opened in Nairobi serving East Africa</span>
              <span className="text-brand-orange">•</span>
              {/* Duplicate for seamless scrolling */}
              <span>WBR Trans Logistics now operating in Guinea, Gabon and Congo</span>
              <span className="text-brand-orange">•</span>
              <span>New Douala-Lagos express corridor launched - 48hr transit</span>
              <span className="text-brand-orange">•</span>
              <span>WBR achieves ISO 9001:2015 certification</span>
              <span className="text-brand-orange">•</span>
              <span>New cold chain facility opened in Nairobi serving East Africa</span>
              <span className="text-brand-orange">•</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STATS SECTION */}
      <section className="bg-brand-navy py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded hover:border-brand-orange/30 transition-all group cursor-default text-center">
              <div className="text-4xl sm:text-5xl font-black text-brand-orange mb-1 group-hover:scale-105 transition-transform">{counters.countries}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Countries Served</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded hover:border-brand-orange/30 transition-all group cursor-default text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-1 group-hover:scale-105 transition-transform">{counters.fleet.toLocaleString()}+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Fleet Vehicles</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded hover:border-brand-orange/30 transition-all group cursor-default text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-1 group-hover:scale-105 transition-transform">{counters.years}+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Years Experience</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded hover:border-brand-orange/30 transition-all group cursor-default text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-1 group-hover:scale-105 transition-transform">{(counters.tons / 1000).toFixed(0)}k+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Tons Moved Monthly</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded hover:border-brand-orange/30 transition-all group cursor-default text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-1 group-hover:scale-105 transition-transform">{counters.airlines}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Partner Airlines</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded hover:border-brand-orange/30 transition-all group cursor-default text-center">
              <div className="text-4xl sm:text-5xl font-black text-brand-green mb-1 group-hover:scale-105 transition-transform">{counters.ontime}%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/25">Comprehensive Logistics</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-4">WHAT WE DO BEST</h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">Customized supply chain services designed to power African industrial growth and global import/export flows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePreviews.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id}
                  onClick={() => setView('services', { serviceId: service.id })}
                  className="bg-gradient-to-br from-brand-navy/60 to-brand-navy border border-white/10 p-6 rounded hover:-translate-y-2 transition-all duration-300 hover:border-brand-orange cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                      <IconComp size={24} className="text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-brand-orange transition-colors">{service.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{service.text}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-bold text-brand-orange">
                    <span>EXPLORE CAPABILITIES</span>
                    <ChevronRight size={14} className="ml-1 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. AFRICA MAP SECTION */}
      <section className="py-20 bg-black/40 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Corridor Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Trade Lifelines</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase">PAN-AFRICAN CORRIDORS</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We manage integrated highway, rail, and coastal water transport chains. By standardizing processes along regional transport corridors, we keep shipments moving smoothly through borders.
            </p>

            <div className="space-y-3">
              {corridors.map((c) => (
                <div key={c.name} className="p-3.5 bg-brand-navy border border-white/5 hover:border-brand-orange/30 rounded transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs text-white uppercase tracking-wider">{c.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-brand-orange/10 text-brand-orange rounded">Active</span>
                  </div>
                  <p className="text-xs text-gray-400 font-mono">{c.route}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setView('network')}
              className="bg-brand-orange text-white hover:bg-orange-600 font-bold px-6 py-3 rounded text-xs uppercase tracking-widest transition-all cursor-pointer inline-flex items-center"
            >
              <span>Explore Network Hubs</span>
              <ArrowRight size={14} className="ml-2" />
            </button>
          </div>

          {/* Interactive CSS Africa Corridors Map Right */}
          <div className="lg:col-span-7 bg-[#1A1A2E]/80 border border-white/10 rounded-lg p-6 relative min-h-[500px] flex flex-col justify-between">
            <div className="absolute top-4 left-4">
              <span className="text-xs font-bold text-brand-orange font-mono">WBR-CORE-TRANSIT-GRID-LIVE</span>
              <p className="text-[10px] text-gray-500 font-mono">Status: Connected to all 54 country offices</p>
            </div>

            {/* Simulated Grid Connections representing Africa map */}
            <div className="flex-1 flex items-center justify-center my-6 relative">
              <div className="relative w-72 h-80 border border-white/5 rounded bg-black/20 p-4 flex flex-col justify-between text-xs font-mono">
                {/* Visual Node Links overlaying */}
                <div className="absolute top-6 left-12 group">
                  <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#FF6B00] opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B00]"></span>
                  <span className="absolute left-4 bg-brand-navy px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-white">Dakar</span>
                </div>

                <div className="absolute top-1/4 left-1/4 group">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B00]"></span>
                  <span className="absolute left-4 bg-brand-navy px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-white">Abidjan</span>
                </div>

                <div className="absolute top-1/3 left-1/3 group">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B00] animate-pulse"></span>
                  <span className="absolute left-4 bg-brand-navy px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-white font-bold text-brand-orange">Lagos</span>
                </div>

                <div className="absolute top-[45%] left-[45%] group">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-brand-orange opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-orange"></span>
                  <span className="absolute left-5 bg-brand-orange text-brand-navy px-1.5 py-0.5 rounded font-black text-[9px]">Douala HQ</span>
                </div>

                <div className="absolute top-10 right-10 group">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-sky"></span>
                  <span className="absolute left-4 bg-brand-navy px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-white">Cairo</span>
                </div>

                <div className="absolute top-1/3 right-12 group">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
                  <span className="absolute left-4 bg-brand-navy px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-white">Addis Ababa</span>
                </div>

                <div className="absolute top-1/2 right-6 group">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-sky"></span>
                  <span className="absolute left-4 bg-brand-navy px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-white">Nairobi</span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 group">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-sky"></span>
                  <span className="absolute left-4 bg-brand-navy px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-white font-bold">Johannesburg</span>
                </div>

                {/* Drawn lines connecting */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '100%' }}>
                  {/* Dakar - Abidjan */}
                  <line x1="48" y1="24" x2="72" y2="80" stroke="#FF6B00" strokeWidth="1" strokeDasharray="3,3" />
                  {/* Abidjan - Lagos */}
                  <line x1="72" y1="80" x2="96" y2="106" stroke="#FF6B00" strokeWidth="1" />
                  {/* Lagos - Douala */}
                  <line x1="96" y1="106" x2="130" y2="144" stroke="#FF6B00" strokeWidth="1.5" />
                  {/* Douala - Johannesburg */}
                  <line x1="130" y1="144" x2="216" y2="240" stroke="#FF6B00" strokeWidth="1" strokeDasharray="2,2" />
                  {/* Cairo - Addis */}
                  <line x1="262" y1="40" x2="252" y2="106" stroke="#00B4D8" strokeWidth="1" />
                  {/* Addis - Nairobi */}
                  <line x1="252" y1="106" x2="268" y2="160" stroke="#00B4D8" strokeWidth="1" />
                  {/* Nairobi - Johannesburg */}
                  <line x1="268" y1="160" x2="216" y2="240" stroke="#00B4D8" strokeWidth="1" />
                  {/* Douala - Nairobi */}
                  <line x1="130" y1="144" x2="268" y2="160" stroke="#FF6B00" strokeWidth="1" strokeDasharray="3,3" />
                </svg>

                <div className="mt-auto text-center text-[10px] text-gray-500 font-mono">
                  Schematic Corridor Map
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
              <span className="text-gray-400">Total cross border customs checkpoints registered:</span>
              <span className="font-bold text-brand-orange font-mono">148 Stations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Sector Competencies</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-4">INDUSTRIES WE SERVE</h2>
            <p className="text-gray-400 text-sm mt-2">Tailored logistics models specialized in tackling localized challenges for key African economic sectors.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Agriculture & Food", desc: "Refrigerated transport logs." },
              { name: "Oil & Gas", desc: "Offshore rigging freight." },
              { name: "Mining & Minerals", desc: "Heavylift minerals escort." },
              { name: "Healthcare & Pharma", desc: "Life saving cold chain." },
              { name: "Retail & E-Commerce", desc: "Daily fulfillment center." },
              { name: "Construction & Infra", desc: "Sourcing structural steel." },
              { name: "Manufacturing & JIT", desc: "Line feed logistics." },
              { name: "Aid & NGO Relief", desc: "Rapid disaster support." },
              { name: "Automotive & Fleet", desc: "Dealer spares dispatch." },
              { name: "Technology & Telecom", desc: "High value mobile towers." }
            ].map((ind, index) => (
              <div 
                key={ind.name}
                onClick={() => setView('industries')}
                className="bg-white/[0.02] border border-white/10 p-5 rounded hover:border-brand-orange transition-all cursor-pointer group flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <div className="text-brand-orange font-mono text-xs font-bold mb-3">0{index + 1}</div>
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider group-hover:text-brand-orange transition-colors">{ind.name}</h3>
                </div>
                <p className="text-[11px] text-gray-500 mt-2">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRACKING PREVIEW */}
      <section className="py-16 bg-black/20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase mb-4">REAL-TIME SHIPMENT TRACKING</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
            Instantly view current shipment status, border clearance approvals, and estimated delivery timeline. Use demo tracking number <strong className="text-brand-orange">WBR-2025-00001</strong> to preview.
          </p>

          <form onSubmit={handleTrackSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2 bg-brand-navy p-2 rounded border border-white/10 shadow-xl">
            <input 
              type="text" 
              placeholder="Enter WBR tracking number (e.g. WBR-2025-00001)..."
              value={trackNum}
              onChange={(e) => setTrackNum(e.target.value)}
              className="bg-transparent text-white px-4 py-3 outline-none text-sm font-mono flex-1 rounded placeholder-gray-500"
              required
            />
            <button 
              type="submit" 
              className="bg-brand-orange text-white hover:bg-orange-600 font-bold px-6 py-3 rounded text-xs uppercase tracking-widest transition-all cursor-pointer inline-flex items-center justify-center shrink-0"
            >
              <span>Track Now</span>
              <Search size={14} className="ml-2" />
            </button>
          </form>
        </div>
      </section>

      {/* 8. WHY CHOOSE WBR */}
      <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Unfair Advantage</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-4">WHY INDUSTRY LEADERS TRUST WBR</h2>
            <p className="text-gray-400 text-sm mt-2">Pioneering freight solutions with uncompromised network integrity across the African continent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pan-African Network", desc: "The only logistics giant with direct local office control and assets in all 54 African countries." },
              { title: "Technology-First Core", desc: "Real-time fleet tracking, digital pre-clearance manifests, and live cargo temperature sensors." },
              { title: "Border Local Expertise", desc: "Over 15,000 native professionals fluent in regional regulations, ports, and border crossings." },
              { title: "Green Sustainability Plan", desc: "Targeting 30% low emission logistics vehicles by 2028 and carbon-neutral warehouses by 2035." },
              { title: "Continuous Security Control", desc: "24/7 central tracking centers with immediate emergency escort partnerships." },
              { title: "AfCFTA Compliance", desc: "A pioneer of simplified intra-African duties and compliant continental shipping procedures." }
            ].map((feat) => (
              <div key={feat.title} className="p-6 bg-white/[0.01] border border-white/5 rounded-lg hover:border-brand-orange/30 transition-all">
                <div className="h-1.5 w-10 bg-brand-orange mb-4"></div>
                <h3 className="font-bold text-lg uppercase tracking-wide text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PARTNERS LOGOS STRIP */}
      <section className="py-12 bg-black/30 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-widest font-black text-center text-gray-500 mb-6">Strategic Cargo & Institutional Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {partners.map((partner) => (
              <span key={partner} className="font-bold text-sm tracking-tighter text-gray-400 font-display select-none uppercase hover:text-white hover:opacity-100 transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-20 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Proven Performance</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-4">CLIENT TESTIMONIALS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "WBR moved 500 tons of mining equipment from Johannesburg to DRC in record time. Absolute professionals who understand complex routes.",
                author: "Thomas Mvondo",
                role: "Operations Director, African Mining Corp"
              },
              {
                text: "Our pharmaceutical cold chain from Cairo to Lagos has never been more reliable. Continuous monitoring ensured 100 percent product integrity.",
                author: "Dr. Aisha Kamara",
                role: "Supply Chain Director, PharmAfrica Ltd"
              },
              {
                text: "WBR handles our entire West Africa consumer goods distribution. They know every route, every harbor regulation, and local border compliance.",
                author: "Jean-Pierre Bekolo",
                role: "CEO, FMCG Continental"
              }
            ].map((test, index) => (
              <div key={index} className="p-8 bg-white/[0.02] border border-white/5 rounded relative flex flex-col justify-between">
                <span className="absolute top-4 right-6 text-7xl text-brand-orange/10 font-serif select-none">“</span>
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  {test.text}
                </p>
                <div>
                  <div className="h-0.5 w-8 bg-brand-orange mb-3"></div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">{test.author}</h4>
                  <p className="text-[10px] text-gray-500 font-mono">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. NEWS SECTION */}
      <section className="py-20 bg-black/20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Press & Insights</span>
              <h2 className="text-4xl font-black uppercase mt-2">LATEST CORPORATE NEWS</h2>
            </div>
            <button 
              onClick={() => setView('about')}
              className="text-brand-orange hover:underline font-bold text-sm tracking-wide inline-flex items-center cursor-pointer"
            >
              <span>View All Company Updates</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "WBR Trans Logistics Launches New Douala-Lagos Express Corridor",
                date: "June 25, 2026",
                img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
                summary: "New express transit route cuts road transport times between Cameroon and Nigeria down to 48 hours with guaranteed custom pre clearance."
              },
              {
                title: "WBR Achieves ISO 9001:2015 Certification for All African Operations",
                date: "May 18, 2026",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
                summary: "The certification guarantees premium quality management across our entire supply chain networks in 54 African countries."
              },
              {
                title: "New Cold Chain Facility Opens in Nairobi Serving East Africa",
                date: "April 12, 2026",
                img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
                summary: "State of the art chilled storage hub supports pharmaceutical distribution and fresh agricultural exports across the region."
              }
            ].map((news, index) => (
              <div key={index} className="bg-brand-navy border border-white/5 rounded overflow-hidden hover:border-brand-orange transition-all duration-300 group">
                <div className="h-48 overflow-hidden relative">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="News article" />
                  <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded">ANNOUNCEMENT</span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-mono text-gray-500 mb-2">{news.date}</p>
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-brand-orange transition-colors uppercase leading-tight line-clamp-2">{news.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">{news.summary}</p>
                  <button 
                    onClick={() => setView('about')}
                    className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center cursor-pointer"
                  >
                    <span>Read Full Release</span>
                    <ArrowRight size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA BANNER */}
      <section className="bg-gradient-to-r from-brand-orange to-amber-600 py-16 px-4 sm:px-6 lg:px-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            READY TO MOVE YOUR CARGO ACROSS AFRICA?
          </h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Experience reliable, fully compliant, and real-time tracked container transportation. Get a customized quote in under 2 minutes.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => setView('quote')}
              className="bg-brand-navy hover:bg-black text-white font-black px-10 py-5 rounded-sm text-sm uppercase tracking-widest transition-all cursor-pointer shadow-2xl hover:shadow-black/50"
            >
              Get Free Quote Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
