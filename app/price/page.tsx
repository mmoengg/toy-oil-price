import PriceToday from '../../components/price/price-today';
import styles from '../../styles/price/price.module.css';

export default function Price() {
	return <div className={styles.container}>
		<PriceToday />
	</div>;
}
