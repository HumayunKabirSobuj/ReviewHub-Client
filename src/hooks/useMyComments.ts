"use client";
import { getMyAllCommentsApi } from "@/services/UserDashboard/CommentServices";
import { useEffect, useState } from "react";

export const useMyComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyAllCommentsApi()
      .then((res) => setComments(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { comments, loading };
};
