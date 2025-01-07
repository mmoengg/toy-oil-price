import styles from '../../styles/home/home-amount.module.css';
import HomeAmountCard from './home-amount-card';

export default function HomeAmount() {
	return (
		<div className={styles.container}>
			<div className={styles.title_wrap}>
				<h2 className={styles.title}>시세</h2>
				<div>
					<div className={styles.filter_main}>전체</div>
				</div>
			</div>
			<div className={styles.amount_wrap}>
				{Array.from({ length: 5 }, (_, index) => (
					<div className={styles.amount_box} key={index}>
						<div className={styles.date}>
							<div>2024-01-07</div>
							<div className={styles.date_line}></div>
						</div>
						<div className={styles.card_wrap}>
							{Array.from({ length: 5 }, (_, index) => (
								<HomeAmountCard key={index} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
