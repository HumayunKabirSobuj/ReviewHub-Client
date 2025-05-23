"use client";
import { useEffect, useState } from "react";
import { getMyAllVotesApi } from "@/services/UserDashboard/VoteServices";

export const useMyVotes = () => {
  const [votes, setVotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyAllVotesApi()
      .then((res) => setVotes(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { votes, loading };
};
