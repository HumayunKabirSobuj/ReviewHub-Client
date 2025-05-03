'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UploadMultipleImages } from '@/components/usefulComponents/multipleImageUpload';
import RatingComponent from '@/components/usefulComponents/ratingComponent';
import { useState } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';

export default function AddReviews() {
	const { control, register, handleSubmit, watch, reset } = useForm();
	const [ratingNumber, setRatingNumber] = useState(0);
	const [premiumChecked, setPremiumChecked] = useState(false);
	const onSubmit = async (data: FieldValues) => {
		// console.table(data);

		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	const handlePremiumReview = () => {
		console.log('premium clicked');
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Tabs defaultValue="account" className="w-full p-[15px]">
				{/* <TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList> */}

				<TabsContent value="account">
					<Card>
						<CardHeader>
							<div className="flex flex-col gap-4 md:flex-row-reverse">
								<div className="md:flex-1 flex w-full justify-end align-middle">
									<div className="flex gap-4">
										<Progress value={0} className="w-[80px] h-[15px]" />
										<h1>0% Completed</h1>
									</div>
								</div>
								<div className="md:flex-1 w-full">
									<CardTitle>Write a review</CardTitle>
									<CardDescription>
										Share your experience and help others to make informed decisions
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="title">Title</Label>
								<Input id="title" placeholder="Add a title" {...register('title')} />
							</div>
							<div className="space-y-1">
								<Label htmlFor="description">Description</Label>
								<Input id="username" placeholder="Write a description" {...register('description')} />
							</div>
							<div className="space-y-1">
								<Label htmlFor="short-description">Short Description</Label>
								<Input
									id="short-description"
									placeholder="Write a short description"
									{...register('excerp')}
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="purchase">Purchase</Label>
								<Input
									id="purchase-link"
									placeholder="Add purchase link"
									{...register('purchaseSource')}
								/>
							</div>
							<div>
								{' '}
								<Label>Category</Label>
								<Controller
									name="category"
									control={control}
									render={({ field }) => (
										<Select onValueChange={field.onChange} defaultValue={field.value} required>
											<SelectTrigger>
												<SelectValue placeholder="Select Category" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="smartphone">Smartphone</SelectItem>
												<SelectItem value="television">Television</SelectItem>
											</SelectContent>
										</Select>
									)}
								/>
							</div>
							<RatingComponent value={ratingNumber} onChange={setRatingNumber} />
						</CardContent>
						<CardFooter>
							<TabsList className="w-[200px] cursor-pointer">
								<TabsTrigger value="next-page" className="cursor-pointer">
									Next Page
								</TabsTrigger>
							</TabsList>
							{/* <Button>Save changes</Button> */}
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="next-page">
					<Card>
						<CardHeader>
							<div className="flex flex-col gap-4 md:flex-row-reverse">
								<div className="md:flex-1 flex w-full justify-end align-middle">
									<div className="flex gap-4">
										<Progress value={50} className="w-[80px] h-[15px]" />
										<h1>50% Completed</h1>
									</div>
								</div>
								<div className="md:flex-1 w-full">
									<CardTitle>Write a review</CardTitle>
									<CardDescription>
										Share your experience and help others to make informed decisions
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-2">
							<UploadMultipleImages />

							<div className="flex items-center space-x-2">
								<Controller
									name="isPremium"
									control={control}
									defaultValue={false}
									render={({ field }) => (
										<Checkbox
											id="isPremium"
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
								<div className="space-y-1">
									<Label htmlFor="price">Price</Label>
									<Input id="price" type="text" {...register('price')} />
								</div>
							)}

							<div className="flex items-center space-x-2">
								<Controller
									name="isPublished"
									control={control}
									defaultValue={false}
									render={({ field }) => (
										<Checkbox id="publish" checked={field.value} onCheckedChange={field.onChange} />
									)}
								/>
								<label
									htmlFor="publish"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Is Publish
								</label>
							</div>
						</CardContent>
						<CardFooter>
							<Button>Create Review</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</form>
		// <Card className="mx-auto">
		// 	<CardHeader>
		// 		<CardTitle>
		// 			<div>
		// 				<h1>Write a review</h1>
		// 				<p>Share your experience and help others to make informed decisions</p>
		// 			</div>
		// 		</CardTitle>
		// 	</CardHeader>
		// 	<CardContent>
		// 		<form onSubmit={handleSubmit(onSubmit)}>
		// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
		// 				{/* Student Name */}
		// 				<div>
		// 					<Label htmlFor="heading">Heading</Label>
		// 					<Input id="heading" {...register('heading')} placeholder="Enter Heading Here" required />
		// 				</div>
		// 			</div>
		// 			<div className="text-center">
		// 				<Button type="submit" className="w-full lg:w-2/3 my-5">
		// 					Submit
		// 				</Button>
		// 			</div>
		// 		</form>
		// 	</CardContent>
		// </Card>
	);
}
