import { useState, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import categories from '../../assets/categories.json';
import styles from './Catalog.module.scss';

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://64a2eabcb45881cc0ae5e05e.mockapi.io/products')
            .then((data) => data.json())
            .then((items) => setProducts(items));
    }, []);

    return (
        <>
            <h1 className="title">Catalog</h1>
            <div className={styles.header}>
                <Categories />
                <Sort />
            </div>
            <div className={styles.catalog}>
                {products.map((product) => (
                    <Card key={product.id} categories={categories} data={product} />
                ))}
            </div>
        </>
    );
};

export default Catalog;
