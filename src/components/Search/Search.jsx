import styles from './Search.module.scss';

const Search = ({ search, setSearch, activeCategory, setActiveCategory, setCurrentPage }) => {
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
                        setActiveCategory(0);
                    }
                    setCurrentPage(1);
                    setSearch(e.target.value);
                }}
            />
        </div>
    );
};

export default Search;
