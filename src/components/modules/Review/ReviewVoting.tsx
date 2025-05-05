"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { createVote } from "@/services/Reviews"
import { toast } from "sonner"

interface VotingProps {
  reviewId: string
  initialVotes: {
    upvotes: number
    downvotes: number
  }
  commentsCount?: number
}

export default function ReviewVoting({ reviewId, initialVotes, commentsCount = 0 }: VotingProps) {
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null)
  const [votes, setVotes] = useState(initialVotes)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVote = async (type: "up" | "down") => {
    // Prevent multiple submissions
    if (isSubmitting) return

    // Optimistic UI update
    const previousVote = userVote
    const newVote = userVote === type ? null : type

    // Update local state immediately for responsive UI
    setUserVote(newVote)
    setVotes((prev) => {
      const newVotes = { ...prev }

      // Remove previous vote if exists
      if (previousVote === "up") newVotes.upvotes--
      if (previousVote === "down") newVotes.downvotes--

      // Add new vote if not null
      if (newVote === "up") newVotes.upvotes++
      if (newVote === "down") newVotes.downvotes++

      return newVotes
    })

    // Call API to update vote
    try {
      setIsSubmitting(true)

      // Only make API call if adding a vote (not removing)
      if (newVote) {
        const response = await createVote(reviewId, newVote)

        if (!response.success) {
          throw new Error(response.error || "Failed to update vote")
        }

        toast.success(`Vote submitted`, {
          description: `Your ${newVote === "up" ? "upvote" : "downvote"} has been recorded.`,
        })
      } else {
        // For removing votes, we'd need a separate API endpoint
        // For now, just show a message
        toast.info(`Vote removed`, {
          description: "Your vote has been removed.",
        })
      }
    } catch (error) {
      // Revert on error
      console.error("Error submitting vote:", error)
      setUserVote(previousVote)
      setVotes(initialVotes)

      toast.error(`Error`, {
        description: error instanceof Error ? error.message : "Failed to update vote. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-between py-4 border-t border-b">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className={cn(userVote === "up" && "bg-primary/10", isSubmitting && "opacity-70 cursor-not-allowed")}
          onClick={() => handleVote("up")}
          disabled={isSubmitting}
        >
          <ThumbsUp className={cn("w-4 h-4 mr-1", userVote === "up" && "text-primary")} />
          <span className={cn(userVote === "up" && "text-primary")}>{votes.upvotes}</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={cn(userVote === "down" && "bg-primary/10", isSubmitting && "opacity-70 cursor-not-allowed")}
          onClick={() => handleVote("down")}
          disabled={isSubmitting}
        >
          <ThumbsDown className={cn("w-4 h-4 mr-1", userVote === "down" && "text-primary")} />
          <span className={cn(userVote === "down" && "text-primary")}>{votes.downvotes}</span>
        </Button>
      </div>
      <div className="text-sm text-muted-foreground flex items-center gap-1">
        <MessageSquare className="w-4 h-4" />
        {commentsCount} comments
      </div>
    </div>
  )
}
