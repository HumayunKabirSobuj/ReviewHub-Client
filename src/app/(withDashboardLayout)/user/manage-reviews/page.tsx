import UserReviewManagement from '@/components/module/user-review/manage-review';
import { getAllReviewsApi } from '@/services/UserDashboard/ReviewServices';

const ManageReviewsForUser = async () => {
	const reviews = (await getAllReviewsApi()).data;

	return (
		<div className="p-[15px]">
			<UserReviewManagement reviews={reviews} />
		</div>
	);
};

export default ManageReviewsForUser;
