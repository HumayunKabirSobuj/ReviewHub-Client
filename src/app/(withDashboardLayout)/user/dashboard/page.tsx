import UserDashboardSection from "@/components/module/user-review/user-dashboard";
import { getMyAllCommentsApi } from "@/services/UserDashboard/CommentServices";
import { getMyAllVotesApi } from "@/services/UserDashboard/VoteServices";

const UserDashboard = async () => {
  const voteCount = (await getMyAllVotesApi()).data.length;
  const commentCount = (await getMyAllCommentsApi()).data.length;
  return (
    <UserDashboardSection voteCount={voteCount} commentCount={commentCount} />
  );
};

export default UserDashboard;
