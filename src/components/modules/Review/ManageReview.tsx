"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { format } from "date-fns"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Check, ChevronDown, DollarSign, Edit, Eye, Search, Star, Trash2, X } from "lucide-react"

// Types
interface Author {
  id: string
  name: string
  email: string
  profileUrl: string | null
}

interface Category {
  id: string
  name: string
}

interface Review {
  id: string
  title: string
  description: string
  rating: number
  purchaseSource: string
  imageUrls: string[]
  excerp: string
  isPremium: boolean
  price: number
  isPublished: boolean
  userId: string
  categoryId: string
  createdAt: string
  updatedAt: string
  author: Author
  category: Category
  comments: any[]
  votes: any[]
}

interface ManageReviewsProps {
  initialData: Review[]
  category: Category[]
}

export default function ManageReviews({ initialData = [], category = [] }: ManageReviewsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // State for filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchTerm") || "")
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("categoryId") || "")
  const [selectedPremium, setSelectedPremium] = useState<boolean | undefined>(() => {
    const isPaid = searchParams.get("isPaid")
    if (isPaid === "true") return true
    if (isPaid === "false") return false
    return undefined
  })

  // Publication status state
  const [isPublished, setIsPublished] = useState<boolean | undefined>(() => {
    const published = searchParams.get("isPublished")
    if (published === "true") return true
    if (published === "false") return false
    return undefined
  })

  // Set active tab based on isPublished value from URL
  const getInitialTab = () => {
    const published = searchParams.get("isPublished")
    if (published === "true") return "published"
    if (published === "false") return "unpublished"
    return "all"
  }

  const [activeTab, setActiveTab] = useState(getInitialTab())

  // Dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const [moderationReason, setModerationReason] = useState("")

  // Update isPublished when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Set isPublished based on tab
    if (value === "published") {
      setIsPublished(true)
    } else if (value === "unpublished") {
      setIsPublished(false)
    } else {
      setIsPublished(undefined)
    }

    // Apply filters with the new isPublished value
    handleFilter(value)
  }

  // Filter handler function
  const handleFilter = (tabValue?: string) => {
    let url = "/admin/manage-reviews"
    const queryParams: string[] = []

    if (searchQuery) queryParams.push(`searchTerm=${encodeURIComponent(searchQuery)}`)
    if (selectedCategory) queryParams.push(`categoryId=${encodeURIComponent(selectedCategory)}`)

    // Handle publication status based on tab or current state
    const pubStatus = tabValue
      ? tabValue === "published"
        ? true
        : tabValue === "unpublished"
          ? false
          : undefined
      : isPublished

    if (pubStatus !== undefined) {
      queryParams.push(`isPublished=${pubStatus}`)
    }

    // Handle premium status
    if (selectedPremium !== undefined) {
      queryParams.push(`isPaid=${selectedPremium}`)
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`
    }

    router.push(url)
  }

  // Filter reviews based on all filters for local display
  const getFilteredReviews = () => {
    return initialData.filter((review) => {
      // Filter by publication status if set
      if (isPublished !== undefined && review.isPublished !== isPublished) {
        return false
      }

      // Filter by premium status if set
      if (selectedPremium !== undefined && review.isPremium !== selectedPremium) {
        return false
      }

      // Filter by category if selected
      if (selectedCategory && review.categoryId !== selectedCategory) {
        return false
      }

      // Filter by search query
      if (searchQuery && !review.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      return true
    })
  }

  const filteredReviews = getFilteredReviews()

  // Sync URL params with component state on mount
  useEffect(() => {
    // This ensures the component state reflects the URL parameters on initial load
    const tab = getInitialTab()
    if (tab !== activeTab) {
      setActiveTab(tab)
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          title="All Reviews"
          count={initialData.length}
          icon={<Calendar className="h-5 w-5" />}
          color="bg-blue-100 text-blue-700"
        />
        <SummaryCard
          title="Published"
          count={initialData.filter((r) => r.isPublished).length}
          icon={<Check className="h-5 w-5" />}
          color="bg-green-100 text-green-700"
        />
        <SummaryCard
          title="Unpublished"
          count={initialData.filter((r) => !r.isPublished).length}
          icon={<X className="h-5 w-5" />}
          color="bg-red-100 text-red-700"
        />
        <SummaryCard
          title="Premium"
          count={initialData.filter((r) => r.isPremium).length}
          icon={<DollarSign className="h-5 w-5" />}
          color="bg-purple-100 text-purple-700"
        />
      </div>

      {/* Filters and Tabs */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search reviews..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {selectedCategory ? category.find((c) => c.id === selectedCategory)?.name || "Category" : "Category"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedCategory("")}>All Categories</DropdownMenuItem>
                {category.map((cat) => (
                  <DropdownMenuItem key={cat.id} onClick={() => setSelectedCategory(cat.id)}>
                    {cat.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Premium Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {selectedPremium === undefined ? "Premium Status" : selectedPremium ? "Premium" : "Free"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedPremium(undefined)}>All Reviews</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPremium(true)}>Premium Only</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPremium(false)}>Free Only</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button onClick={() => handleFilter()}>Apply Filters</Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Reviews</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="unpublished">Unpublished</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ReviewsTable
              reviews={filteredReviews}
              onDelete={(review) => {
                setSelectedReview(review)
                setDeleteDialogOpen(true)
              }}
            />
          </TabsContent>

          <TabsContent value="published">
            <ReviewsTable
              reviews={filteredReviews}
              onDelete={(review) => {
                setSelectedReview(review)
                setDeleteDialogOpen(true)
              }}
            />
          </TabsContent>

          <TabsContent value="unpublished">
            <ReviewsTable
              reviews={filteredReviews}
              onDelete={(review) => {
                setSelectedReview(review)
                setDeleteDialogOpen(true)
              }}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Review</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this review? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h3 className="font-medium">{selectedReview?.title}</h3>
            <p className="text-sm text-gray-500 mt-1">By {selectedReview?.author.name}</p>
            <Textarea
              className="mt-4"
              placeholder="Reason for deletion (optional)..."
              value={moderationReason}
              onChange={(e) => setModerationReason(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                console.log(`Deleted review: ${selectedReview?.id}, Reason: ${moderationReason}`)
                setDeleteDialogOpen(false)
                setSelectedReview(null)
                setModerationReason("")
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Helper Components
function SummaryCard({
  title,
  count,
  icon,
  color,
}: {
  title: string
  count: number
  icon: React.ReactNode
  color: string
}) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{count}</p>
        </div>
        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center`}>{icon}</div>
      </CardContent>
    </Card>
  )
}

function ReviewsTable({
  reviews,
  onDelete,
}: {
  reviews: Review[]
  onDelete: (review: Review) => void
}) {
  if (reviews.length === 0) {
    return <div className="text-center py-8 text-gray-500">No reviews found.</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell className="font-medium max-w-[200px] truncate">{review.title}</TableCell>
              <TableCell>{review.author.name}</TableCell>
              <TableCell>{review.category.name}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {review.rating}
                  <Star className="h-4 w-4 fill-yellow-400 ml-1" />
                </div>
              </TableCell>
              <TableCell>
                {review.isPublished ? (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
                ) : (
                  <Badge variant="outline" className="text-red-800">
                    Unpublished
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                {review.isPremium ? (
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                    ${review.price.toFixed(2)}
                  </Badge>
                ) : (
                  <Badge variant="outline">Free</Badge>
                )}
              </TableCell>
              <TableCell>{format(new Date(review.createdAt), "MMM d, yyyy")}</TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-green-500">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => onDelete(review)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
