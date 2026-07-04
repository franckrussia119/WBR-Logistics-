import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Views
import HomeView from './components/views/HomeView';
import ServicesView from './components/views/ServicesView';
import TrackingView from './components/views/TrackingView';
import QuoteView from './components/views/QuoteView';
import NetworkView from './components/views/NetworkView';
import IndustriesView from './components/views/IndustriesView';
import AboutView from './components/views/AboutView';
import ContactView from './components/views/ContactView';
import AdminView from './components/views/AdminView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [extraData, setExtraData] = useState<any>(null);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, extraData]);

  const setView = (view: string, data?: any) => {
    setCurrentView(view);
    if (data) {
      setExtraData(data);
    } else {
      setExtraData(null);
    }
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setView={setView} />;
      case 'services':
        return <ServicesView setView={setView} initialServiceId={extraData?.serviceId} />;
      case 'tracking':
        return <TrackingView setView={setView} initialTrackingNumber={extraData?.trackingNumber} />;
      case 'quote':
        return <QuoteView setView={setView} />;
      case 'network':
        return <NetworkView setView={setView} />;
      case 'industries':
        return <IndustriesView setView={setView} />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'admin':
        return <AdminView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#1A1A2E] text-white">
      {/* Navbar section */}
      <Navbar currentView={currentView} setView={setView} />

      {/* Main active view container */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Footer section */}
      <Footer setView={setView} />
    </div>
  );
}
