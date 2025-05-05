import ManageCommentClient from '@/components/module/user-review/manage-comment';
import { getMyAllCommentsApi } from '@/services/UserDashboard/CommentServices';

export default async function ManageCommentSection() {
	const comments = (await getMyAllCommentsApi()).data;
	return (
		<div className="p-[15px]">
			<ManageCommentClient comments={comments} />
		</div>
	);
}
