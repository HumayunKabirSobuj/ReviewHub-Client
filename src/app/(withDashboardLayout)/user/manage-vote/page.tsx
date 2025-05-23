// import ManageVoteClient from "@/components/module/user-review/manage-vote";
// import { getMyAllVotesApi } from "@/services/UserDashboard/VoteServices";
// import { Loader } from "lucide-react";
// import { Suspense } from "react";

// export default async function ManageVoteSection() {
//   const votes = (await getMyAllVotesApi()).data;
//   return (
//     <div className="p-[15px]">
//       <Suspense
//         fallback={
//           <div className="w-full h-[100vh] flex items-center justify-center">
//             <Loader className="w-[80px] h-12 animate-spin" />
//           </div>
//         }
//       >
//         <ManageVoteClient votes={votes} />
//       </Suspense>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { useMyVotes } from "@/hooks/useMyVotes";
import ManageVoteClient from "@/components/module/user-review/manage-vote";
import { Loader } from "lucide-react";
import Pagination from "@/components/shared/Pagination";

const itemsPerPage = 10;

export default function ManageVoteSection() {
  const { votes, loading } = useMyVotes();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVotes = votes.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(votes.length / itemsPerPage);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader className="w-[80px] h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-[15px]">
      <ManageVoteClient votes={paginatedVotes} />
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
