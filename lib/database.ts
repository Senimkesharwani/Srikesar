// Simple in-memory database simulation (in production, use PostgreSQL/MongoDB)
interface DatabaseRecord {
  id: string
  createdAt: Date
  updatedAt: Date
}

interface ContactSubmission extends DatabaseRecord {
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "replied" | "archived"
  priority: "low" | "medium" | "high"
}

interface CollaborationInquiry extends DatabaseRecord {
  name: string
  email: string
  company: string
  budget: string
  projectType: string
  message: string
  status: "new" | "proposal_sent" | "negotiating" | "accepted" | "rejected"
  estimatedValue: number
}

interface AnalyticsEvent extends DatabaseRecord {
  type: "page_view" | "form_submission" | "instagram_click" | "portfolio_view"
  page: string
  userAgent?: string
  ip?: string
  metadata?: Record<string, any>
}

// In-memory storage (replace with real database in production)
const database = {
  contacts: [] as ContactSubmission[],
  collaborations: [] as CollaborationInquiry[],
  analytics: [] as AnalyticsEvent[],
}

// Helper functions
function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Contact submissions
export async function saveContactSubmission(
  data: Omit<ContactSubmission, keyof DatabaseRecord | "status" | "priority">,
) {
  const submission: ContactSubmission = {
    ...data,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "new",
    priority: data.subject.toLowerCase().includes("urgent") ? "high" : "medium",
  }

  database.contacts.push(submission)
  console.log("Contact submission saved:", submission.id)
  return submission
}

export async function getContactSubmissions(limit = 50): Promise<ContactSubmission[]> {
  return database.contacts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, limit)
}

export async function updateContactStatus(id: string, status: ContactSubmission["status"]) {
  const contact = database.contacts.find((c) => c.id === id)
  if (contact) {
    contact.status = status
    contact.updatedAt = new Date()
  }
  return contact
}

// Collaboration inquiries
export async function saveCollaborationInquiry(
  data: Omit<CollaborationInquiry, keyof DatabaseRecord | "status" | "estimatedValue">,
) {
  const budgetValue = getBudgetValue(data.budget)

  const inquiry: CollaborationInquiry = {
    ...data,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "new",
    estimatedValue: budgetValue,
  }

  database.collaborations.push(inquiry)
  console.log("Collaboration inquiry saved:", inquiry.id)
  return inquiry
}

export async function getCollaborationInquiries(limit = 50): Promise<CollaborationInquiry[]> {
  return database.collaborations.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, limit)
}

export async function updateCollaborationStatus(id: string, status: CollaborationInquiry["status"]) {
  const collaboration = database.collaborations.find((c) => c.id === id)
  if (collaboration) {
    collaboration.status = status
    collaboration.updatedAt = new Date()
  }
  return collaboration
}

function getBudgetValue(budget: string): number {
  const budgetMap: Record<string, number> = {
    "under-25k": 20000,
    "25k-50k": 37500,
    "50k-100k": 75000,
    "100k-plus": 150000,
  }
  return budgetMap[budget] || 25000
}

// Analytics
export async function trackEvent(event: Omit<AnalyticsEvent, keyof DatabaseRecord>) {
  const analyticsEvent: AnalyticsEvent = {
    ...event,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  database.analytics.push(analyticsEvent)
  return analyticsEvent
}

export async function getAnalytics(days = 30) {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)

  const events = database.analytics.filter((e) => e.createdAt >= cutoffDate)

  const pageViews = events.filter((e) => e.type === "page_view").length
  const formSubmissions = events.filter((e) => e.type === "form_submission").length
  const instagramClicks = events.filter((e) => e.type === "instagram_click").length
  const portfolioViews = events.filter((e) => e.type === "portfolio_view").length

  const topPages = events
    .filter((e) => e.type === "page_view")
    .reduce(
      (acc, event) => {
        acc[event.page] = (acc[event.page] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

  return {
    totalEvents: events.length,
    pageViews,
    formSubmissions,
    instagramClicks,
    portfolioViews,
    topPages: Object.entries(topPages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10),
    conversionRate: pageViews > 0 ? ((formSubmissions / pageViews) * 100).toFixed(2) : "0",
  }
}

// Dashboard stats
export async function getDashboardStats() {
  const totalContacts = database.contacts.length
  const totalCollaborations = database.collaborations.length
  const totalRevenue = database.collaborations
    .filter((c) => c.status === "accepted")
    .reduce((sum, c) => sum + c.estimatedValue, 0)

  const recentContacts = database.contacts.filter(
    (c) => c.createdAt >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  ).length

  const pendingCollaborations = database.collaborations.filter((c) =>
    ["new", "proposal_sent", "negotiating"].includes(c.status),
  ).length

  return {
    totalContacts,
    totalCollaborations,
    totalRevenue,
    recentContacts,
    pendingCollaborations,
    conversionRate: totalContacts > 0 ? ((totalCollaborations / totalContacts) * 100).toFixed(1) : "0",
  }
}
