import ReviewsPageCard from '@/components/modules/Review/ReviewsPageCard';
import { createSafeQueryString } from '@/helpers';
import { getAllCategories } from '@/services/Categories';
import { getAllReviews } from '@/services/Reviews';

const Reviews = async ({ searchParams }: { searchParams: { [key: string]: string | string[] } }) => {
  // Use the safe query string creator
  const queryString = createSafeQueryString(searchParams)

  // Fetch data based on the query parameters
  const { data, error } = await getAllReviews(queryString)
  const { data: category } = await getAllCategories()

  if (error) {
    return <div className="p-4 text-red-500">Error loading reviews: {error}</div>
  }
  // console.log(revews);
  return (
    <div>
      <ReviewsPageCard initialData={data} category={category} />
    </div>
  );
};

export default Reviews;