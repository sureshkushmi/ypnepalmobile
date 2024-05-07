declare const _default: import("vue").DefineComponent<{}, {}, {
    categories: any[];
    featuredListings: any[];
    recentListings: any[];
    subcategoryData: any[];
    showSubcategories: boolean;
    listingData: string;
}, {}, {
    fetchSubCategoriesId(subcatid: any): void;
    fetchCategoriesId(catid: any): void;
    fetchCategoriesAlpha(letter: any): void;
    fetchCategories(): void;
    fetchFeaturedListings(): void;
    fetchRecentListings(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
