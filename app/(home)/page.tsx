import OilInfo from '../../components/oil-info';
import styles from '../../styles/home.module.css';
import { API_URL } from '../contants';
import { parseStringPromise } from 'xml2js';

async function getOilInfo() {
	try {
		const json = [
			{
				"TRADE_DT": "20250106",
				"PRODCD": "B034",
				"PRODNM": "고급휘발유",
				"PRICE": "1923.59",
				"DIFF": "+4.43"
			},
			{
				"TRADE_DT": "20250106",
				"PRODCD": "B027",
				"PRODNM": "휘발유",
				"PRICE": "1683.84",
				"DIFF": "+3.28"
			},
			{
				"TRADE_DT": "20250106",
				"PRODCD": "D047",
				"PRODNM": "자동차용경유",
				"PRICE": "1530.02",
				"DIFF": "+3.66"
			},
			{
				"TRADE_DT": "20250106",
				"PRODCD": "C004",
				"PRODNM": "실내등유",
				"PRICE": "1316.92",
				"DIFF": "+0.98"
			},
			{
				"TRADE_DT": "20250106",
				"PRODCD": "K015",
				"PRODNM": "자동차용부탄",
				"PRICE": "1059.01",
				"DIFF": "+0.20"
			}
		]
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
	// const response = await fetch(API_URL);
	// const json = await response.json();
	// return json;
}

export default async function Page() {
	const oils = await getOilInfo();
	console.log(oils);
	return (
		<div className={styles.container}>
			<OilInfo oilData={oils} />
		</div>
	);
}
