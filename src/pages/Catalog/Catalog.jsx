import Categories from '../../components/Categories/Categories';
import styles from './Catalog.module.scss';

const Catalog = () => {
    const packing = ['square', 'heart'];

    return (
        <>
            <h1 className="title">Catalog</h1>
            <div className={styles.header}>
                <Categories />
            </div>
        </>
    );
};

export default Catalog;
