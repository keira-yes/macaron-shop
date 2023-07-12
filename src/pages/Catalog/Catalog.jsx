import { useState, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Card from '../../components/Card/Card';
import categories from '../../assets/json/categories.json';
import styles from './Catalog.module.scss';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSort, setActiveSort] = useState('noSort');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let stringParams = '';
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sort = activeSort !== 'noSort' ? `sortby=${activeSort}` : '';
        if (category || sort) {
            stringParams = '?' + [category, sort].filter((item) => item).join('&');
        }
        fetch(`https://64a2eabcb45881cc0ae5e05e.mockapi.io/products${stringParams}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, [activeCategory, activeSort]);

    return (
        <>
            <h1 className="title">Catalog</h1>
            <div className={styles.header}>
                <Categories
                    activeCategory={activeCategory}
                    setActiveCategory={(category) => setActiveCategory(category)}
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
