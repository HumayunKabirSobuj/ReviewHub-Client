import ManageUsersForAdmin from '@/components/modules/admin/manageUsers';
import { createSafeQueryString } from '@/helpers';
import { getAllUsers } from '@/services/User';
import { Suspense } from 'react';
import { Toaster } from 'sonner';

export default async function ManageUsersPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] };
}) {
	// Create a safe query string from the search parameters
	const queryString = createSafeQueryString(searchParams);

	// Fetch data based on the query parameters
	let users = [];
	try {
		const { data, error } = await getAllUsers(queryString);
		users = data || [];

		if (error) {
			console.error('Error fetching users:', error);
		}
	} catch (error) {
		console.error('Error fetching users:', error);
	}

	return (
		<>
			<Suspense fallback={<div>Loading users...</div>}>
				<ManageUsersForAdmin users={users} />
			</Suspense>
		</>
	);
}
