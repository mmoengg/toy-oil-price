import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCo-P9NdEPtGX8uQEMaKS7AxVBJmSW_v90',
	authDomain: 'toy-oil-price.firebaseapp.com',
	projectId: 'toy-oil-price',
	storageBucket: 'toy-oil-price.firebasestorage.app',
	messagingSenderId: '199433616761',
	appId: '1:199433616761:web:59a5ccc95e0c360b8f83a8',
	measurementId: 'G-Y98YZXXEJP',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
