"use client";
import { useEffect, useState } from "react";
import { getMyAllPaymentsApi } from "@/services/UserDashboard/PaymentServices";

export const useMyPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyAllPaymentsApi()
      .then((res) => setPayments(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { payments, loading };
};
