import { getInstagramProfile } from "@/app/actions/instagram"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Users, ImageIcon, TrendingUp } from "lucide-react"

export async function InstagramStats() {
  const profile = await getInstagramProfile()

  if (!profile) {
    return null
  }

  // Mock additional stats since Instagram Basic Display API is limited
  const stats = [
    {
      icon: Users,
      label: "Followers",
      value: "450K+",
      color: "text-pink-500",
    },
    {
      icon: ImageIcon,
      label: "Posts",
      value: profile.media_count?.toString() || "300+",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      label: "Engagement",
      value: "8.5%",
      color: "text-green-500",
    },
    {
      icon: Instagram,
      label: "Account Type",
      value: profile.account_type === "BUSINESS" ? "Business" : "Creator",
      color: "text-purple-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl font-bold text-stone-900 mb-1">{stat.value}</div>
            <div className="text-sm text-stone-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
