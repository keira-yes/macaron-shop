import { CartItem } from '../redux/features/cart/cartTypes';

export const calculateTotalQty = (items: CartItem[]) => {
    return items.reduce((acc, rec) => acc + (rec.counter ? rec.counter : 0), 0);
};

export const calculateTotalPrice = (items: CartItem[]) => {
    return items.reduce((acc, rec) => acc + (rec.counter ? rec.counter : 0) * rec.price, 0);
};

export const getLocalStorageCart = () => {
    const data = localStorage.getItem('cart');
    const cartItems = data ? JSON.parse(data) : [];
    const totalCounter = calculateTotalQty(cartItems);
    const totalSumm = calculateTotalPrice(cartItems);

    return {
        cartItems,
        totalCounter,
        totalSumm,
    };
};
