/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { MyProfileInfo } from "@/services/User";
import {
  CreditCard,
  MessageSquare,
  Shield,
  Star,
  ThumbsUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserDashboardSection = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const data = await MyProfileInfo();
        setUserData(data?.data);
      } catch (error) {
        console.error("Failed to fetch profile info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileInfo();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const totalSpent = userData?.payments?.reduce(
    (sum: any, payment: any) => sum + payment.amount,
    0
  );
  const averageRating =
    userData?.reviews?.length > 0
      ? (
          userData.reviews.reduce(
            (sum: any, review: any) => sum + review.rating,
            0
          ) / userData.reviews.length
        ).toFixed(1)
      : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50/50 p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>

          {/* Profile Section Skeleton */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="h-4 w-64" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Stats Cards Skeleton */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16 mb-1" />
                  <Skeleton className="h-3 w-20" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity Skeleton */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Comments Skeleton */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-4 w-40" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-24" />
                    <Separator />
                  </div>
                ))}
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>

            {/* Recent Reviews Skeleton */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-4 w-40" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-8" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-3 w-24" />
                    <Separator />
                  </div>
                ))}
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          </div>

          {/* Payment History Skeleton */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-6 w-20" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Account Info Skeleton */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-28" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-50/50 p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Full details of your account
              </p>
            </div>
          </div>

          {/* Profile Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={userData.profileUrl || "/placeholder.svg"}
                    alt={userData.name}
                  />
                  <AvatarFallback className="text-lg">
                    {getInitials(userData.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">{userData.name}</h2>
                    <Badge
                      variant={
                        userData.status === "ACTIVE" ? "default" : "secondary"
                      }
                    >
                      {userData.status === "ACTIVE" ? "Active" : "Inactive"}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Shield className="h-3 w-3" />
                      {userData.role}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{userData.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Joined: {formatDate(userData.createdAt)}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Comments
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {userData.comments.length}
                </div>
                <p className="text-xs text-muted-foreground">
                  All your comments
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Payments
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ৳{totalSpent.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {userData.payments.length} transactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Review Rating
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageRating}/5</div>
                <p className="text-xs text-muted-foreground">
                  {userData.reviews.length} reviews
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Votes</CardTitle>
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {userData.votes.length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Upvotes received
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Comments
                </CardTitle>
                <CardDescription>Your latest comments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userData.comments.slice(0, 3).map((comment: any) => (
                  <div key={comment.id} className="space-y-2">
                    <p className="text-sm">{comment.content}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(comment.createdAt)}
                    </p>
                    <Separator />
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Link href={`/user/manage-comment`}> View All Comments</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Recent Reviews
                </CardTitle>
                <CardDescription>Your latest reviews</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userData.reviews.slice(0, 3).map((review: any) => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">
                        {review.rating}/5
                      </span>
                    </div>
                    <p className="text-sm">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(review.createdAt)}
                    </p>
                    <Separator />
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Link href={`/user/manage-reviews`}> View All Reviews</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Payment History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment History
              </CardTitle>
              <CardDescription>Your latest transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.payments.map((payment: any) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">৳{payment.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(payment.createdAt)}
                      </p>
                    </div>
                    <Badge
                      variant={
                        payment.status === "completed" ? "default" : "secondary"
                      }
                    >
                      {payment.status === "completed"
                        ? "Completed"
                        : payment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Account Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">User ID</label>
                  <p className="text-sm text-muted-foreground font-mono">
                    {userData.id}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Last Updated</label>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(userData.updatedAt)}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Account Type</label>
                  <p className="text-sm text-muted-foreground">
                    {userData.role}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <Badge
                    variant={
                      userData.status === "ACTIVE" ? "default" : "secondary"
                    }
                  >
                    {userData.status === "ACTIVE" ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSection;
