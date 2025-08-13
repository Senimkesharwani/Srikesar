"use server"

import { unstable_cache } from "next/cache"

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY
const RAPIDAPI_HOST = "instagram-scraper-stable-api.p.rapidapi.com"

export interface RapidInstagramPost {
  id: string
  shortcode: string
  caption: string
  media_type: "GraphImage" | "GraphVideo" | "GraphSidecar"
  display_url: string
  video_url?: string
  like_count: number
  comment_count: number
  taken_at_timestamp: number
  owner: {
    username: string
    full_name: string
    profile_pic_url: string
    is_verified: boolean
  }
}

export interface RapidInstagramProfile {
  username: string
  full_name: string
  biography: string
  profile_pic_url: string
  follower_count: number
  following_count: number
  media_count: number
  is_verified: boolean
  is_private: boolean
  external_url?: string
}

// Cache Instagram data for 5 minutes to avoid rate limits
const getCachedRapidInstagramPosts = unstable_cache(
  async (username: string): Promise<RapidInstagramPost[]> => {
    return await fetchRapidInstagramPosts(username)
  },
  ["rapid-instagram-posts"],
  {
    revalidate: 300, // 5 minutes
  },
)

const getCachedRapidInstagramProfile = unstable_cache(
  async (username: string): Promise<RapidInstagramProfile | null> => {
    return await fetchRapidInstagramProfile(username)
  },
  ["rapid-instagram-profile"],
  {
    revalidate: 600, // 10 minutes
  },
)

async function fetchRapidInstagramPosts(username: string): Promise<RapidInstagramPost[]> {
  if (!RAPIDAPI_KEY) {
    console.warn("RapidAPI key not configured, using mock data")
    return getMockRapidInstagramPosts()
  }

  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/user_posts?username=${username}&count=12`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
      },
    })

    if (!response.ok) {
      throw new Error(`RapidAPI Instagram error: ${response.status}`)
    }

    const data = await response.json()
    console.log("RapidAPI Instagram posts fetched successfully")

    // Transform the data to match our interface
    return (
      data.data?.map((post: any) => ({
        id: post.id,
        shortcode: post.shortcode,
        caption: post.edge_media_to_caption?.edges[0]?.node?.text || "",
        media_type: post.__typename,
        display_url: post.display_url,
        video_url: post.video_url,
        like_count: post.edge_media_preview_like?.count || 0,
        comment_count: post.edge_media_to_comment?.count || 0,
        taken_at_timestamp: post.taken_at_timestamp,
        owner: {
          username: post.owner?.username || username,
          full_name: post.owner?.full_name || "",
          profile_pic_url: post.owner?.profile_pic_url || "",
          is_verified: post.owner?.is_verified || false,
        },
      })) || []
    )
  } catch (error) {
    console.error("Error fetching RapidAPI Instagram posts:", error)
    return getMockRapidInstagramPosts()
  }
}

async function fetchRapidInstagramProfile(username: string): Promise<RapidInstagramProfile | null> {
  if (!RAPIDAPI_KEY) {
    return getMockRapidInstagramProfile()
  }

  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/user_info?username=${username}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
      },
    })

    if (!response.ok) {
      throw new Error(`RapidAPI Instagram profile error: ${response.status}`)
    }

    const data = await response.json()
    console.log("RapidAPI Instagram profile fetched successfully")

    return {
      username: data.username,
      full_name: data.full_name,
      biography: data.biography,
      profile_pic_url: data.profile_pic_url,
      follower_count: data.edge_followed_by?.count || 0,
      following_count: data.edge_follow?.count || 0,
      media_count: data.edge_owner_to_timeline_media?.count || 0,
      is_verified: data.is_verified,
      is_private: data.is_private,
      external_url: data.external_url,
    }
  } catch (error) {
    console.error("Error fetching RapidAPI Instagram profile:", error)
    return getMockRapidInstagramProfile()
  }
}

// Mock data for development/fallback
function getMockRapidInstagramPosts(): RapidInstagramPost[] {
  return [
    {
      id: "rapid_1",
      shortcode: "ABC123",
      caption: "New fashion collection drop! 🔥 #fashion #style #mensfashion",
      media_type: "GraphImage",
      display_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      like_count: 25400,
      comment_count: 892,
      taken_at_timestamp: Date.now() / 1000 - 86400,
      owner: {
        username: "srikesar_official_18",
        full_name: "Srikesar",
        profile_pic_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        is_verified: true,
      },
    },
    {
      id: "rapid_2",
      shortcode: "DEF456",
      caption: "Behind the scenes of today's shoot 📸 #bts #photoshoot",
      media_type: "GraphVideo",
      display_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      video_url: "https://example.com/video.mp4",
      like_count: 18700,
      comment_count: 456,
      taken_at_timestamp: Date.now() / 1000 - 172800,
      owner: {
        username: "srikesar_official_18",
        full_name: "Srikesar",
        profile_pic_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        is_verified: true,
      },
    },
  ]
}

function getMockRapidInstagramProfile(): RapidInstagramProfile {
  return {
    username: "srikesar_official_18",
    full_name: "Srikesar",
    biography: "Fashion & Lifestyle Creator ✨\n📍 Mumbai, India\n💼 Brand Collaborations\n👇 Latest Content",
    profile_pic_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    follower_count: 450000,
    following_count: 1200,
    media_count: 450,
    is_verified: true,
    is_private: false,
    external_url: "https://srikesar.com",
  }
}

// Public functions
export async function getRapidInstagramPosts(username = "srikesar_official_18"): Promise<RapidInstagramPost[]> {
  return await getCachedRapidInstagramPosts(username)
}

export async function getRapidInstagramProfile(
  username = "srikesar_official_18",
): Promise<RapidInstagramProfile | null> {
  return await getCachedRapidInstagramProfile(username)
}

// Analytics function
export async function getInstagramAnalytics(username = "srikesar_official_18") {
  try {
    const [posts, profile] = await Promise.all([getRapidInstagramPosts(username), getRapidInstagramProfile(username)])

    if (!profile) return null

    const totalLikes = posts.reduce((sum, post) => sum + post.like_count, 0)
    const totalComments = posts.reduce((sum, post) => sum + post.comment_count, 0)
    const avgLikes = posts.length > 0 ? Math.round(totalLikes / posts.length) : 0
    const avgComments = posts.length > 0 ? Math.round(totalComments / posts.length) : 0
    const engagementRate =
      profile.follower_count > 0
        ? (((totalLikes + totalComments) / (posts.length * profile.follower_count)) * 100).toFixed(2)
        : "0"

    return {
      profile,
      posts: posts.length,
      totalLikes,
      totalComments,
      avgLikes,
      avgComments,
      engagementRate: `${engagementRate}%`,
      lastPostDate: posts.length > 0 ? new Date(posts[0].taken_at_timestamp * 1000) : null,
    }
  } catch (error) {
    console.error("Error getting Instagram analytics:", error)
    return null
  }
}
