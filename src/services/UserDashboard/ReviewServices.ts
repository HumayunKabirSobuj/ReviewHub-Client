'use server';

import { reviewDtlOne } from '@/components/types/add-review';
import { cookies } from 'next/headers';

export const createUserReview = async (data: reviewDtlOne) => {
	const accessToken = (await cookies()).get('accessToken')?.value;

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/review/create-review`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${accessToken}`,
			},
			body: JSON.stringify(data),
		});
		const result = await res.json();

		return result;
	} catch (error) {
		console.log(error);
	}
};

export const getAllCategories = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await res.json();

		return result;
	} catch (error) {
		console.log(error);
	}
};
