import styles from '../../styles/home/home-fluctuations.module.css';

export default function HomeFluctuations() {
	return (
		<div className={styles.container}>
			<div className={styles.title_wrap}>
				<h2 className={styles.title}>변동</h2>
			</div>
			<div className={styles.chart}></div>
		</div>
	);
}
