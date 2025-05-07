import ManageReviews from '@/components/modules/admin/ManageReview';
import { createSafeQueryString } from '@/helpers';
import { getAllCategories } from '@/services/Categories';
import { getAllReviews } from '@/services/Reviews';
import { Loader } from 'lucide-react';
import { Suspense } from 'react';

interface IProps {
	searchParams: Promise<{ [key: string]: string | string[] }>;
}

const ManageReviewPage = async ({ searchParams }: { searchParams: IProps }) => {
	const resolvedParams = await searchParams;

	// Use the safe query string creator
	const queryString = createSafeQueryString(resolvedParams);

	// Fetch data based on the query parameters
	const { data, error } = await getAllReviews(queryString);
	const { data: category } = await getAllCategories();
	if (error) {
		return <div className="p-4 text-red-500">Error loading reviews: {error}</div>;
	}

	return (
		<div className="container mx-auto py-6">
			<Suspense
				fallback={
					<div className="w-full h-[100vh] flex items-center justify-center">
						<Loader className="w-[80px] h-12 animate-spin" />
					</div>
				}
			>
				<ManageReviews initialData={data} category={category} />
			</Suspense>
		</div>
	);
};

export default ManageReviewPage;
