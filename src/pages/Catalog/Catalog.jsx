import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Catalog.module.scss';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const ITEMS = 10;
    const LIMIT = 3;

    const { activeCategory, activeSort, search, currentPage } = useSelector(({ filter }) => filter);

    useEffect(() => {
        setLoading(true);

        let searchParams = '';
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sort = activeSort !== 'noSort' ? `sortby=${activeSort}` : '';
        const searchValue = search ? `title=${search}` : '';

        if (category || sort || searchValue) {
            searchParams = `&${[category, sort, searchValue].filter((item) => item).join('&')}`;
        }

        axios(
            `https://64a2eabcb45881cc0ae5e05e.mockapi.io/products?limit=${LIMIT}&page=${currentPage}${searchParams}`,
        ).then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    }, [activeCategory, activeSort, search, currentPage]);

    return (
        <>
            <h1 className="title">Catalog</h1>
            <div className={styles.header}>
                <Categories />
                <Search />
                <Sort />
            </div>
            <div className={styles.catalog}>
                {products.length === 0 && <p>Products not found.</p>}
                {loading
                    ? [...Array(6)].map((_, i) => <CardSkeleton key={i} />)
                    : products.map((product) => <Card key={product.id} data={product} />)}
            </div>
            <Pagination items={ITEMS} itemsPerPage={LIMIT} />
        </>
    );
};

export default Catalog;
