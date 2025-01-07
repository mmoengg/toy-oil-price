import styles from '../../styles/home/home-news-card.module.css';

export default function HomeNewsCard() {
	return (
		<div className={styles.container}>
			<div className={styles.main_img}></div>
			<div className={styles.text_wrap}>
				<div className={styles.title_wrap}>
					<div className={styles.title}>주유소 기름값 12주 연속 상승…더 오른다</div>
					<div className={styles.text}>기름값 상승세는 당분간 계속될 것으로 전망된다. 5일 한국석유공사 유가정보시스템 오피넷에 따르면 1월 첫째주(12월29일∼1월2일) 전국 주유소... 석유업계 관계자는 “최근 상승한 환율에 제품 가격 ...</div>
				</div>
				<div className={styles.info_wrap}>
					<div className={styles.date}>2025.01.05</div>
					<div className={styles.author}>경향 신문</div>
				</div>
			</div>
		</div>
	);
}
