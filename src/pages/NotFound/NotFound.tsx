import { BackButton } from '../../components';
import styles from './NotFound.module.scss';
import Image from '../../assets/img/404.png';

const NotFound: React.FC = () => {
    return (
        <>
            <h1 className="title">Sorry, page not found</h1>
            <figure className={styles.image}>
                <img src={Image} alt="404 Not found" />
            </figure>
            <footer className={styles.footer}>
                <BackButton />
            </footer>
        </>
    );
};

export default NotFound;
