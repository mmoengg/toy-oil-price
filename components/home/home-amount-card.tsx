import styles from '../../styles/home/home-amount-card.module.css';

export default function HomeAmountCard() {
	return (
		<div className={styles.container}>
			<div className={styles.icon}></div>
			<div className={styles.card}>
				<div className={styles.oil_box}>
					<div className={styles.oil_type}>고급휘발유</div>
				</div>
				<div className={styles.price_info_wrap}>
					<div className={styles.info_box}>
						<div className={styles.title}>금액</div>
						<div className={styles.text}>1923.59</div>
					</div>
					<div className={styles.info_box}>
						<div className={styles.title}>전날 대비</div>
						<div className={styles.text}>+4.43</div>
					</div>
				</div>
			</div>
		</div>
	);
}
