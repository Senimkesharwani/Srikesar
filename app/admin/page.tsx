"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Briefcase, Instagram, DollarSign } from "lucide-react"
import {
  getDashboardStats,
  getContactSubmissions,
  getCollaborationInquiries,
  getAnalytics,
  updateContactStatus,
  updateCollaborationStatus,
} from "@/lib/database"
import { getInstagramAnalytics } from "@/app/actions/instagram-rapid"

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null)
  const [contacts, setContacts] = useState<any[]>([])
  const [collaborations, setCollaborations] = useState<any[]>([])
  const [analytics, setAnalytics] = useState<any>(null)
  const [instagramData, setInstagramData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const [dashboardStats, contactList, collaborationList, analyticsData, igData] = await Promise.all([
        getDashboardStats(),
        getContactSubmissions(20),
        getCollaborationInquiries(20),
        getAnalytics(30),
        getInstagramAnalytics(),
      ])

      setStats(dashboardStats)
      setContacts(contactList)
      setCollaborations(collaborationList)
      setAnalytics(analyticsData)
      setInstagramData(igData)
    } catch (error) {
      console.error("Error loading dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleContactStatusUpdate = async (id: string, status: any) => {
    await updateContactStatus(id, status)
    loadDashboardData()
  }

  const handleCollaborationStatusUpdate = async (id: string, status: any) => {
    await updateCollaborationStatus(id, status)
    loadDashboardData()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website, track performance, and handle inquiries</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                  <p className="text-3xl font-bold text-gray-900">{stats?.totalContacts || 0}</p>
                </div>
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-sm text-green-600 mt-2">+{stats?.recentContacts || 0} this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Collaborations</p>
                  <p className="text-3xl font-bold text-gray-900">{stats?.totalCollaborations || 0}</p>
                </div>
                <Briefcase className="h-8 w-8 text-purple-500" />
              </div>
              <p className="text-sm text-orange-600 mt-2">{stats?.pendingCollaborations || 0} pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">₹{(stats?.totalRevenue || 0).toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-sm text-gray-600 mt-2">{stats?.conversionRate || 0}% conversion</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Instagram</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {instagramData?.profile?.follower_count?.toLocaleString() || "450K"}
                  </p>
                </div>
                <Instagram className="h-8 w-8 text-pink-500" />
              </div>
              <p className="text-sm text-blue-600 mt-2">{instagramData?.engagementRate || "8.5%"} engagement</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
          </TabsList>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Recent Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium">{contact.name}</h3>
                            <Badge variant={contact.priority === "high" ? "destructive" : "secondary"}>
                              {contact.priority}
                            </Badge>
                            <Badge variant={contact.status === "new" ? "default" : "outline"}>{contact.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{contact.email}</p>
                          <p className="text-sm font-medium mb-2">{contact.subject}</p>
                          <p className="text-sm text-gray-700 line-clamp-2">{contact.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{new Date(contact.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleContactStatusUpdate(contact.id, "replied")}
                          >
                            Mark Replied
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => window.open(`mailto:${contact.email}?subject=Re: ${contact.subject}`)}
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Collaborations Tab */}
          <TabsContent value="collaborations">
            <Card>
              <CardHeader>
                <CardTitle>Collaboration Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {collaborations.map((collab) => (
                    <div key={collab.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium">{collab.name}</h3>
                            <Badge variant="secondary">{collab.company}</Badge>
                            <Badge variant={collab.status === "new" ? "default" : "outline"}>{collab.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{collab.email}</p>
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="text-sm">
                              <strong>Budget:</strong> {collab.budget.replace("-", " - ").replace("k", "K")}
                            </span>
                            <span className="text-sm">
                              <strong>Type:</strong> {collab.projectType.replace("-", " ")}
                            </span>
                            <span className="text-sm text-green-600">
                              <strong>Est. Value:</strong> ₹{collab.estimatedValue.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-2">{collab.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{new Date(collab.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleCollaborationStatusUpdate(collab.id, "proposal_sent")}
                          >
                            Send Proposal
                          </Button>
                          <Button
                            size="sm"
                            onClick={() =>
                              window.open(`mailto:${collab.email}?subject=Collaboration - ${collab.company}`)
                            }
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Website Analytics (30 days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Page Views</span>
                      <span className="text-2xl font-bold">{analytics?.pageViews || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Form Submissions</span>
                      <span className="text-2xl font-bold">{analytics?.formSubmissions || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Instagram Clicks</span>
                      <span className="text-2xl font-bold">{analytics?.instagramClicks || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Portfolio Views</span>
                      <span className="text-2xl font-bold">{analytics?.portfolioViews || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Conversion Rate</span>
                      <span className="text-2xl font-bold text-green-600">{analytics?.conversionRate || 0}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analytics?.topPages?.map(([page, views]: [string, number], index: number) => (
                      <div key={page} className="flex items-center justify-between">
                        <span className="text-sm">{page}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: `${(views / (analytics?.topPages?.[0]?.[1] || 1)) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{views}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Instagram Tab */}
          <TabsContent value="instagram">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Instagram Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  {instagramData && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Followers</span>
                        <span className="text-2xl font-bold">
                          {instagramData.profile.follower_count.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Following</span>
                        <span className="text-2xl font-bold">
                          {instagramData.profile.following_count.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Posts</span>
                        <span className="text-2xl font-bold">{instagramData.profile.media_count}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Avg. Likes</span>
                        <span className="text-2xl font-bold">{instagramData.avgLikes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Engagement Rate</span>
                        <span className="text-2xl font-bold text-green-600">{instagramData.engagementRate}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  {instagramData && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Likes</span>
                        <span className="text-lg font-bold">{instagramData.totalLikes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Comments</span>
                        <span className="text-lg font-bold">{instagramData.totalComments.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Avg. Comments</span>
                        <span className="text-lg font-bold">{instagramData.avgComments}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Last Post</span>
                        <span className="text-sm text-gray-600">
                          {instagramData.lastPostDate?.toLocaleDateString() || "N/A"}
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
