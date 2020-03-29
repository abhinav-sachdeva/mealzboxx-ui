import React from "react";
import { Row, Col, Card } from 'antd';

import BreakfastImg from "../assets/img/breakfast.png"
import LunchImg from "../assets/img/lunch.png"
import DinnerImg from "../assets/img/dinner.png"
// import { appColors } from "../config"

const cardsData = [
	{
		title: "Breakfast",
		desc: "Breakfast",
		icon: `url(${BreakfastImg})`
	},
	{
		title: "Lunch",
		desc: "",
		icon: `url(${LunchImg})`
	},
	{
		title: "Dinner",
		desc: "",
		icon: `url(${DinnerImg})`
	}
];
const styles = {
	cardStyles: {
		backgroundColor: "#87b237", //appColors.primary,
		backgroundRepeat: "no-repeat",
		backgroundPositionY: "100%",
		backgroundPositionX: "right",
		backgroundSize: "128px",
		height: "220px",
		border: "none"
	},
	cardText: {
		color: "#ffffff",
		textAlign: "center",
		paddingTop: "25px",
		fontWeight: 600,
		fontSize: "24px"
	}
}
export default function () {
	return (
		<Row gutter={5} style={{ paddingTop: "5px", marginBottom: "5px" }}>
			{
				cardsData.map((cardDetails, ind) => (
					<Col span={8} key={ind} >
						<Card bordered={true} style={{
							...styles.cardStyles, backgroundImage: cardDetails.icon, padding: "2px"
						}}>
							<h2 style={styles.cardText}> {cardDetails.title}</h2>
						</Card>
					</Col>
				))
			}
		</Row>
	)
}