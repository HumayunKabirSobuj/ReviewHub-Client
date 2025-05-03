"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    Building2,
    DollarSign,
    LayoutDashboard,
    Menu,
    Package,
    ShoppingCart,
    Users
} from "lucide-react";
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

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    //   { icon: Globe, label: "Site", href: "/admin/site" },
    { icon: Users, label: "Manage Users", href: "/admin/manage-users" },
    //   { icon: Map, label: "DSRs", href: "/admin/dsrs" },
    //   { icon: MapPin, label: "Routes", href: "/admin/routes" },
    //   { icon: Building2, label: "Retailers", href: "/admin/retailers" },
    //   { icon: ShoppingCart, label: "Orders", href: "/admin/orders" },
    //   { icon: Package, label: "Products", href: "/admin/products" },
    //   { icon: DollarSign, label: "Profit", href: "/admin/profit" },
    //   { icon: Plus, label: "Extra", href: "/admin/extra" },
    //   { icon: Building2, label: "Company", href: "/admin/company" },
    //   { icon: MapPin, label: "Area", href: "/admin/area" },
    //   { icon: Settings, label: "Management", href: "/admin/management" },
];

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

const productData = [
    {
        id: 1,
        brand: "Big King",
        name: "Big King",
        price: "$100",
        brandName: "Pepsi Cola",
        quantity: "100",
        srName: "John Smith",
    },
    {
        id: 2,
        brand: "Big King",
        name: "Big King",
        price: "$100",
        brandName: "Pepsi Cola",
        quantity: "100",
        srName: "John Smith",
    },
    {
        id: 3,
        brand: "Big King",
        name: "Big King",
        price: "$100",
        brandName: "Pepsi Cola",
        quantity: "100",
        srName: "John Smith",
    },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("this-week");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive sidebar
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setSidebarOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div className="flex-1 flex flex-col min-w-0">
            <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open sidebar</span>
                </Button>
                <div className="w-full">
                    <h1 className="text-lg font-semibold flex justify-end items-center ">
                        Overview
                    </h1>
                </div>
            </header>
            <main className="flex-1 overflow-auto">
                <div className="grid gap-6 p-4 md:p-6">
                    {/* Stats cards */}
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                    <DollarSign className="h-4 w-4 text-red-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹48,574.21</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Product</CardTitle>
                                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <Package className="h-4 w-4 text-green-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">500.00</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Completed Orders
                                </CardTitle>
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                    <ShoppingCart className="h-4 w-4 text-blue-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2,505.00</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Retailer
                                </CardTitle>
                                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                    <Building2 className="h-4 w-4 text-yellow-500" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">500+</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts section */}
                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
                        {/* Revenue chart */}
                        <Card className="lg:col-span-4">
                            <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0">
                                <div>
                                    <CardTitle className="text-base">Overall Total</CardTitle>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">₹48,574.21</span>
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
                                    <TabsList className="grid grid-cols-2 sm:grid-cols-4 h-8">
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
                                <div className="h-[200px] sm:h-[250px]">
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
                                                    return window.innerWidth < 500 && value.length > 1
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
                                                                <div className="text-xs">
                                                                    ₹50
                                                                </div>
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
                                <div className="relative h-40 w-40 sm:h-48 sm:w-48">
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
                                            className="text-3xl font-bold"
                                        >
                                            80%
                                        </text>
                                        <text
                                            x="50"
                                            y="60"
                                            textAnchor="middle"
                                            className="text-xs"
                                        >
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
                            <CardTitle className="text-base">TOP 10 List</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-auto">
                                <div className="inline-block min-w-full align-middle">
                                    <div className="overflow-hidden rounded-md">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="whitespace-nowrap">
                                                        Product
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        Dealer
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        Retailer
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        SR
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        Union
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        Buyer
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        BRAND
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        NAME
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        PRICE
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        BRAND
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        QUANTITY
                                                    </TableHead>
                                                    <TableHead className="whitespace-nowrap">
                                                        SR NAME
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {productData.map((product) => (
                                                    <TableRow key={product.id}>
                                                        <TableCell>
                                                            <div className="flex items-center gap-2">
                                                                <div className="h-8 w-8 bg-yellow-100 rounded-md flex items-center justify-center">
                                                                    <Package className="h-4 w-4 text-yellow-600" />
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell className="font-medium">
                                                            {product.brand}
                                                        </TableCell>
                                                        <TableCell>{product.name}</TableCell>
                                                        <TableCell>{product.price}</TableCell>
                                                        <TableCell>{product.brandName}</TableCell>
                                                        <TableCell>{product.quantity}</TableCell>
                                                        <TableCell>{product.srName}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
