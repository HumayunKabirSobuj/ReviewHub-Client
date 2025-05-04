'use client';

import { reviewDtlOne, reviewDtlType } from '@/components/types/add-review';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { getCurrentUser } from '@/services/AuthServices';
import { getAllReviewsApi } from '@/services/UserDashboard/ReviewServices';
import { CircleX, Edit, Eye, Loader, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import CreateReviewComponent from './create-review';
import ViewReviewComponent from './sub-component/view-review';

export default function UserReviewManagement() {
	const [allReviews, setAllReviews] = useState<reviewDtlType[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	const [mode, setMode] = useState<string>('view');
	const [reviewDtl, setReviewDtl] = useState<reviewDtlType>({
		id: '',
		title: '',
		description: '',
		rating: 0,
		purchaseSource: '',
		imageUrls: [],
		excerp: '',
		isPremium: false,
		price: 0,
		isPublished: false,
		userId: '',
		categoryId: '',
		author: {
			id: '',
			name: '',
			email: '',
			profileUrl: null,
		},
		category: {
			id: '',
			name: '',
		},
	});

	useEffect(() => {
		getAllReviews();
	}, []);
	const getAllReviews = async () => {
		const user = await getCurrentUser();
		try {
			const res = await getAllReviewsApi(user.id);
			if (res?.success) {
				setAllReviews(res.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const openDrawer = (review: reviewDtlType, mode: string) => {
		setOpen(true);
		setReviewDtl(review);
		setMode(mode);
	};

	return (
		<Card className="w-full ">
			{!allReviews.length && (
				<div className="w-full h-[100vh] flex items-center justify-center">
					<Loader className="w-[80px] h-12 animate-spin" />
				</div>
			)}
			{allReviews.length > 0 && (
				<>
					{' '}
					<Drawer direction={'right'} open={open} onOpenChange={setOpen}>
						<DrawerContent className="min-w-3xl overflow-y-auto overflow-x-hidden">
							<div className="mx-auto w-full max-w-2xl">
								<DrawerHeader>
									<div className="flex justify-between">
										<DrawerTitle>{mode === 'view' ? 'View' : 'Edit'} Review Detail </DrawerTitle>
										<DrawerClose>
											<CircleX />
										</DrawerClose>
									</div>
								</DrawerHeader>
								<div className="pt-4 pb-0">
									<div className="">
										{mode === 'view' && <ViewReviewComponent review={reviewDtl} />}
										{mode === 'edit' && <CreateReviewComponent review={reviewDtl} mode="edit" />}
									</div>
								</div>
								{mode === 'edit' && (
									<DrawerFooter>
										<Button>Submit</Button>
									</DrawerFooter>
								)}
							</div>
						</DrawerContent>
					</Drawer>
					<CardHeader className="space-y-2">
						<div className="w-full">
							<CardTitle>Manage your review</CardTitle>
							<CardDescription>
								Share your experience and help others to make informed decisions
							</CardDescription>
						</div>
					</CardHeader>
					<CardContent>
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
									{allReviews.map((review, index) => (
										<tr key={index} className="hover:bg-gray-50">
											<td className="px-4 py-3 text-sm font-medium">
												<div className="flex flex-col">
													<span className="truncate max-w-[200px]">
														{review.title || 'Untitled'}
													</span>
													<span className="text-xs text-gray-500 truncate max-w-[200px]">
														{review.excerp || 'some data'}
													</span>
												</div>
											</td>
											<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
												{review.author.name || 'Unknown'}
											</td>

											<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
												{review.category.name || 'Uncategorized'}
											</td>
											<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
												{review.rating || 0}
											</td>
											<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
												<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
													{review.isPremium === true ? 'Paid' : 'General'}
												</Badge>
											</td>

											<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
												<div className="flex space-x-1">
													<Button
														variant="ghost"
														size="icon"
														className="h-8 w-8 text-blue-500"
														title="View"
														onClick={() => openDrawer(review, 'view')}
													>
														<Eye className="h-4 w-4" />
													</Button>

													<Button
														variant="ghost"
														size="icon"
														className="h-8 w-8 text-green-500"
														title="Edit"
														onClick={() => openDrawer(review, 'edit')}
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
					</CardContent>
				</>
			)}
		</Card>
	);
}
