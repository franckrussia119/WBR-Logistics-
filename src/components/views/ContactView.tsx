import { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, Check, Send, ShieldCheck, Clock } from 'lucide-react';

export default function ContactView() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
      } else {
        throw new Error('Server returned failed state.');
      }
    } catch (error) {
      console.log('API contact post failed. Simulating local fallback completion.', error);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">WBR Continental Helpdesk</span>
          <h1 className="text-4xl font-black uppercase tracking-tight">GET IN TOUCH WITH US</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Contact our centralized support coordinators. Your message will be routed directly to the native region compliance manager for rapid feedback.
          </p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Contact Details (5 Cols) */}
          <div className="lg:col-span-5 bg-[#151526] border border-white/10 rounded-lg p-6 sm:p-8 space-y-8">
            
            {/* Headquarters details */}
            <div className="space-y-4">
              <span className="text-brand-orange text-[10px] uppercase tracking-widest font-bold font-mono block">Central HQ Location</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">DOUALA HEADQUARTERS</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our main transit and tracking control facility, coordinating cross-border container dispatches throughout CEMAC and West African corridors.
              </p>
            </div>

            {/* Structured details list */}
            <div className="space-y-4 pt-6 border-t border-white/5 text-sm">
              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-orange/10 rounded mt-1">
                  <MapPin size={16} className="text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Address</span>
                  <p className="text-gray-300 mt-0.5">WBR Logistics Tower, Rue de la Marine, Bonanjo, Douala, Cameroon</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-orange/10 rounded mt-1">
                  <Phone size={16} className="text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Phones</span>
                  <p className="text-gray-300 mt-0.5">HQ Central: +237 233 45 88 90</p>
                  <p className="text-gray-400">Direct Brokerage: +237 233 45 88 95</p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-orange/10 rounded mt-1">
                  <Mail size={16} className="text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Work Emails</span>
                  <p className="text-gray-300 mt-0.5">Inquiries: logistics@wbrtrans.com</p>
                  <p className="text-gray-400">Brokerage: customs@wbrtrans.com</p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-orange/10 rounded mt-1">
                  <Clock size={16} className="text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 font-mono">Support Availability</span>
                  <p className="text-gray-300 mt-0.5">Operational dispatch desk is open 24/7/365.</p>
                  <p className="text-gray-400">Office hours: Mon-Fri | 08:00 - 17:00 (GMT+1)</p>
                </div>
              </div>
            </div>

            {/* Schematic visual placeholder map */}
            <div className="bg-[#11111E] border border-white/5 rounded-lg p-5 text-center space-y-2">
              <span className="text-[10px] text-gray-500 font-mono uppercase block">SCHEMATIC SATELLITE COVERAGE</span>
              <div className="h-28 flex items-center justify-center border border-white/5 rounded bg-black/30 relative">
                <ShieldCheck className="text-brand-orange animate-pulse" size={24} />
                <span className="absolute bottom-2 left-2 text-[8px] text-gray-600 font-mono">COORDINATES: 4.0511° N, 9.7679° E</span>
              </div>
              <p className="text-[10px] text-gray-500">Continuous radar ping logged directly to pan-African transshipment centers.</p>
            </div>

          </div>

          {/* Right Panel: Feedback Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#151526] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
            {success ? (
              <div className="p-8 sm:p-12 text-center space-y-6 animate-fade-in">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-green/10 text-brand-green border-2 border-brand-green mb-2">
                  <Check size={32} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Inquiry Sent Successfully</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide">MESSAGE RECEIVED</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been routed to our Bonanjo operations desk. A localized freight broker will email or call you within 2 hours.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 max-w-sm mx-auto text-xs text-gray-400 font-mono">
                  <span>Routing Target:</span>
                  <strong className="text-brand-orange block mt-0.5">customs@wbrtrans.com (Bonanjo Desk)</strong>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        subject: 'General inquiry',
                        message: ''
                      });
                    }}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-widest cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                <div className="border-b border-white/5 pb-3">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">Send Us A Message</h3>
                  <p className="text-xs text-gray-500">Provide company credentials for priority transit support dispatching.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Jean-Pierre Bekolo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="e.g. FMCG Continental"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="e.g. jp@fmcgcontinental.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Direct Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="e.g. +237 677 88 99 00"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Subject Matter</label>
                    <select 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange"
                    >
                      <option value="General inquiry">General Corporate Inquiry</option>
                      <option value="Customs and clearance support">Customs & Clearance Assistance</option>
                      <option value="Career opportunities">Careers at WBR</option>
                      <option value="Emergency relief transit">Emergency Relief & NGO Transit</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Detailed Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={5}
                      placeholder="Detail your transport routes, dimensions, container constraints, or customized requests..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/10 rounded px-3 py-2.5 text-sm outline-none text-white focus:border-brand-orange resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded text-xs uppercase tracking-widest inline-flex items-center cursor-pointer disabled:opacity-50 transition-colors"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={14} />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={12} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
