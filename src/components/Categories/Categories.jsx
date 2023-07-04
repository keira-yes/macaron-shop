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
            {categories.map((category, key) => (
                <button
                    type="button"
                    key={key}
                    className={
                        styles.category + (key === active ? ' ' + styles.categoryActive : '')
                    }
                    onClick={() => handleActiveCategory(key)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
