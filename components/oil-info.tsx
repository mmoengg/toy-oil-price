import styles from '../styles/oil-info.module.css';

interface IOil {
	TRADE_DT: string; // 거래 날짜
	PRODCD: string; // 제품 코드
	PRODNM: string; // 제품 이름
	PRICE: string; // 가격
	DIFF: string; // 가격 변동
}

interface OilInfoProps {
	oilData: IOil[]; // oilData는 IOil 객체의 배열입니다.
}

const dateConversion = (date: string) => {
	const year = date.slice(0, 4);
	const month = date.slice(4, 6);
	const day = date.slice(6, 8);
	return `${year}-${month}-${day}`;
};

export default function OilInfo({ oilData }: OilInfoProps) {
	return (
		<div className={styles.container}>
			<div className={styles.date}>
				<div>{dateConversion(oilData[0].TRADE_DT)}</div>
			</div>
			<div className={styles.prod_name}>
				{oilData.map((oil) => (
					<div>
						<strong className={styles.price_name}>{oil.PRODNM}</strong> : <span>{oil.PRICE}</span>
					</div>
				))}
			</div>
			<div>전날 대비: 5% &uarr; (7원)</div>
		</div>
	);
}
