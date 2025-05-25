'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const createAndUpdateDiscount = async (data: { reviewId: string; percent: number }) => {
	const accessToken = (await cookies()).get('accessToken')?.value;

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/review/dicount-review`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${accessToken}`,
			},
			body: JSON.stringify(data),
		});
		revalidateTag('MY-REVIEWS');
		const result = await res.json();

		return result;
	} catch (error) {
		console.log(error);
	}
};

// discount/delete-discount/
export const deleteDiscountApi = async (id: string) => {
	const accessToken = (await cookies()).get('accessToken')?.value;

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/discount/delete-discount/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${accessToken}`,
			},
		});
		revalidateTag('MY-REVIEWS');
		const result = await res.json();

		return result;
	} catch (error) {
		console.log(error);
	}
};
