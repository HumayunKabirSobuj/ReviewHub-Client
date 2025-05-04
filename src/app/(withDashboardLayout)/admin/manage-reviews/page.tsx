import ManageReviews from '@/components/modules/Review/ManageReview';
import { getAllReviews } from '@/services/Reviews';
import { Suspense } from 'react';

const ManageReviewPage = async ({
  searchParams,
}: {
  searchParams: { query?: string }
}) => {
  // / Get the search query from URL parameters
  const searchQuery = searchParams?.query || ""

  console.log({ searchQuery });
  // Pass the search query to your API function
  const data = await getAllReviews(searchQuery)
  return (
    <div>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <ManageReviews initialData={data.data} />
      </Suspense>
    </div>
  );
};

export default ManageReviewPage;