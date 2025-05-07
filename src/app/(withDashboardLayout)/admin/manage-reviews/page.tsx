import ManageReviews from "@/components/modules/admin/ManageReview"
import { createSafeQueryString } from "@/helpers"
import { getAllCategories } from "@/services/Categories"
import { getAllReviews } from "@/services/Reviews"
import { Suspense } from "react"

interface IProps {
  searchParams: Promise<{ [key: string]: string | string[] }>
}

const ManageReviewPage = async ({ searchParams }: { searchParams: IProps }) => {
  // Use the safe query string creator
  const queryString = createSafeQueryString(searchParams)

  // Fetch data based on the query parameters
  const { data, error } = await getAllReviews(queryString)
  const { data: category } = await getAllCategories()

  if (error) {
    return <div className="p-4 text-red-500">Error loading reviews: {error}</div>
  }

  return (
    <div className="container mx-auto py-6">
     
      <Suspense fallback={<div className="p-8 text-center">Loading reviews...</div>}>
        <ManageReviews initialData={data} category={category} />
      </Suspense>
    </div>
  )
}

export default ManageReviewPage
