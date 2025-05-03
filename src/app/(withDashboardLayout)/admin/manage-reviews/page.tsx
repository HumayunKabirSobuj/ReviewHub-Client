"use client";

import { useEffect, useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Check,
  X,
  Eye,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllReviews, pendingReviews } from "@/services/Reviews";

// Review status types
type ReviewStatus = "pending" | "published" | "unpublished";

// Review interface
interface Review {
  id: number;
  title: string;
  author: string;
  category: string;
  rating: number;
  status: ReviewStatus;
  isPremium: boolean;
  price?: number;
  date: string;
  excerpt: string;
}

// API Review interface
interface ApiReview {
  id: number;
  title: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
  rating: number;
  status?: string;
  isPremium?: boolean;
  price?: number;
  createdAt?: string;
  content?: string;
}

export default function ManageReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState<ReviewStatus>("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPremium, setSelectedPremium] = useState<boolean | null>(null);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  // Modals state
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [unpublishDialogOpen, setUnpublishDialogOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [moderationReason, setModerationReason] = useState("");

  // API data state
  const [apiData, setApiData] = useState<ApiReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllReviews(searchQuery);
        // Make sure result is an array before setting it
        setApiData(result.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setApiData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await pendingReviews();
  //       console.log(result); // Make sure result is an array before setting it
  //       // setApiData(result.data);
  //     } catch (error) {
  //       console.error("Error fetching reviews:", error);
  //       setApiData([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [searchQuery]);

  const filteredReviews = apiData.filter((review) => {
    const matchesCategory = selectedCategory
      ? review.category.name === selectedCategory
      : true;
    const matchesPremium =
      selectedPremium !== null ? review.isPremium === selectedPremium : true;
    const matchesStatus = selectedTab ? review.status === selectedTab : true;
    const matchesSearch = searchQuery
      ? review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesPremium && matchesStatus && matchesSearch;
  });

  // console.log(filteredReviews);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value as ReviewStatus);
    setCurrentPage(1);
  };

  const handleApproveClick = (review: Review) => {
    setSelectedReview(review);
    setApproveDialogOpen(true);
  };

  const handleUnpublishClick = (review: Review) => {
    setSelectedReview(review);
    setUnpublishDialogOpen(true);
  };

  const handleApproveConfirm = () => {
    // Logic to approve the review would go here
    console.log(`Approved review: ${selectedReview?.id}`);
    setApproveDialogOpen(false);
    setSelectedReview(null);
  };

  const handleUnpublishConfirm = () => {
    // Logic to unpublish the review would go here
    console.log(
      `Unpublished review: ${selectedReview?.id}, Reason: ${moderationReason}`
    );
    setUnpublishDialogOpen(false);
    setSelectedReview(null);
    setModerationReason("");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-xl font-semibold mb-4">Manage Reviews</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Pending Reviews</p>
              <p className="text-2xl font-bold">{"pendingCount"}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <div className="w-6 h-6 text-yellow-500">
                <Calendar className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Published Reviews</p>
              <p className="text-2xl font-bold">{"publishedCount"}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <div className="w-6 h-6 text-green-500">
                <Check className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Unpublished Reviews</p>
              <p className="text-2xl font-bold">{"unpublishedCount"}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <div className="w-6 h-6 text-red-500">
                <X className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Premium Reviews</p>
              <p className="text-2xl font-bold">{"premiumCount"}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <div className="w-6 h-6 text-purple-500">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews List Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <Tabs defaultValue="pending" onValueChange={handleTabChange}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div className="mb-4 sm:mb-0">
              <TabsList>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="unpublished">Unpublished</TabsTrigger>
              </TabsList>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      Category
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                      All Categories
                    </DropdownMenuItem>
                    {/* {categories.map((category) => (
                      <DropdownMenuItem
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))} */}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      Premium
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedPremium(null)}>
                      All Reviews
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedPremium(true)}>
                      Premium Only
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedPremium(false)}>
                      Standard Only
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Search Field */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by title or author"
                  className="pl-8 w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <TabsContent value="pending">
            {renderReviewsTable(
              apiData,
              handleApproveClick,
              handleUnpublishClick
            )}
          </TabsContent>
          <TabsContent value="published">
            {renderReviewsTable(
              apiData,
              handleApproveClick,
              handleUnpublishClick
            )}
          </TabsContent>
          <TabsContent value="unpublished">
            {renderReviewsTable(
              apiData,
              handleApproveClick,
              handleUnpublishClick
            )}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {filteredReviews.length > 0 && (
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium">{Math.min(5, apiData.length)}</span>{" "}
              of <span className="font-medium">{apiData.length}</span> reviews
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {[...Array(Math.ceil(apiData.length / 5))].map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  size="icon"
                  className={`h-8 w-8 ${
                    currentPage === index + 1 ? "bg-purple-500 text-white" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() =>
                  handlePageChange(
                    Math.min(Math.ceil(apiData.length / 5), currentPage + 1)
                  )
                }
                disabled={
                  currentPage === Math.ceil(apiData.length / 5) ||
                  apiData.length === 0
                }
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {apiData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No reviews found matching your filters.
          </div>
        )}
      </div>

      {/* Approve Dialog */}
      <Dialog open={approveDialogOpen} onOpenChange={setApproveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve Review</DialogTitle>
            <DialogDescription>
              Are you sure you want to approve this review? It will be visible
              to all users.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h3 className="font-medium">{selectedReview?.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              By {selectedReview?.author}
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setApproveDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleApproveConfirm}>Approve</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Unpublish Dialog */}
      <Dialog open={unpublishDialogOpen} onOpenChange={setUnpublishDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unpublish Review</DialogTitle>
            <DialogDescription>
              Please provide a reason for unpublishing this review. This reason
              will be visible to the author.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h3 className="font-medium">{selectedReview?.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              By {selectedReview?.author}
            </p>
            <Textarea
              className="mt-4"
              placeholder="Reason for unpublishing..."
              value={moderationReason}
              onChange={(e) => setModerationReason(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setUnpublishDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleUnpublishConfirm}
              disabled={!moderationReason.trim()}
            >
              Unpublish
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Helper function to render the reviews table
function renderReviewsTable(
  data: any[],
  onApprove: (review: Review) => void,
  onUnpublish: (review: Review) => void
) {
  // Check if data is undefined or not an array
  if (!data || !Array.isArray(data)) {
    return (
      <div className="text-center py-8 text-gray-500">
        No reviews available.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Premium
            </th>

            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((reviewData: any) => (
            <tr key={reviewData.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium">
                <div className="flex flex-col">
                  <span className="truncate max-w-[200px]">
                    {reviewData?.title || "Untitled"}
                  </span>
                  <span className="text-xs text-gray-500 truncate max-w-[200px]">
                    {reviewData?.content?.substring(0, 50) || ""}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {reviewData?.author?.name || "Unknown"}
              </td>

              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {reviewData?.category?.name || "Uncategorized"}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {reviewData?.rating || 0}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {reviewData.isPremium ? (
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                    ${reviewData.price?.toFixed(2) || "0.00"}
                  </Badge>
                ) : (
                  <Badge variant="outline">Free</Badge>
                )}
              </td>

              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-blue-500"
                    title="View"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-green-500"
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
