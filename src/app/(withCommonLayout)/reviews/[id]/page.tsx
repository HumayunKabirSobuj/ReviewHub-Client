"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  ThumbsDown,
  ThumbsUp,
  MessageSquare,
  Share2,
  ExternalLink,
  Calendar,
  Tag,
  ShoppingBag,
  CheckCircle2,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for the review
const review = {
  id: "1",
  title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones - Outstanding Audio Quality",
  author: {
    id: "user1",
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  date: "May 2, 2024",
  rating: 4.5,
  category: "Gadgets",
  purchaseSource: "Amazon",
  purchaseLink: "https://amazon.com",
  isPremium: true,
  price: 5,
  purchaseDate: "May 4, 2024",
  transactionId: "TRX-12345678",
  content: `I've been using the Sony WH-1000XM4 headphones for about three months now, and I can confidently say they're among the best noise-cancelling headphones on the market.

The sound quality is exceptional, with deep, rich bass and clear highs. The noise cancellation is truly impressive - it completely blocks out ambient noise like airplane engines, office chatter, and coffee shop background noise.

Battery life is excellent, lasting around 30 hours on a single charge. The touch controls on the ear cups are intuitive and responsive, making it easy to adjust volume, skip tracks, or take calls.

The companion app offers extensive customization options, allowing you to fine-tune the EQ settings to your preference. The speak-to-chat feature, which automatically pauses your music when you start speaking, is innovative but can be a bit too sensitive at times.

The headphones are comfortable to wear for extended periods, though they can get a bit warm during summer months. The build quality feels premium, and the folding design makes them easy to pack for travel.

Overall, I highly recommend these headphones for anyone looking for top-tier noise cancellation and sound quality. They're worth every penny of the investment.

PREMIUM CONTENT SECTION:

After extensive testing against competitors like the Bose 700 and Apple AirPods Max, I can confidently say the Sony WH-1000XM4 offers the best value for money. Here's my detailed comparison:

1. Noise Cancellation: Sony slightly edges out Bose in most environments, especially with low-frequency sounds. The Apple AirPods Max has excellent NC but at a much higher price point.

2. Sound Quality: Sony offers the most customizable sound profile through its app. The default sound signature is bass-heavy but can be adjusted. Bose has a more neutral sound, while Apple has the most balanced sound out of the box.

3. Battery Life: Sony wins with 30+ hours, compared to Bose's 20 hours and Apple's 20 hours.

4. Comfort: All three are comfortable, but the Sony can get warm after extended use. The Bose is the lightest and most comfortable for long sessions.

5. Call Quality: Bose wins here with superior microphone performance in noisy environments.

6. Additional Features: Sony's speak-to-chat, wear detection, and multipoint connection give it the edge in terms of smart features.

7. Price: Sony offers the best value at $349 (often on sale for $278), compared to Bose at $379 and Apple at $549.

If you're an iPhone user deeply integrated into the Apple ecosystem, the AirPods Max might be worth the premium. For everyone else, the Sony WH-1000XM4 offers the best combination of features, performance, and value.`,
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  votes: {
    upvotes: 124,
    downvotes: 12,
    userVote: null, // null, 'up', or 'down'
  },
}

// Mock data for comments
const comments = [
  {
    id: "c1",
    author: {
      id: "user2",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "I completely agree with your review! I've had these headphones for 6 months and they're amazing. The noise cancellation is perfect for my daily commute.",
    date: "May 3, 2024",
    votes: {
      upvotes: 15,
      downvotes: 2,
      userVote: null,
    },
    replies: [
      {
        id: "r1",
        author: {
          id: "user1",
          name: "John Doe",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "Thanks! Glad to hear you're enjoying them too. Have you tried the speak-to-chat feature?",
        date: "May 3, 2024",
      },
    ],
  },
  {
    id: "c2",
    author: {
      id: "user3",
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "How do they compare to the Bose 700? I'm trying to decide between the two.",
    date: "May 4, 2024",
    votes: {
      upvotes: 8,
      downvotes: 0,
      userVote: null,
    },
    replies: [
      {
        id: "r2",
        author: {
          id: "user1",
          name: "John Doe",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "I've added a detailed comparison in the premium section of the review. The Sony edges out the Bose in most categories except call quality, where the Bose is superior.",
        date: "May 4, 2024",
      },
    ],
  },
  {
    id: "c3",
    author: {
      id: "user4",
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Thanks for the detailed comparison with the AirPods Max in the premium section! Definitely helped me make my decision.",
    date: "May 5, 2024",
    votes: {
      upvotes: 12,
      downvotes: 0,
      userVote: null,
    },
    replies: [],
  },
]

// Mock data for related reviews
const relatedReviews = [
  {
    id: "2",
    title: "Bose QuietComfort 45 Headphones Review",
    author: "Sarah Williams",
    rating: 4.0,
    category: "Gadgets",
    image: "/placeholder.svg?height=200&width=300",
    votes: 87,
    isPremium: true,
  },
  {
    id: "3",
    title: "Apple AirPods Pro 2 - Worth The Upgrade?",
    author: "Michael Chen",
    rating: 4.2,
    category: "Gadgets",
    image: "/placeholder.svg?height=200&width=300",
    votes: 156,
    isPremium: false,
  },
  {
    id: "4",
    title: "Sennheiser Momentum 4 Wireless - Premium Audio Experience",
    author: "Alex Rodriguez",
    rating: 4.7,
    category: "Gadgets",
    image: "/placeholder.svg?height=200&width=300",
    votes: 92,
    isPremium: true,
  },
]

export default function UnlockedReviewPage() {
  const [commentText, setCommentText] = useState("")
  const [replyText, setReplyText] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [userVote, setUserVote] = useState<"up" | "down" | null>(review.votes.userVote)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleVote = (type: "up" | "down") => {
    setUserVote(userVote === type ? null : type)
  }

  const handleComment = () => {
    if (commentText.trim() === "") return
    // Add comment logic would go here
    setCommentText("")
  }

  const handleReply = (commentId: string) => {
    if (replyText.trim() === "") return
    // Add reply logic would go here
    setReplyText("")
    setReplyingTo(null)
  }

  // Split content to separate regular and premium sections
  const contentParts = review.content.split("PREMIUM CONTENT SECTION:")
  const regularContent = contentParts[0]
  const premiumContent = contentParts.length > 1 ? contentParts[1] : ""

  return (
    <div className="container mx-auto py-6 px-4 md:px-6 max-w-7xl">
      {/* Purchase Confirmation Alert */}
      <Alert className="mb-6 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-900">
        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
        <AlertTitle className="text-green-800 dark:text-green-300">Premium Content Unlocked</AlertTitle>
        <AlertDescription className="text-green-700 dark:text-green-400">
          You have successfully unlocked this premium review. Transaction ID: {review.transactionId}
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Review Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="px-3 py-1">
                <Tag className="w-3.5 h-3.5 mr-1" />
                {review.category}
              </Badge>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                Premium Unlocked
              </Badge>
              <span className="text-sm text-muted-foreground">Purchased on {review.purchaseDate}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold">{review.title}</h1>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={review.author.avatar || "/placeholder.svg"} alt={review.author.name} />
                  <AvatarFallback>{review.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{review.author.name}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{review.date}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={cn(
                        "w-5 h-5",
                        star <= Math.floor(review.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : star - 0.5 <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 fill-gray-300",
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 font-medium">{review.rating.toFixed(1)}</span>
              </div>

              {review.purchaseSource && (
                <div className="flex items-center gap-1 text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Purchased from:</span>
                  {review.purchaseLink ? (
                    <Link
                      href={review.purchaseLink}
                      className="text-primary flex items-center gap-0.5 hover:underline"
                      target="_blank"
                    >
                      {review.purchaseSource}
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  ) : (
                    <span>{review.purchaseSource}</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Review Images */}
          {review.images && review.images.length > 0 && (
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={review.images[activeImageIndex] || "/placeholder.svg"}
                  alt={`Image ${activeImageIndex + 1} for ${review.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              {review.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {review.images.map((image, index) => (
                    <button
                      key={index}
                      className={cn(
                        "relative w-20 h-20 rounded-md overflow-hidden border-2",
                        activeImageIndex === index ? "border-primary" : "border-transparent",
                      )}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Review Content */}
          <div className="space-y-6">
            {/* Regular Content */}
            <div className="prose max-w-none">
              <p>{regularContent}</p>
            </div>

            {/* Premium Content Section */}
            <div className="relative">
              <div className="absolute inset-0 w-1 bg-primary rounded-full -left-4 hidden md:block" />
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 relative">
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">Premium Content</Badge>
                <div className="prose max-w-none mt-2">
                  <p>{premiumContent}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Voting Section */}
          <div className="flex items-center justify-between py-4 border-t border-b">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className={cn(userVote === "up" && "bg-primary/10")}
                onClick={() => handleVote("up")}
              >
                <ThumbsUp className={cn("w-4 h-4 mr-1", userVote === "up" && "text-primary")} />
                <span className={cn(userVote === "up" && "text-primary")}>
                  {review.votes.upvotes + (userVote === "up" ? 1 : 0) - (review.votes.userVote === "up" ? 1 : 0)}
                </span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={cn(userVote === "down" && "bg-primary/10")}
                onClick={() => handleVote("down")}
              >
                <ThumbsDown className={cn("w-4 h-4 mr-1", userVote === "down" && "text-primary")} />
                <span className={cn(userVote === "down" && "text-primary")}>
                  {review.votes.downvotes + (userVote === "down" ? 1 : 0) - (review.votes.userVote === "down" ? 1 : 0)}
                </span>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              {comments.length} comments
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Comments</h2>

            {/* Comment Form */}
            <div className="space-y-4">
              <Textarea
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end">
                <Button onClick={handleComment} disabled={commentText.trim() === ""}>
                  Post Comment
                </Button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                      <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{comment.author.name}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                      <div className="flex items-center gap-4 pt-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <ThumbsUp className="w-3.5 h-3.5 mr-1" />
                            {comment.votes.upvotes}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <ThumbsDown className="w-3.5 h-3.5 mr-1" />
                            {comment.votes.downvotes}
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs"
                          onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                        >
                          Reply
                        </Button>
                      </div>

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 space-y-4 pl-4 border-l-2">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex gap-3">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                                <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-sm">{reply.author.name}</span>
                                  <span className="text-xs text-muted-foreground">{reply.date}</span>
                                </div>
                                <p className="text-sm">{reply.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply Form */}
                      {replyingTo === comment.id && (
                        <div className="mt-4 space-y-2">
                          <Textarea
                            placeholder={`Reply to ${comment.author.name}...`}
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="min-h-[80px] text-sm"
                          />
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                              Cancel
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleReply(comment.id)}
                              disabled={replyText.trim() === ""}
                            >
                              Reply
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Purchase Information */}
          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">Purchase Information</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Purchase Date:</span>
                  <span className="font-medium">{review.purchaseDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="font-medium">{review.transactionId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Amount Paid:</span>
                  <span className="font-medium">${review.price.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full" size="sm">
                View Receipt
              </Button>
            </CardContent>
          </Card>

          {/* Author Card */}
          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">About the Reviewer</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.author.avatar || "/placeholder.svg"} alt={review.author.name} />
                  <AvatarFallback>{review.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{review.author.name}</h4>
                  <p className="text-sm text-muted-foreground">Product Reviewer</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>
                  Passionate about technology and gadgets. Sharing honest reviews to help others make informed
                  decisions.
                </p>
              </div>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </CardContent>
          </Card>

          {/* More Premium Reviews */}
          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">More Premium Reviews</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedReviews
                .filter((review) => review.isPremium)
                .map((relatedReview) => (
                  <div key={relatedReview.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={relatedReview.image || "/placeholder.svg"}
                        alt={relatedReview.title}
                        fill
                        className="object-cover"
                      />
                      {relatedReview.isPremium && (
                        <div className="absolute top-0 right-0 bg-primary text-[10px] text-primary-foreground px-1 py-0.5 rounded-bl-md">
                          PRO
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{relatedReview.title}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={cn(
                                "w-3 h-3",
                                star <= Math.floor(relatedReview.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300 fill-gray-300",
                              )}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{relatedReview.rating.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>{relatedReview.author}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {relatedReview.votes}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Browse Premium Reviews
              </Button>
            </CardFooter>
          </Card>

          {/* Recently Viewed */}
          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">Recently Viewed</h3>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm truncate">Bose QuietComfort 45 Headphones Review</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm truncate">Apple AirPods Pro 2 - Worth The Upgrade?</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm truncate">Best Noise Cancelling Headphones 2024</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
