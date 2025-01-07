import '../styles/global.css';
import '../styles/fonts.css';
import { Metadata } from 'next';
import Navigation from '../components/navigation';
import { auth } from './firebase';
import ProtectedRoute from '../components/protected-route';

export const metadata: Metadata = {
	title: {
		template: '%s | OIL PRICE',
		default: 'OIL PRICE',
	},
	description: 'The best movies on the best framework',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	const user = auth.currentUser;

	return (
		<html lang='en'>
			<body className={user ? 'container' : ''}>
				{user && <Navigation />}
				<ProtectedRoute>{children}</ProtectedRoute>
			</body>
		</html>
	);
}
