import { useState } from 'react';
import { ShieldAlert, Send, Key, Bot, HelpCircle, Loader2, Check, AlertTriangle, Eye, EyeOff } from 'lucide-react';

export default function AdminView() {
  const [telegramToken, setTelegramToken] = useState('');
  const [telegramChatId, setTelegramChatId] = useState('');
  const [showSecrets, setShowSecrets] = useState(false);
  
  const [contactTestLoading, setContactTestLoading] = useState(false);
  const [contactTestResult, setContactTestResult] = useState<any | null>(null);

  const [quoteTestLoading, setQuoteTestLoading] = useState(false);
  const [quoteTestResult, setQuoteTestResult] = useState<any | null>(null);

  const handleTestContact = async () => {
    setContactTestLoading(true);
    setContactTestResult(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Admin Panel Test Partner',
          company: 'WBR Testing Labs',
          email: 'test@wbrtrans.com',
          phone: '+237 000 000 000',
          subject: 'Diagnostic Connection Test',
          message: 'This is a secure connection test triggered from the WBR Trans Logistics admin panel to verify Telegram webhook deliveries.'
        })
      });
      const data = await response.json();
      setContactTestResult(data);
    } catch (err: any) {
      setContactTestResult({ success: false, error: err.message || 'API is currently unreachable' });
    } finally {
      setContactTestLoading(false);
    }
  };

  const handleTestQuote = async () => {
    setQuoteTestLoading(true);
    setQuoteTestResult(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cargoType: 'Dangerous Goods',
          transportMode: 'Ocean',
          weight: 45000,
          volume: 85,
          specialRequirements: ['Hazmat', 'High Value'],
          originCountry: 'Cameroon',
          originCity: 'Douala HQ',
          destinationCountry: 'Egypt',
          destinationCity: 'Cairo Port',
          readyDate: '2026-07-10',
          deadline: '2026-08-01',
          company: 'WBR Testing Labs',
          contactName: 'Admin System',
          email: 'admin@wbrtrans.com',
          phone: '+237 000 000',
          industry: 'Oil & Gas'
        })
      });
      const data = await response.json();
      setQuoteTestResult(data);
    } catch (err: any) {
      setQuoteTestResult({ success: false, error: err.message || 'API is currently unreachable' });
    } finally {
      setQuoteTestLoading(false);
    }
  };

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">WBR Control Tower</span>
          <h1 className="text-4xl font-black uppercase tracking-tight">INTEGRATIONS & DIAGNOSTICS</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Test contact form dispatch queues and configure real-time Telegram channel alerting webhooks.
          </p>
        </div>

        {/* Section: Telegram bot setup documentation */}
        <div className="bg-[#151526] border border-white/10 rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-2 border-b border-white/5 pb-3">
            <Bot className="text-brand-orange animate-pulse" size={20} />
            <h3 className="text-lg font-bold uppercase tracking-wider">TELEGRAM TELEMETRY SETUP</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Steps text */}
            <div className="space-y-4 text-xs text-gray-300 leading-relaxed">
              <p className="font-semibold text-brand-orange uppercase tracking-wider">How to enable live channel notifications:</p>
              
              <ol className="list-decimal list-inside space-y-2.5">
                <li>
                  Open Telegram and search for <strong className="text-white">@BotFather</strong>.
                </li>
                <li>
                  Create a new bot with <code className="bg-brand-navy px-1 py-0.5 rounded text-brand-orange font-mono">/newbot</code> and copy the API Token.
                </li>
                <li>
                  Create a Telegram group channel and add your bot as an administrator.
                </li>
                <li>
                  Search for <strong className="text-white">@userinfobot</strong> or send a message to your group and retrieve the Chat ID (typically a long negative number).
                </li>
                <li>
                  Add both variables into your secret settings panel or <code className="bg-brand-navy px-1 py-0.5 rounded text-white font-mono">.env</code> configuration file.
                </li>
              </ol>

              <div className="p-3 bg-brand-orange/5 rounded border border-brand-orange/10 text-[11px] text-gray-400 mt-4">
                <strong>Platform Variable Names:</strong>
                <ul className="list-disc list-inside mt-1 font-mono text-white">
                  <li>TELEGRAM_TOKEN</li>
                  <li>TELEGRAM_CHAT_ID</li>
                </ul>
              </div>
            </div>

            {/* Inputs preview */}
            <div className="bg-brand-navy/60 p-5 rounded border border-white/5 space-y-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Server Context</h4>
              
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-gray-500 font-mono text-[10px] block">TELEGRAM_TOKEN Status:</label>
                  <div className="flex items-center justify-between bg-black/20 px-3 py-2 rounded mt-1 text-gray-400 font-mono">
                    <span>{showSecrets ? (telegramToken || 'Not Set') : '••••••••••••••••'}</span>
                    <button 
                      type="button" 
                      onClick={() => setShowSecrets(!showSecrets)}
                      className="text-brand-orange hover:underline cursor-pointer"
                    >
                      {showSecrets ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 font-mono text-[10px] block">TELEGRAM_CHAT_ID Status:</label>
                  <div className="bg-black/20 px-3 py-2 rounded mt-1 text-gray-400 font-mono">
                    {telegramChatId || 'Not Configured'}
                  </div>
                </div>

                <p className="text-[10px] text-gray-500 italic leading-normal">
                  To override these variables, configure them inside the secrets menu of AI Studio. They are automatically injected securely on server loads.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Diagnostic Test Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Test 1: Contact Form Webhook */}
          <div className="bg-[#151526] border border-white/10 rounded-lg p-6 space-y-6 flex flex-col justify-between min-h-[300px]">
            <div className="space-y-3">
              <span className="text-[10px] text-gray-500 font-mono uppercase font-bold block">Webhook Diagnostic #1</span>
              <h3 className="text-lg font-black text-white uppercase tracking-wider">Test Contact Webhook</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Sends a mock partner contact query to the Express API, which attempts to trigger the Telegram bot.
              </p>
            </div>

            <div className="space-y-4">
              {contactTestResult && (
                <div className={`p-3 rounded text-xs border ${
                  contactTestResult.success ? 'bg-brand-green/10 border-brand-green/20' : 'bg-red-500/10 border-red-500/20'
                }`}>
                  <div className="font-bold flex items-center space-x-1.5 mb-1">
                    {contactTestResult.success ? (
                      <>
                        <Check size={14} className="text-brand-green" />
                        <span className="text-brand-green">Webhook Sent Successfully</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle size={14} className="text-red-500" />
                        <span className="text-red-500">Dispatch Failed</span>
                      </>
                    )}
                  </div>
                  <pre className="text-[10px] font-mono text-gray-400 overflow-x-auto max-h-24">
                    {JSON.stringify(contactTestResult, null, 2)}
                  </pre>
                </div>
              )}

              <button 
                onClick={handleTestContact}
                disabled={contactTestLoading}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 rounded text-xs uppercase tracking-widest disabled:opacity-50 cursor-pointer flex items-center justify-center transition-colors"
              >
                {contactTestLoading ? <Loader2 className="animate-spin mr-2" size={14} /> : null}
                <span>Trigger Contact Test</span>
              </button>
            </div>
          </div>

          {/* Test 2: Tariff Pricing Webhook */}
          <div className="bg-[#151526] border border-white/10 rounded-lg p-6 space-y-6 flex flex-col justify-between min-h-[300px]">
            <div className="space-y-3">
              <span className="text-[10px] text-gray-500 font-mono uppercase font-bold block">Webhook Diagnostic #2</span>
              <h3 className="text-lg font-black text-white uppercase tracking-wider">Test Quote Webhook</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Sends an oversized ocean container quote query to the Express API, attempting to trigger Telegram alert channels.
              </p>
            </div>

            <div className="space-y-4">
              {quoteTestResult && (
                <div className={`p-3 rounded text-xs border ${
                  quoteTestResult.success ? 'bg-brand-green/10 border-brand-green/20' : 'bg-red-500/10 border-red-500/20'
                }`}>
                  <div className="font-bold flex items-center space-x-1.5 mb-1">
                    {quoteTestResult.success ? (
                      <>
                        <Check size={14} className="text-brand-green" />
                        <span className="text-brand-green">Webhook Sent Successfully</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle size={14} className="text-red-500" />
                        <span className="text-red-500">Dispatch Failed</span>
                      </>
                    )}
                  </div>
                  <pre className="text-[10px] font-mono text-gray-400 overflow-x-auto max-h-24">
                    {JSON.stringify(quoteTestResult, null, 2)}
                  </pre>
                </div>
              )}

              <button 
                onClick={handleTestQuote}
                disabled={quoteTestLoading}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 rounded text-xs uppercase tracking-widest disabled:opacity-50 cursor-pointer flex items-center justify-center transition-colors"
              >
                {quoteTestLoading ? <Loader2 className="animate-spin mr-2" size={14} /> : null}
                <span>Trigger Quote Test</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
