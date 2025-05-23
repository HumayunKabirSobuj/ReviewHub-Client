

"use client";

import { useState } from "react";
import { useMyPayments } from "@/hooks/useMyPayments";
import ManagePaymentClient from "@/components/module/user-review/manage-payment";
import { Loader } from "lucide-react";
import Pagination from "@/components/shared/Pagination";

const itemsPerPage = 10;

export default function ManagePaymentSection() {
  const { payments, loading } = useMyPayments();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPayments = payments.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(payments.length / itemsPerPage);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader className="w-[80px] h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-[15px]">
      <ManagePaymentClient payments={paginatedPayments} />
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

