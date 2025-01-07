import HomeAmount from '../../components/home-amount';
import HomeMypage from '../../components/home-mypage';
import OilInfo from '../../components/oil-info';
import styles from '../../styles/home/home.module.css';
import { API_URL } from '../contants';
import { parseStringPromise } from 'xml2js';

async function getOilInfo() {
	try {
		const oilData = [
			{
				TRADE_DT: '20250106',
				PRODCD: 'B034',
				PRODNM: '고급휘발유',
				PRICE: '1923.59',
				DIFF: '+4.43',
			},
			{
				TRADE_DT: '20250106',
				PRODCD: 'B027',
				PRODNM: '휘발유',
				PRICE: '1683.84',
				DIFF: '+3.28',
			},
			{
				TRADE_DT: '20250106',
				PRODCD: 'D047',
				PRODNM: '자동차용경유',
				PRICE: '1530.02',
				DIFF: '+3.66',
			},
			{
				TRADE_DT: '20250106',
				PRODCD: 'C004',
				PRODNM: '실내등유',
				PRICE: '1316.92',
				DIFF: '+0.98',
			},
			{
				TRADE_DT: '20250106',
				PRODCD: 'K015',
				PRODNM: '자동차용부탄',
				PRICE: '1059.01',
				DIFF: '+0.20',
			},
		];

		// [
		// 	{
		// 		"TRADE_DT": "20250107",
		// 		"PRODCD": "B034",
		// 		"PRODNM": "고급휘발유",
		// 		"PRICE": "1924.90",
		// 		"DIFF": "+1.46"
		// 	},
		// 	{
		// 		"TRADE_DT": "20250107",
		// 		"PRODCD": "B027",
		// 		"PRODNM": "휘발유",
		// 		"PRICE": "1686.41",
		// 		"DIFF": "+2.98"
		// 	},
		// 	{
		// 		"TRADE_DT": "20250107",
		// 		"PRODCD": "D047",
		// 		"PRODNM": "자동차용경유",
		// 		"PRICE": "1533.16",
		// 		"DIFF": "+3.45"
		// 	},
		// 	{
		// 		"TRADE_DT": "20250107",
		// 		"PRODCD": "C004",
		// 		"PRODNM": "실내등유",
		// 		"PRICE": "1317.46",
		// 		"DIFF": "+0.56"
		// 	},
		// 	{
		// 		"TRADE_DT": "20250107",
		// 		"PRODCD": "K015",
		// 		"PRODNM": "자동차용부탄",
		// 		"PRICE": "1058.94",
		// 		"DIFF": "-0.13"
		// 	}
		// ]
		// const response = await fetch(API_URL);
		// const text = await response.text(); // XML로 응답을 받음
		// const result = await parseStringPromise(text); // XML 파싱

		// // 필요한 데이터 추출
		// const oils = result.RESULT.OIL;
		// const oilData = oils.map((oil) => ({
		// 	TRADE_DT: oil.TRADE_DT[0],
		// 	PRODCD: oil.PRODCD[0],
		// 	PRODNM: oil.PRODNM[0],
		// 	PRICE: oil.PRICE[0],
		// 	DIFF: oil.DIFF[0],
		// }));

		return oilData;
	} catch (error) {
		console.error('Error fetching oil info:', error);
	}
}

export default async function Page() {
	const oils = await getOilInfo();
	console.log(oils);
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<HomeMypage />
				<HomeAmount />
			</div>
			<div className={styles.center}></div>
			<div className={styles.right}></div>
			{/* <OilInfo oilData={oils} /> */}
		</div>
	);
}
