import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../../redux/features/cart/cartSlice';
import { selectCart } from '../../redux/features/cart/cartSelectors';
import { BackButton, CartItem } from '../../components';
import styles from './Cart.module.scss';

const Cart: React.FC = () => {
    const { items, totalQty, totalPice } = useSelector(selectCart);
    const dispatch = useDispatch();

    const clearCart = () => {
        if (window.confirm('Are you sure you want to clear cart?')) {
            dispatch(clear());
        }
    };

    return (
        <div className={styles.holder}>
            <h1 className="title">Cart</h1>
            {items.length > 0 ? (
                <>
                    <header className={styles.header}>
                        <strong className={styles.subtitle}>
                            {totalQty} item(s) / ${totalPice}
                        </strong>
                        <button type="button" className={styles.clear} onClick={clearCart}>
                            <svg
                                className={styles.clearIcon}
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2266 30H7.76948C7.17801 29.9993 6.61101 29.7639 6.19286 29.3456C5.77471 28.9272 5.53956 28.3601 5.53906 27.7687V4.82407C5.53906 4.5732 5.63873 4.33262 5.81612 4.15523C5.99351 3.97784 6.23409 3.87817 6.48496 3.87817C6.73582 3.87817 6.97643 3.97784 7.15382 4.15523C7.33121 4.33262 7.43085 4.5732 7.43085 4.82407V27.7668C7.4311 27.8566 7.46684 27.9427 7.53027 28.0063C7.59369 28.0699 7.67966 28.1058 7.76948 28.1063H22.2266C22.3164 28.1058 22.4024 28.0699 22.4658 28.0063C22.5292 27.9427 22.5649 27.8566 22.5652 27.7668V4.82407C22.5652 4.5732 22.6648 4.33262 22.8422 4.15523C23.0196 3.97784 23.2602 3.87817 23.5111 3.87817C23.7619 3.87817 24.0025 3.97784 24.1799 4.15523C24.3573 4.33262 24.457 4.5732 24.457 4.82407V27.7668C24.457 28.3586 24.2221 28.9262 23.8039 29.3449C23.3857 29.7637 22.8184 29.9993 22.2266 30Z" />
                                <path d="M11.7662 24.5147C11.5153 24.5147 11.2748 24.415 11.0974 24.2376C10.92 24.0602 10.8203 23.8197 10.8203 23.5688V10.3263C10.8203 10.0754 10.92 9.83482 11.0974 9.65743C11.2748 9.48004 11.5153 9.38037 11.7662 9.38037C12.0171 9.38037 12.2577 9.48004 12.435 9.65743C12.6124 9.83482 12.7121 10.0754 12.7121 10.3263V23.5688C12.7121 23.8197 12.6124 24.0602 12.435 24.2376C12.2577 24.415 12.0171 24.5147 11.7662 24.5147Z" />
                                <path d="M18.2311 24.5147C17.9802 24.5147 17.7396 24.415 17.5622 24.2376C17.3848 24.0602 17.2852 23.8197 17.2852 23.5688V10.3263C17.2852 10.0754 17.3848 9.83482 17.5622 9.65743C17.7396 9.48004 17.9802 9.38037 18.2311 9.38037C18.4819 9.38037 18.7225 9.48004 18.8999 9.65743C19.0773 9.83482 19.1769 10.0754 19.1769 10.3263V23.5688C19.1769 23.8197 19.0773 24.0602 18.8999 24.2376C18.7225 24.415 18.4819 24.5147 18.2311 24.5147Z" />
                                <path d="M26.2707 5.76996H3.72714C3.47628 5.76996 3.2357 5.67035 3.05831 5.49296C2.88092 5.31557 2.78125 5.07494 2.78125 4.82407C2.78125 4.5732 2.88092 4.33262 3.05831 4.15523C3.2357 3.97784 3.47628 3.87817 3.72714 3.87817H26.2707C26.5215 3.87817 26.7621 3.97784 26.9395 4.15523C27.1169 4.33262 27.2166 4.5732 27.2166 4.82407C27.2166 5.07494 27.1169 5.31557 26.9395 5.49296C26.7621 5.67035 26.5215 5.76996 26.2707 5.76996Z" />
                                <path d="M18.7041 1.89179H11.2154C10.9646 1.89179 10.724 1.79212 10.5466 1.61473C10.3692 1.43734 10.2695 1.19676 10.2695 0.945895C10.2695 0.695028 10.3692 0.45445 10.5466 0.27706C10.724 0.0996702 10.9646 0 11.2154 0H18.7041C18.955 0 19.1955 0.0996702 19.3729 0.27706C19.5503 0.45445 19.65 0.695028 19.65 0.945895C19.65 1.19676 19.5503 1.43734 19.3729 1.61473C19.1955 1.79212 18.955 1.89179 18.7041 1.89179Z" />
                            </svg>
                            Clear
                        </button>
                    </header>
                    <div className={styles.body}>
                        {items.map((item, i) => (
                            <CartItem key={i} {...item} />
                        ))}
                        <div className={styles.total}>
                            <h2 className={styles.totalTitle}>Total</h2>
                            <span className={styles.totalQty}>{totalQty}</span>
                            <strong className={styles.totalPrice}>${totalPice}</strong>
                        </div>
                    </div>
                    <footer className={styles.footer}>
                        <BackButton />
                        <button type="button" className="accent-btn">
                            Go to payment
                        </button>
                    </footer>
                </>
            ) : (
                <span>Cart is empty</span>
            )}
        </div>
    );
};

export default Cart;
