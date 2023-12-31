import { useSelector, useDispatch } from 'react-redux';
import { setActiveSort } from '../../redux/features/filter/filterSlice';
import { selectFilter } from '../../redux/features/filter/filterSelectors';
import sortTypes from '../../assets/json/sort.json';
import styles from './Sort.module.scss';

export const Sort: React.FC = () => {
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
