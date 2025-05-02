"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Settings, Bell, Menu, X, ChevronDown, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  console.log('fdsjkfhdjshfjdsh');

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and desktop navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-blue-600">Admin</span>
                <span className="text-xl font-semibold text-gray-900">Panel</span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:ml-10 md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      )}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="mr-2 text-gray-600">
              <Bell className="h-5 w-5" />
            </Button>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/user.png" alt="User" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm font-medium text-gray-700 md:inline-block">Admin User</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="ml-2 flex md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                className="text-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-base font-medium",
                  isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.title}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
