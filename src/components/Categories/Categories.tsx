import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/features/filter/filterSlice';
import { selectFilter } from '../../redux/features/filter/filterSelectors';
import categories from '../../assets/json/categories.json';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
    const { activeCategory } = useSelector(selectFilter);
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
