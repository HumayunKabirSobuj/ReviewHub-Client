import { ReviewForm } from "@/components/module/review/review-from";

export default function AddReviewPage() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">নতুন রিভিউ লিখুন</h1>
      <ReviewForm />
    </div>
  )
}
