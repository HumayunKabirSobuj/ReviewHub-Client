export interface reviewDtlOne {
	title: string;
	description: string;
	rating?: number;
	purchaseSource?: string;
	category: string;
	excerp: string;
	isPublish: boolean;
	price?: number;
	isPremium: boolean;
	imageUrls?: string[];
}

export interface categoryList {
	id: string;
	name: string;
}
