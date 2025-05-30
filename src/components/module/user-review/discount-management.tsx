/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import Pagination from '@/components/shared/Pagination';
import { reviewDtlType } from '@/components/types/add-review';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { getAllCategories } from '@/services/Categories';
import { createAndUpdateDiscount, deleteDiscountApi } from '@/services/UserDashboard/DiscountServices';
import { getMyReviewsApi } from '@/services/UserDashboard/ReviewServices';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleX, Edit, Search } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchemaPartOne = z.object({
	percent: z.string().min(1, {
		message: 'Discount cannot be empty!.',
	}),
});
const itemsPerPage = 10;
interface Category {
	id: string;
	name: string;
}
export default function UserDiscountManagement() {





	const [reviews, setReviews] = useState<reviewDtlType[]>([]);
	const itemsPerPage = 10;
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const reviewsData = (await getMyReviewsApi()).data.filter(
					(review: reviewDtlType) => review.isPremium === true
				);
				if (reviewsData) setReviews(reviewsData);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);


	// const [allReviews, setAllReviews] = useState<reviewDtlType[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	const [mode, setMode] = useState<string>('view');
	const [currentPage, setCurrentPage] = useState(1);
	const [ratingFilter, setRatingFilter] = useState<number>(0);
	const [paginatedDiscounts, setPaginatedDiscounts] = useState<reviewDtlType[]>([]);
	const [category, setAllCategories] = useState<Category[]>([]);

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [allSelected, setAllSelected] = useState<string>('');

	const [value, setValue] = useState<string>('');
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

	// const startIndex = (currentPage - 1) * itemsPerPage;
	// const paginatedData = reviews.slice(startIndex, startIndex + itemsPerPage);
	// setPaginatedDiscounts(paginatedData);
	// const totalPages = Math.ceil(reviews.length / itemsPerPage);
	// const searchOverReview = useCallback(
	// 	(value: string) => {
	// 		const filteredReviews = reviews.filter((review) =>
	// 			review.title.toLowerCase().includes(value.toLowerCase()),
	// 		);
	// 		const slicedReviews = filteredReviews.slice(startIndex, startIndex + itemsPerPage);
	// 		setPaginatedDiscounts(slicedReviews);
	// 	},
	// 	[reviews, startIndex],
	// );

	useEffect(() => {
		getAllCategoriesMethod();
	}, []);

	const getAllCategoriesMethod = async () => {
		try {
			const res = await getAllCategories();
			setAllCategories(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const totalPages = Math.ceil(reviews.length / itemsPerPage);

	const searchOverReview = useCallback(
		(value: string, page: number) => {
			const searchValue = value.toLowerCase();
			const startIndex = (page - 1) * itemsPerPage;
			const filteredReviews = reviews.filter(
				(review) =>
					review.title.toLowerCase().includes(searchValue) ||
					review.category.name.toLowerCase().includes(searchValue) ||
					review.description.toLowerCase().includes(searchValue),
			);
			const slicedReviews = filteredReviews.slice(startIndex, startIndex + itemsPerPage);
			setPaginatedDiscounts(slicedReviews);
		},
		[reviews],
	);

	useEffect(() => {
		searchOverReview(value, currentPage);
	}, [value, currentPage, searchOverReview]);

	useEffect(() => {
		searchOverReview(value, 1);
	}, [value, searchOverReview]);

	useEffect(() => {
		let filteredReviews: reviewDtlType[] = [];

		if (allSelected) {
			if (selectedCategories.length > 0) {
				setSelectedCategories([]);
			}
			filteredReviews = reviews;
		} else if (selectedCategories.length > 0) {
			if (allSelected) {
				setAllSelected('');
			}
			filteredReviews = reviews.filter((review) => selectedCategories.includes(String(review.categoryId)));
		} else {
			filteredReviews = reviews;
		}

		if (Number(ratingFilter) === 0) {
			setPaginatedDiscounts(filteredReviews);
			return;
		}
		const finalFilter = filteredReviews.filter((review) => String(review.rating) === String(ratingFilter));

		setPaginatedDiscounts(finalFilter);
	}, [allSelected, selectedCategories, ratingFilter, reviews]);

	const openDrawer = (review: reviewDtlType) => {
		setOpen(true);
		setReviewDtl(review);
		setMode(mode);
		formOne.reset({
			percent: review.Discount?.percent,
		});
	};
	const handleCategoryChange = (id: string) => {
		if (String(id) === 'all') {
			setAllSelected(id);
			setSelectedCategories([]);
		} else {
			setAllSelected('');
			setSelectedCategories((prev) => [...prev, id]);
		}
	};

	const formOne = useForm<z.infer<typeof formSchemaPartOne>>({
		resolver: zodResolver(formSchemaPartOne),
		defaultValues: {
			percent: reviewDtl?.Discount?.percent || '0',
		},
	});
	const handleRatingChange = (value: number) => {
		setRatingFilter(value);
	};
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
		toastId = toast.loading('...Loading');
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
			{
				isLoading &&
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
										<Skeleton key={index} className="h-64 w-full rounded-lg" />
									))}
							</div>
						</div>
					</div>
				</div>


			}
			{reviews?.length === 0 && !isLoading && (
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
						<div className="overflow-x-auto ">
							<div className="relative w-md mb-4">
								<Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Search by title,category or description"
									value={value}
									onChange={(e) => setValue(e.target.value)}
									className="pl-8 pr-8 w-md mb-4"
								/>
							</div>
							<div className="flex mb-4">
								<div className="space-y-3 border border-purple-200 p-4 rounded-lg w-[48%] mr-[4%]">
									<div className="flex justify-between items-center">
										<h4 className="text-md font-medium">Rating</h4>
										<span className="text-sm font-medium">{ratingFilter}</span>
									</div>
									<Slider
										defaultValue={[ratingFilter]}
										max={5}
										step={1}
										value={[ratingFilter]}
										onValueChange={([value]) => handleRatingChange(value)}
										className="py-2"
									/>
									<div className="flex justify-between mt-1 text-xs text-muted-foreground">
										{[0, 1, 2, 3, 4, 5].map((num) => (
											<span key={num}>{num}</span>
										))}
									</div>
								</div>
								<div className="border border-purple-200 p-4 rounded-lg w-[48%]">
									<h1>Categories</h1>
									<div className="flex flex-row">
										<div className="flex items-start">
											<Checkbox
												id="all-categories"
												checked={String(allSelected) === 'all'}
												onCheckedChange={() => {
													if (String(allSelected) === 'all') {
														setAllSelected('');
													} else {
														setAllSelected('all');
													}
												}}
												className="mt-1.5 mr-2"
											/>
											<span
												className={cn(
													'text-sm px-2 py-1 rounded-md w-full text-left transition-colors',
												)}
											>
												All Categories
											</span>
										</div>

										{category.map((cat) => (
											<div key={cat.id} className="flex items-start">
												<Checkbox
													id={`category-${cat.id}`}
													checked={selectedCategories.includes(String(cat.id))}
													onCheckedChange={() => {
														setAllSelected('');
														if (selectedCategories.includes(String(cat.id))) {
															const categories = selectedCategories.filter(
																(category) => String(category) !== String(cat.id),
															);
															setSelectedCategories(categories);
														} else {
															setSelectedCategories((prev: string[]) => [
																...prev,
																String(cat.id),
															]);
														}
													}}
													className="mt-1.5 mr-2"
												/>
												<span
													className={cn(
														'text-sm px-2 py-1 rounded-md w-full text-left transition-colors',
													)}
												>
													{cat.name}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Title
										</th>
										<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Discount
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
									{paginatedDiscounts.map((review, index) => (
										<tr
											key={index}
											className={`hover:bg-gray-50 ${reviewDtl.id === review.id ? 'bg-gray-200' : ''
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
												{review.Discount?.percent || 'Unknown'}
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
														className="h-8 w-8 text-green-500"
														title="Add Discount"
														onClick={() => openDrawer(review)}
													>
														<Edit className="h-4 w-4" />
													</Button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={setCurrentPage}
							/>
						</div>
					</CardContent>
				</>
			)}
		</Card>
	);
}
