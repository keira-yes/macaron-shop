import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/features/filter/filterSlice';
import styles from './Search.module.scss';

const Search = () => {
    const search = useSelector(({ filter }) => filter.search);
    const dispatch = useDispatch();

    return (
        <div className={styles.search}>
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                type="search"
                id="search"
                className={styles.input}
                placeholder="Search macaron"
                value={search}
                onChange={(e) => {
                    dispatch(setSearch(e.target.value));
                }}
            />
        </div>
    );
};

export default Search;
