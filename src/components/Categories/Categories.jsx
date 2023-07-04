import { useState } from 'react';
import styles from './Categories.module.scss';

const Categories = () => {
    const categories = ['All', 'Fruit', 'Berry', 'Cheese', 'Chocolate'];
    const [active, setActive] = useState(0);

    const handleActiveCategory = (category) => {
        setActive(category);
    };

    return (
        <div className={styles.categories}>
            {categories.map((category, i) => (
                <button
                    type="button"
                    key={i}
                    className={styles.category + (i === active ? ' ' + styles.categoryActive : '')}
                    onClick={() => handleActiveCategory(i)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;