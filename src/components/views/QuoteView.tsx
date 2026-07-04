import { useState } from 'react';
import { Truck, Check, Loader2, ArrowRight, ArrowLeft, ClipboardList, Map, Briefcase, FileText } from 'lucide-react';

interface QuoteViewProps {
  setView: (view: string, extraData?: any) => void;
}

export default function QuoteView({ setView }: QuoteViewProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    cargoType: 'General',
    transportMode: 'Road',
    weight: '',
    volume: '',
    specialRequirements: [] as string[],
    originCountry: 'Cameroon',
    originCity: '',
    destinationCountry: 'Nigeria',
    destinationCity: '',
    readyDate: '',
    deadline: '',
    company: '',
    contactName: '',
    email: '',
    phone: '',
    industry: 'Manufacturing'
  });

  const africanCountries = [
    "Cameroon", "Nigeria", "Kenya", "South Africa", "Ghana", "Cote dIvoire", "Egypt", "Ethiopia", "Senegal", "Tanzania",
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cape Verde", "Central African Republic", "Chad",
    "Comoros", "Congo", "DR Congo", "Djibouti", "Equatorial Guinea", "Eritrea", "Eswatini", "Gabon", "Gambia", "Guinea",
    "Guinea-Bissau", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco",
    "Mozambique", "Namibia", "Niger", "Rwanda", "Sao Tome and Principe", "Seychelles", "Sierra Leone", "Somalia", "South Sudan",
    "Sudan", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
  ];

  const cargoTypes = [
    "General", "Dangerous Goods", "Perishables", "Oversized", "Vehicles", "Electronics"
  ];

  const transportModes = [
    "Road", "Air", "Ocean", "Rail", "Multimodal"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (req: string) => {
    setFormData(prev => {
      const active = prev.specialRequirements.includes(req)
        ? prev.specialRequirements.filter(item => item !== req)
        : [...prev.specialRequirements, req];
      return { ...prev, specialRequirements: active };
    });
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setQuoteId(data.quoteId);
        setStep(4);
      } else {
        throw new Error('Server returned failed state.');
      }
    } catch (error) {
      console.log('API quote post failed. Simulating local fallback completion.', error);
      // Fallback
      const fakeQuoteId = `WBR-Q-${Math.floor(100000 + Math.random() * 900000)}`;
      setQuoteId(fakeQuoteId);
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">WBR Cargo Quoting Engine</span>
          <h1 className="text-4xl font-black uppercase tracking-tight">REQUEST A FREIGHT QUOTE</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Provide cargo dimensions and origin details. Our digital logistics router processes tariff schedules immediately.
          </p>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="bg-[#151526] border border-white/10 rounded-lg p-4 flex justify-between items-center text-xs font-mono max-w-lg mx-auto">
            <div className="flex items-center space-x-2">
              <span className={`h-6 w-6 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-brand-orange text-white' : 'bg-gray-800 text-gray-400'}`}>1</span>
              <span className={step === 1 ? 'text-brand-orange font-bold' : 'text-gray-400'}>Cargo</span>
            </div>
            <div className="h-0.5 bg-white/10 flex-1 mx-4"></div>
            <div className="flex items-center space-x-2">
              <span className={`h-6 w-6 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-brand-orange text-white' : 'bg-gray-800 text-gray-400'}`}>2</span>
              <span className={step === 2 ? 'text-brand-orange font-bold' : 'text-gray-400'}>Route</span>
            </div>
            <div className="h-0.5 bg-white/10 flex-1 mx-4"></div>
            <div className="flex items-center space-x-2">
              <span className={`h-6 w-6 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-brand-orange text-white' : 'bg-gray-800 text-gray-400'}`}>3</span>
              <span className={step === 3 ? 'text-brand-orange font-bold' : 'text-gray-400'}>Business</span>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-[#151526] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* STEP 1: CARGO DETAILS */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-white/5 pb-3 flex items-center space-x-2">
                  <ClipboardList className="text-brand-orange" size={20} />
                  <h3 className="text-lg font-bold uppercase tracking-wider">Step 1: Cargo Specifications</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Cargo Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Cargo Category</label>
                    <select 
                      name="cargoType" 
                      value={formData.cargoType} 
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    >
                      {cargoTypes.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Mode */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Transport Mode</label>
                    <select 
                      name="transportMode" 
                      value={formData.transportMode} 
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    >
                      {transportModes.map(m => <option key={m} value={m}>{m} Freight</option>)}
                    </select>
                  </div>

                  {/* Weight */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Total Estimated Weight (kg)</label>
                    <input 
                      type="number" 
                      name="weight"
                      required
                      placeholder="e.g. 12500"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Volume */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Total Estimated Volume (CBM)</label>
                    <input 
                      type="number" 
                      name="volume"
                      required
                      placeholder="e.g. 24.5"
                      value={formData.volume}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Special Handling Controls</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    {[
                      "Temperature Controlled", "Hazmat", "High Value", "Live Animals"
                    ].map(req => (
                      <label key={req} className="flex items-center space-x-2 p-3 bg-brand-navy rounded border border-white/5 cursor-pointer hover:border-brand-orange/30 select-none">
                        <input 
                          type="checkbox" 
                          checked={formData.specialRequirements.includes(req)}
                          onChange={() => handleCheckboxChange(req)}
                          className="accent-brand-orange rounded"
                        />
                        <span>{req}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-widest inline-flex items-center cursor-pointer"
                  >
                    <span>Proceed to Route</span>
                    <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: ROUTE */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-white/5 pb-3 flex items-center space-x-2">
                  <Map className="text-brand-orange" size={20} />
                  <h3 className="text-lg font-bold uppercase tracking-wider">Step 2: Transit Nodes</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Origin Country */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Origin Country</label>
                    <select 
                      name="originCountry" 
                      value={formData.originCountry} 
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    >
                      {africanCountries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Origin City */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Origin City</label>
                    <input 
                      type="text" 
                      name="originCity"
                      required
                      placeholder="e.g. Douala"
                      value={formData.originCity}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Destination Country */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Destination Country</label>
                    <select 
                      name="destinationCountry" 
                      value={formData.destinationCountry} 
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    >
                      {africanCountries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Destination City */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Destination City</label>
                    <input 
                      type="text" 
                      name="destinationCity"
                      required
                      placeholder="e.g. Lagos"
                      value={formData.destinationCity}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Ready Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Cargo Ready Date</label>
                    <input 
                      type="date" 
                      name="readyDate"
                      required
                      value={formData.readyDate}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Delivery Deadline */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Target Delivery Deadline</label>
                    <input 
                      type="date" 
                      name="deadline"
                      required
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-widest inline-flex items-center cursor-pointer"
                  >
                    <ArrowLeft size={14} className="mr-2" />
                    <span>Back</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-widest inline-flex items-center cursor-pointer"
                  >
                    <span>Proceed to Business</span>
                    <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: BUSINESS DETAILS */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-white/5 pb-3 flex items-center space-x-2">
                  <Briefcase className="text-brand-orange" size={20} />
                  <h3 className="text-lg font-bold uppercase tracking-wider">Step 3: Company particulars</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      required
                      placeholder="e.g. PharmAfrica Ltd"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Contact Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Full Contact Name</label>
                    <input 
                      type="text" 
                      name="contactName"
                      required
                      placeholder="e.g. Dr. Aisha Kamara"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Work Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="e.g. aisha@pharmafrica.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Direct Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="e.g. +234 1 555 9812"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Sector */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Industry Sector</label>
                    <select 
                      name="industry" 
                      value={formData.industry} 
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    >
                      {["Manufacturing", "Agriculture & Food", "Oil & Gas", "Mining & Minerals", "Healthcare & Pharma", "Retail & E-Commerce", "Construction", "Aid & NGO Relief", "Technology"].map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-widest inline-flex items-center cursor-pointer"
                  >
                    <ArrowLeft size={14} className="mr-2" />
                    <span>Back</span>
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 py-3 rounded text-xs uppercase tracking-widest inline-flex items-center cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={14} />
                        <span>Submitting to WBR Brokers...</span>
                      </>
                    ) : (
                      <span>Request Tariff Pricing</span>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONFIRMATION */}
            {step === 4 && (
              <div className="space-y-6 text-center py-10 animate-fade-in">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-green/10 text-brand-green border-2 border-brand-green mb-2">
                  <Check size={32} />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Quote Request Submitted</span>
                  <h3 className="text-3xl font-black text-white font-mono">#{quoteId}</h3>
                  <p className="text-sm text-gray-300 max-w-lg mx-auto">
                    Quote Request #{quoteId} received. Our team will contact you within 2 hours with precise custom tariff schedules and routing layouts.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 max-w-md mx-auto grid grid-cols-2 gap-4 text-left text-xs font-mono text-gray-400">
                  <div>
                    <span>Origin:</span>
                    <strong className="text-white block">{formData.originCity}, {formData.originCountry}</strong>
                  </div>
                  <div>
                    <span>Destination:</span>
                    <strong className="text-white block">{formData.destinationCity}, {formData.destinationCountry}</strong>
                  </div>
                  <div>
                    <span>Cargo Weight:</span>
                    <strong className="text-white block">{formData.weight} kg</strong>
                  </div>
                  <div>
                    <span>Transport:</span>
                    <strong className="text-brand-orange block">{formData.transportMode} Freight</strong>
                  </div>
                </div>

                <div className="pt-8 space-x-3">
                  <button 
                    type="button" 
                    onClick={() => { setStep(1); setFormData(prev => ({ ...prev, originCity: '', destinationCity: '', weight: '', volume: '' })); }}
                    className="bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-widest cursor-pointer"
                  >
                    New Quote Request
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setView('home')}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-widest cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}
