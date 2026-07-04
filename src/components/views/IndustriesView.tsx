import { useState } from 'react';
import { mockIndustries } from '../../lib/logistics-data';
import { Check, AlertCircle, Quote, Sparkles, Building2, Droplet, Pickaxe, HeartPulse, ShoppingBag, Factory, Car, Hammer, Heart, Cpu, Sprout, Star } from 'lucide-react';

interface IndustriesViewProps {
  setView: (view: string, extraData?: any) => void;
}

export default function IndustriesView({ setView }: IndustriesViewProps) {
  const [activeVerticalId, setActiveVerticalId] = useState('agriculture');

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return Sprout;
      case 'Droplet': return Droplet;
      case 'Pickaxe': return Pickaxe;
      case 'HeartPulse': return HeartPulse;
      case 'ShoppingBag': return ShoppingBag;
      case 'Factory': return Factory;
      case 'Car': return Car;
      case 'Hammer': return Hammer;
      case 'Heart': return Heart;
      case 'Cpu': return Cpu;
      default: return Building2;
    }
  };

  const activeVertical = mockIndustries.find(ind => ind.id === activeVerticalId) || mockIndustries[0];
  const VerticalIcon = getIcon(activeVertical.iconName);

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">WBR Sector Competencies</span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">INDUSTRIES WE SERVE</h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Logistics challenges differ completely between sectors. Discover WBRs customized transport fleets, customs filings, and warehousing standards for 10 core industries.
          </p>
        </div>

        {/* Multi-Tab Selector Grid - All 10 Industry Verticals */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {mockIndustries.map((ind) => {
            const TabIcon = getIcon(ind.iconName);
            return (
              <button
                key={ind.id}
                onClick={() => setActiveVerticalId(ind.id)}
                className={`flex flex-col items-center justify-center p-3 rounded border text-center transition-all cursor-pointer ${
                  activeVerticalId === ind.id 
                    ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-orange-500/10 font-bold' 
                    : 'bg-[#151526] border-white/5 text-gray-400 hover:border-brand-orange/30 hover:text-white'
                }`}
              >
                <TabIcon size={20} className={activeVerticalId === ind.id ? "text-white mb-2" : "text-brand-orange mb-2"} />
                <span className="text-[10px] uppercase tracking-wider font-semibold block leading-tight">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Layout */}
        <div className="bg-[#151526] border border-white/10 rounded-lg p-6 sm:p-8 space-y-8 shadow-2xl animate-fade-in max-w-5xl mx-auto">
          
          {/* Top segment banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-brand-navy p-6 rounded border border-white/5">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center space-x-2">
                <VerticalIcon size={24} className="text-brand-orange" />
                <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Customized Supply Chain</span>
              </div>
              <h2 className="text-3xl font-black uppercase text-white tracking-tight">{activeVertical.name}</h2>
            </div>

            {/* Glowing Metric Badge */}
            <div className="bg-[#1A1A2E] p-4 rounded border border-brand-orange/30 text-center relative overflow-hidden group hover:border-brand-orange transition-all">
              <div className="absolute top-0 right-0 h-16 w-16 bg-brand-orange/5 rounded-full blur"></div>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold font-mono">Performance Index</span>
              <span className="text-xl font-black text-white block mt-1">{activeVertical.keyStat}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sector Overview</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{activeVertical.description}</p>
          </div>

          {/* Challenges & Solutions alternating split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
            {/* Logistical Challenges */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-500">
                <AlertCircle size={16} />
                <h4 className="text-xs font-bold uppercase tracking-widest">Major Logistical Obstacles</h4>
              </div>
              <div className="space-y-2">
                {activeVertical.challenges.map((chal, index) => (
                  <div key={index} className="p-3 bg-red-500/5 border border-red-500/10 rounded flex items-start text-xs text-gray-300 leading-normal">
                    <span className="text-red-500 font-bold mr-2">{index + 1}.</span>
                    <span>{chal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customized WBR Solutions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-brand-green">
                <Check size={16} className="text-brand-green" />
                <h4 className="text-xs font-bold uppercase tracking-widest">WBR Customized Solutions</h4>
              </div>
              <div className="space-y-2">
                {activeVertical.solutions.map((sol, index) => (
                  <div key={index} className="p-3 bg-brand-green/5 border border-brand-green/10 rounded flex items-start text-xs text-gray-300 leading-normal">
                    <Check size={14} className="text-brand-green mr-2 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mini Case Study Card */}
          <div className="bg-[#1A1A2E] p-6 rounded-lg border border-white/5 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl text-brand-orange/5 font-serif select-none pointer-events-none">“</span>
            
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-bold">WBR Operational Case Study</span>
              <h4 className="text-base font-bold text-white uppercase tracking-wide">{activeVertical.caseStudyTitle}</h4>
              <p className="text-xs text-gray-400 italic leading-relaxed pt-1">
                {activeVertical.caseStudySnippet}
              </p>
            </div>
          </div>

          {/* CTA bottom */}
          <div className="bg-gradient-to-r from-brand-orange to-orange-600 p-6 rounded flex flex-col sm:flex-row justify-between items-center text-white gap-4">
            <div>
              <h4 className="font-black uppercase text-lg">Involved in {activeVertical.name}?</h4>
              <p className="text-xs text-orange-100">Send transport challenges to our native logistics compliance officers.</p>
            </div>
            <button
              onClick={() => setView('quote')}
              className="bg-brand-navy hover:bg-black text-white font-bold text-xs uppercase px-5 py-3 rounded cursor-pointer tracking-wider shrink-0 transition-colors"
            >
              Consult On Sector Logistics
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
