import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <strong>Macaron Shop 2023 &copy; All right reserved.</strong>
            </div>
        </footer>
    );
};
