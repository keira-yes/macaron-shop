import { useState, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Card from '../../components/Card/Card';
import categories from '../../assets/json/categories.json';
import styles from './Catalog.module.scss';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSort, setActiveSort] = useState('noSort');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let searchParams = '';
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sort = activeSort !== 'noSort' ? `sortby=${activeSort}` : '';
        const searchValue = search ? `title=${search}` : '';

        if (category || sort || searchValue) {
            searchParams = '?' + [category, sort, searchValue].filter((item) => item).join('&');
        }

        fetch(`https://64a2eabcb45881cc0ae5e05e.mockapi.io/products${searchParams}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, [activeCategory, activeSort, search]);

    return (
        <>
            <h1 className="title">Catalog</h1>
            <div className={styles.header}>
                <Categories
                    activeCategory={activeCategory}
                    setActiveCategory={(category) => setActiveCategory(category)}
                    search={search}
                    setSearch={setSearch}
                />
                <Search
                    search={search}
                    setSearch={(value) => setSearch(value)}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <Sort activeSort={activeSort} setActiveSort={(sort) => setActiveSort(sort)} />
            </div>
            <div className={styles.catalog}>
                {loading
                    ? [...Array(6)].map((_, i) => <CardSkeleton key={i} />)
                    : products.map((product) => (
                          <Card key={product.id} categories={categories} data={product} />
                      ))}
            </div>
        </>
    );
};

export default Catalog;
