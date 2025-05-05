'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const getMyAllVotesApi = async () => {
	const accessToken = (await cookies()).get('accessToken')?.value;
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/vote/my-votes`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${accessToken}`,
			},
			next: { tags: ['VOTES'] },
		});
		const result = await res.json();

		return result;
	} catch (error) {
		console.log(error);
	}
};

export const updateMyVoteApi = async (data: { type: 'UP' | 'DOWN'; reviewId: string }) => {
	const accessToken = (await cookies()).get('accessToken')?.value;
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/vote/create-vote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${accessToken}`,
			},
			body: JSON.stringify(data),
		});
		revalidateTag('REVIEWS');
		const result = await res.json();

		return result;
	} catch (error) {
		console.log(error);
	}
};
