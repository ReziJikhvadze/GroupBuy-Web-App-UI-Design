import { ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onNavigate: (view: string) => void;
  currentView: string;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function Header({ onNavigate, currentView, onLoginClick, onSignupClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-3 group"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">GroupBuy</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => onNavigate('campaigns')}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                currentView === 'campaigns' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              Campaigns
            </button>
            <button 
              onClick={() => onNavigate('how-it-works')}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                currentView === 'how-it-works' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                currentView === 'about' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              About
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            onClick={onLoginClick}
            className="hidden sm:flex hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button 
            onClick={onSignupClick}
            className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Sign Up
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-blue-50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
