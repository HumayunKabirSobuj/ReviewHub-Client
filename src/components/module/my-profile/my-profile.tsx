'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Heart, Instagram, MessageCircle, Share2, Twitter, Youtube } from 'lucide-react';
import { getUserProfileApi } from '@/services/UserDashboard/ProfileServices';
import { User } from '@/components/types/add-review';

export default function MyProfilePage() {
	// const [isOnline, setIsOnline] = useState(true);
	const [profleInfo, setProfileInfo] = useState<User | null>(null);

	useEffect(() => {
		// setIsOnline(true);
		getUserProfileInformation();
	}, []);

	const getUserProfileInformation = async () => {
		try {
			const res = await getUserProfileApi();
			console.log(res.data);
			if (res.success) {
				setProfileInfo(res.data);
			} else {
				console.log(res.data.message);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const getFormattedDate = (date: string) => {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		// Output: "May 22, 2025"
	};

	return (
		// <div className="flex min-h-screen items-center justify-center bg-black p-4">

		<Card className="w-full p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all text-black">
			<CardHeader className="pb-2">
				<CardTitle className="text-lg font-bold text-black">Profile</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-6 md:grid-cols-[1fr_1.5fr]">
					<div className="space-y-6">
						<div className="flex flex-col items-center space-y-2">
							<div className="relative">
								<div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-800">
									<Image
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first-part-9xcJDYtB53UMcQJdYCoYVNUT786aQe.png"
										alt="Profile avatar"
										width={128}
										height={128}
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
							<div className="flex items-center space-x-1">
								<h2 className="text-xl font-semibold">{profleInfo?.name}</h2>
								<CheckCircle className="h-4 w-4 text-green-500" />
							</div>
							<p className="text-sm text-gray-700">Active User</p>
						</div>

						<div className="space-y-4">
							<div>
								<h3 className="mb-2 text-sm font-medium text-black">Social Media</h3>
								<div className="flex space-x-2">
									<Button
										variant="outline"
										size="icon"
										className="h-8 w-8 rounded-full border-gray-700 bg-transparent"
									>
										<Instagram className="h-4 w-4 text-pink-500" />
									</Button>
									<Button
										variant="outline"
										size="icon"
										className="h-8 w-8 rounded-full border-gray-700 bg-transparent"
									>
										<Twitter className="h-4 w-4 text-blue-400" />
									</Button>
									<Button
										variant="outline"
										size="icon"
										className="h-8 w-8 rounded-full border-gray-700 bg-transparent"
									>
										<Youtube className="h-4 w-4 text-red-500" />
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-bold text-black">Bio & other details</h3>
							{/* <div className="flex items-center space-x-1">
								<div
									className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}
								></div>
								<span className="text-xs font-medium">{isOnline ? 'Online' : 'Offline'}</span>
							</div> */}
						</div>

						<div className="space-y-4">
							<div>
								<h4 className="text-xs font-medium text-gray-500">Username</h4>
								<p className="text-sm">{profleInfo?.name}</p>
							</div>

							<div>
								<h4 className="text-xs font-medium text-gray-500">You can find me at these places</h4>
								<p className="text-sm">Dhaka,Bangladesh</p>
							</div>

							{/* <div>
								<h4 className="text-xs font-medium text-gray-500">Website</h4>
								<div className="flex items-center space-x-1 text-green-500">
									<Globe className="h-3 w-3" />
									<span className="text-sm">mariafernanda.com</span>
								</div>
							</div> */}

							<Separator className="bg-gray-800" />

							<div>
								<h4 className="text-xs font-medium text-gray-500">Tags</h4>
								<div className="mt-1 flex flex-wrap gap-1">
									<Badge
										variant="outline"
										className="border-gray-700 bg-gray-900 text-xs text-gray-300"
									>
										{profleInfo?.role.toLowerCase()}
									</Badge>
								</div>
							</div>

							<div>
								<h4 className="text-xs font-medium text-gray-500">Joined</h4>
								<p className="text-sm">{getFormattedDate(profleInfo?.createdAt as string)}</p>
							</div>
							{/* 
							<div className="flex items-center justify-between">
								<div>
									<h4 className="text-xs font-medium text-gray-500">Followers</h4>
									<p className="text-sm">1,234</p>
								</div>
								<div>
									<h4 className="text-xs font-medium text-gray-500">Following</h4>
									<p className="text-sm">567</p>
								</div>
							</div> */}

							{/* <div className="flex flex-col gap-4 items-center space-x-2">
								<Button className="w-full bg-primary hover:bg-purple-600 text-white px-6 py-3 transition-all">
									<span className="mr-1">+</span> Follow
								</Button>
								<Button
									variant="outline"
									className="w-full border-black hover:text-white hover:border-purple-600 hover:bg-purple-600 text-black px-6 py-3 transition-all"
								>
									Message
								</Button>
							</div> */}

							<p className="text-xs text-gray-500">{profleInfo?.email}</p>
						</div>
					</div>
				</div>
				<div className="w-full mt-16">
					<h1 className="text-2xl font-medium mb-6">My Productions</h1>

					<div className="w-full">
						<div className="grid grid-cols-4 text-sm text-gray-400 pb-2 border-b border-gray-800">
							<div className="col-span-1">Title</div>
							<div className="col-span-1">Timing</div>
							<div className="col-span-1">No. of listenings</div>
							<div className="col-span-1 text-right">Actions</div>
						</div>

						<div className="divide-y divide-dashed divide-gray-800">
							{/* Track 1 */}
							<div className="w-full grid grid-cols-4 items-center py-4">
								<div className="col-span-1 flex items-center gap-3">
									<div className="w-10 h-10 rounded-md overflow-hidden bg-gradient-to-br from-yellow-500 to-pink-500">
										<Image
											src="/placeholder.svg?height=40&width=40"
											alt="Album cover"
											width={40}
											height={40}
											className="object-cover"
										/>
									</div>
									<div>
										<p className="font-medium">Echoes of the Heart</p>
										<p className="text-sm text-gray-400">Maria Fernanda</p>
									</div>
								</div>
								<div className="col-span-1 text-gray-300">2:24</div>
								<div className="col-span-1 text-gray-300">45,48,256</div>
								<div className="col-span-1 flex justify-end gap-4">
									<button className="text-gray-400 hover:text-white">
										<Heart size={20} />
									</button>
									<button className="text-gray-400 hover:text-white">
										<Share2 size={20} />
									</button>
									<button className="text-gray-400 hover:text-white">
										<MessageCircle size={20} />
									</button>
								</div>
							</div>

							{/* Track 2 */}
							<div className="grid grid-cols-4 items-center py-4">
								<div className="col-span-1 flex items-center gap-3">
									<div className="w-10 h-10 rounded-md overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500">
										<Image
											src="/placeholder.svg?height=40&width=40"
											alt="Album cover"
											width={40}
											height={40}
											className="object-cover"
										/>
									</div>
									<div>
										<p className="font-medium">Echoes of the Heart</p>
										<p className="text-sm text-gray-400">Maria Fernanda</p>
									</div>
								</div>
								<div className="col-span-1 text-gray-300">2:24</div>
								<div className="col-span-1 text-gray-300">45,48,256</div>
								<div className="col-span-1 flex justify-end gap-4">
									<button className="text-gray-400 hover:text-white">
										<Heart size={20} />
									</button>
									<button className="text-gray-400 hover:text-white">
										<Share2 size={20} />
									</button>
									<button className="text-gray-400 hover:text-white">
										<MessageCircle size={20} />
									</button>
								</div>
							</div>

							{/* Track 3 */}
							<div className="grid grid-cols-4 items-center py-4">
								<div className="col-span-1 flex items-center gap-3">
									<div className="w-10 h-10 rounded-md overflow-hidden bg-gray-500">
										<Image
											src="/placeholder.svg?height=40&width=40"
											alt="Album cover"
											width={40}
											height={40}
											className="object-cover"
										/>
									</div>
									<div>
										<p className="font-medium">Echoes of the Heart</p>
										<p className="text-sm text-gray-400">Maria Fernanda</p>
									</div>
								</div>
								<div className="col-span-1 text-gray-300">2:24</div>
								<div className="col-span-1 text-gray-300">45,48,256</div>
								<div className="col-span-1 flex justify-end gap-4">
									<button className="text-gray-400 hover:text-white">
										<Heart size={20} />
									</button>
									<button className="text-gray-400 hover:text-white">
										<Share2 size={20} />
									</button>
									<button className="text-gray-400 hover:text-white">
										<MessageCircle size={20} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
