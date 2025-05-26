import UserDiscountManagement from '@/components/module/user-review/discount-management';
import { Suspense } from 'react';

const ManageReviewsForUser = () => {
	;
	// Loading component for Suspense fallback


	return (
		<div className="p-[15px]">
			<Suspense >
				<UserDiscountManagement />
			</Suspense>
		</div>
	);
};

export default ManageReviewsForUser;
