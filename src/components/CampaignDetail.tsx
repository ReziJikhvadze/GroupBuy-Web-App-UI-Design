import { ArrowLeft, Clock, Users, Share2, Building2, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Campaign } from './CampaignCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface CampaignDetailProps {
  campaign: Campaign;
  onBack: () => void;
  onJoinCampaign: (campaign: Campaign) => void;
}

export function CampaignDetail({ campaign, onBack, onJoinCampaign }: CampaignDetailProps) {
  const deposit = campaign.storePrice * 0.1;
  const refundAmount = deposit * 0.8;
  const progressPercentage = (campaign.currentParticipants / campaign.targetQuantity) * 100;
  const [showComments] = useState(true);

  const mockComments = [
    { id: 1, user: 'Sarah M.', time: '2 hours ago', text: 'Great deal! Just joined. Only 50 spots left!' },
    { id: 2, user: 'Mike T.', time: '5 hours ago', text: 'Has anyone ordered from this store before?' },
    { id: 3, user: 'Lisa K.', time: '1 day ago', text: 'This is my third campaign with GroupBuy. Always delivers!' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Campaigns
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Image */}
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-gray-100">
                <ImageWithFallback 
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-blue-600">
                    {campaign.status === 'active' ? 'Active Campaign' : campaign.status}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Campaign Details */}
            <Card className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl mb-2">{campaign.title}</h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="h-4 w-4" />
                  <span>{campaign.store}</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl mb-3">About this campaign</h3>
                <p className="text-gray-700 leading-relaxed">
                  {campaign.description}
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  This is a verified group buying campaign. When we reach {campaign.targetQuantity} participants, 
                  everyone will get access to wholesale pricing. Join now to secure your spot and save on this premium product.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl mb-4">How it works</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <p>Pay <strong>${deposit.toFixed(0)} (10%)</strong> deposit to join the campaign</p>
                      <p className="text-sm text-gray-600">Your spot is secured, and your deposit is protected</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <p>Wait for the campaign to reach <strong>{campaign.targetQuantity} participants</strong></p>
                      <p className="text-sm text-gray-600">We'll keep you updated on the progress</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <p>If successful, pay the remaining <strong>${(campaign.storePrice * 0.9).toFixed(0)} (90%)</strong></p>
                      <p className="text-sm text-gray-600">If failed, receive ${refundAmount.toFixed(0)} refund (8%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comments Section */}
            {showComments && (
              <Card className="p-6">
                <h3 className="text-xl mb-4">Discussion ({mockComments.length})</h3>
                <div className="space-y-4">
                  {mockComments.map(comment => (
                    <div key={comment.id} className="flex gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {comment.user.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span>{comment.user}</span>
                          <span className="text-sm text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="text-xl mb-4">Campaign Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Participants</span>
                      <span className="text-2xl">{campaign.currentParticipants}/{campaign.targetQuantity}</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    <p className="text-sm text-gray-600 mt-2">
                      {progressPercentage.toFixed(0)}% funded • {campaign.targetQuantity - campaign.currentParticipants} spots left
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-orange-600 bg-orange-50 p-3 rounded-lg">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p className="text-sm">Time remaining</p>
                      <p className="text-xl">{campaign.daysLeft} days</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl mb-4">Pricing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Store Price</span>
                    <span className="text-xl">${campaign.storePrice}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-blue-50 px-4 rounded-lg">
                    <span>Deposit (10%)</span>
                    <span className="text-2xl text-blue-600">${deposit.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Remaining (90%)</span>
                    <span>${(campaign.storePrice * 0.9).toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full text-lg py-6"
                onClick={() => onJoinCampaign(campaign)}
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Join Campaign - ${deposit.toFixed(0)}
              </Button>

              <Button variant="outline" className="w-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share Campaign
              </Button>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Secure payment processing</p>
                    <p className="text-gray-600">Your money is protected</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>8% refund if campaign fails</p>
                    <p className="text-gray-600">Only 2% service fee</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Fast delivery on success</p>
                    <p className="text-gray-600">2-3 weeks after funding</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
