export type ApiResponse = {
	moreResultsAvailable?: number;
	next?: string;
	posts: Post[];
	requestsLeft?: number;
	totalResults?: number;
	warnings?: null;
};

export type User = {
	user: string | undefined;
	pass: string | undefined;
};

export type Post = {
	thread?: Thread;
	uuid?: string;
	url?: string;
	ord_in_thread?: number;
	parent_url?: null;
	author?: null | string;
	published?: Date;
	title?: string;
	text?: string;
	highlightText?: string;
	highlightTitle?: string;
	highlightThreadTitle?: string;
	language?: Language;
	external_links?: string[];
	external_images?: ExternalImage[];
	entities?: Entities;
	rating?: null;
	crawled?: Date;
	updated?: Date;
};

export type Entities = {
	persons?: any[];
	organizations?: any[];
	locations?: any[];
};

export type ExternalImage = {
	url?: string;
	meta_info?: string;
	uuid?: string;
	label?: any[];
	text?: null;
};

export type Language = {
	Spanish?: "spanish";
};

export type Thread = {
	uuid?: string;
	url?: string;
	site_full?: string;
	site?: string;
	site_section?: null | string;
	site_categories?: string[];
	section_title?: null | string;
	title?: string;
	title_full?: string;
	published?: Date;
	replies_count?: number;
	participants_count?: number;
	site_type?: SiteType;
	country?: Country;
	spam_score?: number;
	main_image?: string;
	performance_score?: number;
	domain_rank: number | null;
	reach?: Reach | null;
	social?: Social;
};

export type Country = {
	Ar?: "AR";
};

export type Reach = {
	per_million?: number;
	page_views?: PageViews;
	updated?: Date;
};

export type PageViews = {
	per_million?: number;
	per_user?: number;
};

export type SiteType = {
	blogs: "blogs";
	news: "news";
};

export type Social = {
	facebook?: Facebook;
	gplus?: Gplus;
	pinterest?: Gplus;
	linkedin?: Gplus;
	stumbledupon?: Gplus;
	vk?: Gplus;
};

export type Facebook = {
	likes?: number;
	comments?: number;
	shares?: number;
};

export type Gplus = {
	shares?: number;
};
