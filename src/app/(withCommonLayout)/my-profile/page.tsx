import MyProfilePage from '@/components/module/my-profile/my-profile';
import React from 'react';

const page = () => {
	return (
		<div>
			<div className="relative w-full min-h-screen bg-white overflow-hidden px-4 md:px-8 lg:px-16 py-8 md:py-12">
				<MyProfilePage />
			</div>
		</div>
	);
};

export default page;
