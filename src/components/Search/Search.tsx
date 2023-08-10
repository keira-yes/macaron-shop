import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setSearch } from '../../redux/features/filter/filterSlice';
import styles from './Search.module.scss';

const Search: React.FC = () => {
    const { search } = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value));
    };

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
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Search;
