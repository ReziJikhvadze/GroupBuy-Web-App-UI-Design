import { ShoppingCart, Mail } from 'lucide-react';
import { Separator } from './ui/separator';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSignupClick: () => void;
}

export function Footer({ onNavigate, onSignupClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl text-white">GroupBuy</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The social shopping platform where people buy premium products together at wholesale prices.
            </p>
            <button 
              onClick={onSignupClick}
              className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors"
            >
              Join GroupBuy
            </button>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => onNavigate('campaigns')} className="hover:text-white transition-colors">Active Campaigns</button></li>
              <li><button onClick={() => onNavigate('campaigns')} className="hover:text-white transition-colors">Success Stories</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Press Kit</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">Help Center</button></li>
              <li><button onClick={() => onNavigate('landing')} className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('landing')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">Refund Policy</button></li>
              <li><button onClick={() => onNavigate('landing')} className="hover:text-white transition-colors">Security</button></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; 2025 GroupBuy. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:support@groupbuy.com" className="hover:text-white transition-colors">
              support@groupbuy.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
