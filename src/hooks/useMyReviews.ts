"use client";
import { getMyReviewsApi } from "@/services/UserDashboard/ReviewServices";
import { useEffect, useState } from "react";

export const useMyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyReviewsApi()
      .then((res) => setReviews(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { reviews, loading };
};
