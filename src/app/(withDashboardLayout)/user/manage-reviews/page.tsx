'use client';

import { useState } from 'react';
import { useMyReviews } from '@/hooks/useMyReviews';
import UserReviewManagement from '@/components/module/user-review/manage-review';
import { Skeleton } from '@/components/ui/skeleton';
import Pagination from '@/components/shared/Pagination';

const itemsPerPage = 10;

export default function ManageReviewsForUser() {
	const { reviews, loading } = useMyReviews();
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedReviews = reviews.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(reviews.length / itemsPerPage);

	if (loading) {
		return (
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
		);
	}

	return (
		<div className="p-[15px]">
			<UserReviewManagement reviews={paginatedReviews} />

			<div className="mt-8">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</div>
	);
}
