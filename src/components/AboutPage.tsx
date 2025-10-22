import { ArrowRight, Users, Target, Heart, Shield, TrendingUp, Globe, Award, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onViewCampaigns: () => void;
  onSignupClick: () => void;
}

export function AboutPage({ onViewCampaigns, onSignupClick }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm border border-blue-200">
                  <Heart className="h-3.5 w-3.5" />
                  Est. 2024
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
                About GroupBuy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to make premium products accessible to everyone through the power of group buying.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={onViewCampaigns}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Browse Campaigns
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={onSignupClick}
                >
                  Join Our Community
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To democratize access to premium products by leveraging the collective buying power of communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-600">
                We believe in the power of people coming together to achieve common goals and save money collectively.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                Every transaction is clear, secure, and protected. We believe honesty builds lasting relationships.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Real Savings</h3>
              <p className="text-gray-600">
                We negotiate directly with retailers and manufacturers to bring you genuine wholesale prices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">2,453+</div>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">87%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">$2.4M</div>
              <p className="text-gray-600">Saved Together</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Successful Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              GroupBuy was founded in 2024 with a simple idea: what if people could pool their purchasing power to access the same wholesale prices that big retailers enjoy?
            </p>
            <p>
              We noticed that premium electronics, furniture, and services were often out of reach for individual buyers, not because they couldn't afford them, but because the retail markup made them unnecessarily expensive.
            </p>
            <p>
              By creating a platform where people can join forces, we're leveling the playing field. Whether it's a group of 50 people buying swimming pool memberships or 500 people purchasing the latest iPhone, everyone benefits from wholesale pricing.
            </p>
            <p>
              Today, we're proud to have helped thousands of members save millions of dollars on products they love. But we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Customer Obsession</h3>
                <p className="text-gray-600">
                  Every decision we make starts with asking: "How does this benefit our members?"
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We're constantly improving our platform to make group buying easier and more rewarding.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">
                  We only partner with authorized retailers and verify every product's authenticity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Growth Mindset</h3>
                <p className="text-gray-600">
                  We learn from every campaign and continuously evolve to serve you better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the group buying revolution and start saving today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onViewCampaigns}
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
            >
              Browse Campaigns
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onSignupClick}
              className="border-white text-white hover:bg-white/10"
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
