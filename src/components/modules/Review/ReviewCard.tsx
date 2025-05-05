"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, MessageSquare, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";
import { useUser } from "@/components/context/UserContext";
import { makePayment } from "@/services/Payments";
import { toast } from "sonner";
import Link from "next/link";

interface Review {
  id: string;
  title: string;
  description: string;
  rating: number;
  categoryId: string;
  excerp: string;
  category: {
    id: string;
    name: string;
  };
  author: {
    id: string;
    name: string;
  };
  isPremium: boolean;
  price?: number;
  votes?: string[];
  comments?: string[];
  createdAt: string;
}

interface ReviewCardProps {
  review: Review;
}

// Optimized Review Card component with entire card clickable
const ReviewCard = memo(({ review }: ReviewCardProps) => {
  // console.log(review);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Navigate to review details page
  const handleCardClick = () => {
    // router.push(`/reviews/${review.id}`);

    console.log("details");
  };

  // Prevent navigation when clicking on specific elements
  const handleInnerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const { user } = useUser();

  // Optimized rendering of stars
  const renderStars = () => {
    return (
      <div className="flex mr-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < review.rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300 fill-gray-300"
            )}
          />
        ))}
      </div>
    );
  };

  const handleMakePayment = async (reviewId: string) => {
    // console.log("make payment", { reviewId });
    const result = await makePayment(reviewId);
    console.log(result);
    toast.success("Please wait..", { duration: 2000 });
    window.location.replace(result.url);
  };

  // console.log(user);

  return (
    <Card
      className={cn(
        "h-full flex flex-col max-w-md transition-all duration-200 cursor-pointer",
        isHovered ? "shadow-md translate-y-[-2px]" : "hover:shadow-sm"
      )}
      // onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3
              className={cn(
                "font-semibold text-lg line-clamp-2 transition-colors",
                isHovered ? "text-primary" : ""
              )}
            >
              {review.title}
            </h3>
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
        <div className="flex items-center mb-3">
          {renderStars()}
          <span className="text-sm text-muted-foreground">
            ({review.rating.toFixed(1)})
          </span>
        </div>
        <Badge variant="outline" className="mb-3">
          {review.category.name}
        </Badge>
        <p
          className={cn(
            "text-sm mt-3",
            review.isPremium ? "line-clamp-2 blur-[2px]" : "line-clamp-3"
          )}
        >
          {review.excerp}
        </p>
        <div>
          {review.isPremium && (
            <div className="mt-4" onClick={() => handleMakePayment(review?.id)}>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs hover:bg-amber-50 transition-colors"
              >
                Unlock for {review.price || "0000"} BDT
              </Button>
            </div>
          )}
        </div>
        {!review.isPremium && (
          <div className="mt-4" onClick={handleInnerClick}>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs hover:bg-amber-50 transition-colors"
            >
              <Link href={`/reviews/${review?.id}`}>View Details</Link>
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-3 flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-4" onClick={handleInnerClick}>
          <div className="flex items-center gap-1">
            <button className="hover:text-primary focus:text-primary focus:outline-none transition-colors p-1 rounded-full hover:bg-muted">
              <ChevronUp className="h-4 w-4" />
            </button>
            <span>{review.votes?.length || 0}</span>
            <button className="hover:text-primary focus:text-primary focus:outline-none transition-colors p-1 rounded-full hover:bg-muted">
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{review.comments?.length || 0}</span>
          </div>
        </div>
        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
      </CardFooter>
    </Card>
  );
});

ReviewCard.displayName = "ReviewCard";

export default ReviewCard;
