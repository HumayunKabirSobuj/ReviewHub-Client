/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
'use client';

import { reviewDtlType } from '@/components/types/add-review';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { deleteUserReviewApi } from '@/services/UserDashboard/ReviewServices';
import { CircleX, Edit, Eye, Loader, Search, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import CreateReviewComponent from './create-review';
import ViewReviewComponent from './sub-component/view-review';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { getAllCategories } from '@/services/Categories';

interface Category {
	id: string;
	name: string;
}

export default function UserReviewManagement({ reviews }: { reviews: reviewDtlType[] }) {
	// const [allReviews, setAllReviews] = useState<reviewDtlType[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	const [mode, setMode] = useState<string>('view');
	const [value, setValue] = useState<string>('');
	const [ratingFilter, setRatingFilter] = useState<number>(0);
	const [allSelected, setAllSelected] = useState<string>('');
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [paginatedComments, setPaginatedComments] = useState<reviewDtlType[]>([]);

	const [category, setAllCategories] = useState<Category[]>([]);

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
	useEffect(() => {
		setPaginatedComments(reviews);
		getAllCategoriesMethod();
	}, [reviews]);
	const searchOverReview = useCallback(
		(value: string) => {
			const searchValue = value.toLowerCase();

			const filteredReviews = reviews.filter(
				(review) =>
					review.title.toLowerCase().includes(searchValue) ||
					review.category.name.toLowerCase().includes(searchValue) ||
					review.description.toLowerCase().includes(searchValue),
			);
			setPaginatedComments(filteredReviews);
		},
		[reviews],
	);
	useEffect(() => {
		searchOverReview(value);
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
			setPaginatedComments(filteredReviews);
			return;
		}
		const finalFilter = filteredReviews.filter((review) => String(review.rating) === String(ratingFilter));

		setPaginatedComments(finalFilter);
	}, [allSelected, selectedCategories, ratingFilter, reviews]);

	const getAllCategoriesMethod = async () => {
		try {
			const res = await getAllCategories();
			setAllCategories(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleRatingChange = (value: number) => {
		setRatingFilter(value);
	};

	const openDrawer = (review: reviewDtlType, mode: string) => {
		setOpen(true);
		setReviewDtl(review);
		setMode(mode);
	};

	return (
		<Card className="w-full ">
			{!reviews.length && (
				// <div className="w-full h-[100vh] flex items-center justify-center">
				// 	<Loader className="w-[80px] h-12 animate-spin" />
				// </div>
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
										<DrawerTitle>{mode === 'view' ? 'View' : 'Edit'} Review Detail </DrawerTitle>
										<DrawerClose>
											<CircleX />
										</DrawerClose>
									</div>
								</DrawerHeader>
								<div className="pt-4 pb-0">
									<div className="">
										{mode === 'view' && <ViewReviewComponent review={reviewDtl} />}
										{mode === 'edit' && (
											<CreateReviewComponent review={reviewDtl} mode="edit" setOpen={setOpen} />
										)}
									</div>
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
											<span className="text-sm px-2 py-1 rounded-md w-full text-left transition-colors">
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
												<span className="text-sm px-2 py-1 rounded-md w-full text-left transition-colors">
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
									{paginatedComments.map((review, index) => (
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
