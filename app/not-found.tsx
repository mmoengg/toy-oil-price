import { Metadata } from 'next';
import styles from '../styles/loading.module.css';

export const metadata: Metadata = {
	title: 'Not found',
};

export default function NotFound() {
	return (
		<div className={styles.container}>
			<h1>Not found!</h1>
		</div>
	);
}
