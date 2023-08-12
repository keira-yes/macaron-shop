export type FetchProductsArg = {
    LIMIT: number;
    currentPage: number;
    searchParams: string;
};

export type ProductItem = {
    id: number;
    imageUrl: string;
    title: string;
    packing: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};

export interface ProductsSliceState {
    products: ProductItem[];
    isLoading: boolean;
}
