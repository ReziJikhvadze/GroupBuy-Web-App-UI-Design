import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { AboutPage } from './components/AboutPage';
import { CampaignList } from './components/CampaignList';
import { CampaignDetail } from './components/CampaignDetail';
import { JoinCampaignModal } from './components/JoinCampaignModal';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginModal } from './components/auth/LoginModal';
import { SignupModal } from './components/auth/SignupModal';
import { ResetPasswordModal } from './components/auth/ResetPasswordModal';
import { Campaign } from './components/CampaignCard';
import { Toaster } from './components/ui/sonner';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'campaigns' | 'detail' | 'dashboard' | 'admin' | 'how-it-works' | 'about'>('landing');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  // Mock campaign data
  const mockCampaigns: Campaign[] = [
    {
      id: '1',
      title: 'iPhone 15 Pro - Group Buy (500 Units)',
      description: 'Get the latest iPhone 15 Pro at wholesale prices! Join 500 people to unlock incredible savings on this premium smartphone. Features the powerful A17 Pro chip, titanium design, and advanced camera system.',
      image: 'https://images.unsplash.com/photo-1669049776943-66b1bb724670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjA5NDM5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 800,
      targetQuantity: 500,
      currentParticipants: 312,
      daysLeft: 12,
      status: 'active',
      store: 'Apple Authorized Retailer',
    },
    {
      id: '2',
      title: 'MacBook Pro M3 - Wholesale Deal',
      description: 'Professional-grade laptop with the revolutionary M3 chip. Perfect for creators, developers, and power users. This campaign offers significant savings on the 14-inch MacBook Pro with 16GB RAM and 512GB SSD.',
      image: 'https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMG1vZGVybnxlbnwxfHx8fDE3NjA5NDM5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 1800,
      targetQuantity: 200,
      currentParticipants: 200,
      daysLeft: 0,
      status: 'successful',
      store: 'Apple Premium Reseller',
    },
    {
      id: '3',
      title: 'Samsung 65" OLED TV - Premium Quality',
      description: 'Experience stunning picture quality with this premium 65-inch OLED TV. Features 4K resolution, HDR10+, and smart TV capabilities. Perfect for movie lovers and gamers.',
      image: 'https://images.unsplash.com/photo-1556889487-b6f8d3fc728b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxldmlzaW9uJTIwdHYlMjBzY3JlZW58ZW58MXx8fHwxNzYwOTQzOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 1200,
      targetQuantity: 300,
      currentParticipants: 245,
      daysLeft: 8,
      status: 'active',
      store: 'Samsung Official Store',
    },
    {
      id: '4',
      title: 'Sony WH-1000XM5 - Premium Headphones',
      description: 'Industry-leading noise canceling wireless headphones. Crystal clear audio quality, 30-hour battery life, and exceptional comfort for all-day wear.',
      image: 'https://images.unsplash.com/photo-1737885197946-6d9d79dade89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW8lMjBwcmVtaXVtfGVufDF8fHx8MTc2MDk0MzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 350,
      targetQuantity: 400,
      currentParticipants: 180,
      daysLeft: 0,
      status: 'failed',
      store: 'Sony Electronics',
    },
    {
      id: '5',
      title: 'iPad Pro 12.9" - M2 Chip',
      description: 'The ultimate iPad experience with the M2 chip. Perfect for creative professionals with Apple Pencil support and stunning Liquid Retina XDR display.',
      image: 'https://images.unsplash.com/photo-1669049776943-66b1bb724670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjA5NDM5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 1100,
      targetQuantity: 250,
      currentParticipants: 198,
      daysLeft: 15,
      status: 'active',
      store: 'Apple Authorized Retailer',
    },
    {
      id: '6',
      title: 'Nintendo Switch OLED - Gaming Console',
      description: 'Enhanced gaming experience with a vibrant 7-inch OLED screen, 64GB storage, and improved audio. Includes dock and Joy-Con controllers.',
      image: 'https://images.unsplash.com/photo-1556889487-b6f8d3fc728b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxldmlzaW9uJTIwdHYlMjBzY3JlZW58ZW58MXx8fHwxNzYwOTQzOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 320,
      targetQuantity: 350,
      currentParticipants: 287,
      daysLeft: 5,
      status: 'active',
      store: 'Nintendo Official Store',
    },
    {
      id: '7',
      title: 'Apple Watch Series 9 - Smart Fitness',
      description: 'Track your health and fitness goals with the latest Apple Watch. Features advanced health sensors, always-on display, and seamless iPhone integration.',
      image: 'https://images.unsplash.com/photo-1716234479503-c460b87bdf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzYwOTc3NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 420,
      targetQuantity: 300,
      currentParticipants: 300,
      daysLeft: 0,
      status: 'successful',
      store: 'Apple Authorized Retailer',
    },
    {
      id: '8',
      title: 'Sony A7IV Camera - Professional Photography',
      description: 'Full-frame mirrorless camera with 33MP sensor, 4K video, and advanced autofocus. Perfect for professional photographers and videographers.',
      image: 'https://images.unsplash.com/photo-1759974990343-c960e5831853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwMzY3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 2400,
      targetQuantity: 150,
      currentParticipants: 150,
      daysLeft: 0,
      status: 'successful',
      store: 'Sony Professional',
    },
    {
      id: '9',
      title: 'DJI Mini 3 Pro - Aerial Photography Drone',
      description: 'Lightweight professional drone with 4K HDR video, obstacle avoidance, and extended flight time. Capture stunning aerial footage easily.',
      image: 'https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBhZXJpYWx8ZW58MXx8fHwxNzYwOTUyMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      storePrice: 750,
      targetQuantity: 200,
      currentParticipants: 200,
      daysLeft: 0,
      status: 'successful',
      store: 'DJI Official Store',
    },
  ];

  const handleViewDetails = (campaignId: string) => {
    const campaign = mockCampaigns.find(c => c.id === campaignId);
    if (campaign) {
      setSelectedCampaign(campaign);
      setCurrentView('detail');
      window.scrollTo(0, 0);
    }
  };

  const handleJoinCampaign = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setShowJoinModal(true);
  };

  const handleNavigate = (view: string) => {
    if (view === 'landing' || view === 'campaigns' || view === 'dashboard' || view === 'admin' || view === 'how-it-works' || view === 'about') {
      setCurrentView(view as any);
      window.scrollTo(0, 0);
    }
  };

  const closeAllModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
    setShowResetPasswordModal(false);
  };

  const handleLoginClick = () => {
    closeAllModals();
    setShowLoginModal(true);
  };

  const handleSignupClick = () => {
    closeAllModals();
    setShowSignupModal(true);
  };

  const handleResetPasswordClick = () => {
    closeAllModals();
    setShowResetPasswordModal(true);
  };

  const featuredCampaigns = mockCampaigns.filter(c => c.status === 'active').slice(0, 3);
  const successfulCampaigns = mockCampaigns.filter(c => c.status === 'successful');

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onNavigate={handleNavigate} 
        currentView={currentView}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      
      <main className="flex-1">
        {currentView === 'landing' && (
          <LandingPage 
            featuredCampaigns={featuredCampaigns}
            successfulCampaigns={successfulCampaigns}
            onViewCampaigns={() => setCurrentView('campaigns')}
            onViewDetails={handleViewDetails}
            onLearnMore={() => setCurrentView('how-it-works')}
          />
        )}

        {currentView === 'how-it-works' && (
          <HowItWorksPage
            onViewCampaigns={() => setCurrentView('campaigns')}
            onSignupClick={handleSignupClick}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onViewCampaigns={() => setCurrentView('campaigns')}
            onSignupClick={handleSignupClick}
          />
        )}

        {currentView === 'campaigns' && (
          <CampaignList 
            campaigns={mockCampaigns}
            onViewDetails={handleViewDetails}
          />
        )}

        {currentView === 'detail' && selectedCampaign && (
          <CampaignDetail 
            campaign={selectedCampaign}
            onBack={() => setCurrentView('campaigns')}
            onJoinCampaign={handleJoinCampaign}
          />
        )}

        {currentView === 'dashboard' && (
          <UserDashboard onViewCampaign={handleViewDetails} />
        )}

        {currentView === 'admin' && (
          <AdminDashboard />
        )}
      </main>

      <Footer 
        onNavigate={handleNavigate}
        onSignupClick={handleSignupClick}
      />

      {showJoinModal && selectedCampaign && (
        <JoinCampaignModal 
          campaign={selectedCampaign}
          onClose={() => setShowJoinModal(false)}
        />
      )}

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSignupClick={handleSignupClick}
          onResetPasswordClick={handleResetPasswordClick}
        />
      )}

      {showSignupModal && (
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          onLoginClick={handleLoginClick}
        />
      )}

      {showResetPasswordModal && (
        <ResetPasswordModal
          onClose={() => setShowResetPasswordModal(false)}
          onBackToLogin={handleLoginClick}
        />
      )}

      <Toaster />
    </div>
  );
}

export default App;
