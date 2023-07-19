import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../../redux/features/cart/cartSlice';
import styles from './CartItem.module.scss';

const CartItem = ({ data: { imageUrl, title, packing, sizes, size, counter, price, itemId } }) => {
    const dispatch = useDispatch();

    return (
        <article className={styles.item}>
            <div className={styles.itemContent}>
                <figure className={styles.itemImg}>
                    <img src={imageUrl} alt="Alt" />
                </figure>
                <div className={styles.itemText}>
                    <h2 className={styles.itemTitle}>{title}</h2>
                    <p className={styles.itemOptions}>
                        Packing: {packing === 0 ? 'Square' : 'Heart'}, Size: {sizes[size]}
                    </p>
                </div>
            </div>
            <div className={styles.itemQty}>
                <button
                    type="button"
                    className={styles.itemQtyBtn}
                    onClick={() => dispatch(decrement(itemId))}>
                    -
                </button>
                <span className={styles.itemQtyValue}>{counter}</span>
                <button
                    type="button"
                    className={styles.itemQtyBtn}
                    onClick={() => dispatch(increment(itemId))}>
                    +
                </button>
            </div>
            <strong className={styles.itemPrice}>${counter * price}</strong>
            <button
                type="button"
                className={styles.itemRemove}
                onClick={() => dispatch(removeItem({ itemId, counter, price }))}>
                <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M27.5111 25.0001L35.0954 17.4158C35.351 17.1173 35.4846 16.7332 35.4695 16.3405C35.4543 15.9477 35.2915 15.5752 35.0135 15.2973C34.7356 15.0193 34.3631 14.8565 33.9703 14.8413C33.5775 14.8262 33.1935 14.9598 32.895 15.2154L25.3107 22.7217L17.6796 15.0906C17.3811 14.8349 16.9971 14.7013 16.6043 14.7165C16.2116 14.7317 15.839 14.8945 15.5611 15.1724C15.2832 15.4503 15.1204 15.8229 15.1052 16.2157C15.09 16.6084 15.2236 16.9924 15.4793 17.291L23.0948 25.0001L15.6353 32.3659C15.472 32.5058 15.3393 32.6779 15.2456 32.8715C15.1519 33.0651 15.0993 33.276 15.091 33.4909C15.0827 33.7058 15.1189 33.9202 15.1974 34.1204C15.2758 34.3207 15.3948 34.5026 15.5469 34.6546C15.699 34.8067 15.8809 34.9257 16.0811 35.0042C16.2814 35.0826 16.4957 35.1189 16.7106 35.1105C16.9255 35.1022 17.1364 35.0496 17.33 34.9559C17.5236 34.8623 17.6958 34.7296 17.8357 34.5662L25.2795 27.1224L32.6765 34.5194C32.9751 34.7751 33.3591 34.9087 33.7518 34.8935C34.1446 34.8783 34.5171 34.7155 34.7951 34.4376C35.073 34.1597 35.2358 33.7871 35.251 33.3943C35.2661 33.0016 35.1326 32.6176 34.8769 32.319L27.5111 25.0001Z" />
                        <path d="M25.0001 49.9688C20.0617 49.9688 15.2342 48.5044 11.1281 45.7608C7.02204 43.0172 3.82173 39.1176 1.9319 34.5552C0.0420685 29.9927 -0.452397 24.9724 0.511029 20.1289C1.47446 15.2854 3.8525 10.8364 7.34445 7.34445C10.8364 3.8525 15.2854 1.47446 20.1289 0.511029C24.9724 -0.452397 29.9927 0.0420685 34.5552 1.9319C39.1176 3.82173 43.0172 7.02204 45.7608 11.1281C48.5044 15.2342 49.9688 20.0617 49.9688 25.0001C49.9688 31.6222 47.3382 37.9731 42.6557 42.6557C37.9731 47.3382 31.6222 49.9688 25.0001 49.9688ZM25.0001 3.15236C20.679 3.15236 16.455 4.4337 12.8621 6.83436C9.26929 9.23501 6.46902 12.6472 4.81542 16.6393C3.16182 20.6314 2.72916 25.0243 3.57216 29.2623C4.41516 33.5004 6.49595 37.3932 9.5514 40.4487C12.6069 43.5042 16.4997 45.5849 20.7378 46.4279C24.9758 47.2709 29.3687 46.8383 33.3608 45.1847C37.3529 43.5311 40.7651 40.7308 43.1657 37.138C45.5664 33.5451 46.8477 29.3211 46.8477 25.0001C46.8477 19.2057 44.5459 13.6486 40.4487 9.5514C36.3515 5.45416 30.7944 3.15236 25.0001 3.15236Z" />
                    </g>
                </svg>
            </button>
        </article>
    );
};

export default CartItem;
