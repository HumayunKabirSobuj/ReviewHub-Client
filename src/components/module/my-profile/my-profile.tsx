// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Badge } from '@/components/ui/badge';
// // import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { CheckCircle } from 'lucide-react';
// import { getUserProfileApi } from '@/services/UserDashboard/ProfileServices';
// import { User } from '@/components/types/add-review';

// export default function MyProfilePage() {
// 	// const [isOnline, setIsOnline] = useState(true);
// 	const [profleInfo, setProfileInfo] = useState<User | null>(null);
// 	const [loading, setLoading] = useState<boolean>(false);

// 	useEffect(() => {
// 		// setIsOnline(true);
// 		getUserProfileInformation();
// 	}, []);

// 	const getUserProfileInformation = async () => {
// 		try {
// 			setLoading(true);
// 			const res = await getUserProfileApi();
// 			setLoading(false);

// 			if (res.success) {
// 				setProfileInfo(res.data);
// 			} else {
// 				console.log(res.data.message);
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	const getFormattedDate = (date: string) => {
// 		return new Date(date).toLocaleDateString('en-US', {
// 			year: 'numeric',
// 			month: 'long',
// 			day: 'numeric',
// 		});
// 		// Output: "May 22, 2025"
// 	};

// 	return (
// 		// <div className="flex min-h-screen items-center justify-center bg-black p-4">

// 		<Card className="w-full p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all text-black">
// 			<CardHeader className="pb-2">
// 				<CardTitle className="text-lg font-bold text-black">Profile Info</CardTitle>
// 			</CardHeader>
// 			<CardContent>
// 				{/* <div className="grid gap-2 md:grid-cols-[1fr_1.5fr]"> */}
// 				{loading && (
// 					<>
// 						<div className="grid grid-cols-2">
// 							<div className="space-y-6">
// 								<div className="flex animate-pulse flex-col items-center space-y-2">
// 									<div className="relative">
// 										<div className="h-32 w-32 bg-gray-200 overflow-hidden rounded-full "></div>
// 									</div>
// 									<div className="flex flex-col gap-3">
// 										<div className="flex flex-row gap-4">
// 											<div className="h-4 w-32 rounded bg-gray-200"></div>
// 											<div className="h-4 w-4 bg-gray-200 overflow-hidden rounded-full "></div>
// 										</div>
// 										<div className="h-4 w-40 rounded bg-gray-200"></div>
// 									</div>
// 								</div>
// 							</div>

// 							<div className="space-y-6">
// 								<div className="flex items-center justify-between">
// 									<h3 className="h-4 w-full rounded bg-gray-200"></h3>
// 								</div>

// 								<div className="space-y-4">
// 									<div>
// 										<h3 className="h-4 w-full rounded bg-gray-200 mb-2"></h3>
// 										<h3 className="h-4 w-full rounded bg-gray-200"></h3>
// 									</div>

// 									<div>
// 										<h3 className="h-4 w-40 rounded bg-gray-200 mb-2"></h3>
// 										<h3 className="h-4 w-32 rounded bg-gray-200 mb-2"></h3>
// 									</div>

// 									<div>
// 										<h3 className="h-4 w-16 rounded bg-gray-200 mb-2"></h3>
// 										<h3 className="h-4 w-12 rounded bg-gray-200 mb-2"></h3>
// 										<div className="mt-1 flex flex-wrap gap-1">
// 											<h3 className="h-4 w-8 rounded bg-gray-200 mb-2"></h3>
// 										</div>
// 									</div>

// 									<div>
// 										<h3 className="h-4 w-16 rounded bg-gray-200 mb-2"></h3>
// 										<h3 className="h-4 w-20 rounded bg-gray-200 mb-2"></h3>
// 									</div>

// 									<h3 className="h-2 w-46 rounded bg-gray-200 mb-2"></h3>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="w-full mt-16">
// 							<h3 className="h-4 w-44 rounded bg-gray-200 mb-2"></h3>

// 							<div className="w-full">
// 								{[1, 2, 3].map((_, index) => (
// 									<div className="divide-y divide-dashed divide-gray-800" key={index}>
// 										<h3 className="h-20 w-full rounded bg-gray-200 mb-2"></h3>
// 									</div>
// 								))}
// 							</div>
// 						</div>
// 					</>
// 				)}

// 				{!loading && (
// 					<>
// 						<div className="grid grid-cols-2">
// 							<div className="space-y-6">
// 								<div className="flex flex-col items-center space-y-2">
// 									<div className="relative">
// 										<div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-800">
// 											<Image
// 												src={profleInfo?.profileUrl as string}
// 												alt="Profile avatar"
// 												width={128}
// 												height={128}
// 												className="h-full w-full object-cover"
// 											/>
// 										</div>
// 									</div>
// 									<div className="flex items-center space-x-1">
// 										<h2 className="text-xl font-semibold">{profleInfo?.name}</h2>
// 										<CheckCircle className="h-4 w-4 text-green-500" />
// 									</div>
// 									<p className="text-sm text-gray-700">Active User</p>
// 								</div>

								
// 							</div>

// 							<div className="space-y-6">
// 								<div className="flex items-center justify-between">
// 									<h3 className="text-lg font-bold text-black">Bio & other details</h3>
									
// 								</div>

// 								<div className="space-y-4">
// 									<div>
// 										<h4 className="text-xs font-medium text-gray-500">Username</h4>
// 										<p className="text-sm">{profleInfo?.name}</p>
// 									</div>

// 									<div>
// 										<h4 className="text-xs font-medium text-gray-500">
// 											You can find me at these places
// 										</h4>
// 										<p className="text-sm">Dhaka,Bangladesh</p>
// 									</div>

								
// 									<Separator className="bg-gray-800" />

// 									<div>
// 										<h4 className="text-xs font-medium text-gray-500">Tags</h4>
// 										<div className="mt-1 flex flex-wrap gap-1">
// 											<Badge
// 												variant="outline"
// 												className="border-gray-700 bg-gray-900 text-xs text-gray-300"
// 											>
// 												{profleInfo?.role.toLowerCase()}
// 											</Badge>
// 										</div>
// 									</div>

// 									<div>
// 										<h4 className="text-xs font-medium text-gray-500">Joined</h4>
// 										<p className="text-sm">{getFormattedDate(profleInfo?.createdAt as string)}</p>
// 									</div>
									

// 									<p className="text-xs text-gray-500">{profleInfo?.email}</p>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="w-full mt-16">
// 							<h1 className="text-2xl font-medium mb-6">My Reviews</h1>

// 							<div className="w-full">
// 								<div className="grid grid-cols-4 text-sm text-gray-400 pb-2 border-b border-gray-800">
// 									<div className="col-span-1">Title</div>
// 									<div className="col-span-1">Rating</div>
// 									<div className="col-span-1">Source</div>
// 									<div className="col-span-1 text-right">Price</div>
// 								</div>

// 								<div className="divide-y divide-dashed divide-gray-800">
// 									{/* Track 1 */}
// 									{profleInfo?.reviews &&
// 										profleInfo.reviews
// 											.filter((_, index) => index < 4)
// 											.map((review, index) => (
// 												<>
// 													<div
// 														className="w-full grid grid-cols-4 items-center py-4"
// 														key={index}
// 													>
// 														<div className="col-span-1 flex items-center gap-3">
// 															<div className="w-10 h-10 rounded-md overflow-hidden bg-gradient-to-br from-yellow-500 to-pink-500">
// 																<Image
// 																	src={review?.imageUrls?.[0]}
// 																	alt="Album cover"
// 																	width={40}
// 																	height={40}
// 																	className="h-full"
// 																/>
// 															</div>
// 															<div>
// 																<p className="font-medium">{review?.title}</p>
// 															</div>
// 														</div>
// 														<div className="col-span-1 text-gray-300">{review?.rating}</div>
// 														<div className="col-span-1 text-gray-300">
// 															{review?.purchaseSource}
// 														</div>
// 														<div className="col-span-1 flex justify-end gap-4">
// 															{review?.price}
// 														</div>
// 													</div>
// 												</>
// 											))}
// 								</div>
// 							</div>
// 						</div>
// 					</>
// 				)}
// 			</CardContent>
// 		</Card>
// 	);
// }



'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import { getUserProfileApi } from '@/services/UserDashboard/ProfileServices';
import { User } from '@/components/types/add-review';

export default function MyProfilePage() {
	const [profileInfo, setProfileInfo] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getUserProfileInformation();
	}, []);

	const getUserProfileInformation = async () => {
		try {
			setLoading(true);
			const res = await getUserProfileApi();
			setLoading(false);

			if (res.success) {
				setProfileInfo(res.data);
			} else {
				// console.log(res.data.message);
			}
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	const getFormattedDate = (date: string) => {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<Card className="w-full p-6 rounded-lg shadow-sm border border-purple-200 hover:border-primary hover:shadow-md transition-all text-black">
			<CardHeader className="pb-2">
				<CardTitle className="text-lg font-bold text-black">Profile Info</CardTitle>
			</CardHeader>
			<CardContent>
				{loading ? (
					/* Loading Skeleton */
					<div className="grid grid-cols-2">
						{/* Left side skeleton */}
						<div className="space-y-6">
							<div className="flex animate-pulse flex-col items-center space-y-2">
								<div className="h-32 w-32 bg-gray-200 rounded-full"></div>
								<div className="flex flex-col gap-3">
									<div className="flex gap-4">
										<div className="h-4 w-32 bg-gray-200 rounded"></div>
										<div className="h-4 w-4 bg-gray-200 rounded-full"></div>
									</div>
									<div className="h-4 w-40 bg-gray-200 rounded"></div>
								</div>
							</div>
						</div>
						{/* Right side skeleton */}
						<div className="space-y-6">
							<div className="h-4 w-full bg-gray-200 rounded"></div>
							<div className="space-y-4">
								{[1, 2, 3, 4].map((_, i) => (
									<div key={i}>
										<div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
										<div className="h-4 w-1/2 bg-gray-200 rounded"></div>
									</div>
								))}
							</div>
						</div>
					</div>
				) : (
					profileInfo && (
						<>
							{/* Profile Info Grid */}
							<div className="grid grid-cols-2">
								<div className="space-y-6">
									<div className="flex flex-col items-center space-y-2">
										<div className="h-32 w-32 rounded-full border-4 border-gray-800 overflow-hidden">
											<Image
												src={profileInfo.profileUrl}
												alt="Profile"
												width={128}
												height={128}
												className="object-cover h-full w-full"
											/>
										</div>
										<div className="flex items-center space-x-1">
											<h2 className="text-xl font-semibold">{profileInfo.name}</h2>
											<CheckCircle className="h-4 w-4 text-green-500" />
										</div>
										<p className="text-sm text-gray-700">Active User</p>
									</div>
								</div>

								<div className="space-y-6">
									<h3 className="text-lg font-bold text-black">Bio & other details</h3>

									<div className="space-y-4">
										<div>
											<h4 className="text-xs font-medium text-gray-500">Username</h4>
											<p className="text-sm">{profileInfo.name}</p>
										</div>

										<div>
											<h4 className="text-xs font-medium text-gray-500">Location</h4>
											<p className="text-sm">Dhaka, Bangladesh</p>
										</div>

										<Separator className="bg-gray-800" />

										<div>
											<h4 className="text-xs font-medium text-gray-500">Tags</h4>
											<Badge
												variant="outline"
												className="border-gray-700 bg-gray-900 text-xs text-gray-300"
											>
												{profileInfo.role?.toLowerCase()}
											</Badge>
										</div>

										<div>
											<h4 className="text-xs font-medium text-gray-500">Joined</h4>
											<p className="text-sm">{getFormattedDate(profileInfo.createdAt)}</p>
										</div>

										<p className="text-xs text-gray-500">{profileInfo.email}</p>
									</div>
								</div>
							</div>

							{/* Review Section */}
							<div className="w-full mt-16">
								<h1 className="text-2xl font-medium mb-6">My Reviews</h1>

								<div className="grid grid-cols-4 text-sm text-gray-400 pb-2 border-b border-gray-800">
									<div className="col-span-1">Title</div>
									<div className="col-span-1">Rating</div>
									<div className="col-span-1">Source</div>
									<div className="col-span-1 text-right">Price</div>
								</div>

								<div className="divide-y divide-dashed divide-gray-800">
									{profileInfo.reviews?.slice(0, 4).map((review, index) => (
										<div className="grid grid-cols-4 items-center py-4" key={index}>
											<div className="col-span-1 flex items-center gap-3">
												<div className="w-10 h-10 rounded-md overflow-hidden bg-gradient-to-br from-yellow-500 to-pink-500">
													<Image
														src={review.imageUrls?.[0]}
														alt="Review"
														width={40}
														height={40}
														className="h-full"
													/>
												</div>
												<div>
													<p className="font-medium">{review.title}</p>
												</div>
											</div>
											<div className="col-span-1 text-gray-300">{review.rating}</div>
											<div className="col-span-1 text-gray-300">{review.purchaseSource}</div>
											<div className="col-span-1 flex justify-end">{review.price}</div>
										</div>
									))}
								</div>
							</div>
						</>
					)
				)}
			</CardContent>
		</Card>
	);
}
