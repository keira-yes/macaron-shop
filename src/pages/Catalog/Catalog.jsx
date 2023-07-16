import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import categories from '../../assets/json/categories.json';
import styles from './Catalog.module.scss';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const ITEMS = 10;
    const LIMIT = 3;

    const activeCategory = useSelector((state) => state.filter.activeCategory);
    const activeSort = useSelector((state) => state.filter.activeSort);
    const search = useSelector((state) => state.filter.search);
    const currentPage = useSelector((state) => state.filter.currentPage);

    useEffect(() => {
        setLoading(true);
        let searchParams = '';
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sort = activeSort !== 'noSort' ? `sortby=${activeSort}` : '';
        const searchValue = search ? `title=${search}` : '';

        if (category || sort || searchValue) {
            searchParams = '&' + [category, sort, searchValue].filter((item) => item).join('&');
        }

        fetch(
            `https://64a2eabcb45881cc0ae5e05e.mockapi.io/products?page=${currentPage}&limit=${LIMIT}${searchParams}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
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
                    : products.map((product) => (
                          <Card key={product.id} categories={categories} data={product} />
                      ))}
            </div>
            <Pagination items={ITEMS} itemsPerPage={LIMIT} />
        </>
    );
};

export default Catalog;
