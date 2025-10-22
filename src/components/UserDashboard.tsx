import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { CheckCircle, Clock, XCircle, DollarSign, User, CreditCard, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UserDashboardProps {
  onViewCampaign: (id: string) => void;
}

export function UserDashboard({ onViewCampaign }: UserDashboardProps) {
  const myCampaigns = [
    {
      id: '1',
      title: 'iPhone 15 Pro - Group Buy',
      image: 'https://images.unsplash.com/photo-1669049776943-66b1bb724670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjA5NDM5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'active' as const,
      depositPaid: 80,
      totalPrice: 800,
      progress: 62,
      daysLeft: 12,
      quantity: 1,
    },
    {
      id: '2',
      title: 'MacBook Pro M3 - Wholesale Deal',
      image: 'https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMG1vZGVybnxlbnwxfHx8fDE3NjA5NDM5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'successful' as const,
      depositPaid: 180,
      totalPrice: 1800,
      progress: 100,
      daysLeft: 0,
      quantity: 1,
    },
    {
      id: '3',
      title: 'Sony WH-1000XM5 Headphones',
      image: 'https://images.unsplash.com/photo-1737885197946-6d9d79dade89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW8lMjBwcmVtaXVtfGVufDF8fHx8MTc2MDk0MzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'failed' as const,
      depositPaid: 35,
      totalPrice: 350,
      progress: 45,
      daysLeft: 0,
      quantity: 1,
    },
  ];

  const payments = [
    { id: 1, campaign: 'iPhone 15 Pro - Group Buy', type: 'Deposit', amount: 80, date: '2025-10-15', status: 'completed' },
    { id: 2, campaign: 'MacBook Pro M3 - Wholesale Deal', type: 'Deposit', amount: 180, date: '2025-10-10', status: 'completed' },
    { id: 3, campaign: 'MacBook Pro M3 - Wholesale Deal', type: 'Final Payment', amount: 1620, date: '2025-10-18', status: 'completed' },
    { id: 4, campaign: 'Sony WH-1000XM5 Headphones', type: 'Deposit', amount: 35, date: '2025-10-08', status: 'completed' },
  ];

  const refunds = [
    { id: 1, campaign: 'Sony WH-1000XM5 Headphones', depositPaid: 35, refundAmount: 28, status: 'processed', date: '2025-10-19' },
  ];

  const getStatusBadge = (status: 'active' | 'successful' | 'failed') => {
    const variants = {
      active: { className: 'bg-blue-100 text-blue-700', label: 'Active', icon: Clock },
      successful: { className: 'bg-green-100 text-green-700', label: 'Successful', icon: CheckCircle },
      failed: { className: 'bg-red-100 text-red-700', label: 'Failed', icon: XCircle },
    };
    const variant = variants[status];
    const Icon = variant.icon;
    return (
      <Badge className={variant.className}>
        <Icon className="h-3 w-3 mr-1" />
        {variant.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2">My Dashboard</h1>
          <p className="text-xl text-gray-600">
            Track your campaigns, payments, and savings
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Active Campaigns</span>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl">
              {myCampaigns.filter(c => c.status === 'active').length}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Successful</span>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <p className="text-3xl">
              {myCampaigns.filter(c => c.status === 'successful').length}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Spent</span>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <p className="text-3xl">$1,880</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Saved</span>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <p className="text-3xl">$520</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="campaigns">My Campaigns</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="refunds">Refunds</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* My Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            {myCampaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 h-48 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback 
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl mb-2">{campaign.title}</h3>
                          {getStatusBadge(campaign.status)}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Deposit Paid</p>
                          <p className="text-xl">${campaign.depositPaid}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Price</p>
                          <p className="text-xl">${campaign.totalPrice}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Quantity</p>
                          <p className="text-xl">{campaign.quantity}</p>
                        </div>
                      </div>

                      {campaign.status === 'active' && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Campaign Progress</span>
                            <span className="text-blue-600">{campaign.progress}%</span>
                          </div>
                          <Progress value={campaign.progress} className="h-2" />
                          <p className="text-sm text-gray-600">
                            {campaign.daysLeft} days remaining
                          </p>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Button onClick={() => onViewCampaign(campaign.id)}>
                          View Campaign
                        </Button>
                        {campaign.status === 'successful' && (
                          <Button variant="default" className="bg-green-600 hover:bg-green-700">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Pay Remaining ${campaign.totalPrice - campaign.depositPaid}
                          </Button>
                        )}
                        {campaign.status === 'failed' && (
                          <Badge className="bg-red-100 text-red-700">
                            Refund: ${(campaign.depositPaid * 0.8).toFixed(2)}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.campaign}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{payment.type}</Badge>
                      </TableCell>
                      <TableCell>${payment.amount}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Refunds Tab */}
          <TabsContent value="refunds">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Deposit Paid</TableHead>
                    <TableHead>Refund Amount (8%)</TableHead>
                    <TableHead>Service Fee (2%)</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {refunds.map((refund) => (
                    <TableRow key={refund.id}>
                      <TableCell>{refund.campaign}</TableCell>
                      <TableCell>${refund.depositPaid}</TableCell>
                      <TableCell className="text-green-600">${refund.refundAmount}</TableCell>
                      <TableCell className="text-gray-500">${refund.depositPaid - refund.refundAmount}</TableCell>
                      <TableCell>{refund.date}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">Processed</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <User className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl">John Doe</h3>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>

              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-sm text-gray-600">Member Since</label>
                  <p className="text-lg">September 2025</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Total Campaigns Joined</label>
                  <p className="text-lg">{myCampaigns.length}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Success Rate</label>
                  <p className="text-lg">66%</p>
                </div>
                <Button variant="outline" className="mt-4">
                  Edit Profile
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
