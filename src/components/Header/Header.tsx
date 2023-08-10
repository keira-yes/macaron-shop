import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';
import LogoDesktop from '../../assets/img/macaron_logo_accent.svg';
import LogoMobile from '../../assets/img/macaron_logo_white.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { totalQty, totalPice } = useSelector(selectCart);
    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.container + ' container'}>
                <Link to="/" className={styles.logo}>
                    <picture className={styles.logoImg}>
                        <source media="(max-width: 767px)" srcSet={LogoMobile} />
                        <img src={LogoDesktop} alt="Macaron Logo" />
                    </picture>
                </Link>
                {pathname !== '/cart' && (
                    <Link to="/cart" className={styles.cart}>
                        <span className={styles.cartBlock}>
                            <svg
                                className={styles.cartIcon}
                                width="16"
                                height="22"
                                viewBox="0 0 16 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 5.604H1V21.0134H15V5.604Z"
                                    stroke="black"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.28857 7.48322V3.53691C4.28857 2.12752 5.32213 1 6.54361 1H9.45636C10.6778 1 11.7114 2.12752 11.7114 3.53691V7.48322"
                                    stroke="black"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className={styles.cartBadge}>{totalQty}</span>
                        </span>
                        <span className={styles.cartTotal}>${totalPice}</span>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;