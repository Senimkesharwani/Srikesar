export interface BrandCollaboration {
  id: string
  brand: string
  title: string
  description: string
  category: "Fashion" | "Grooming" | "Travel" | "Lifestyle" | "Tech"
  contentType: "Sponsored Post" | "Product Review" | "Brand Collaboration" | "Tutorial" | "Lifestyle Content"
  engagement: {
    rate: string
    likes: string
    comments: string
  }
  image: string
  date: string
  tags: string[]
}

// Real data from your portfolio image
export const brandCollaborations: BrandCollaboration[] = [
  {
    id: "zara-summer-2024",
    brand: "ZARA",
    title: "Summer Collection Campaign",
    description: "Showcasing the latest summer trends with a minimalist aesthetic",
    category: "Fashion",
    contentType: "Sponsored Post",
    engagement: {
      rate: "8.2%",
      likes: "25.4K",
      comments: "892",
    },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop",
    date: "2024-06-15",
    tags: ["fashion", "summer", "minimalist", "style"],
  },
  {
    id: "beardo-grooming-2024",
    brand: "BEARDO",
    title: "Beard Care Essentials",
    description: "Complete grooming routine featuring premium beard care products",
    category: "Grooming",
    contentType: "Product Review",
    engagement: {
      rate: "7.8%",
      likes: "18.7K",
      comments: "456",
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    date: "2024-05-20",
    tags: ["grooming", "beard", "skincare", "men"],
  },
  {
    id: "goa-tourism-2024",
    brand: "TOURISM BOARD",
    title: "Goa Travel Diary",
    description: "Exploring the hidden gems of Goa with style and authenticity",
    category: "Travel",
    contentType: "Lifestyle Content",
    engagement: {
      rate: "9.5%",
      likes: "32.1K",
      comments: "1.2K",
    },
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=600&h=600&fit=crop",
    date: "2024-04-10",
    tags: ["travel", "goa", "lifestyle", "adventure"],
  },
  {
    id: "hm-fashion-2024",
    brand: "H&M",
    title: "Sustainable Fashion Collection",
    description: "Promoting eco-friendly fashion choices with H&M's conscious collection",
    category: "Fashion",
    contentType: "Brand Collaboration",
    engagement: {
      rate: "8.9%",
      likes: "22.3K",
      comments: "678",
    },
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&h=600&fit=crop",
    date: "2024-03-25",
    tags: ["fashion", "sustainable", "conscious", "style"],
  },
  {
    id: "nike-lifestyle-2024",
    brand: "NIKE",
    title: "Active Lifestyle Campaign",
    description: "Showcasing the perfect blend of fitness and fashion with Nike's latest collection",
    category: "Lifestyle",
    contentType: "Lifestyle Content",
    engagement: {
      rate: "9.1%",
      likes: "28.9K",
      comments: "934",
    },
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=face",
    date: "2024-02-14",
    tags: ["fitness", "lifestyle", "activewear", "nike"],
  },
  {
    id: "man-company-grooming-2024",
    brand: "THE MAN COMPANY",
    title: "Complete Grooming Tutorial",
    description: "Step-by-step grooming routine for the modern gentleman",
    category: "Grooming",
    contentType: "Tutorial",
    engagement: {
      rate: "7.4%",
      likes: "16.8K",
      comments: "523",
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
    date: "2024-01-30",
    tags: ["grooming", "tutorial", "skincare", "men"],
  },
]

export const portfolioStats = {
  totalCollaborations: brandCollaborations.length,
  averageEngagement: "8.5%",
  totalReach: "15M+",
  topBrands: ["ZARA", "NIKE", "H&M", "BEARDO"],
  categories: ["Fashion", "Grooming", "Travel", "Lifestyle", "Tech"],
}

// Helper functions
export function getCollaborationsByCategory(category: string) {
  return brandCollaborations.filter((collab) => collab.category === category)
}

export function getRecentCollaborations(limit = 6) {
  return brandCollaborations.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}

export function getCollaborationById(id: string) {
  return brandCollaborations.find((collab) => collab.id === id)
}
