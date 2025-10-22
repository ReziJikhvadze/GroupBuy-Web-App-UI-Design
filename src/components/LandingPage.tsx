import { ArrowRight, Users, Target, CheckCircle, Shield, TrendingDown, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CampaignCard, Campaign } from './CampaignCard';
import { CampaignRowCard } from './CampaignRowCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useEffect, useState } from 'react';

interface LandingPageProps {
  featuredCampaigns: Campaign[];
  successfulCampaigns: Campaign[];
  onViewCampaigns: () => void;
  onViewDetails: (id: string) => void;
  onLearnMore: () => void;
}

export function LandingPage({ featuredCampaigns, successfulCampaigns, onViewCampaigns, onViewDetails, onLearnMore }: LandingPageProps) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Hero slider with different campaign types
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1758186386318-42f7fb10f465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHRlY2hub2xvZ3klMjBnYWRnZXRzfGVufDF8fHx8MTc2MDk1MTAyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Electronics',
      title: 'Latest Tech at Wholesale Prices',
      subtitle: 'Join 500 people buying iPhone 15 Pro',
      savings: '35% OFF',
      participants: '312/500',
      bgColor: 'from-blue-600/90 to-indigo-600/90'
    },
    {
      image: 'https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzYwOTQ1MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Memberships',
      title: 'Luxury Pool Memberships',
      subtitle: 'Group of 50 members - Annual access',
      savings: '40% OFF',
      participants: '38/50',
      bgColor: 'from-cyan-600/90 to-blue-600/90'
    },
    {
      image: 'https://images.unsplash.com/photo-1716348300558-c81409ed958a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwbWVtYmVyc2hpcHxlbnwxfHx8fDE3NjEwMzQ2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Fitness',
      title: 'Premium Gym Memberships',
      subtitle: '100 people joining elite fitness center',
      savings: '30% OFF',
      participants: '87/100',
      bgColor: 'from-orange-600/90 to-red-600/90'
    },
    {
      image: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbCUyMGdyb3VwfGVufDF8fHx8MTc2MTAzNDY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Travel',
      title: 'Group Travel Packages',
      subtitle: 'Beach resort for 75 people',
      savings: '45% OFF',
      participants: '62/75',
      bgColor: 'from-purple-600/90 to-pink-600/90'
    },
    {
      image: 'https://images.unsplash.com/photo-1753103461856-352241a33626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBob21lJTIwbW9kZXJufGVufDF8fHx8MTc2MTAzNDY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Furniture',
      title: 'Designer Furniture Collections',
      subtitle: 'Modern living room sets for 40 homes',
      savings: '38% OFF',
      participants: '31/40',
      bgColor: 'from-emerald-600/90 to-teal-600/90'
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative bg-gray-900">
        <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[500px] md:h-[600px]">
                  {/* Background Image */}
                  <ImageWithFallback 
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} />
                  
                  {/* Content */}
                  <div className="relative h-full container mx-auto px-4 flex items-center">
                    <div className="max-w-2xl text-white">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                        <span className="text-sm uppercase tracking-wider">{slide.category}</span>
                        <div className="h-1 w-1 rounded-full bg-white" />
                        <span className="text-sm">{slide.participants} joined</span>
                      </div>
                      
                      {/* Title */}
                      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <p className="text-xl md:text-2xl text-white/90 mb-6">
                        {slide.subtitle}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2">
                          <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <TrendingDown className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-2xl">{slide.savings}</p>
                            <p className="text-sm text-white/80">Savings</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-2xl">{slide.participants.split('/')[0]}</p>
                            <p className="text-sm text-white/80">Participants</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          size="lg" 
                          onClick={onViewCampaigns}
                          className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-base"
                        >
                          Join This Campaign
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline"
                          onClick={onLearnMore}
                          className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-base"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 h-12 w-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="right-4 h-12 w-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
        </Carousel>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? 'w-12 bg-white' : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 px-4 border-b shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-3xl text-gray-900">2,453</span>
                <span className="text-gray-400">+</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Active Members</p>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-3xl text-gray-900">87</span>
                <span className="text-gray-400">%</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Success Rate</p>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-3xl text-gray-900">$2.4</span>
                <span className="text-gray-400">M</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Saved Together</p>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-3xl text-gray-900">150</span>
                <span className="text-gray-400">+</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Active Campaigns - FIRST! */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-blue-600"></div>
              <span className="text-sm uppercase tracking-wider text-gray-500">Featured</span>
            </div>
            <h2 className="text-3xl text-gray-900 mb-2">
              🔥 Active Campaigns - Join Now!
            </h2>
            <p className="text-gray-600">
              Limited spots available. Join these campaigns before they're fully funded.
            </p>
          </div>
          
          <div className="space-y-4 mb-10">
            {featuredCampaigns.map((campaign) => (
              <CampaignRowCard 
                key={campaign.id}
                campaign={campaign}
                onViewDetails={onViewDetails}
                featured={true}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={onViewCampaigns}
              className="border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
            >
              View All Active Campaigns
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-t">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-12 bg-green-600"></div>
              <span className="text-sm uppercase tracking-wider text-green-700">Proof It Works</span>
              <div className="h-1 w-12 bg-green-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-2">
              ✅ Recent Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. See what our community has already saved together.
            </p>
          </div>

          {/* Success Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl text-gray-900">{successfulCampaigns.length}</p>
                  <p className="text-sm text-gray-600">Successful Campaigns</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl text-gray-900">
                    {successfulCampaigns.reduce((sum, c) => sum + c.currentParticipants, 0)}
                  </p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-md">
                  <TrendingDown className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl text-gray-900">$1.2M+</p>
                  <p className="text-sm text-gray-600">Total Savings</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Successful Campaigns Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {successfulCampaigns.map((campaign) => {
              const savings = Math.round((campaign.storePrice * 0.35) * campaign.currentParticipants);
              const savingsPerPerson = Math.round(campaign.storePrice * 0.35);
              
              return (
                <Card 
                  key={campaign.id}
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white border-2 border-transparent hover:border-green-200 overflow-hidden"
                  onClick={() => onViewDetails(campaign.id)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback 
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="px-3 py-1.5 rounded-full bg-green-500 text-white text-xs shadow-lg flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                      {campaign.title}
                    </h3>
                    
                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Participants</span>
                        <span className="text-gray-900">{campaign.currentParticipants}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Avg. Savings</span>
                        <span className="text-green-600">${savingsPerPerson}</span>
                      </div>
                    </div>

                    {/* Total Savings Badge */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                      <p className="text-xs text-green-700 mb-1">Total Community Savings</p>
                      <p className="text-2xl text-green-600">${savings.toLocaleString()}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl text-gray-900 mb-2">What Our Members Say</h3>
              <p className="text-gray-600">Real feedback from successful campaigns</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex gap-1 text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 italic">
                  "Saved $280 on my MacBook Pro! This platform is incredible. Will definitely join more campaigns."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-900">Sarah M.</p>
                    <p className="text-xs text-gray-500">MacBook Pro Campaign</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-1 text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 italic">
                  "The whole process was smooth and transparent. Got my Apple Watch for 35% less than retail!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600" />
                  <div>
                    <p className="text-sm text-gray-900">James L.</p>
                    <p className="text-xs text-gray-500">Apple Watch Campaign</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-1 text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 italic">
                  "Finally got my dream camera! The group buying model makes expensive tech affordable."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600" />
                  <div>
                    <p className="text-sm text-gray-900">Emily R.</p>
                    <p className="text-xs text-gray-500">Sony Camera Campaign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* How It Works */}
      <section className="py-16 px-4 bg-white border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-blue-600"></div>
              <span className="text-sm uppercase tracking-wider text-gray-500">Process</span>
            </div>
            <h2 className="text-3xl text-gray-900 mb-2">
              How It Works
            </h2>
            <p className="text-gray-600">
              Three simple steps to start saving
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">1</span>
                </div>
                <h3 className="text-xl text-gray-900">Join a Campaign</h3>
              </div>
              <p className="text-gray-600 pl-13">
                Browse active campaigns and pay a 10% deposit to secure your spot in the group buy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">2</span>
                </div>
                <h3 className="text-xl text-gray-900">Reach the Goal</h3>
              </div>
              <p className="text-gray-600 pl-13">
                Watch the campaign progress. When the target is reached, everyone wins!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">3</span>
                </div>
                <h3 className="text-xl text-gray-900">Complete & Save</h3>
              </div>
              <p className="text-gray-600 pl-13">
                Pay the remaining 90% and receive your product at wholesale prices.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg text-gray-900">Money-Back Guarantee</h3>
                </div>
                <p className="text-gray-600">
                  If a campaign doesn't reach its goal, you'll receive 8% of your deposit back. We only keep 2% as a service fee.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4" />
                <span>100% transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-gray-50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-blue-600"></div>
              <span className="text-sm uppercase tracking-wider text-gray-500">Benefits</span>
            </div>
            <h2 className="text-3xl text-gray-900 mb-2">
              Why Choose GroupBuy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg text-gray-900">Secure Payments</h3>
              <p className="text-sm text-gray-600">Industry-standard encryption protects your transactions</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg text-gray-900">87% Success Rate</h3>
              <p className="text-sm text-gray-600">Most campaigns reach their goals successfully</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg text-gray-900">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Products delivered within 2-3 weeks</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg text-gray-900">Community Driven</h3>
              <p className="text-sm text-gray-600">Join thousands of smart shoppers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl text-white">Ready to Start Saving?</h2>
            <p className="text-lg text-gray-400">
              Join thousands of smart shoppers saving on premium products
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              onClick={onViewCampaigns} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              Browse Campaigns
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="pt-4 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
