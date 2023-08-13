import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductItem } from '../../redux/features/products/productsTypes';
import { addItem } from '../../redux/features/cart/cartSlice';
import { Rating } from '../index';
import categories from '../../assets/json/categories.json';
import styles from './Card.module.scss';

export const Card: React.FC<ProductItem> = ({
    id,
    imageUrl,
    title,
    packing,
    sizes,
    price,
    category,
    rating,
}) => {
    const defaultPacking = packing.length === 1 ? packing[0] : 0;
    const defaulSize = sizes.length === 1 ? sizes[0] : 0;

    const [packingActive, setPackingActive] = useState(defaultPacking);
    const [sizeActive, setSizeActive] = useState(defaulSize);
    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();

    const addToCart = () => {
        setDisabled(true);
        dispatch(
            addItem({
                id,
                imageUrl,
                title,
                packing: packingActive,
                sizes,
                size: sizeActive,
                price,
            }),
        );
        setDisabled(false);
    };

    return (
        <article className={styles.card}>
            <figure className={styles.cardImg}>
                <img src={imageUrl} alt={title} />
            </figure>
            <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                        <strong className={styles.cardCategory}>{categories[category]}</strong>
                        <div className={styles.cardRating}>
                            <Rating stars={rating} />
                        </div>
                    </div>
                    <h2 className={styles.cardTitle}>{title}</h2>
                </div>
                <div className={styles.cardButtons}>
                    <h3 className={styles.cardButtonsTitle}>Packing</h3>
                    {packing.map((type, i) => (
                        <button
                            type="button"
                            className={`${styles.cardButton} ${
                                packing.length === 1
                                    ? styles.cardButtonActive
                                    : i === packingActive
                                    ? styles.cardButtonActive
                                    : ''
                            }`}
                            key={i}
                            onClick={() => setPackingActive(i)}>
                            {type === 0 ? 'Square' : 'Heart'}
                        </button>
                    ))}
                </div>
                <div className={styles.cardButtons}>
                    <h3 className={styles.cardButtonsTitle}>Quantity</h3>
                    {sizes.map((size, i) => (
                        <button
                            type="button"
                            className={`${styles.cardButton} ${
                                sizes.length === 1
                                    ? styles.cardButtonActive
                                    : i === sizeActive
                                    ? styles.cardButtonActive
                                    : ''
                            }`}
                            key={i}
                            onClick={() => setSizeActive(i)}>
                            {size}
                        </button>
                    ))}
                </div>
                <div className={styles.cardFooter}>
                    <strong className={styles.cardPrice}>
                        from <span>${price}</span>
                    </strong>
                    <button
                        type="button"
                        className={styles.cardCart}
                        onClick={addToCart}
                        disabled={disabled}>
                        <svg
                            className={styles.cardCartIcon}
                            width="16"
                            height="22"
                            viewBox="0 0 16 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 5.604H1V21.0134H15V5.604Z"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.28857 7.48322V3.53691C4.28857 2.12752 5.32213 1 6.54361 1H9.45636C10.6778 1 11.7114 2.12752 11.7114 3.53691V7.48322"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    );
};
