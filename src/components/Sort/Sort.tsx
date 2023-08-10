import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setActiveSort } from '../../redux/features/filter/filterSlice';
import sortTypes from '../../assets/json/sort.json';
import styles from './Sort.module.scss';

const Sort: React.FC = () => {
    const { activeSort } = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        dispatch(setActiveSort(e.target.value));

    return (
        <div className={styles.sort}>
            <select
                name="sort"
                className={styles.sortSelect}
                onChange={handleSortChange}
                value={activeSort}>
                <option value="noSort">Sort by</option>
                {sortTypes.map((sortType, i) => (
                    <option key={i} value={sortType.value}>
                        {sortType.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Sort;
