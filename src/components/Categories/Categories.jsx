import categories from '../../assets/json/categories.json';
import styles from './Categories.module.scss';

const Categories = ({ activeCategory, setActiveCategory, search, setSearch }) => {
    return (
        <div className={styles.categories}>
            {categories.map((category, i) => (
                <button
                    type="button"
                    key={i}
                    className={`${styles.category} ${
                        i === activeCategory ? styles.categoryActive : ''
                    }`}
                    onClick={() => {
                        if (search) {
                            setSearch('');
                        }
                        setActiveCategory(i);
                    }}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
