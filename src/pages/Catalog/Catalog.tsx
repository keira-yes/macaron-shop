import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/features/filter/filterSlice';
import { selectProducts, fetchProducts } from '../../redux/features/products/productsSlice';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Catalog.module.scss';

const Catalog: React.FC = () => {
    const ITEMS = 10;
    const LIMIT = 3;

    const { activeCategory, activeSort, search, currentPage } = useSelector(selectFilter);
    const { products, isLoading } = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        let searchParams = '';
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sort = activeSort !== 'noSort' ? `sortby=${activeSort}` : '';
        const searchValue = search ? `title=${search}` : '';

        if (category || sort || searchValue) {
            searchParams = `&${[category, sort, searchValue].filter((item) => item).join('&')}`;
        }

        // @ts-ignore
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
                    products.map((product: any) => <Card key={product.id} data={product} />)
                )}
            </div>
            <Pagination items={ITEMS} itemsPerPage={LIMIT} />
        </>
    );
};

export default Catalog;
