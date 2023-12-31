import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { selectFilter } from '../../redux/features/filter/filterSelectors';
import { fetchProducts } from '../../redux/features/products/productsAsyncActions';
import { selectProducts } from '../../redux/features/products/productsSelectors';
import { Categories, Search, Sort, CardSkeleton, Card, Pagination } from '../../components';
import styles from './Catalog.module.scss';

const Catalog: React.FC = () => {
    const ITEMS = 10;
    const LIMIT = 3;

    const { activeCategory, activeSort, search, currentPage } = useSelector(selectFilter);
    const { products, isLoading } = useSelector(selectProducts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let searchParams = '';
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sort = activeSort !== 'noSort' ? `sortby=${activeSort}` : '';
        const searchValue = search ? `title=${search}` : '';

        if (category || sort || searchValue) {
            searchParams = `&${[category, sort, searchValue].filter((item) => item).join('&')}`;
        }

        dispatch(fetchProducts({ LIMIT, currentPage, searchParams }));
    }, [activeCategory, activeSort, search, currentPage, dispatch]);

    return (
        <>
            <h1 className="title">Catalog</h1>
            <div className={styles.header}>
                <Categories />
                <Search />
                <Sort />
            </div>
            <div className={styles.catalog}>
                {isLoading ? (
                    [...Array(3)].map((_, i) => <CardSkeleton key={i} />)
                ) : products.length === 0 ? (
                    <p>Products not found.</p>
                ) : (
                    products.map((product) => <Card key={product.id} {...product} />)
                )}
            </div>
            <Pagination items={ITEMS} itemsPerPage={LIMIT} />
        </>
    );
};

export default Catalog;
