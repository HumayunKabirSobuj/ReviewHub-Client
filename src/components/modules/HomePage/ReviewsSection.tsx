import React from 'react';
import ReviewCard, { IReview } from '../Review/ReviewCard';

interface IReviewData {
    reviewsData: IReview[]
}

const ReviewsSection = ({ reviewsData }: IReviewData) => {
    return (
        <div className='container mx-auto px-4 py-16 max-w-6xl'>
            <h3 className="text-primary uppercase text-sm font-medium mb-2">
                Reviews
            </h3>
            <h2 className="text-2xl font-bold mb-8 text-black">
                View Our Best Sealing Reviews!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviewsData?.map((review: IReview, index: number) => (
                    <ReviewCard key={review.id + index} review={review} />
                ))}

            </div>
        </div>
    );
};

export default ReviewsSection;