/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { paymentType } from '@/components/types/add-review';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { CircleX, Eye, Search, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export default function ManagePaymentClient({ payments }: { payments: paymentType[] }) {
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');
	const [paginatedPayments, setPaginatedPayments] = useState<paymentType[]>([]);

	const [paymentDtl, setPaymentDtl] = useState<paymentType>({
		id: '',
		userId: '',
		reviewId: '',
		amount: 0,
		status: '',
		createdAt: '',
		review: {
			title: '',
			excerp: '',
			description: '',
		},
	});

	const searchOverVote = useCallback(
		(value: string) => {
			const searchValue = value.toLowerCase();

			const filteredPayments = payments.filter(
				(payment: paymentType) =>
					payment.review.title.toLowerCase().includes(searchValue) ||
					payment.review.excerp.toLowerCase().includes(searchValue) ||
					payment.status.toLowerCase().includes(searchValue),
			);

			setPaginatedPayments(filteredPayments);
		},
		[payments],
	);
	useEffect(() => {
		searchOverVote(value);
	}, [value, searchOverVote]);

	const openDrawer = (vote: paymentType) => {
		setOpen(true);
		setPaymentDtl(vote);
	};

	return (
		<>
			<Card>
				<Drawer direction={'right'} open={open} onOpenChange={setOpen}>
					<DrawerContent className="min-w-lg overflow-y-auto overflow-x-hidden p-[15px]">
						<div className="mx-auto w-full max-w-2xl">
							<DrawerHeader>
								<div className="flex justify-between">
									<DrawerTitle>View Vote Detail</DrawerTitle>
									<DrawerClose>
										<CircleX />
									</DrawerClose>
								</div>
							</DrawerHeader>
							<div className="pt-4 pb-0">
								<div className="">
									{/* {mode === 'view' && <ViewReviewComponent review={reviewDtl} />} */}
									<Card className="w-full border-none">
										<CardContent>
											<div className="space-y-1 mb-4 flex ">
												<label htmlFor="" className="w-[130px]">
													Review Title
												</label>
												<p className="text-gray-500 w-[calc(100%-130px)]">
													{paymentDtl.review.title}
												</p>
											</div>

											<div className="space-y-1 mb-4 flex">
												<label htmlFor="" className=" w-[130px]">
													Description
												</label>
												<p className="text-gray-500 w-[calc(100%-130px)]">
													{paymentDtl.review.description}
												</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
					</DrawerContent>
				</Drawer>
				<CardHeader className="space-y-2">
					<div className="w-full">
						<CardTitle>Manage your votes</CardTitle>
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
								placeholder="Search by title,short description,status"
								value={value}
								onChange={(e) => setValue(e.target.value)}
								className="pl-8 pr-8 w-md mb-4"
							/>
						</div>
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Review Title
									</th>
									<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Paid
									</th>
									<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Status
									</th>

									<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
										Short Description
									</th>
								</tr>
							</thead>
							{/* bg-gray-200 */}
							<tbody className="bg-white divide-y divide-gray-200">
								{paginatedPayments.map((payment, index) => (
									<tr key={index} className={`hover:bg-gray-50 `}>
										<td className="px-4 py-3 text-sm font-medium">
											<div className="flex flex-col">
												<span className="truncate max-w-[200px]">{payment.review.title}</span>
											</div>
										</td>

										<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
											{payment.amount}
										</td>
										<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
											{payment.status}
										</td>

										<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
											{payment.review.excerp}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
