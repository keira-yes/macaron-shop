import { useState } from 'react';
import styles from './Sort.module.scss';

const Sort = () => {
    const [sort, setSort] = useState('popularity');

    const handleSelect = (e) => {
        setSort(e.target.value);
    };

    return (
        <div className={styles.sort}>
            <span>Sort by</span>
            <select name="sort" className={styles.sortSelect} onChange={handleSelect} value={sort}>
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
                <option value="alphabet">Alphabet</option>
            </select>
        </div>
    );
};

export default Sort;
