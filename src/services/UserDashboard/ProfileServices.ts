'use server';

import { cookies } from 'next/headers';

export const getUserProfileApi = async () => {
	const accessToken = (await cookies()).get('accessToken')?.value;
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/my-profile-info`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${accessToken}`,
			},
		});
		const result = await res.json();

		return result;
	} catch (error) {
		console.log(error);
	}
};
