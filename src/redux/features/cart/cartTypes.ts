export type CartItem = {
    id: number;
    imageUrl: string;
    title: string;
    packing: number;
    sizes: number[];
    size: number;
    price: number;
    itemId?: string | undefined;
    counter?: number | undefined;
};

export type CartItemRemoved = {
    price: number;
    itemId: string;
    counter: number;
};

export interface CartSliceState {
    items: CartItem[];
    totalQty: number;
    totalPice: number;
}
