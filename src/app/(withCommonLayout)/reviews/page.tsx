import ReviesPageCard from '@/components/modules/Review/ReviesPageCard';
import { getAllReviews } from '@/services/Reviews';
import React from 'react';

const Reviews = async() => {
  const reviews = await getAllReviews();
  // console.log(revews);
  return (
    <div>
      <ReviesPageCard reviewData={reviews.data}/>
    </div>
  );
};

export default Reviews;