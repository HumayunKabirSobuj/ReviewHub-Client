/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
'use client';

import { reviewDtlType } from '@/components/types/add-review';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { deleteUserReviewApi } from '@/services/UserDashboard/ReviewServices';
import { CircleX, Edit, Eye, Loader, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { createAndUpdateDiscount, deleteDiscountApi } from '@/services/UserDashboard/DiscountServices';

const formSchemaPartOne = z.object({
	percent: z.string().min(1, {
		message: 'Discount cannot be empty!.',
	}),
});

export default function UserDiscountManagement({ reviews }: { reviews: reviewDtlType[] }) {
	// const [allReviews, setAllReviews] = useState<reviewDtlType[]>([]);
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
		Discount: {
			percent: '0',
			id: '',
		},
	});

	const deleteUserReview = async (review: reviewDtlType) => {
		try {
			let toastId = toast.loading('...Deleting', { id: 1 });
			const res = await deleteUserReviewApi(review.id);
			if (res?.success) {
				toast.success(res.message, { id: toastId });
			}
		} catch (err) {
			console.log(err);
		}
	};

	const openDrawer = (review: reviewDtlType) => {
		console.log('id', review.id);
		setOpen(true);
		setReviewDtl(review);
		setMode(mode);
		formOne.reset({
			percent: review.Discount?.percent,
		});
	};

	const formOne = useForm<z.infer<typeof formSchemaPartOne>>({
		resolver: zodResolver(formSchemaPartOne),
		defaultValues: {
			percent: reviewDtl?.Discount?.percent || '0',
		},
	});

	const onSubmitOne = async (data: { percent: string }) => {
		let toastId: string | number = 'updateProfile';
		toastId = toast.loading('...Loading', { id: toastId });
		//      "reviewId": "badb60de-3a72-49bc-8cb8-597593992ead",
		// "percent": 20
		try {
			const formObj = {
				percent: Number(data.percent),
				reviewId: reviewDtl.id,
			};

			const res = await createAndUpdateDiscount(formObj);
			if (res?.success) {
				formOne.reset({
					percent: '0',
				});
				setOpen(false);
				toast.success(res?.message, { id: toastId });
			} else {
				toast.error(res?.message, { id: toastId });
				console.log(res);
			}
		} catch (error) {
			console.error(error);
		}
	};
	const deleteDiscountHandler = async () => {
		let toastId: string | number = 'updateProfile';
		toastId = toast.loading('...Submitting');
		try {
			const res = await deleteDiscountApi(reviewDtl.Discount?.id as string);
			if (res?.success) {
				setOpen(false);
				toast.success(res?.message, { id: toastId });
			} else {
				toast.error(res?.message, { id: toastId });
				console.log(res);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Card className="w-full ">
			{!reviews.length && (
				<div className="w-2/3 mx-auto border-2 p-[25px] border-red-500 bg-red-300 lg:h-[150px] rounded-4xl flex items-center justify-center">
					<h1 className="lg:text-3xl">No Reviews to display!</h1>
				</div>
			)}
			{reviews.length > 0 && (
				<>
					{' '}
					<Drawer direction={'right'} open={open} onOpenChange={setOpen}>
						<DrawerContent className="min-w-3xl overflow-y-auto overflow-x-hidden">
							<div className="mx-auto w-full max-w-2xl">
								<DrawerHeader>
									<div className="flex justify-between">
										<DrawerTitle>Discount Management </DrawerTitle>
										<DrawerClose>
											<CircleX />
										</DrawerClose>
									</div>
								</DrawerHeader>
								<div className="pt-4 pb-0">
									<form onSubmit={formOne.handleSubmit(onSubmitOne)}>
										<Card className="w-full ">
											<CardHeader className="space-y-2">
												<div className="w-full">
													<CardTitle> Add review discount</CardTitle>
													<CardDescription>
														Share your experience and help others to make informed decisions
													</CardDescription>
												</div>
											</CardHeader>
											<CardContent>
												{reviewDtl.Discount && (
													<>
														<div className="w-full max-w-md mt-4 p-4 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-md flex items-start gap-3 shadow-sm">
															<svg
																className="w-5 h-5 mt-0.5 text-yellow-500"
																fill="none"
																stroke="currentColor"
																stroke-width="2"
																viewBox="0 0 24 24"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 9v2m0 4h.01M4.93 19h14.14c1.054 0 1.611-1.186.93-2.04L13.93 4.96a1.13 1.13 0 0 0-1.86 0L4 16.96c-.681.854-.124 2.04.93 2.04z"
																/>
															</svg>
															<p className="text-sm font-medium">
																Please delete the previous discount.
															</p>
														</div>
													</>
												)}
												{!reviewDtl.Discount && (
													<Form {...formOne}>
														<div className="space-y-1 mb-4">
															<FormField
																control={formOne.control}
																name="percent"
																render={({ field }) => (
																	<FormItem>
																		<FormLabel>Discount Amount</FormLabel>
																		<FormControl>
																			<Input
																				type="number"
																				placeholder="Enter discount"
																				{...field}
																			/>
																		</FormControl>
																		<FormMessage />
																	</FormItem>
																)}
															/>
														</div>
													</Form>
												)}
											</CardContent>
											<CardFooter className="flex justify-between">
												{!reviewDtl.Discount && <Button>Submit</Button>}
												{reviewDtl.Discount && (
													<button
														onClick={deleteDiscountHandler}
														className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition"
													>
														Delete Discount
													</button>
												)}
											</CardFooter>
										</Card>
									</form>
								</div>
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
									{reviews.map((review, index) => (
										<tr
											key={index}
											className={`hover:bg-gray-50 ${
												reviewDtl.id === review.id ? 'bg-gray-200' : ''
											}`}
										>
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
														onClick={() => openDrawer(review)}
													>
														<Eye className="h-4 w-4" />
													</Button>

													<Button
														variant="ghost"
														size="icon"
														className="h-8 w-8 text-green-500"
														title="Edit"
														onClick={() => openDrawer(review)}
													>
														<Edit className="h-4 w-4" />
													</Button>

													<Button
														variant="ghost"
														size="icon"
														className="h-8 w-8 text-red-500"
														title="Delete"
														onClick={() => deleteUserReview(review)}
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
