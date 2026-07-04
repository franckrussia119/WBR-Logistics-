import { useState } from 'react';
import { Truck, Plane, Ship, Train, Box, Shield, Anchor, Link as ChainIcon, Download, CheckCircle, ChevronRight, HelpCircle, FileText, ArrowRight } from 'lucide-react';

interface ServicesViewProps {
  initialServiceId?: string;
  setView: (view: string, extraData?: any) => void;
}

export default function ServicesView({ initialServiceId, setView }: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState(initialServiceId || 'road');
  const [brochureRequested, setBrochureRequested] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');

  const servicesData = [
    {
      id: 'road',
      name: "Road Freight",
      icon: Truck,
      tagline: "Intra-African Road Haulage Networks",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      description: "We operate a premium fleet of over 2,500 tracked transport vehicles across the continent, offering both Full Truckload (FTL) and Less than Truckload (LTL) solutions. Our vehicles are modified specifically to withstand difficult terrains.",
      features: [
        "GPS container locking systems with live automated alerts",
        "Scheduled cross-border consolidated services to avoid cargo delays",
        "24/7 technical mechanical dispatch backup along major roads",
        "Pre-cleared customs documentation integrated at border checkpoints",
        "Comprehensive cargo liability insurance standards"
      ],
      industries: ["Agriculture & Food", "Mining & Minerals", "Retail & E-Commerce", "Aid & NGO Relief"],
      stats: { primary: "2.5k+", label: "Fleet Vehicles", secondary: "48 hours", sublabel: "Douala-Lagos Transit" }
    },
    {
      id: 'air',
      name: "Air Freight",
      icon: Plane,
      tagline: "Express Time-Critical Air Cargo",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      description: "For highly sensitive, precious, or perishable cargoes, WBR partners with 99 major airlines and operates dedicated charter flights connecting all major African capitals to key global hubs in Europe, Asia, and the Americas.",
      features: [
        "Direct cold chain tarmac handling for pharmaceutical vaccines",
        "Dedicated weekly air charter routes linking Johannesburg, Douala, and Paris",
        "Express terminal pre-clearance and fast priority delivery",
        "High security cargo vaults for gold, gems, and bank assets",
        "Real-time air cargo tracking with temperature log integration"
      ],
      industries: ["Healthcare & Pharma", "Technology & Telecom", "Agriculture & Food", "Automotive"],
      stats: { primary: "99", label: "Partner Airlines", secondary: "24-48h", sublabel: "Continent-Wide Express" }
    },
    {
      id: 'ocean',
      name: "Ocean Freight",
      icon: Ship,
      tagline: "Global Maritime Import & Export Connections",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
      description: "Connecting Africa to the global economy through strategic sea lanes. We maintain dedicated terminal allotments at all premier African ports, guaranteeing hassle-free arrivals, stable rates, and swift custom clearance.",
      features: [
        "Full Container Load (FCL) and Less than Container Load (LCL) consolidation",
        "Priority berthing agreements at the congested Port of Mombasa and Port of Lagos",
        "Direct coastal sea feeder networks for smaller regional harbors",
        "Expert marine cargo surveyors and freight brokers on site",
        "Specialized open-top, flat-rack, and reefer container options"
      ],
      industries: ["Manufacturing", "Mining & Minerals", "Construction & Infra", "Retail & E-Commerce"],
      stats: { primary: "50k+", label: "Monthly Tons Moved", secondary: "20+", sublabel: "Connected Ports" }
    },
    {
      id: 'rail',
      name: "Rail Freight",
      icon: Train,
      tagline: "High-Volume Continental Rail Corridors",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      description: "WBR is at the absolute forefront of capitalizing on the emerging African rail networks. We utilize high-speed rail lines to move heavy bulk industrial goods and commodities cheaply and sustainably.",
      features: [
        "Direct integration with Kenya's Standard Gauge Railway (SGR) cargo yards",
        "Bulk commodity shipping for agricultural grains and mining metals",
        "Significant fuel-efficiency gains over conventional long-haul trucking",
        "Inland container rail yards (ICD) connected directly to major port hubs",
        "Coordinated rail-to-truck container transshipments"
      ],
      industries: ["Mining & Minerals", "Agriculture & Food", "Construction & Infra", "Manufacturing"],
      stats: { primary: "15k+", label: "Rail Tons/Month", secondary: "-30%", sublabel: "Carbon Footprint vs Road" }
    },
    {
      id: 'warehouse',
      name: "Warehousing",
      icon: Box,
      tagline: "Secure Multi-City Distribution Parks",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      description: "We operate over 2.5 million square meters of state-of-the-art warehouse space distributed across 43 major African cities. From custom bonded zones to cold chain depots, we maintain continuous storage safety.",
      features: [
        "Pharma-certified cold chain zones sustaining up to -70C levels",
        "Custom bonded warehousing to delay import duties until distribution",
        "Automated digital inventory systems with real-time API integrations",
        "Continuous security guards, CCTV surveillance, and solar energy grids",
        "Express e-commerce fulfillment picking and regional sorting"
      ],
      industries: ["Retail & E-Commerce", "Healthcare & Pharma", "Agriculture & Food", "Technology & Telecom"],
      stats: { primary: "2.5M", label: "Sqm Storage Space", secondary: "43", sublabel: "Cities with WBR Depots" }
    },
    {
      id: 'customs',
      name: "Customs Clearance",
      icon: Shield,
      tagline: "Fast & Fully Compliant Customs Brokerage",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      description: "Navigating complex border regulations across 54 jurisdictions is our primary expertise. Our highly experienced in-house licensed customs brokers guarantee complete compliance and rapid releases.",
      features: [
        "Proprietary digital pre-clearance gateway reducing wait times",
        "Expert classification of custom codes and tariff exemption audits",
        "Direct partnerships with port and customs regulatory bodies",
        "Humanitarian aid tax exemption processing specialists",
        "Customs bonds and fiscal representation services available"
      ],
      industries: ["Manufacturing", "Aid & NGO Relief", "Automotive", "Healthcare & Pharma"],
      stats: { primary: "100%", label: "Compliant Filing Rate", secondary: "6 hours", sublabel: "Average Release Time" }
    },
    {
      id: 'project',
      name: "Project Cargo",
      icon: Anchor, // Replacing CraneIcon with Anchor for standard Lucide compliance
      tagline: "Heavy-Lift & Industrial Project logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      description: "When cargo is oversized, extremely heavy, or requires complex route engineering, WBRs specialized Project Cargo division takes over. We deliver infrastructure parts to remote projects.",
      features: [
        "Hydraulic multi-axle trailers and custom heavy crane rigging",
        "Comprehensive civil route surveys, bridge testing, and utility prep",
        "On-site cargo logistics managers stationed at construction yards",
        "Coordinated government police escorts and transit permits",
        "Extensive experience in oil field exploration and mine setups"
      ],
      industries: ["Oil & Gas", "Mining & Minerals", "Construction & Infra", "Manufacturing"],
      stats: { primary: "350T", label: "Max Single Lift", secondary: "0", sublabel: "Safety Incidents Logged" }
    },
    {
      id: 'supply-chain',
      name: "Supply Chain Solutions",
      icon: ChainIcon,
      tagline: "End-to-End Enterprise Chain Integration",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      description: "We dont just move cargo; we completely redesign supply chains. By analyzing procurement, storage, duties, and last-mile flows, we reduce logistics cost burdens for African enterprises.",
      features: [
        "In-depth logistical cost audits and bottleneck analyses",
        "Supplier integration hubs near key global factory centers",
        "Advanced route planning software to reduce deadhead miles",
        "Continuous supply risk analysis and contingency mapping",
        "Consolidated transport billing and simplified digital compliance"
      ],
      industries: ["Retail & E-Commerce", "Manufacturing", "Automotive", "Healthcare & Pharma"],
      stats: { primary: "18%", label: "Average Client Savings", secondary: "24/7", sublabel: "Logistical Command Desk" }
    }
  ];

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (brochureEmail.trim()) {
      setBrochureRequested(true);
      setTimeout(() => {
        setBrochureRequested(false);
        setBrochureEmail('');
        alert('Brochure sent successfully to ' + brochureEmail);
      }, 1000);
    }
  };

  const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];
  const ActiveIcon = activeService.icon;

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen">
      
      {/* Page Header */}
      <div className="relative bg-brand-navy py-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" className="w-full h-full object-cover" alt="Freight transport background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Our Capabilities</span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase mt-2">WORLD-CLASS LOGISTICS SERVICES</h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-2">Discover how WBR Trans Logistics handles complex cargo operations across land, sea, and air corridor networks with complete reliability.</p>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Panel - 4 Cols */}
          <div className="lg:col-span-4 bg-[#151526] border border-white/10 rounded p-4 space-y-2 sticky top-24">
            <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1 block border-b border-white/5 mb-3">Service Offerings</span>
            
            {servicesData.map((s) => {
              const ServiceIcon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`w-full text-left px-4 py-3.5 rounded flex items-center justify-between text-sm transition-all cursor-pointer ${
                    activeTab === s.id 
                      ? 'bg-brand-orange text-white font-bold shadow-lg shadow-orange-500/10' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <ServiceIcon size={18} className={activeTab === s.id ? "text-white" : "text-brand-orange"} />
                    <span className="uppercase tracking-wide text-xs">{s.name}</span>
                  </div>
                  <ChevronRight size={14} className={activeTab === s.id ? "text-white" : "text-gray-500"} />
                </button>
              );
            })}

            {/* Quick brochure form */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="bg-brand-navy p-4 rounded border border-white/5">
                <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2 flex items-center">
                  <Download size={14} className="mr-1.5" />
                  <span>Download Service Brochure</span>
                </h4>
                <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">
                  Get instant offline access to complete vehicle specs, port layouts, and container dimension tables.
                </p>
                <form onSubmit={handleBrochureSubmit} className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email address..."
                    required
                    value={brochureEmail}
                    onChange={(e) => setBrochureEmail(e.target.value)}
                    className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded px-2.5 py-1.5 text-xs outline-none focus:border-brand-orange"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-brand-orange text-white text-xs py-1.5 font-bold uppercase rounded cursor-pointer hover:bg-orange-600 transition-colors"
                  >
                    Send Brochure PDF
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Content Panel - 8 Cols */}
          <div className="lg:col-span-8 bg-[#151526] border border-white/10 rounded-lg overflow-hidden p-6 sm:p-8 space-y-8 animate-fade-in">
            {/* Top Info Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-brand-navy p-6 rounded border border-white/5">
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-brand-orange/10 rounded">
                    <ActiveIcon size={20} className="text-brand-orange" />
                  </div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">{activeService.tagline}</span>
                </div>
                <h2 className="text-3xl font-black uppercase text-white tracking-tight">{activeService.name}</h2>
              </div>
              
              {/* Stat Boxes */}
              <div className="flex justify-end gap-4 text-right">
                <div>
                  <div className="text-2xl font-black text-brand-orange">{activeService.stats.primary}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{activeService.stats.label}</div>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <div className="text-2xl font-black text-white">{activeService.stats.secondary}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{activeService.stats.sublabel}</div>
                </div>
              </div>
            </div>

            {/* Service Image and Details */}
            <div className="space-y-6">
              <div className="h-64 sm:h-80 rounded overflow-hidden relative">
                <img src={activeService.image} className="w-full h-full object-cover" alt={activeService.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">Service Overview</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{activeService.description}</p>
              </div>
            </div>

            {/* Features checkmarks */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">Standard Operational Protocols</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeService.features.map((feat, index) => (
                  <div key={index} className="flex items-start bg-brand-navy/40 p-3 rounded border border-white/5 hover:border-white/10 transition-colors">
                    <CheckCircle size={16} className="text-brand-green mr-2.5 mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-300 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Competencies */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/5 pb-2">Target Sectors Covered</h3>
              <div className="flex flex-wrap gap-2">
                {activeService.industries.map((ind) => (
                  <span 
                    key={ind} 
                    onClick={() => setView('industries')}
                    className="bg-brand-navy hover:border-brand-orange border border-white/10 px-3.5 py-1.5 rounded text-xs font-medium text-gray-200 transition-colors cursor-pointer"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action CTA bottom */}
            <div className="bg-gradient-to-r from-brand-orange to-orange-600 p-6 rounded flex flex-col sm:flex-row justify-between items-center text-white gap-4">
              <div>
                <h4 className="font-black uppercase text-lg">Need custom routing setup?</h4>
                <p className="text-xs text-orange-100">Send dimensions and cargo safety constraints for immediate analysis.</p>
              </div>
              <button
                onClick={() => setView('quote')}
                className="bg-brand-navy hover:bg-black text-white font-bold text-xs uppercase px-5 py-3 rounded cursor-pointer tracking-wider shrink-0 transition-colors"
              >
                Request Custom Freight Quote
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
