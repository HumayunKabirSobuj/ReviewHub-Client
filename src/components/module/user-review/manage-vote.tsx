'use client';

import { voteType } from '@/components/types/add-review';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { CircleX, Eye, Search, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export default function ManageVoteClient({ votes }: { votes: voteType[] }) {
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');
	const [paginatedVotes, setPaginatedVotes] = useState<voteType[]>([]);

	const [voteDtl, setVoteDtl] = useState<voteType>({
		id: '',
		type: '',
		userId: '',
		reviewId: '',
		review: {
			title: '',
			excerp: '',
			description: '',
		},
	});

	const openDrawer = (vote: voteType) => {
		setOpen(true);
		setVoteDtl(vote);
	};
	const searchOverVote = useCallback(
		(value: string) => {
			const searchValue = value.toLowerCase();

			const filteredVotes = votes.filter(
				(comment: voteType) =>
					comment.review.title.toLowerCase().includes(searchValue) ||
					comment.review.description.toLowerCase().includes(searchValue),
			);

			setPaginatedVotes(filteredVotes);
		},
		[votes],
	);
	useEffect(() => {
		searchOverVote(value);
	}, [value, searchOverVote]);

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
													{voteDtl.review.title}
												</p>
											</div>

											<div className="space-y-1 mb-4 flex">
												<label htmlFor="" className=" w-[130px]">
													Description
												</label>
												<p className="text-gray-500 w-[calc(100%-130px)]">
													{voteDtl.review.description}
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
								placeholder="Search by title,description"
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
										Short Description
									</th>
									<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Vote Type
									</th>

									<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
										Actions
									</th>
								</tr>
							</thead>
							{/* bg-gray-200 */}
							<tbody className="bg-white divide-y divide-gray-200">
								{paginatedVotes.map((vote, index) => (
									<tr key={index} className={`hover:bg-gray-50 `}>
										<td className="px-4 py-3 text-sm font-medium">
											<div className="flex flex-col">
												<span className="truncate max-w-[200px]">{vote.review.title}</span>
											</div>
										</td>

										<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
											{vote.review.excerp || 'Untitled'}
										</td>
										<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
											{vote.type === 'UP' ? (
												<Button
													variant="outline"
													size="sm"
													className="bg-blue-400 pointer-events-none"
												>
													<ThumbsUp className="w-4 h-4 mr-1 text-white" />
												</Button>
											) : (
												<Button
													variant="outline"
													size="sm"
													className="bg-red-400 pointer-events-none"
												>
													<ThumbsDown className="w-4 h-4 mr-1 text-white" />
												</Button>
											)}
										</td>

										<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
											<div className="flex space-x-1">
												<Button
													variant="ghost"
													size="icon"
													className="h-8 w-8 text-blue-500"
													title="View"
													onClick={() => openDrawer(vote)}
												>
													<Eye className="h-4 w-4" />
												</Button>
											</div>
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
