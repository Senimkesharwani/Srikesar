"use server"

import { unstable_cache } from "next/cache"

// Instagram Basic Display API configuration
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID

export interface InstagramPost {
  id: string
  caption?: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  permalink: string
  timestamp: string
  username?: string
}

export interface InstagramProfile {
  id: string
  username: string
  account_type: string
  media_count: number
}

// Cache Instagram data for 10 minutes to avoid rate limits
const getCachedInstagramPosts = unstable_cache(
  async (): Promise<InstagramPost[]> => {
    return await fetchInstagramPosts()
  },
  ["instagram-posts"],
  {
    revalidate: 600, // 10 minutes
  },
)

const getCachedInstagramProfile = unstable_cache(
  async (): Promise<InstagramProfile | null> => {
    return await fetchInstagramProfile()
  },
  ["instagram-profile"],
  {
    revalidate: 3600, // 1 hour
  },
)

async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.warn("Instagram credentials not configured, using mock data")
    return getMockInstagramPosts()
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`,
      {
        next: { revalidate: 600 }, // Cache for 10 minutes
      },
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error("Error fetching Instagram posts:", error)
    // Fallback to mock data if API fails
    return getMockInstagramPosts()
  }
}

async function fetchInstagramProfile(): Promise<InstagramProfile | null> {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    return {
      id: "mock_user",
      username: "srikesar",
      account_type: "PERSONAL",
      media_count: 450,
    }
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}?fields=id,username,account_type,media_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching Instagram profile:", error)
    return null
  }
}

// Mock data for development/fallback
function getMockInstagramPosts(): InstagramPost[] {
  return [
    {
      id: "1",
      caption: "New summer collection vibes ☀️ #fashion #style #mensfashion",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      permalink: "https://instagram.com/p/mock1",
      timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      username: "srikesar",
    },
    {
      id: "2",
      caption: "Behind the scenes of today's shoot 📸 #bts #photoshoot",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock2",
      timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      username: "srikesar",
    },
    {
      id: "3",
      caption: "Travel essentials for the modern gentleman ✈️ #travel #lifestyle",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=400&fit=crop",
      permalink: "https://instagram.com/p/mock3",
      timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      username: "srikesar",
    },
    {
      id: "4",
      caption: "Grooming routine that actually works 💯 #grooming #skincare",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock4",
      timestamp: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
      username: "srikesar",
    },
    {
      id: "5",
      caption: "Minimalist wardrobe essentials 🖤 #minimalism #fashion",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock5",
      timestamp: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
      username: "srikesar",
    },
    {
      id: "6",
      caption: "Street style inspiration from Mumbai 🏙️ #streetstyle #mumbai",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock6",
      timestamp: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
      username: "srikesar",
    },
    {
      id: "7",
      caption: "Collaboration with @zara was incredible! 🔥 #partnership #zara",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock7",
      timestamp: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
      username: "srikesar",
    },
    {
      id: "8",
      caption: "Weekend vibes in Goa 🌊 #weekend #goa #travel",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop",
      permalink: "https://instagram.com/p/mock8",
      timestamp: new Date(Date.now() - 691200000).toISOString(), // 8 days ago
      username: "srikesar",
    },
    {
      id: "9",
      caption: "Tech meets style 📱 #tech #lifestyle #apple",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock9",
      timestamp: new Date(Date.now() - 777600000).toISOString(), // 9 days ago
      username: "srikesar",
    },
    {
      id: "10",
      caption: "Fitness and fashion go hand in hand 💪 #fitness #activewear",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock10",
      timestamp: new Date(Date.now() - 864000000).toISOString(), // 10 days ago
      username: "srikesar",
    },
    {
      id: "11",
      caption: "Classic never goes out of style ⚫ #classic #timeless",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock11",
      timestamp: new Date(Date.now() - 950400000).toISOString(), // 11 days ago
      username: "srikesar",
    },
    {
      id: "12",
      caption: "Sustainable fashion choices matter 🌱 #sustainable #ecofriendly",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
      permalink: "https://instagram.com/p/mock12",
      timestamp: new Date(Date.now() - 1036800000).toISOString(), // 12 days ago
      username: "srikesar",
    },
  ]
}

// Public functions to be used in components
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  return await getCachedInstagramPosts()
}

export async function getInstagramProfile(): Promise<InstagramProfile | null> {
  return await getCachedInstagramProfile()
}

// Function to refresh Instagram access token (should be called periodically)
export async function refreshInstagramToken(): Promise<{ success: boolean; message: string }> {
  if (!INSTAGRAM_ACCESS_TOKEN) {
    return {
      success: false,
      message: "Instagram access token not configured",
    }
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
    )

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status}`)
    }

    const data = await response.json()
    console.log("Instagram token refreshed successfully")

    return {
      success: true,
      message: "Token refreshed successfully",
    }
  } catch (error) {
    console.error("Error refreshing Instagram token:", error)
    return {
      success: false,
      message: "Failed to refresh token",
    }
  }
}
