'use client'; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../app/firebase';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (!user) {
				router.push('/login');
			} else {
				setLoading(false);
			}
		});

		return () => unsubscribe();
	}, [router]);

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	return children;
}

// 'use client';

// import { useEffect } from 'react';
// import { auth } from '../app/firebase';
// import { useRouter } from 'next/navigation';

// export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
// 	// const navigate = useRouter();
// 	// const user = auth.currentUser;
// 	// if (user === null) {
// 	// 	return <Navigate to='/login' />;
// 	// }
// 	// return children;

// 	return (props: any) => {
// 		const router = useRouter();

// 		useEffect(() => {
// 			const unsubscribe = auth.onAuthStateChanged((user) => {
// 				if (!user) {
// 					router.push('/login');
// 				}
// 			});

// 			return () => unsubscribe();
// 		}, [router]);

// 		return children;
// 	};
// }
