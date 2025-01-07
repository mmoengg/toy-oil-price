import styles from '../../styles/home/home-news.module.css';
import HomeNewsCard from './home-news-card';

export default function HomeNews() {
	return (
		<div className={styles.container}>
			<div className={styles.title_wrap}>
				<h2 className={styles.title}>뉴스</h2>
			</div>
			<div>
				<HomeNewsCard />
			</div>
		</div>
	);
}
