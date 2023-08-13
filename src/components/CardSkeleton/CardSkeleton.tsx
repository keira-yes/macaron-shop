import ContentLoader from 'react-content-loader';
import styles from './CardSkeleton.module.scss';

export const CardSkeleton: React.FC = () => (
    <ContentLoader
        className={styles.cardSkeleton}
        speed={2}
        width={400}
        height={500}
        viewBox="0 0 400 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="300" />
        <rect x="0" y="310" rx="0" ry="0" width="20%" height="20" />
        <rect x="60%" y="310" rx="0" ry="0" width="40%" height="20" />
        <rect x="0" y="340" rx="0" ry="0" width="100%" height="20" />
        <rect x="0" y="370" rx="0" ry="0" width="20%" height="10" />
        <rect x="0" y="390" rx="0" ry="0" width="48%" height="20" />
        <rect x="52%" y="390" rx="0" ry="0" width="48%" height="20" />
        <rect x="0" y="420" rx="0" ry="0" width="20%" height="10" />
        <rect x="0" y="440" rx="0" ry="0" width="30.6%" height="20" />
        <rect x="34.6%" y="440" rx="0" ry="0" width="30.6%" height="20" />
        <rect x="68.6%" y="440" rx="0" ry="0" width="30.6%" height="20" />
        <rect x="0" y="470" rx="0" ry="0" width="55%" height="30" />
        <rect x="59%" y="470" rx="0" ry="0" width="41%" height="30" />
    </ContentLoader>
);
