import { useState } from 'react';
import { X, Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { toast } from 'sonner@2.0.3';

interface ResetPasswordModalProps {
  onClose: () => void;
  onBackToLogin: () => void;
}

export function ResetPasswordModal({ onClose, onBackToLogin }: ResetPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending reset email
    setTimeout(() => {
      setLoading(false);
      setEmailSent(true);
      toast.success('Reset link sent! Check your email.');
    }, 1000);
  };

  if (emailSent) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md p-6 relative border-gray-200">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-2xl text-gray-900 mb-2">Check Your Email</h2>
              <p className="text-gray-600">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <p className="text-sm text-gray-700">
                <strong>Didn't receive the email?</strong>
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                <li>Check your spam folder</li>
                <li>Make sure the email address is correct</li>
                <li>Wait a few minutes and try again</li>
              </ul>
            </div>

            <div className="space-y-2">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={onBackToLogin}
              >
                Back to Sign In
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-300 hover:bg-gray-50"
                onClick={() => setEmailSent(false)}
              >
                Try Different Email
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md p-6 relative border-gray-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div>
            <button
              onClick={onBackToLogin}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sign In
            </button>
            <h2 className="text-2xl text-gray-900 mb-2">Reset Password</h2>
            <p className="text-gray-600">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>

          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reset-email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="reset-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-gray-300"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> The reset link will expire in 1 hour for security reasons.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
