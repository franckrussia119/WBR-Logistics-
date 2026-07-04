import { useState } from 'react';
import { mockOffices, mockCorridors } from '../../lib/logistics-data';
import { MapPin, Phone, Mail, Compass, ShieldAlert, Anchor, Plane, Building2, Layers, Search, Radio, ChevronRight } from 'lucide-react';

interface NetworkViewProps {
  setView: (view: string, extraData?: any) => void;
}

export default function NetworkView({ setView }: NetworkViewProps) {
  const [selectedRegion, setSelectedRegion] = useState<'ALL' | 'WEST' | 'EAST' | 'CENTRAL' | 'SOUTHERN' | 'NORTH'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCorridorId, setActiveCorridorId] = useState('west-corridor');

  // Group offices roughly by region
  const getOfficeRegion = (country: string): string => {
    const west = ["Nigeria", "Ghana", "Cote dIvoire", "Senegal", "Benin", "Sierra Leone"];
    const east = ["Kenya", "Uganda", "Rwanda", "Ethiopia", "Tanzania"];
    const central = ["Cameroon", "Central African Republic", "Congo", "DR Congo", "Gabon"];
    const southern = ["South Africa", "Angola", "Zambia", "Zimbabwe", "Mozambique", "Namibia"];
    const north = ["Egypt", "Morocco", "Tunisia", "Algeria", "Sudan"];

    if (west.includes(country)) return 'WEST';
    if (east.includes(country)) return 'EAST';
    if (central.includes(country)) return 'CENTRAL';
    if (southern.includes(country)) return 'SOUTHERN';
    if (north.includes(country)) return 'NORTH';
    return 'WEST';
  };

  const filteredOffices = mockOffices.filter(office => {
    const regionMatch = selectedRegion === 'ALL' || getOfficeRegion(office.country) === selectedRegion;
    const searchMatch = office.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        office.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        office.manager.toLowerCase().includes(searchTerm.toLowerCase());
    return regionMatch && searchMatch;
  });

  const selectedCorridor = mockCorridors.find(c => c.id === activeCorridorId) || mockCorridors[0];

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">WBR Continental Hubs</span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">OUR AFRICAN NETWORK</h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            From our strategic Douala headquarters to 15 key transshipment gateways, WBR provides direct operational security and local customs clearance.
          </p>
        </div>

        {/* SECTION 1: CORRIDORS EXPANSION AND SCHEMATIC MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Corridor Selection List - 5 Cols */}
          <div className="lg:col-span-5 bg-[#151526] border border-white/10 rounded-lg p-5 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-brand-orange text-[10px] uppercase tracking-widest font-bold font-mono">Select Active Freight Corridor</span>
              <h3 className="text-xl font-bold uppercase text-white tracking-tight mt-1 mb-4">WBR Continental Corridors</h3>
              
              <div className="space-y-2">
                {mockCorridors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCorridorId(c.id)}
                    className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer flex items-center justify-between ${
                      activeCorridorId === c.id 
                        ? 'bg-brand-orange text-white border-brand-orange font-bold' 
                        : 'bg-brand-navy border-white/5 text-gray-300 hover:border-brand-orange/30'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider">{c.name}</div>
                      <div className={`text-[10px] font-mono mt-0.5 ${activeCorridorId === c.id ? 'text-orange-100' : 'text-gray-500'}`}>{c.transitTime}</div>
                    </div>
                    <ChevronRight size={14} className={activeCorridorId === c.id ? 'text-white' : 'text-gray-500'} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Map Stat info box */}
            <div className="bg-brand-navy/60 p-4 rounded border border-white/5 text-xs text-gray-400 mt-6">
              <span className="font-bold text-white uppercase text-[10px] block mb-1">Standard Corridor Transit Protocols:</span>
              <p className="leading-relaxed">
                Every vehicle traveling on a WBR Corridor features live dual satellite GPS transponders, cargo lock sensors, and mechanical repair crews stationed every 200 kilometers.
              </p>
            </div>
          </div>

          {/* Selected Corridor Specs - 7 Cols */}
          <div className="lg:col-span-7 bg-[#151526] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-brand-orange animate-ping"></span>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">Active Infrastructure Segment</span>
              </div>
              <h2 className="text-3xl font-black uppercase text-white tracking-tight">{selectedCorridor.name}</h2>
              <div className="p-3 bg-brand-navy rounded border border-white/5 text-xs font-mono text-brand-orange uppercase tracking-wider">
                Route: {selectedCorridor.route}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{selectedCorridor.description}</p>
            </div>

            {/* Key corridor facts */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Corridor Assets & Operations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {selectedCorridor.keyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start bg-brand-navy/40 p-3 rounded border border-white/5">
                    <Radio size={14} className="text-brand-orange mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-normal">{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hub and Port integrations */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
              <div className="flex items-center space-x-2">
                <Anchor size={16} className="text-brand-orange shrink-0" />
                <span>Integrated Port Terminals active on route</span>
              </div>
              <button 
                onClick={() => setView('quote')}
                className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-4 py-2 rounded text-[10px] uppercase tracking-wider cursor-pointer"
              >
                Book Corridor Space
              </button>
            </div>
          </div>

        </div>

        {/* SECTION 2: PORT AND AIRLINE CONNECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ports */}
          <div className="bg-[#151526] border border-white/10 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold uppercase text-white tracking-wider flex items-center">
              <Anchor size={18} className="text-brand-orange mr-2" />
              <span>Partner Port Infrastructure</span>
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              WBR operates priority docking agreements and customs clearing offices directly inside the high-volume sea terminals.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Port of Mombasa</span>
                <span>East Africa Gateway</span>
              </div>
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Port of Lagos (Apapa)</span>
                <span>West Africa Gateway</span>
              </div>
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Port of Douala</span>
                <span>Central Africa Gateway</span>
              </div>
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Port of Durban</span>
                <span>Southern Africa Gateway</span>
              </div>
            </div>
          </div>

          {/* Airlines */}
          <div className="bg-[#151526] border border-white/10 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold uppercase text-white tracking-wider flex items-center">
              <Plane size={18} className="text-brand-orange mr-2" />
              <span>Partner Airline Cargo Allotments</span>
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              We manage fixed cargo block allotments with global carriers to ensure stable space bookings despite volatile aviation markets.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Ethiopian Cargo</span>
                <span>Strategic Partner</span>
              </div>
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Kenya Airways Cargo</span>
                <span>Strategic Partner</span>
              </div>
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Air France Cargo</span>
                <span>Global Connection</span>
              </div>
              <div className="p-2.5 bg-brand-navy rounded border border-white/5 text-gray-300">
                <span className="text-white font-bold block">Emirates SkyCargo</span>
                <span>Global Connection</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: DIRECTORY OF PHYSICAL OFFICES */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
            <div>
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest font-mono">Local Presence In All Cities</span>
              <h2 className="text-2xl font-black uppercase text-white tracking-tight mt-1">REGIONAL HUB DIRECTORY</h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 text-gray-500" size={14} />
                <input 
                  type="text" 
                  placeholder="Search cities/countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-brand-navy border border-white/10 rounded pl-8 pr-3 py-1.5 text-xs text-white outline-none focus:border-brand-orange placeholder-gray-500"
                />
              </div>

              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value as any)}
                className="bg-brand-navy border border-white/10 rounded px-2.5 py-1.5 text-xs text-white outline-none focus:border-brand-orange"
              >
                <option value="ALL">All Regions</option>
                <option value="WEST">West Africa</option>
                <option value="EAST">East Africa</option>
                <option value="CENTRAL">Central Africa</option>
                <option value="SOUTHERN">Southern Africa</option>
                <option value="NORTH">North Africa</option>
              </select>
            </div>
          </div>

          {/* Directory Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffices.map((office) => (
              <div 
                key={office.id}
                className={`bg-[#151526] border p-5 rounded hover:border-brand-orange transition-all space-y-4 flex flex-col justify-between ${
                  office.isHQ ? 'border-brand-orange ring-1 ring-brand-orange/30' : 'border-white/10'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider font-mono">{office.country}</span>
                    {office.isHQ && (
                      <span className="text-[9px] font-bold bg-brand-orange text-brand-navy px-1.5 py-0.5 uppercase tracking-wider rounded">
                        HQ Central Hub
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold uppercase text-white font-display tracking-wide">{office.city} Office</h3>
                  
                  <div className="flex items-start text-xs text-gray-300 leading-relaxed">
                    <MapPin size={14} className="text-brand-orange mr-2 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-gray-400">
                  <div className="flex items-center justify-between">
                    <span>Office Manager:</span>
                    <strong className="text-white">{office.manager}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Capacity:</span>
                    <span className="text-[11px] text-gray-300 truncate max-w-[200px]" title={office.capacity}>{office.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hours:</span>
                    <span>{office.hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-1 text-xs">
                  <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center text-gray-300 hover:text-brand-orange transition-colors">
                    <Phone size={12} className="text-brand-orange mr-2 shrink-0" />
                    <span>{office.phone}</span>
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center text-gray-300 hover:text-brand-orange transition-colors truncate">
                    <Mail size={12} className="text-brand-orange mr-2 shrink-0" />
                    <span>{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredOffices.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-sm font-mono">
              No offices matched the current filters.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
