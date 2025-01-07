import '../styles/global.css';
import '../styles/fonts.css';
import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
	title: {
		template: '%s | OIL PRICE',
		default: 'OIL PRICE',
	},
	description: 'The best movies on the best framework',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
