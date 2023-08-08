import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setActiveSort } from '../../redux/features/filter/filterSlice';
import sortTypes from '../../assets/json/sort.json';
import styles from './Sort.module.scss';

const Sort = () => {
    const { activeSort } = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <div className={styles.sort}>
            <select
                name="sort"
                className={styles.sortSelect}
                onChange={(e) => dispatch(setActiveSort(e.target.value))}
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
