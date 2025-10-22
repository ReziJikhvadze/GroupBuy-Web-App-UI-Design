import { ArrowRight, Users, Target, CheckCircle, Shield, TrendingDown, Clock, DollarSign, Package, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HowItWorksPageProps {
  onViewCampaigns: () => void;
  onSignupClick: () => void;
}

export function HowItWorksPage({ onViewCampaigns, onSignupClick }: HowItWorksPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 border-b">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm border border-blue-200">
              <TrendingDown className="h-3.5 w-3.5" />
              Simple, Transparent, Effective
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            How GroupBuy Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join group buying campaigns and save up to 40% on premium products. It's simple, secure, and transparent.
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">1</span>
              </div>
              <Card className="p-8 pt-12 h-full border-2 hover:border-blue-200 transition-all">
                <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 mx-auto">
                  <Target className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4 text-center">Browse & Join</h3>
                <p className="text-gray-600 text-center mb-6">
                  Explore active campaigns for premium products. When you find something you like, join by paying just a 10% deposit to secure your spot.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-blue-900">
                    <strong>Example:</strong> $800 iPhone? Pay only $80 to join!
                  </p>
                </div>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">2</span>
              </div>
              <Card className="p-8 pt-12 h-full border-2 hover:border-blue-200 transition-all">
                <div className="h-14 w-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4 text-center">Watch It Grow</h3>
                <p className="text-gray-600 text-center mb-6">
                  Track the campaign's progress in real-time. When enough people join and the target is reached before the deadline, everyone wins!
                </p>
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <p className="text-sm text-indigo-900">
                    <strong>87% success rate</strong> - Most campaigns reach their goals!
                  </p>
                </div>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">3</span>
              </div>
              <Card className="p-8 pt-12 h-full border-2 hover:border-blue-200 transition-all">
                <div className="h-14 w-14 rounded-xl bg-green-50 flex items-center justify-center mb-6 mx-auto">
                  <Package className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4 text-center">Pay & Receive</h3>
                <p className="text-gray-600 text-center mb-6">
                  Once the goal is reached, pay the remaining 90% and receive your product at wholesale prices. Fast delivery guaranteed!
                </p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <p className="text-sm text-green-900">
                    <strong>Save up to 40%</strong> compared to retail prices!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-white shadow-xl border-2 border-blue-100">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-gray-900 mb-4">Money-Back Guarantee</h3>
                <p className="text-gray-600 mb-6">
                  Your deposit is protected. If a campaign doesn't reach its goal before the deadline, you'll get 80% of your deposit back immediately. We only keep a 20% service fee to cover processing costs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>100% Transparent</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Secure Payments</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Fast Refunds</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-600">See exactly where your money goes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">When Campaign Succeeds</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Pay remaining 90%</p>
                    <p className="text-sm text-gray-600">Complete your purchase at wholesale price</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Receive your product</p>
                    <p className="text-sm text-gray-600">Fast delivery within 2-3 weeks</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Save up to 40%</p>
                    <p className="text-sm text-gray-600">Compared to retail prices</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">If Campaign Fails</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Get 80% refund</p>
                    <p className="text-sm text-gray-600">Automatic refund to your account</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">20% service fee</p>
                    <p className="text-sm text-gray-600">Covers processing & platform costs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900">No hidden charges</p>
                    <p className="text-sm text-gray-600">100% transparent pricing</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg text-gray-900 mb-2">How long do campaigns run?</h3>
              <p className="text-gray-600">Campaigns typically run for 7-30 days. Each campaign has a countdown timer showing exactly how much time is left.</p>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg text-gray-900 mb-2">What happens if I change my mind?</h3>
              <p className="text-gray-600">Once you join a campaign, your deposit is committed. However, if the campaign fails to reach its goal, you'll receive an 80% refund automatically.</p>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg text-gray-900 mb-2">How do I pay the remaining amount?</h3>
              <p className="text-gray-600">When a campaign succeeds, you'll receive a notification to pay the remaining 90%. You can pay securely through our platform using credit card or other payment methods.</p>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg text-gray-900 mb-2">Are the products authentic?</h3>
              <p className="text-gray-600">Yes! All products come from authorized retailers and manufacturers. We verify all our partner stores to ensure authenticity.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Start Saving?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of smart shoppers who are saving money on premium products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onViewCampaigns}
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
            >
              Browse Active Campaigns
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onSignupClick}
              className="border-white text-white hover:bg-white/10"
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
