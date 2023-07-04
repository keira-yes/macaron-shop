import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({
    categories,
    data: { imageUrl, title, packing, sizes, price, category, rating },
}) => {
    const [packingActive, setPackingActive] = useState(0);
    const [sizeActive, setSizeActive] = useState(0);

    return (
        <article className={styles.card}>
            <figure className={styles.cardImg}>
                <img src={imageUrl} alt={title} />
            </figure>
            <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <strong className={styles.cardCategory}>{categories[category]}</strong>
                    <span className={styles.cardRating}>{rating}</span>
                </div>
                <h2 className={styles.cardTitle}>{title}</h2>
                <div className={styles.cardButtons}>
                    {packing.map((type, i) => (
                        <button
                            type="button"
                            className={`${styles.cardButton} ${
                                i === packingActive ? 'cardButtonActive' : ''
                            }`}
                            key={i}
                            onClick={() => setPackingActive(i)}>
                            {type === 0 ? 'square' : 'heart'}
                        </button>
                    ))}
                </div>
                <div className={styles.cardButtons}>
                    {sizes.map((size, i) => (
                        <button
                            type="button"
                            className={`${styles.cardButton} ${
                                i === sizeActive ? 'cardButtonActive' : ''
                            }`}
                            key={i}
                            onClick={() => setSizeActive(i)}>
                            {size}
                        </button>
                    ))}
                </div>
                <div className={styles.cardFooter}>
                    <strong className={styles.cardPrice}>from ${price}</strong>
                    <button type="button" className={styles.cardBuy}>
                        Buy
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Card;
