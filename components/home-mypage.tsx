import styles from '../styles/home/home-mypage.module.css';

export default function HomeMypage() {
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.profile_img}>
					<img></img>
				</div>
				<div className={styles.profile_name}>
					<p>안녕하세요,</p>
					<p>mj님!</p>
				</div>
			</div>
			<ul className={styles.oil_info}>
				<li>
					<div className={styles.oil_icon}></div>
					<div className={styles.info_box}>
						<div className={styles.info_text}>1648.84</div>
						<div className={styles.info_title}>휘발유</div>
					</div>
				</li>
				<li>
					<div className={styles.oil_icon}></div>
					<div className={styles.info_box}>
						<div className={styles.info_text}>+4.6</div>
						<div className={styles.info_title}>전날 대비</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
