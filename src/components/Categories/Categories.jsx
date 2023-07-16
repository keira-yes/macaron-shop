import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/features/filter/filterSlice';
import categories from '../../assets/json/categories.json';
import styles from './Categories.module.scss';

const Categories = () => {
    const activeCategory = useSelector((state) => state.filter.activeCategory);
    const dispatch = useDispatch();

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
                        dispatch(setActiveCategory(i));
                    }}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
