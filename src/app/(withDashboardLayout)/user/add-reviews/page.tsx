'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import RatingComponent from '@/components/usefulComponents/ratingComponent';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { categoryList, reviewDtlOne } from '@/components/types/add-review';
import { createUserReview, getAllCategories } from '@/services/UserDashboard/ReviewServices';
import { UploadMultipleImages } from '@/components/usefulComponents/multipleImageUpload';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const formSchemaPartOne = z.object({
	title: z.string().min(1, {
		message: 'Title cannot be empty!.',
	}),
	description: z.string().min(1, {
		message: 'Description cannot be empty!.',
	}),
	excerp: z.string().min(1, {
		message: 'Short description cannot be empty!.',
	}),
	category: z.string().min(1, {
		message: 'Category cannot be empty!.',
	}),
	purchaseSource: z.string().optional(),
	isPremium: z.boolean(),
	price: z.number().optional(),
	isPublish: z.boolean(),
});

export default function AddReviews() {
	const { control, register, handleSubmit, watch, reset } = useForm();
	// const [ratingNumber, setRatingNumber] = useState(0);
	const [imageLinks, setImageLinks] = useState<string[]>([]);
	const [premiumChecked, setPremiumChecked] = useState(false);
	const [imageList, setImageList] = useState<File[]>([]);
	const [getView, setGetView] = useState<string[]>([]);
	const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
	const [allCategories, setAllCategories] = useState<categoryList[]>([]);

	useEffect(() => {
		getAllCategoriesApiCall();
	}, []);

	const getAllCategoriesApiCall = async () => {
		try {
			const res = await getAllCategories();
			if (res?.success) {
				setAllCategories(res.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const ImgChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setDisableSubmit(true);
		const files = e.target.files;
		if (!files) return;

		const fileArray = Array.from(files);
		const formData = new FormData();

		formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME!);
		formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);

		let images: string[] = [];
		try {
			await Promise.all(
				fileArray.map(async (image) => {
					formData.append(`file`, image);
					const res = await fetch(
						`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
						{
							method: 'POST',
							body: formData,
						},
					);
					const resp = await res.json();
					images.push(resp.secure_url);
				}),
			);
			console.log('images', images);
			setImageLinks(images);
			setDisableSubmit(false);
		} catch (err) {
			console.log(err);
		}

		console.log('total', imageList.length, 'images');

		const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
		setGetView(previewUrls);
	};

	const formOne = useForm<z.infer<typeof formSchemaPartOne>>({
		resolver: zodResolver(formSchemaPartOne),
		defaultValues: {
			title: '',
			description: '',
			excerp: '',
			category: '',
			purchaseSource: '',
			isPremium: false,
			price: 0,
			isPublish: false,
		},
	});
	const onSubmitOne = async (data: reviewDtlOne) => {
		let toastId = 1;
		try {
			const jsonData = {
				...data,
				imageUrls: imageLinks,
			};

			const res = await createUserReview(jsonData);
			if (res?.success) {
				toast.success(res?.message, { id: toastId });
			} else {
				toast.error(res?.message, { id: toastId });
				console.log(res);
			}
			console.log('json', jsonData);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="p-[15px]">
			<form onSubmit={formOne.handleSubmit(onSubmitOne)}>
				<Card className="w-full ">
					<CardHeader className="space-y-2">
						<div className="w-full">
							<CardTitle>Write a review</CardTitle>
							<CardDescription>
								Share your experience and help others to make informed decisions
							</CardDescription>
						</div>
					</CardHeader>
					<CardContent>
						<Form {...formOne}>
							<div className="space-y-1 mb-4">
								<FormField
									control={formOne.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Title</FormLabel>
											<FormControl>
												<Input placeholder="Add a title" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="space-y-1 mb-4">
								<FormField
									control={formOne.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Description</FormLabel>
											<FormControl>
												<Input placeholder="Add a title" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="space-y-1 mb-4">
								<FormField
									control={formOne.control}
									name="excerp"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Short Description</FormLabel>
											<FormControl>
												<Input placeholder="Write a short description" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="space-y-1 mb-4">
								<FormField
									control={formOne.control}
									name="purchaseSource"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Purchase Link</FormLabel>
											<FormControl>
												<Input placeholder="Add purchase link" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="mb-4">
								<FormField
									control={formOne.control}
									name="category"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Category</FormLabel>
											<FormControl>
												<Select onValueChange={field.onChange} defaultValue={field.value}>
													<SelectTrigger>
														<SelectValue placeholder="Select Category" />
													</SelectTrigger>
													<SelectContent>
														{allCategories &&
															allCategories.length > 0 &&
															allCategories.map((item, index) => (
																<SelectItem value={item.id}>{item.name}</SelectItem>
															))}
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="flex items-center space-x-2 mb-4">
								<Controller
									name="isPremium"
									control={formOne.control}
									defaultValue={false}
									render={({ field }) => (
										<Checkbox
											id="paid"
											checked={field.value}
											onCheckedChange={(checked) => {
												field.onChange(checked); // Update form value
												setPremiumChecked(checked as boolean); // Update local state
											}}
										/>
									)}
								/>
								<label
									htmlFor="paid"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Mark as Premium
								</label>
							</div>
							{premiumChecked && (
								<div className="space-y-1 mb-4">
									<FormField
										control={formOne.control}
										name="price"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Price</FormLabel>
												<FormControl>
													<Input placeholder="Enter price" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							)}

							<div className="flex items-center space-x-2 mb-4">
								<Controller
									name="isPublish"
									defaultValue={false}
									control={formOne.control}
									render={({ field }) => (
										<Checkbox
											id="publish"
											checked={field.value}
											onCheckedChange={(checked) => {
												field.onChange(checked); // Update form value
											}}
										/>
									)}
								/>
								<label htmlFor="publish" className="text-sm font-medium leading-none ">
									Publish
								</label>
							</div>
							<div className="flex flex-col gap-4">
								<Label htmlFor="multi-image">Upload Images</Label>
								<Input
									id="multi-image"
									type="file"
									accept="image/*"
									multiple
									onChange={ImgChangeHandler}
								/>

								{getView.length > 0 && (
									<div className="flex gap-2 flex-wrap">
										{getView.map((src, idx) => (
											<img
												key={idx}
												src={src}
												alt={`Preview ${idx}`}
												className="w-24 h-24 object-cover rounded-md border"
											/>
										))}
									</div>
								)}

								{/* <Button onClick={handleUpload} disabled={getView.length === 0} className="w-[150px]">
				Upload Image
			</Button> */}
							</div>
							{/* <UploadMultipleImages setImageLinks={setImageLinks} /> */}
							{/* <RatingComponent value={ratingNumber} onChange={setRatingNumber} /> */}
						</Form>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Button disabled={disableSubmit}>Submit</Button>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
