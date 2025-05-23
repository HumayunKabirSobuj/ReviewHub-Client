// import ManageCommentClient from "@/components/module/user-review/manage-comment";
// import { getMyAllCommentsApi } from "@/services/UserDashboard/CommentServices";
// import { Loader } from "lucide-react";
// import { Suspense } from "react";

// export default async function ManageCommentSection() {
//   const comments = (await getMyAllCommentsApi()).data;
//   return (
//     <div className="p-[15px]">
//       <Suspense
//         fallback={
//           <div className="w-full h-[100vh] flex items-center justify-center">
//             <Loader className="w-[80px] h-12 animate-spin" />
//           </div>
//         }
//       >
//         <ManageCommentClient comments={comments} />
//       </Suspense>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useMyComments } from "@/hooks/useMyComments";
import ManageCommentClient from "@/components/module/user-review/manage-comment";
import { Loader } from "lucide-react";
import Pagination from "@/components/shared/Pagination";

const itemsPerPage = 10;

export default function ManageCommentSection() {
  const { comments, loading } = useMyComments();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedComments = comments.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(comments.length / itemsPerPage);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader className="w-[80px] h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-[15px]">
      <ManageCommentClient comments={paginatedComments} />
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
