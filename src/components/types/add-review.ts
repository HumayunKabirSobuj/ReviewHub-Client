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
