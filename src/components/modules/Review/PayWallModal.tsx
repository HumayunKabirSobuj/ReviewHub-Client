"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock } from "lucide-react"

interface PaywallModalProps {
  isOpen: boolean
  onClose: () => void
  reviewId: string
  title: string
  excerpt: string
  price: number
  author: string
}

export default function PaywallModal({ isOpen, onClose, reviewId, title, excerpt, price, author }: PaywallModalProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = () => {
    setIsLoading(true)
    // Redirect to payment page 
    //! Apnar j route a kora ache oi route a hit korben!
    router.push(`/reviews/payment/${reviewId}`)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-amber-500 hover:bg-amber-600">
              Premium Content
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              ${price.toFixed(2)}
            </Badge>
          </div>
          <DialogTitle className="text-xl mt-2">{title}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">By {author}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-center bg-muted/50 p-4 rounded-lg">
            <Lock className="h-12 w-12 text-muted-foreground/70" />
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Preview:</h4>
            <p className="text-sm">{excerpt}</p>
            <p className="text-sm text-muted-foreground italic">
              Unlock this premium review to read the full content...
            </p>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg space-y-2">
            <h4 className="font-medium">What you'll get:</h4>
            <ul className="text-sm space-y-1">
              <li>• Full in-depth review content</li>
              <li>• Detailed pros and cons analysis</li>
              <li>• Comparison with similar products</li>
              <li>• Expert recommendations</li>
            </ul>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose} className="sm:flex-1">
            Maybe Later
          </Button>
          <Button
            onClick={handlePayment}
            className="sm:flex-1 bg-amber-500 hover:bg-amber-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : `Pay $${price.toFixed(2)} Now`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
