/* eslint-disable @typescript-eslint/no-explicit-any */


// 'use client';

// import type React from 'react';

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { cn } from '@/lib/utils';
// import { logout } from '@/services/AuthServices';
// import { ChevronDown, Home, Info, LayoutGrid, LogOut, Menu, Newspaper, Phone, Star, User, X } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { useUser } from '../context/UserContext';
// import { ProfileModal } from './ProfileModal';

// type NavItem = {
// 	title: string;
// 	href: string;
// 	icon: React.ElementType;
// };


// const navItems: NavItem[] = [
// 	{
// 		title: 'Home',
// 		href: '/',
// 		icon: Home,
// 	},
// 	{
// 		title: 'Reviews',
// 		href: '/reviews',
// 		icon: Star,
// 	},
// 	{
// 		title: 'Categories',
// 		href: '/categories',
// 		icon: LayoutGrid, // better represents grouped content
// 	},
// 	{
// 		title: 'About',
// 		href: '/about',
// 		icon: Info, // standard info/about icon
// 	},
// 	{
// 		title: 'Contact Us',
// 		href: '/contact-us',
// 		icon: Phone, // clearer contact representation
// 	},
// 	{
// 		title: 'News',
// 		href: '/news',
// 		icon: Newspaper, // perfectly fits news or blog
// 	},
// ];





// export const CategoryMegaMenu = () => {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const res = await getAllCategories();
//       if (res?.success && res?.data) {
//         setCategories(res.data);
//       }
//     };

//     fetchCategories();
//   }, []);


// export function Navbar() {
// 	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// 	const pathname = usePathname();
// 	const router = useRouter();
// 	const [profileModalOpen, setProfileModalOpen] = useState(false);

// 	const { user, setIsLoading } = useUser();

// 	const handleLogout = async () => {
// 		// console.log("logout...");
// 		setIsLoading(true); // প্রথমে loading শুরু করি
// 		await logout(); // async call শেষ না হওয়া পর্যন্ত wait করি
// 		setIsLoading(false); // তারপর loading false করি
// 		router.push('/');
// 	};

// 	return (
// 		<nav className="border-b bg-white shadow-sm sticky top-0 z-50">
// 			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// 				<div className="flex h-16 items-center justify-between">
// 					{/* Logo and desktop navigation */}
// 					<div className="flex items-center">
// 						<div className="flex-shrink-0">
// 							<Link href="/" className="flex items-center">
// 								<Star className="mr-2 h-6 w-6 text-yellow-500" />
// 								<span className="text-xl font-semibold">Review Portal</span>
// 							</Link>
// 						</div>

// 						{/* Desktop navigation */}
// 						<div className="hidden md:ml-10 md:block">
// 							<div className="flex items-center space-x-4">
// 								{navItems.map((item) => {
// 									const Icon = item.icon;
// 									const isActive =
// 										pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

// 									return (
// 										<Link
// 											key={item.href}
// 											href={item.href}
// 											className={cn(
// 												'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
// 												isActive
// 													? 'text-primary bg-gray-50 '
// 													: 'text-gray-600 hover:bg-gray-50 hover:text-primary',
// 											)}
// 										>
// 											<Icon className="mr-2 h-4 w-4" />
// 											{item.title}
// 										</Link>
// 									);
// 								})}
// 							</div>
// 						</div>
// 					</div>

// 					{/* Right side items */}
// 					<div className="flex items-center">
// 						{/* Notifications */}

// 						{/* User dropdown or Login button */}
// 						{user ? (
// 							<DropdownMenu>
// 								<DropdownMenuTrigger asChild>
// 									<Button variant="ghost" className="flex items-center space-x-2">
// 										<Avatar className="h-8 w-8">
// 											<AvatarImage
// 												src={
// 													user?.profileUrl ||
// 													'https://i.ibb.co.com/KpPWKmwg/user.png' ||
// 													'/placeholder.svg'
// 												}
// 												alt="User"
// 											/>
// 											<AvatarFallback>USER</AvatarFallback>
// 										</Avatar>
// 										<span className="hidden text-sm font-medium text-gray-700 md:inline-block">
// 											{user?.name}
// 										</span>
// 										<ChevronDown className="h-4 w-4 text-gray-500" />
// 									</Button>
// 								</DropdownMenuTrigger>
// 								<DropdownMenuContent align="end" className="w-56">
// 									<div className="px-2 py-1.5">
// 										<p className="text-sm font-medium">{user?.name}</p>
// 										<p className="text-xs text-gray-500">{user?.email}</p>
// 									</div>
// 									<DropdownMenuSeparator />

// 									<DropdownMenuItem
// 										onClick={() => {
// 											//   setProfileModalOpen(true)
// 											router.push('/my-profile');
// 											// Close the dropdown menu when opening the modal
// 											document.body.click();
// 										}}
// 									>
// 										<User className="mr-2 h-4 w-4" />
// 										<span>My Profile</span>
// 									</DropdownMenuItem>

// 									{user.role === 'ADMIN' ? (
// 										<DropdownMenuItem>
// 											<User className="mr-2 h-4 w-4" />
// 											<Link href={'/admin/dashboard'}>
// 												<span> Dashboard</span>
// 											</Link>
// 										</DropdownMenuItem>
// 									) : (
// 										<DropdownMenuItem>
// 											<User className="mr-2 h-4 w-4" />
// 											<Link href={'/user/dashboard'}>
// 												<span> Dashboard</span>
// 											</Link>
// 										</DropdownMenuItem>
// 									)}

// 									<DropdownMenuSeparator />
// 									<DropdownMenuItem className="text-red-600" onClick={() => handleLogout()}>
// 										<LogOut className="mr-2 h-4 w-4" />
// 										<span>Log out</span>
// 									</DropdownMenuItem>
// 								</DropdownMenuContent>
// 							</DropdownMenu>
// 						) : (
// 							<Button variant="default" className="bg-primary hover:bg-purple-600 ">
// 								<Link href={'/login'}> Login</Link>
// 							</Button>
// 						)}

// 						{/* Mobile menu button */}
// 						<div className="ml-2 flex md:hidden">
// 							<Button
// 								variant="ghost"
// 								size="icon"
// 								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// 								aria-expanded={mobileMenuOpen}
// 								className="text-gray-600"
// 							>
// 								<span className="sr-only">Open main menu</span>
// 								{mobileMenuOpen ? (
// 									<X className="h-6 w-6" aria-hidden="true" />
// 								) : (
// 									<Menu className="h-6 w-6" aria-hidden="true" />
// 								)}
// 							</Button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Mobile menu */}
// 			<div className={cn('md:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
// 				{/* Mobile search */}

// 				<div className="space-y-1 px-2 pb-3 pt-2">
// 					{navItems.map((item) => {
// 						const Icon = item.icon;
// 						const isActive =
// 							pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

// 						return (
// 							<Link
// 								key={item.href}
// 								href={item.href}
// 								className={cn(
// 									'flex items-center rounded-md px-3 py-2 text-base font-medium',
// 									isActive
// 										? 'bg-blue-50 text-blue-600'
// 										: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
// 								)}
// 								onClick={() => setMobileMenuOpen(false)}
// 							>
// 								<Icon className="mr-3 h-5 w-5" />
// 								{item.title}
// 							</Link>
// 						);
// 					})}
// 				</div>
// 			</div>
// 			{/* Profile Modal */}
// 			<ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
// 		</nav>
// 	);
// }
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { logout } from '@/services/AuthServices';
import { getAllCategories } from '@/services/Categories';
import { ChevronDown, Home, LogOut, MailQuestion, Menu, Newspaper, Star, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { ProfileModal } from './ProfileModal';

type NavItem = {
	title: string;
	href: string;
	icon: any;
};

const navItems: NavItem[] = [
	{ title: 'Home', href: '/', icon: Home },
	{ title: 'Reviews', href: '/reviews', icon: Star },
	// { title: 'Categories', href: '', icon: Star },
	{ title: 'About', href: '/about', icon: MailQuestion },
	{ title: 'Contact Us', href: '/contact-us', icon: MailQuestion },
	{ title: 'News', href: '/news', icon: Newspaper },
];

type Category = {
	id: string;
	name: string;
	slug: string;
};

const CategoryMegaMenu = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await getAllCategories();
			if (res?.success && res?.data) {
				setCategories(res.data);
			}
		};

		fetchCategories();
	}, []);

	return (
		<div className="flex flex-wrap p-2">
			{categories?.map((category) => (
				<div key={category.id}>
					<Link
						href={`/reviews/?categoryId=${category.id}`}
						className="text-sm text-gray-700 hover:underline"
					>
						{category.name}
					</Link>
				</div>
			))}
		</div>
	);
};


export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const [profileModalOpen, setProfileModalOpen] = useState(false);

	const { user, setIsLoading } = useUser();

	const handleLogout = async () => {
		setIsLoading(true);
		await logout();
		setIsLoading(false);
		router.push('/');
	};

	return (
		<nav className="border-b bg-white shadow-sm sticky top-0 z-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link href="/" className="flex items-center">
								<Star className="mr-2 h-6 w-6 text-yellow-500" />
								<span className="text-xl font-semibold">Review Portal</span>
							</Link>
						</div>


						{/* Desktop Navigation */}
						<div className="hidden md:ml-10 md:block">
							<div className="flex items-center space-x-4 relative">
								{navItems.map((item) => {
									if (item.title === 'Reviews') {
										return (
											<div key="reviews" className="relative group">
												<div
													className={cn(
														'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer',
														'text-gray-600 hover:bg-gray-50 hover:text-primary'
													)}
												>
													<item.icon className="mr-2 h-4 w-4" />
													<Link href={`/reviews`}>
													Reviews
													</Link>
												</div>
												<div className="absolute left-0 top-full z-50 hidden group-hover:block bg-white shadow-md border rounded-md">
													<CategoryMegaMenu />
												</div>
											</div>
										);
									}

									const isActive =
										pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

									return (
										<Link
											key={item.href}
											href={item.href}
											className={cn(
												'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
												isActive
													? 'text-primary bg-gray-50'
													: 'text-gray-600 hover:bg-gray-50 hover:text-primary'
											)}
										>
											<item.icon className="mr-2 h-4 w-4" />
											{item.title}
										</Link>
									);
								})}
							</div>
						</div>


					</div>

					<div className="flex items-center">
						{user ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" className="flex items-center space-x-2">
										<Avatar className="h-8 w-8">
											<AvatarImage
												src={
													user?.profileUrl ||
													'https://i.ibb.co.com/KpPWKmwg/user.png' ||
													'/placeholder.svg'
												}
												alt="User"
											/>
											<AvatarFallback>USER</AvatarFallback>
										</Avatar>
										<span className="hidden text-sm font-medium text-gray-700 md:inline-block">
											{user?.name}
										</span>
										<ChevronDown className="h-4 w-4 text-gray-500" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-56">
									<div className="px-2 py-1.5">
										<p className="text-sm font-medium">{user?.name}</p>
										<p className="text-xs text-gray-500">{user?.email}</p>
									</div>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										onClick={() => {
											router.push('/my-profile');
											document.body.click();
										}}
									>
										<User className="mr-2 h-4 w-4" />
										<span>My Profile</span>
									</DropdownMenuItem>

									<DropdownMenuItem>
										<User className="mr-2 h-4 w-4" />
										<Link href={user.role === 'ADMIN' ? '/admin/dashboard' : '/user/dashboard'}>
											<span>Dashboard</span>
										</Link>
									</DropdownMenuItem>

									<DropdownMenuSeparator />
									<DropdownMenuItem className="text-red-600" onClick={handleLogout}>
										<LogOut className="mr-2 h-4 w-4" />
										<span>Log out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Button variant="default" className="bg-primary hover:bg-purple-600">
								<Link href="/login">Login</Link>
							</Button>
						)}

						<div className="ml-2 flex md:hidden">
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								aria-expanded={mobileMenuOpen}
								className="text-gray-600"
							>
								<span className="sr-only">Open main menu</span>
								{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className={cn('md:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
				<div className="space-y-1 px-2 pb-3 pt-2">
					{navItems.map((item) => {
						const Icon = item.icon;
						const isActive =
							pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

						if (item.title === 'Categories') {
							return (
								<Popover key="categories">
									<PopoverTrigger asChild>
										<button
											className={cn(
												'flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-left',
												'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
											)}
										>
											<Star className="mr-3 h-5 w-5" />
											Categories
										</button>
									</PopoverTrigger>
									<PopoverContent className="w-full">
										<div className="grid grid-cols-1 gap-2">
											<CategoryMegaMenu />
										</div>
									</PopoverContent>
								</Popover>

							);
						}

						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex items-center rounded-md px-3 py-2 text-base font-medium',
									isActive
										? 'bg-blue-50 text-blue-600'
										: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
								)}
								onClick={() => setMobileMenuOpen(false)}
							>
								<Icon className="mr-3 h-5 w-5" />
								{item.title}
							</Link>
						);
					})}
				</div>
			</div>


			<ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
		</nav>
	);
}
