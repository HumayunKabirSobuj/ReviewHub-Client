export interface reviewDtlOne {
	title: string;
	description: string;
	rating?: number;
	purchaseSource?: string;
	categoryId: string;
	excerp: string;
	isPublished: boolean;
	price?: number;
	isPremium: boolean;
	imageUrls?: string[];
}

export interface categoryList {
	id: string;
	name: string;
}

export interface reviewDtlType {
	id: string;
	title: string;
	description: string;
	rating: number;
	purchaseSource: string;
	imageUrls: string[];
	excerp: string;
	isPremium: boolean;
	price: number;
	isPublished: boolean;
	userId: string;
	categoryId: string;
	author: {
		id: string;
		name: string;
		email: string;
		profileUrl: string | null;
	};
	category: {
		id: string;
		name: string;
	};
	Discount: {
		percent: string;
		id: string;
	} | null;
}

export interface commentType {
	id: string;
	content: string;
	userId: string;
	reviewId: string;
	createdAt: string;
	review: {
		title: string;
		excerp: string;
		description: string;
	};
}

export interface voteType {
	id: string;
	type: string;
	userId: string;
	reviewId: string;
	review: {
		title: string;
		excerp: string;
		description: string;
	};
}

export interface paymentType {
	id: string;
	userId: string;
	reviewId: string;
	amount: number;
	status: string;
	createdAt: string;
	review: {
		title: string;
		excerp: string;
		description: string;
	};
}

// profile types

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	profileUrl: string;
	status: 'ACTIVE' | 'INACTIVE'; // assuming only these states
	role: 'USER' | 'ADMIN'; // adjust if other roles exist
	createdAt: string;
	updatedAt: string;
	reviews: Review[];
	comments: Comment[]; // empty array now, define if needed
	votes: Vote[]; // empty array now, define if needed
	payments: Payment[];
	Discount: Discount[];
};

export type Review = {
	id: string;
	title: string;
	description: string;
	rating: number;
	purchaseSource: string;
	imageUrls: string[];
	excerp: string;
	isPremium: boolean;
	price: number;
	isPublished: boolean;
	userId: string;
	categoryId: string;
	createdAt: string;
	updatedAt: string;
};

export type Payment = {
	id: string;
	userId: string;
	reviewId: string;
	amount: number;
	status: 'SUCCESS' | 'FAILED' | 'PENDING'; // adjust if needed
	createdAt: string;
};

export type Discount = {
	id: string;
	percent: number;
	newPrice: number;
	userId: string;
	reviewId: string;
	createdAt: string;
	updatedAt: string;
};

// Optional: placeholder types for future expansion
export type Comment = Record<string, string>;
export type Vote = Record<string, string>;
