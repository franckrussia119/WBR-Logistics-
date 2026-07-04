import { useState } from 'react';
import { Award, Compass, ShieldCheck, Heart, Leaf, Globe, CheckCircle, Trophy, Users, FileText } from 'lucide-react';

export default function AboutView() {
  const [activeTab, setActiveTab] = useState<'mission' | 'history' | 'leadership' | 'esg'>('mission');

  const timelineMilestones = [
    { year: "2011", title: "Inception in Douala", desc: "WBR is founded in Cameroon with 5 cargo trucks serving the Douala-Yaounde road corridor." },
    { year: "2014", title: "Regional Expansion", desc: "Opened corporate cargo transit offices in Lagos, Nigeria and Libreville, Gabon." },
    { year: "2018", title: "East African Hub", desc: "Established Mombasa-Nairobi logistics parks supporting landlocked East African economies." },
    { year: "2021", title: "Aviation and Rail Launch", desc: "Purchased weekly cargo blocks on Ethiopian Airlines and integrated with Kenya SGR rail corridors." },
    { year: "2024", title: "AfCFTA Compliant Grid", desc: "Launched proprietary digital customs pre-clearance gateway, aligning with AfCFTA regulations." },
    { year: "2026", title: "Continental Omnipresence", desc: "Direct operational cargo control and assets spanning all 54 sovereign African countries." }
  ];

  const leaders = [
    {
      name: "Jean-Paul Belingba",
      role: "President & CEO",
      bio: "Over 25 years of logistics experience across Africa and Europe. Former CEVA operations lead for Central Africa. Educated in Douala and Paris.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Fatoumata Diop",
      role: "VP of Operations",
      bio: "An expert in trans-African corridor routing. Led large-scale fleet consolidations for ECOWAS trade grids. Stationed in Lagos HQ.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      name: "Ephraim Ndlovu",
      role: "VP of Customs Compliance",
      bio: "A licensed customs broker with 18 years expertise dealing with SADC, EAC, and COMESA custom tariffs. Stationed in Johannesburg.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    },
    {
      name: "Amani Mwangi",
      role: "Head of ESG & Sustainability",
      bio: "Pioneered WBRs zero-emission electric last-mile delivery fleet trial. Manages NGO and emergency relief transport lines.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
  ];

  const coreValues = [
    { title: "Pan-African Solidarity", desc: "We believe in the integration of African markets, directly supporting AfCFTAs goal of boosting intra-continental trade.", icon: Globe },
    { title: "Uncompromising Integrity", desc: "No short cuts. Complete compliance with national tariffs, custom mandates, and cargo safety guidelines.", icon: ShieldCheck },
    { title: "Operational Innovation", desc: "Using advanced cargo trackers, cloud temperature telemetry, and pre-clearance algorithms to beat transit bottlenecks.", icon: Compass },
    { title: "Environmental Custodianship", desc: "Actively deploying low emission heavy trucks and investing in solar grid powered distribution centers.", icon: Leaf }
  ];

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Hero Header */}
        <div className="relative rounded-lg overflow-hidden border border-white/10 p-8 sm:p-12 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-transparent min-h-[300px] flex flex-col justify-center">
          <div className="absolute inset-0 z-0 opacity-15">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" className="w-full h-full object-cover" alt="WBR office workspace" />
          </div>
          <div className="relative z-10 space-y-3 max-w-2xl">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">Our Corporate Legacy</span>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">MOVING AFRICA FORWARD SINCE 2011</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              WBR Trans Logistics was founded with a singular, clear mission: to build a unified, asset-based freight network capable of connecting every corner of Africa to global commerce.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setActiveTab('mission')}
            className={`px-6 py-3 border-b-2 transition-all cursor-pointer ${activeTab === 'mission' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            Mission & Values
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 border-b-2 transition-all cursor-pointer ${activeTab === 'history' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            Corporate History
          </button>
          <button 
            onClick={() => setActiveTab('leadership')}
            className={`px-6 py-3 border-b-2 transition-all cursor-pointer ${activeTab === 'leadership' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            Leadership Team
          </button>
          <button 
            onClick={() => setActiveTab('esg')}
            className={`px-6 py-3 border-b-2 transition-all cursor-pointer ${activeTab === 'esg' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            ESG & AfCFTA Commitments
          </button>
        </div>

        {/* Tab content renders */}
        <div className="bg-[#151526] border border-white/10 rounded-lg p-6 sm:p-8 shadow-xl">
          
          {/* MISSION & VALUES */}
          {activeTab === 'mission' && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">CONNECTING ALL 54 COUNTRIES</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Unlike traditional freight forwarders who rely on sub-contracted agents with limited visibility, WBR owns its fleet, manages its warehouses, and employs native customs clearing specialists in every region.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our pan-African operations are designed to make cross-border freight as simple as domestic shipping, directly lowering the heavy logistics tax burden faced by African enterprises.
                  </p>
                </div>
                
                {/* Visual quote */}
                <div className="p-6 bg-brand-navy rounded border border-white/5 relative">
                  <span className="text-7xl text-brand-orange/10 font-serif absolute top-2 right-4">“</span>
                  <p className="text-sm text-gray-300 leading-relaxed italic relative z-10">
                    WBR Trans Logistics is not just moving trucks; we are constructing the digital and physical highways necessary to realize the dream of the African Continental Free Trade Area.
                  </p>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="h-0.5 w-6 bg-brand-orange"></div>
                    <span className="text-xs font-bold text-white uppercase">Jean-Paul Belingba, President</span>
                  </div>
                </div>
              </div>

              {/* Core Values grid */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <h4 className="text-xs font-bold text-brand-orange uppercase tracking-widest text-center">Our Anchoring Core Values</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {coreValues.map((val) => {
                    const ValIcon = val.icon;
                    return (
                      <div key={val.title} className="p-5 bg-brand-navy rounded border border-white/5">
                        <div className="w-10 h-10 rounded bg-brand-orange/10 flex items-center justify-center mb-4">
                          <ValIcon size={20} className="text-brand-orange" />
                        </div>
                        <h5 className="font-bold text-sm text-white uppercase tracking-wider mb-2">{val.title}</h5>
                        <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* CORPORATE HISTORY */}
          {activeTab === 'history' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">OUR CORRIDOR TIMELINE</h3>
                <p className="text-xs text-gray-400 mt-1">Tracing our expansion from Yaounde road freight to continental logistics dominance.</p>
              </div>

              <div className="relative border-l-2 border-brand-orange/25 ml-4 sm:ml-12 pl-6 sm:pl-8 space-y-10 py-2">
                {timelineMilestones.map((m, index) => (
                  <div key={index} className="relative">
                    {/* Floating year bubble */}
                    <span className="absolute -left-[54px] sm:-left-[64px] top-0 bg-[#1A1A2E] text-brand-orange border border-brand-orange/30 rounded px-2 py-0.5 text-[10px] font-bold font-mono">
                      {m.year}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm sm:text-base text-white uppercase tracking-wider">{m.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LEADERSHIP TEAM */}
          {activeTab === 'leadership' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">EXECUTIVE LEADERSHIP</h3>
                <p className="text-xs text-gray-400 mt-1">Meet the pan-African logistics experts directing operations and custom networks.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {leaders.map((leader, index) => (
                  <div key={index} className="bg-brand-navy border border-white/5 rounded overflow-hidden flex flex-col justify-between">
                    <div className="h-56 overflow-hidden relative">
                      <img src={leader.img} className="w-full h-full object-cover" alt={leader.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h4 className="font-bold text-base text-white uppercase tracking-wide leading-tight">{leader.name}</h4>
                        <span className="text-[10px] text-brand-orange font-mono uppercase font-bold block mt-0.5">{leader.role}</span>
                        <p className="text-xs text-gray-400 leading-relaxed mt-3">{leader.bio}</p>
                      </div>
                      
                      <div className="pt-3 border-t border-white/5 text-[10px] text-gray-500 font-mono flex justify-between">
                        <span>WBR EXECUTIVE</span>
                        <span>ACTIVE</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ESG & AFCFTA COMMITMENTS */}
          {activeTab === 'esg' && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* ESG Section */}
                <div className="bg-brand-navy p-6 rounded-lg border border-white/5 space-y-4">
                  <div className="flex items-center space-x-2 text-brand-green">
                    <Leaf size={20} />
                    <h3 className="text-lg font-bold uppercase tracking-wider text-white">ESG Green Freight Goals</h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    WBR is highly committed to sustainable continental trade. As part of our Net-Zero 2038 goal, we are actively implementing:
                  </p>
                  <ul className="space-y-2.5 text-xs text-gray-400">
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-brand-green mr-2 mt-0.5 shrink-0" />
                      <span>Gradual conversion of our last-mile delivery vans in metropolitan areas to 100% electric drives.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-brand-green mr-2 mt-0.5 shrink-0" />
                      <span>Rooftop solar grids across our Nairobi and Douala warehouses to complete energy independence.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-brand-green mr-2 mt-0.5 shrink-0" />
                      <span>Port community outreach programs supplying clean water filters near crowded maritime terminals.</span>
                    </li>
                  </ul>
                </div>

                {/* AfCFTA Section */}
                <div className="bg-brand-navy p-6 rounded-lg border border-white/5 space-y-4">
                  <div className="flex items-center space-x-2 text-brand-orange">
                    <Trophy size={20} />
                    <h3 className="text-lg font-bold uppercase tracking-wider text-white">AfCFTA Trade Alignment</h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    The African Continental Free Trade Area removes tariff walls. WBR directly enables this trade renaissance through:
                  </p>
                  <ul className="space-y-2.5 text-xs text-gray-400">
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-brand-orange mr-2 mt-0.5 shrink-0" />
                      <span>Standardized continental pricing models preventing high cross-border freight brokerage markups.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-brand-orange mr-2 mt-0.5 shrink-0" />
                      <span>A unified multi-currency digital portal allowing clients to settle bills using native local currencies.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={14} className="text-brand-orange mr-2 mt-0.5 shrink-0" />
                      <span>Establishing local training centers in under-developed hubs to provide high-paying border compliance career paths.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
