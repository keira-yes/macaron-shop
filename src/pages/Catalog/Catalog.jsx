import { useState, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Card from '../../components/Card/Card';
import categories from '../../assets/categories.json';
import styles from './Catalog.module.scss';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        fetch(`https://64a2eabcb45881cc0ae5e05e.mockapi.io/products?${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, [activeCategory]);

    return (
        <>
            <h1 className="title">Catalog</h1>
            <div className={styles.header}>
                <Categories
                    activeCategory={activeCategory}
                    setActiveCategory={(category) => setActiveCategory(category)}
                />
                <Sort />
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
