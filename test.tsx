"use client"

import { useState } from "react"
import Link from "next/link"
import { Filter, Search, Star, StarHalf, ChevronDown, ChevronUp, MessageSquare, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Mock data for reviews
const mockReviews = [
  {
    id: 1,
    title: "Amazing Wireless Headphones",
    author: "John Doe",
    date: "2023-05-15",
    rating: 4.5,
    category: "Gadgets",
    votes: 42,
    isPremium: false,
    description:
      "These headphones have incredible sound quality and battery life. The noise cancellation is top-notch and they're comfortable to wear for hours.",
    commentCount: 12,
  },
  {
    id: 2,
    title: "Disappointing Smartphone Experience",
    author: "Jane Smith",
    date: "2023-05-10",
    rating: 2,
    category: "Gadgets",
    votes: 18,
    isPremium: false,
    description:
      "The battery life is terrible and it overheats frequently. The camera quality is also not as advertised.",
    commentCount: 8,
  },
  {
    id: 3,
    title: "Perfect Running Shoes",
    author: "Mike Johnson",
    date: "2023-05-08",
    rating: 5,
    category: "Clothing",
    votes: 36,
    isPremium: true,
    description:
      "These running shoes provide excellent support and cushioning. I've run several marathons in them without any issues.",
    commentCount: 5,
  },
  {
    id: 4,
    title: "Engaging Mystery Novel",
    author: "Sarah Williams",
    date: "2023-05-05",
    rating: 4,
    category: "Books",
    votes: 24,
    isPremium: false,
    description:
      "This book kept me on the edge of my seat from start to finish. The plot twists were unexpected and the characters were well-developed.",
    commentCount: 3,
  },
  {
    id: 5,
    title: "Versatile Kitchen Appliance",
    author: "David Brown",
    date: "2023-05-01",
    rating: 4.5,
    category: "Home",
    votes: 30,
    isPremium: false,
    description:
      "This kitchen appliance has made meal prep so much easier. It's versatile, easy to clean, and looks great on my countertop.",
    commentCount: 7,
  },
  {
    id: 6,
    title: "Revolutionary Gaming Console",
    author: "Alex Chen",
    date: "2023-04-28",
    rating: 5,
    category: "Gadgets",
    votes: 56,
    isPremium: true,
    description:
      "This gaming console has changed the way I experience games. The graphics are stunning and the game library is extensive.",
    commentCount: 15,
  },
]

// Categories for filter
const categories = ["All Categories", "Gadgets", "Clothing", "Books", "Home", "Beauty", "Food", "Sports", "Other"]

export default function ReviesPageCard() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("newest")
  const [ratingFilter, setRatingFilter] = useState([0])
  const [currentPage, setCurrentPage] = useState(1)

  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-primary text-primary" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-muted-foreground" />)
    }

    return stars
  }

  return (
    <div className="container mx-auto px-4 py-8">
     
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">Product Reviews</h1>
          <div className="flex w-full md:w-auto gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search reviews..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filter Reviews</SheetTitle>
                  <SheetDescription>Refine your search with these filters</SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Category</h3>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Minimum Rating</h3>
                    <div className="pt-4">
                      <Slider
                        defaultValue={[0]}
                        max={5}
                        step={1}
                        value={ratingFilter}
                        onValueChange={setRatingFilter}
                      />
                      <div className="flex justify-between mt-2">
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <span key={num} className="text-xs">
                            {num}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Sort By</h3>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
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
                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedCategory("All Categories")
                        setRatingFilter([0])
                        setSortBy("newest")
                      }}
                    >
                      Reset
                    </Button>
                    <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active filters display */}
        <div className="flex flex-wrap gap-2 items-center">
          {selectedCategory !== "All Categories" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {selectedCategory}
              <button onClick={() => setSelectedCategory("All Categories")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {ratingFilter[0] > 0 && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {ratingFilter[0]}+ Stars
              <button onClick={() => setRatingFilter([0])}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {sortBy !== "newest" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {sortBy === "oldest"
                ? "Oldest First"
                : sortBy === "highest"
                  ? "Highest Rated"
                  : sortBy === "lowest"
                    ? "Lowest Rated"
                    : "Most Popular"}
              <button onClick={() => setSortBy("newest")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>

        {/* Desktop filter sidebar and review grid */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop filters - hidden on mobile */}
          <div className="hidden md:block w-64 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Filters</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <button
                          className={`text-sm ${selectedCategory === category ? "font-medium text-primary" : "text-muted-foreground"}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium mb-2">Minimum Rating</h4>
                  <div className="pt-2">
                    <Slider defaultValue={[0]} max={5} step={1} value={ratingFilter} onValueChange={setRatingFilter} />
                    <div className="flex justify-between mt-2">
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className="text-xs">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium mb-2">Sort By</h4>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
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
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("All Categories")
                    setRatingFilter([0])
                    setSortBy("newest")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockReviews.map((review) => (
                <Card key={review.id} className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link href={`/reviews/${review.id}`} className="hover:underline">
                          <h3 className="font-semibold text-lg line-clamp-2">{review.title}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">by {review.author}</p>
                      </div>
                      {review.isPremium && (
                        <Badge variant="default" className="bg-amber-500 hover:bg-amber-600">
                          Premium
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="py-2 flex-grow">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">{renderStars(review.rating)}</div>
                      <span className="text-sm text-muted-foreground">({review.rating.toFixed(1)})</span>
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {review.category}
                    </Badge>
                    <p className={`text-sm mt-2 ${review.isPremium ? "line-clamp-2 blur-[2px]" : "line-clamp-3"}`}>
                      {review.description}
                    </p>
                    {review.isPremium && (
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="w-full text-xs">
                          Unlock for $2.99
                        </Button>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-2 flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <button className="hover:text-primary">
                          <ChevronUp className="h-4 w-4" />
                        </button>
                        <span>{review.votes}</span>
                        <button className="hover:text-primary">
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{review.commentCount}</span>
                      </div>
                    </div>
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
