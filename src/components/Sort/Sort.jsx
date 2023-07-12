import sortTypes from '../../assets/json/sort.json';
import styles from './Sort.module.scss';

const Sort = ({ activeSort, setActiveSort }) => {
    return (
        <div className={styles.sort}>
            <select
                name="sort"
                className={styles.sortSelect}
                onChange={(e) => setActiveSort(e.target.value)}
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
