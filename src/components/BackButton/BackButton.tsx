import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.scss';

export const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateBack = () => navigate(-1);

    return (
        <button type="button" className={styles.btn} onClick={handleNavigateBack}>
            <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M29.1683 14.1707H2.83844L9.9846 7.02456C10.3111 6.69805 10.3111 6.17441 9.9846 5.84791C9.65809 5.5214 9.13445 5.5214 8.80795 5.84791L0.244879 14.411C-0.0816264 14.7375 -0.0816264 15.2611 0.244879 15.5876L8.80795 24.1507C8.96812 24.3109 9.18374 24.3971 9.39319 24.3971C9.60265 24.3971 9.81827 24.317 9.97844 24.1507C10.3049 23.8242 10.3049 23.3005 9.97844 22.974L2.83228 15.8279H29.1683C29.6304 15.8279 30 15.4583 30 14.9962C30 14.5342 29.6304 14.1707 29.1683 14.1707Z" />
                </g>
            </svg>
            Back
        </button>
    );
};
