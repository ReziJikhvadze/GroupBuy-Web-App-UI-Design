import { X, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Campaign } from './CampaignCard';
import { useState } from 'react';

interface JoinCampaignModalProps {
  campaign: Campaign;
  onClose: () => void;
}

export function JoinCampaignModal({ campaign, onClose }: JoinCampaignModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const deposit = campaign.storePrice * 0.1;
  const totalDeposit = deposit * quantity;
  const totalPrice = campaign.storePrice * quantity;
  const remainingAmount = totalPrice - totalDeposit;

  const handlePayment = () => {
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl mb-2">Payment Successful!</h2>
              <p className="text-gray-600">
                You've successfully joined the campaign. We'll notify you about the progress.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Campaign</span>
                <span>{campaign.title}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Quantity</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Deposit Paid</span>
                <span className="text-green-600">${totalDeposit.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Button className="w-full" onClick={onClose}>
                View My Campaigns
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                Back to Browse
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl mb-2">Join Campaign</h2>
            <p className="text-gray-600">{campaign.title}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input 
                id="quantity"
                type="number" 
                min="1" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                How many units would you like to purchase?
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <h3>Cost Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Store Price (per unit)</span>
                  <span>${campaign.storePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity</span>
                  <span>× {quantity}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Price</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-blue-50 px-3 rounded">
                  <span>Deposit Due Now (10%)</span>
                  <span className="text-xl text-blue-600">${totalDeposit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Remaining (due if successful)</span>
                  <span>${remainingAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="text-sm mb-2">Refund Policy</h4>
              <p className="text-sm text-gray-700">
                If the campaign doesn't reach its goal, you'll receive <strong>8% refund (${(totalDeposit * 0.8).toFixed(2)})</strong>. 
                We keep 2% as a service fee.
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3>Payment Method</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12">
                <CreditCard className="h-4 w-4 mr-2" />
                Credit Card
              </Button>
              <Button variant="outline" className="h-12">
                PayPal
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full text-lg py-6"
              onClick={handlePayment}
              disabled={processing}
            >
              {processing ? (
                'Processing...'
              ) : (
                <>
                  <CreditCard className="h-5 w-5 mr-2" />
                  Pay ${totalDeposit.toFixed(2)} Deposit
                </>
              )}
            </Button>
            <Button variant="ghost" className="w-full" onClick={onClose}>
              Cancel
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500">
            By continuing, you agree to our terms and conditions. Your payment is secure and encrypted.
          </p>
        </div>
      </Card>
    </div>
  );
}
