
import ReviewsPageCard from "@/components/modules/Review/ReviewsPageCard";
import { createSafeQueryString } from "@/helpers";
import { getAllCategories } from "@/services/Categories";
import { getAllPublishedReviews } from "@/services/Reviews";

export default async function Reviews({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  try {
    // Use synchronous helper because searchParams is an object, not Promise
    const queryString = createSafeQueryString(searchParams);

    const [reviewsResponse, categoriesResponse] = await Promise.all([
      getAllPublishedReviews(queryString),
      getAllCategories(),
    ]);

    console.log(reviewsResponse);
    if (reviewsResponse.error) {
      return <div>Error loading reviews: {reviewsResponse.error}</div>;
    }

    if (categoriesResponse.error) {
      return <div>Error loading categories: {categoriesResponse.error}</div>;
    }

    return (
      <ReviewsPageCard
        initialData={reviewsResponse.data}
        category={categoriesResponse.data}
      />
    );
  } catch (error) {
    return <div>Unexpected error: {error instanceof Error ? error.message : String(error)}</div>;
  }
}
