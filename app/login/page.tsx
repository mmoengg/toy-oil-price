import Link from 'next/link';
import styles from '../../styles/login.module.css';

export default function Login() {
	return (
		<div className={styles.container}>
			<div className={styles.login_wrap}>
				<h1 className={styles.title}>로그인</h1>
				<div className={styles.input_wrap}>
					<input type='text' placeholder='아이디' />
					<input type='password' placeholder='비밀번호' />
					<button type='submit'>로그인</button>
				</div>
				<div className={styles.auth_wrap}>
					<div className={styles.auth_text}>
						계정이 없으신가요? &rarr; <Link href='/join'>회원가입</Link>
					</div>
					<div className={styles.github}>github</div>
				</div>
			</div>
		</div>
	);
}
