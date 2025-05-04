"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@radix-ui/react-select";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  MessageSquare,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ReviesPageCard = (reviewData: any) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = [
    "All Categories",
    "Gadgets",
    "Clothing",
    "Books",
    "Home",
    "Beauty",
    "Food",
    "Sports",
    "Other",
  ];

  // console.log(reviewData.reviewData);
  // if (Array.isArray(reviewData.reviewData)) {
  //     // এটা একটা array
  //     console.log("Yes, it's an array!");
  //   } else {
  //     // এটা array না (object, string, undefined ইত্যাদি হতে পারে)
  //     console.log("No, it's not an array.");
  //   }
  // const review = {
  //     id: "1",
  //     title: "The Ultimate Coffee Maker: A Game Changer for Home Brewing",
  //     author: "Jane Smith",
  //     rating: 4.5,
  //     category: "Kitchen Appliances",
  //     description:
  //       "This coffee maker has completely transformed my morning routine. The precision temperature control ensures perfect extraction every time, while the built-in grinder saves counter space and delivers consistently fresh grounds. I've noticed a significant improvement in flavor compared to my previous setup.",
  //     isPremium: true,
  //     votes: 42,
  //     commentCount: 7,
  //     date: "2023-11-15",
  //   }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5">
        <h1 className="text-3xl font-bold">Product Reviews</h1>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reviews..."
              className="w-full pl-8"
              //   value={searchQuery}
              //   onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* <Sheet open={filterOpen} onOpenChange={setFilterOpen}> */}
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
                <SheetDescription>
                  Refine your search with these filters
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Category</h3>
                  <Select
                  // value={selectedCategory}
                  // onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))} */}
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
                      //   value={ratingFilter}
                      //   onValueChange={setRatingFilter}
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
                  {/* <Select value={sortBy} onValueChange={setSortBy}> */}
                  <Select>
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
                      // setSelectedCategory("All Categories")
                      // setRatingFilter([0])
                      // setSortBy("newest")
                    }}
                  >
                    Reset
                  </Button>
                  {/* <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button> */}
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
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
                        // className={`text-sm ${selectedCategory === category ? "font-medium text-primary" : "text-muted-foreground"}`}
                        className={`text-sm font-medium text-primary text-muted-foreground"}`}
                        // onClick={() => setSelectedCategory(category)}
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
                  <Slider defaultValue={[0]} max={5} step={1} />
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
                {/* <Select value={sortBy} onValueChange={setSortBy}> */}
                <Select>
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
                // onClick={() => {
                //   setSelectedCategory("All Categories")
                //   setRatingFilter([0])
                //   setSortBy("newest")
                // }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewData.reviewData?.map((review: any) => (
            <Card className="h-full flex flex-col max-w-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Link
                      href={`/reviews/${review.id}`}
                      className="hover:underline"
                    >
                      <h3 className="font-semibold text-lg line-clamp-2">
                        {review.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      by {review.author.name}
                    </p>
                  </div>
                  {review.isPremium && (
                    <Badge
                      variant="default"
                      className="bg-amber-500 hover:bg-amber-600"
                    >
                      Premium
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="py-2 flex-grow">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">{review.rating}</div>
                  <span className="text-sm text-muted-foreground">
                    ({review.rating.toFixed(1)})
                  </span>
                </div>
                <Badge variant="outline" className="mb-2">
                  {review.category.name}
                </Badge>
                <p
                  className={`text-sm mt-2 ${
                    review.isPremium
                      ? "line-clamp-2 blur-[2px]"
                      : "line-clamp-3"
                  }`}
                >
                  {review.description}
                </p>
                {review.isPremium && (
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
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
                    {/* <span>{review.votes}</span> */}
                    <button className="hover:text-primary">
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {/* <span>{review.commentCount}</span> */}
                  </div>
                </div>
                {/* <span>{new Date(review.date).toLocaleDateString()}</span> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviesPageCard;
