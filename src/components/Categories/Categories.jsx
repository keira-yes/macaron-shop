import { useState } from 'react';
import categories from '../../assets/categories.json';
import styles from './Categories.module.scss';

const Categories = () => {
    const [active, setActive] = useState(0);

    return (
        <div className={styles.categories}>
            {categories.map((category, i) => (
                <button
                    type="button"
                    key={i}
                    className={`${styles.category} ${i === active ? styles.categoryActive : ''}`}
                    onClick={() => setActive(i)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
