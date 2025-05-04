import ManageReviews from "@/components/modules/Review/ManageReview"
import { createSafeQueryString } from "@/helpers"
import { getAllCategories } from "@/services/Categories"
import { getAllReviews } from "@/services/Reviews"
import { Suspense } from "react"



const ManageReviewPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] } }) => {
  // Use the safe query string creator
  const queryString = createSafeQueryString(searchParams)

  // Fetch data based on the query parameters
  const { data, error } = await getAllReviews(queryString)
  const {data:category } = await getAllCategories()

  if (error) {
    return <div className="p-4 text-red-500">Error loading reviews: {error}</div>
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Manage Reviews</h1>
      <Suspense fallback={<div className="p-8 text-center">Loading reviews...</div>}>
        <ManageReviews initialData={data} category={category} />
      </Suspense>
    </div>
  )
}

export default ManageReviewPage
