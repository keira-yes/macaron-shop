import { useSelector, useDispatch } from 'react-redux';
import { setSearch, setActiveCategory } from '../../redux/features/filter/filterSlice';
import styles from './Search.module.scss';

const Search = ({ setCurrentPage }) => {
    const search = useSelector((state) => state.filter.search);
    const activeCategory = useSelector((state) => state.filter.activeCategory);
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
                    if (activeCategory > 0) {
                        dispatch(setActiveCategory(0));
                    }
                    setCurrentPage(1);
                    dispatch(setSearch(e.target.value));
                }}
            />
        </div>
    );
};

export default Search;
