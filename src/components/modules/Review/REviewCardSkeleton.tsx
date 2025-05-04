import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// Extracted skeleton component for better code organization
const ReviewCardSkeleton = () => (
  <Card className="h-full flex flex-col max-w-md animate-pulse">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="h-5 bg-muted rounded w-3/4"></div>
          <div className="h-3 bg-muted rounded w-1/2"></div>
        </div>
        <div className="h-5 bg-muted rounded w-16"></div>
      </div>
    </CardHeader>
    <CardContent className="py-2 flex-grow">
      <div className="flex items-center mb-2">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-muted rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="h-5 bg-muted rounded w-1/3 mb-2"></div>
      <div className="space-y-2 mt-4">
        <div className="h-3 bg-muted rounded w-full"></div>
        <div className="h-3 bg-muted rounded w-full"></div>
        <div className="h-3 bg-muted rounded w-3/4"></div>
      </div>
    </CardContent>
    <CardFooter className="pt-2 flex justify-between">
      <div className="h-4 bg-muted rounded w-1/4"></div>
      <div className="h-4 bg-muted rounded w-1/4"></div>
    </CardFooter>
  </Card>
)

export default ReviewCardSkeleton
