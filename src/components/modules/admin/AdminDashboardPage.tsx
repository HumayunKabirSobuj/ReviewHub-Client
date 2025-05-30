/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getAdminDashboardInfo,
  getReveiwDataForAdminDashboard,
} from "@/services/AdminDashboard";
import { Building2, Package, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface AdminDashboardInfo {
  totalPaymentAmount: number;
  totalPayments: number;
  totalUser: number;
  totalPublishedReviews: number;
  totalUnpublishedReviews: number;
}

type Review = {
  id: string;
  title: string;
  description: string;
  // add other fields if needed
};

function useBreakpoints() {
  const [breakpoints, setBreakpoints] = useState({
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
  });

  useState(() => {
    if (typeof window !== "undefined") {
      const checkBreakpoints = () => {
        setBreakpoints({
          isXs: window.innerWidth >= 480,
          isSm: window.innerWidth >= 640,
          isMd: window.innerWidth >= 768,
          isLg: window.innerWidth >= 1024,
          isXl: window.innerWidth >= 1280,
        });
      };

      checkBreakpoints();
      window.addEventListener("resize", checkBreakpoints);
      return () => window.removeEventListener("resize", checkBreakpoints);
    }
  });

  return breakpoints;
}

const revenueData = [
  { month: "Jan", revenue: 20000 },
  { month: "Feb", revenue: 25000 },
  { month: "Mar", revenue: 30000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 28000 },
  { month: "Jun", revenue: 32000 },
  { month: "Jul", revenue: 38000 },
  { month: "Aug", revenue: 42000 },
  { month: "Sep", revenue: 35000 },
  { month: "Oct", revenue: 40000 },
  { month: "Nov", revenue: 45000 },
  { month: "Dec", revenue: 48000 },
];

export default function AdminDashboardPage() {
  //   {
  //   data,
  //   tableData,
  // }: AdminDashboardPageProps
  const [data, setData] = useState<AdminDashboardInfo | null>(null);
  const [tableData, setTableData] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState("this-week");

  const { isSm } = useBreakpoints();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const dashboardRes = await getAdminDashboardInfo();
        const reviewRes = await getReveiwDataForAdminDashboard();

        // console.log(dashboardRes);

        if (dashboardRes.data) setData(dashboardRes.data);
        if (reviewRes.data) setTableData(reviewRes.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [data, tableData]);

  const tableWithFiveRow = tableData?.slice(0, 5);

  const AdminData = data;

  return (
    <main className="flex-1 overflow-auto">
      {loading ? (
        <>
          <div className="container py-8">
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-8 w-32" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              <aside className="col-span-1 hidden md:block">
                <Skeleton className="h-[500px] w-full rounded-lg" />
              </aside>

              <div className="col-span-4 md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton
                        key={index}
                        className="h-64 w-full rounded-lg"
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid gap-6 p-4 md:p-6">
          {/* Stats cards */}
          <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Pay Amount
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Package className="h-4 w-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <div className="text-2xl font-bold">
                  {AdminData?.totalPaymentAmount} BDT
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Number Of Payments
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Package className="h-4 w-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <div className="text-2xl font-bold">
                  {AdminData?.totalPayments}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total User
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <div className="text-2xl font-bold">{AdminData?.totalUser}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Published Reviews
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <div className="text-2xl font-bold">
                  {AdminData?.totalPublishedReviews}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Unpublished Reviews
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <div className="text-2xl font-bold">
                  {AdminData?.totalUnpublishedReviews}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts section */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            {/* Revenue chart */}
            <Card className="md:col-span-1 lg:col-span-4">
              <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0">
                <div>
                  <CardTitle className="text-base">Overall Total</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">
                      {AdminData?.totalPaymentAmount} BDT
                    </span>
                    <span className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
                      +20%
                    </span>
                  </div>
                </div>
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="sm:ml-auto"
                >
                  <TabsList className="grid grid-cols-2 sm:grid-cols-4 h-8 w-full max-w-xs">
                    <TabsTrigger value="this-week" className="text-xs">
                      This Week
                    </TabsTrigger>
                    <TabsTrigger value="this-month" className="text-xs">
                      This Month
                    </TabsTrigger>
                    <TabsTrigger value="this-year" className="text-xs">
                      This Year
                    </TabsTrigger>
                    <TabsTrigger value="lifetime" className="text-xs">
                      Lifetime
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[180px] xs:h-[200px] sm:h-[250px] md:h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={revenueData}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => {
                          // On small screens, show fewer labels
                          return !isSm && value.length > 1
                            ? value.substring(0, 1)
                            : value;
                        }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        tickFormatter={(value) => `${value / 1000}k`}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-blue-600 text-white p-2 shadow-sm">
                                <div className="text-xs">BDT</div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#2563eb"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6, fill: "#2563eb" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Analytics chart */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-base">Analytics</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="relative h-32 w-32 xs:h-40 xs:w-40 sm:h-48 sm:w-48 md:h-56 md:w-56">
                  {/* Circular progress chart */}
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      className="text-gray-100"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    {/* Return segment (red) */}
                    <circle
                      className="text-red-400"
                      strokeWidth="10"
                      strokeDasharray={`${10 * 2.51} ${100 * 2.51}`}
                      strokeDashoffset={0}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Cancel segment (yellow) */}
                    <circle
                      className="text-yellow-400"
                      strokeWidth="10"
                      strokeDasharray={`${10 * 2.51} ${100 * 2.51}`}
                      strokeDashoffset={-10 * 2.51}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Sale segment (blue) */}
                    <circle
                      className="text-blue-500"
                      strokeWidth="10"
                      strokeDasharray={`${80 * 2.51} ${100 * 2.51}`}
                      strokeDashoffset={-20 * 2.51}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Center text */}
                    <text
                      x="50"
                      y="45"
                      textAnchor="middle"
                      className="text-xl font-bold"
                    >
                      80%
                    </text>
                    <text x="50" y="60" textAnchor="middle" className="text-xs">
                      Delivery
                    </text>
                  </svg>
                </div>
              </CardContent>
              <div className="flex justify-center gap-4 pb-4">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Sale</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <span className="text-xs">Cancel</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <span className="text-xs">Return</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Top 10 List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Top Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-4 sm:-mx-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden rounded-md">
                    <div>
                      {/* Desktop and tablet view */}
                      <div className="hidden sm:block">
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
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {tableWithFiveRow?.map((table: any, idx: any) => (
                                <TableRow key={idx + 1}>
                                  <TableCell className="font-medium">
                                    {table?.title}
                                  </TableCell>
                                  <TableCell> {table?.author?.name}</TableCell>
                                  <TableCell>
                                    {" "}
                                    {table?.category?.name}
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      {table?.rating}{" "}
                                      <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <Badge
                                      variant="outline"
                                      className="bg-green-50 text-green-700 border-green-200"
                                    >
                                      Published
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-purple-600 font-medium">
                                    {table?.price}
                                  </TableCell>
                                  <TableCell>
                                    {" "}
                                    {new Date(
                                      table?.createdAt
                                    ).toLocaleDateString("en-GB", {
                                      day: "2-digit",
                                      month: "long",
                                      year: "numeric",
                                    })}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>

                      {/* Mobile view */}
                      <div className="sm:hidden">
                        <Card>
                          <CardContent className="p-4">
                            <div className="grid gap-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold">
                                    Get this review
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    Shaun Hossain
                                  </p>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200"
                                >
                                  Published
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-muted-foreground">
                                    Category
                                  </p>
                                  <p>Gadgets</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">
                                    Rating
                                  </p>
                                  <div className="flex items-center">
                                    4{" "}
                                    <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  </div>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Price</p>
                                  <p className="text-purple-600 font-medium">
                                    $233.00
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Date</p>
                                  <p>May 5, 2025</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
