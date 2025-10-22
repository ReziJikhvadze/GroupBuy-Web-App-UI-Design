import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Plus, Edit, Trash2, TrendingUp, Users, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export function AdminDashboard() {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('electronics');

  const campaigns = [
    { id: 1, title: 'iPhone 15 Pro - Group Buy', target: 500, current: 312, price: 800, status: 'active', daysLeft: 12, category: 'electronics' },
    { id: 2, title: 'MacBook Pro M3 - Wholesale Deal', target: 200, current: 200, price: 1800, status: 'successful', daysLeft: 0, category: 'electronics' },
    { id: 3, title: 'Samsung 65" OLED TV', target: 300, current: 245, price: 1200, status: 'active', daysLeft: 8, category: 'electronics' },
    { id: 4, title: 'Sony WH-1000XM5 Headphones', target: 400, current: 180, price: 350, status: 'failed', daysLeft: 0, category: 'electronics' },
  ];

  const stats = {
    totalCampaigns: 24,
    activeCampaigns: 12,
    successRate: 87,
    totalRevenue: 145280,
    totalUsers: 2453,
    successfulCampaigns: 8,
  };

  const recentPayments = [
    { id: 1, user: 'John Doe', campaign: 'iPhone 15 Pro', amount: 80, type: 'Deposit', date: '2025-10-20' },
    { id: 2, user: 'Sarah Smith', campaign: 'MacBook Pro M3', amount: 1620, type: 'Final', date: '2025-10-20' },
    { id: 3, user: 'Mike Johnson', campaign: 'Samsung OLED TV', amount: 120, type: 'Deposit', date: '2025-10-19' },
    { id: 4, user: 'Lisa Brown', campaign: 'iPhone 15 Pro', amount: 80, type: 'Deposit', date: '2025-10-19' },
  ];

  const getCategoryBadge = (category: string) => {
    const categoryConfig = {
      electronics: { emoji: '📱', label: 'Electronics', color: 'bg-blue-100 text-blue-700' },
      memberships: { emoji: '💪', label: 'Memberships', color: 'bg-purple-100 text-purple-700' },
      travel: { emoji: '✈️', label: 'Travel', color: 'bg-green-100 text-green-700' },
      furniture: { emoji: '🪑', label: 'Furniture', color: 'bg-orange-100 text-orange-700' },
      sports: { emoji: '🏃', label: 'Sports', color: 'bg-red-100 text-red-700' },
    };
    const config = categoryConfig[category as keyof typeof categoryConfig] || categoryConfig.electronics;
    return (
      <Badge className={config.color}>
        <span className="mr-1">{config.emoji}</span>
        {config.label}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-blue-100 text-blue-700',
      successful: 'bg-green-100 text-green-700',
      failed: 'bg-red-100 text-red-700',
    };
    return <Badge className={variants[status as keyof typeof variants]}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl mb-2">Admin Dashboard</h1>
            <p className="text-xl text-gray-600">
              Manage campaigns, users, and monitor platform performance
            </p>
          </div>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button size="lg">
                <Plus className="h-5 w-5 mr-2" />
                Create Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Campaign Title</Label>
                  <Input id="title" placeholder="e.g., iPhone 15 Pro - Group Buy" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the product and campaign details..."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">
                          <div className="flex items-center gap-2">
                            <span>📱</span>
                            <span>Electronics</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="memberships">
                          <div className="flex items-center gap-2">
                            <span>💪</span>
                            <span>Memberships</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="travel">
                          <div className="flex items-center gap-2">
                            <span>✈️</span>
                            <span>Travel</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="furniture">
                          <div className="flex items-center gap-2">
                            <span>🪑</span>
                            <span>Furniture</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="sports">
                          <div className="flex items-center gap-2">
                            <span>🏃</span>
                            <span>Sports & Fitness</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="store">Store Name</Label>
                    <Input id="store" placeholder="Apple Store" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Store Price ($)</Label>
                    <Input id="price" type="number" placeholder="800" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target">Target Quantity</Label>
                    <Input id="target" type="number" placeholder="500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (days)</Label>
                    <Input id="duration" type="number" placeholder="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discount">Discount (%)</Label>
                    <Input id="discount" type="number" placeholder="35" defaultValue="35" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Product Image URL</Label>
                  <Input id="image" placeholder="https://..." />
                  <p className="text-xs text-gray-500">Or upload an image (feature coming soon)</p>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">Create Campaign</Button>
                  <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Campaigns</span>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl mb-1">{stats.totalCampaigns}</p>
            <p className="text-sm text-gray-600">{stats.activeCampaigns} active</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Success Rate</span>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <p className="text-3xl mb-1">{stats.successRate}%</p>
            <p className="text-sm text-gray-600">{stats.successfulCampaigns} successful</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Revenue</span>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <p className="text-3xl mb-1">${(stats.totalRevenue / 1000).toFixed(1)}K</p>
            <p className="text-sm text-gray-600">This month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Users</span>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <p className="text-3xl mb-1">{stats.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-gray-600">+124 this week</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="refunds">Refunds</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns">
            <Card>
              <div className="p-6">
                <h3 className="text-xl mb-4">All Campaigns</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Days Left</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell>
                          <div>
                            <p>{campaign.title}</p>
                            <p className="text-sm text-gray-500">
                              {campaign.current}/{campaign.target} participants
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getCategoryBadge(campaign.category)}
                        </TableCell>
                        <TableCell>
                          <div className="w-24">
                            <div className="text-sm mb-1">
                              {Math.round((campaign.current / campaign.target) * 100)}%
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-600"
                                style={{ width: `${(campaign.current / campaign.target) * 100}%` }}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>${campaign.price}</TableCell>
                        <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                        <TableCell>{campaign.daysLeft > 0 ? `${campaign.daysLeft} days` : 'Ended'}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <div className="p-6">
                <h3 className="text-xl mb-4">Recent Payments</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.user}</TableCell>
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
              </div>
            </Card>
          </TabsContent>

          {/* Refunds Tab */}
          <TabsContent value="refunds">
            <Card>
              <div className="p-6">
                <h3 className="text-xl mb-4">Refund Management</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Deposit</TableHead>
                      <TableHead>Refund (8%)</TableHead>
                      <TableHead>Fee (2%)</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Mike Johnson</TableCell>
                      <TableCell>Sony WH-1000XM5 Headphones</TableCell>
                      <TableCell>$35</TableCell>
                      <TableCell className="text-green-600">$28</TableCell>
                      <TableCell className="text-gray-500">$7</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">Processed</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <div className="p-6">
                <h3 className="text-xl mb-4">User Management</h3>
                <div className="text-center py-12 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>User management features coming soon</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Alert Section */}
        <Card className="mt-8 p-6 bg-amber-50 border-amber-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg mb-2">Attention Required</h3>
              <p className="text-gray-700">
                3 campaigns are ending in less than 48 hours. Review their progress and notify participants.
              </p>
              <Button variant="outline" className="mt-3">
                View Campaigns
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
