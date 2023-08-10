import styles from './Rating.module.scss';

type RatingProps = {
    stars: number;
};

const Rating: React.FC<RatingProps> = ({ stars }) => {
    return (
        <div className={styles.stars}>
            {[...Array(stars)].map((_, i) => {
                return (
                    <span className={styles.star} key={i}>
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;
