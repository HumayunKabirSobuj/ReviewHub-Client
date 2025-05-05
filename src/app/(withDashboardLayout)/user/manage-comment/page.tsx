import ManageCommentClient from '@/components/module/user-review/manage-comment';
import { getAllReviewsApi, getMyAllCommentsApi } from '@/services/UserDashboard/ReviewServices';

export default async function ManageCommentSection() {
	const comments = (await getMyAllCommentsApi()).data;
	return (
		<div className="p-[15px]">
			<ManageCommentClient comments={comments} />
		</div>
	);
}
