import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit, Eye, Trash2 } from 'lucide-react';

export default function UserReviewManagement() {
	return (
		<Card className="w-full ">
			<CardHeader className="space-y-2">
				<div className="w-full">
					<CardTitle>Manage your review</CardTitle>
					<CardDescription>Share your experience and help others to make informed decisions</CardDescription>
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
							{Array.from({ length: 5 }, (_, index) => (
								<tr key={index} className="hover:bg-gray-50">
									<td className="px-4 py-3 text-sm font-medium">
										<div className="flex flex-col">
											<span className="truncate max-w-[200px]">{'Untitled'}</span>
											<span className="text-xs text-gray-500 truncate max-w-[200px]">
												{'some data'}
											</span>
										</div>
									</td>
									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{'Unknown'}</td>

									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
										{'Uncategorized'}
									</td>
									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{0}</td>
									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
											'00'
										</Badge>
									</td>

									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
										<div className="flex space-x-1">
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8 text-blue-500"
												title="View"
											>
												<Eye className="h-4 w-4" />
											</Button>

											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8 text-green-500"
												title="Edit"
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
		</Card>
	);
}
