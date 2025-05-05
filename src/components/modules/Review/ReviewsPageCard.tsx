"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { Filter, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import type React from "react"
import { memo, useCallback, useEffect, useMemo, useState, useTransition } from "react"
import ReviewCardSkeleton from "./REviewCardSkeleton"
import ReviewCard from "./ReviewCard"


interface Review {
  id: string
  title: string
  description: string
  rating: number
  categoryId: string
  category: {
    id: string
    name: string
  }
  author: {
    id: string
    name: string
  }
  isPremium: boolean
  price?: number
  votes?: string[]
  comments?: string[]
  createdAt: string
}

interface Category {
  id: string
  name: string
}

interface ReviewsPageCardProps {
  initialData: Review[]
  category: Category[]
}

// Main component
const ReviewsPageCard: React.FC<ReviewsPageCardProps> = ({ initialData, category }) => {
  
  const [isFilterOpen, setFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [loadingInitial, setLoadingInitial] = useState(true)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [ratingFilter, setRatingFilter] = useState(0)
  const [sortBy, setSortBy] = useState("newest")
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Apply search filter when debounced value changes
  useEffect(() => {
    if (debouncedSearchQuery !== "") {
      applyFilters(selectedCategory, ratingFilter, sortBy, debouncedSearchQuery)
    }
  }, [debouncedSearchQuery])

  // Initialize data
  useEffect(() => {
    setFilteredReviews(initialData)
    setLoadingInitial(false)
  }, [initialData])

  // Count active filters
  useEffect(() => {
    let count = 0
    if (selectedCategory) count++
    if (ratingFilter > 0) count++
    if (sortBy !== "newest") count++
    if (searchQuery) count++
    setActiveFiltersCount(count)
  }, [selectedCategory, ratingFilter, sortBy, searchQuery])

  const handleCategoryChange = useCallback(
    (categoryId: string) => {
      setSelectedCategory(categoryId)
      startTransition(() => {
        applyFilters(categoryId, ratingFilter, sortBy, searchQuery)
      })
    },
    [ratingFilter, sortBy, searchQuery],
  )

  const applyFilters = useCallback(
    (categoryId = selectedCategory, rating = ratingFilter, sort = sortBy, search = searchQuery) => {
      setIsLoading(true)

      // Filter by search query
      let filtered = initialData.filter((review) => {
        if (
          search &&
          !review.title.toLowerCase().includes(search.toLowerCase()) &&
          !review.description.toLowerCase().includes(search.toLowerCase())
        ) {
          return false
        }

        // Filter by category
        if (categoryId && review.categoryId !== categoryId) {
          return false
        }

        // Filter by rating
        if (rating > 0 && review.rating < rating) {
          return false
        }

        return true
      })

      // Sort the filtered reviews
      filtered = sortReviews(filtered, sort)

      // Use requestAnimationFrame for smoother UI updates
      requestAnimationFrame(() => {
        setFilteredReviews(filtered)

        // Simulate network delay for smoother UX
        setTimeout(() => {
          setIsLoading(false)
        }, 300)
      })

      // Update URL with filters
      updateUrl(categoryId, rating, sort, search)
    },
    [initialData, selectedCategory, ratingFilter, sortBy, searchQuery],
  )

  const sortReviews = useCallback((reviews: Review[], sortType: string) => {
    switch (sortType) {
      case "newest":
        return [...reviews].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      case "oldest":
        return [...reviews].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      case "highest":
        return [...reviews].sort((a, b) => b.rating - a.rating)
      case "lowest":
        return [...reviews].sort((a, b) => a.rating - b.rating)
      case "popular":
        return [...reviews].sort((a, b) => (b.votes?.length || 0) - (a.votes?.length || 0))
      default:
        return reviews
    }
  }, [])

  const updateUrl = useCallback(
    (categoryId: string, rating: number, sort: string, search: string) => {
      const params = new URLSearchParams()

      if (categoryId) params.set("categoryId", categoryId)
      if (rating > 0) params.set("minRating", rating.toString())
      if (sort !== "newest") params.set("sort", sort)
      if (search) params.set("searchTerm", search)

      const queryString = params.toString()

      // Use startTransition for URL updates to avoid blocking the UI
      // startTransition(() => {
      //   router.push(`/reviews${queryString ? `?${queryString}` : ""}`, { scroll: false })
      // })

      // startTransition(() => {
      //   router.push(`/reviews${queryString ? `?${queryString}` : ""}`, { scroll: false })
      // })
    },
    [router],
  )

  const resetFilters = useCallback(() => {
    setSelectedCategory("")
    setRatingFilter(0)
    setSortBy("newest")
    setSearchQuery("")
    startTransition(() => {
      applyFilters("", 0, "newest", "")
    })
  }, [applyFilters])

  // Memoize the category list to prevent unnecessary re-renders
  const categoryList = useMemo(
    () => (
      <div className="space-y-2">
        <div className="flex items-center">
          <button
            className={cn(
              "text-sm px-2 py-1 rounded-md w-full text-left transition-colors",
              selectedCategory === ""
                ? "font-medium text-primary bg-primary/10"
                : "text-muted-foreground hover:bg-muted",
            )}
            onClick={() => handleCategoryChange("")}
          >
            All Categories
          </button>
        </div>
        {category.map((cat) => (
          <div key={cat.id} className="flex items-center">
            <button
              className={cn(
                "text-sm px-2 py-1 rounded-md w-full text-left transition-colors",
                selectedCategory === cat.id
                  ? "font-medium text-primary bg-primary/10"
                  : "text-muted-foreground hover:bg-muted",
              )}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.name}
            </button>
          </div>
        ))}
      </div>
    ),
    [category, selectedCategory, handleCategoryChange],
  )

  // Memoize the review grid to prevent unnecessary re-renders
  const reviewGrid = useMemo(() => {
    if (loadingInitial) {
      return Array(6)
        .fill(0)
        .map((_, index) => <ReviewCardSkeleton key={`skeleton-${index}`} />)
    }

    if (isLoading) {
      return filteredReviews.map((_, index) => <ReviewCardSkeleton key={`skeleton-${index}`} />)
    }

    if (filteredReviews.length === 0) {
      return (
        <div className="col-span-full text-center py-12 bg-card rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-2">No reviews found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your filters or search criteria</p>
          <Button variant="outline" onClick={resetFilters} className="hover:bg-muted/80 transition-colors">
            Reset Filters
          </Button>
        </div>
      )
    }

    return filteredReviews.map((review) => <ReviewCard  key={review.id} review={review} />)
  }, [filteredReviews, isLoading, loadingInitial, resetFilters])

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reviews..."
              className="w-full pl-10 pr-4 focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Sheet open={isFilterOpen} onOpenChange={setFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2 hover:bg-muted/80 transition-colors relative">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md">
              <SheetHeader className="mb-5">
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Apply filters to find the perfect review</SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full focus:ring-primary">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {category.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium leading-none">Minimum Rating</label>
                    <span className="text-sm font-medium">{ratingFilter}</span>
                  </div>
                  <Slider
                    defaultValue={[0]}
                    max={5}
                    step={1}
                    value={[ratingFilter]}
                    onValueChange={([value]) => setRatingFilter(value)}
                    className="py-2"
                  />
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <span key={num}>{num}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full focus:ring-primary">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={resetFilters} className="hover:bg-muted/80 transition-colors">
                  Reset
                </Button>
                <Button
                  onClick={() => {
                    applyFilters()
                    setFilterOpen(false)
                  }}
                  className="transition-colors"
                >
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <aside className="col-span-1 hidden md:block">
          <div className="bg-card rounded-lg p-5 space-y-6 shadow-sm border sticky top-20">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                {activeFiltersCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                    {activeFiltersCount} active
                  </span>
                )}
              </div>
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-md font-medium">Category</h4>
                  {categoryList}
                </div>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-md font-medium">Minimum Rating</h4>
                    <span className="text-sm font-medium">{ratingFilter}</span>
                  </div>
                  <Slider
                    defaultValue={[0]}
                    max={5}
                    step={1}
                    value={[ratingFilter]}
                    onValueChange={([value]) => setRatingFilter(value)}
                    className="py-2"
                  />
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <span key={num}>{num}</span>
                    ))}
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <h4 className="text-md font-medium mb-2">Sort By</h4>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full focus:ring-primary">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 hover:bg-muted/80 transition-colors"
                  onClick={resetFilters}
                  disabled={isPending}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </aside>

        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{reviewGrid}</div>
        </div>
      </div>
    </div>
  )
}

// Use memo to prevent unnecessary re-renders
export default memo(ReviewsPageCard)
