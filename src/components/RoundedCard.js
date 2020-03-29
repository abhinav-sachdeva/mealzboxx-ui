import React from 'react';
import { Card } from 'antd';
import { appColors } from "../config"
const mapToAppColors = (val) => {
	if (!val) return "#000";
	val = val.toLowerCase()
	if (val === "primary") return appColors.primary
	if (val === "secondry") return appColors.secondry
	return val
}
const prepStyles = (props) => {

	return {
		roundedCard: {
			borderRadius: "5px",
			padding: "2px 5px",
			marginBottom: "3px",
			backgroundColor: props.fill === true ? mapToAppColors(props.bg) ? mapToAppColors(props.bg) : appColors.secondry : "transparent",
			color: mapToAppColors(props.fg) ? mapToAppColors(props.fg) : appColors.darkFont,
			fontWeight: 600,
			border: props.fill === true ? "" : '1px solid',
			borderColor: mapToAppColors(props.bg) ? mapToAppColors(props.bg) : appColors.secondry,
		},
		cardTitle: {
			maxWidth: "83%",
			display: "inline-block"
		}
	}
}
function RoundedCard(props) {
	const styles = prepStyles(props)
	return (
		<Card style={styles.roundedCard} bordered={false}>
			<h3 style={styles.cardTitle}>{props.title || ""}</h3>
			{props.icon ? <img alt="icon" src={props.icon} style={{ float: "right", ...props.iconStyles }} /> : null}
			<p>{props.message || ""}</p>
		</Card>
	)
}

export default RoundedCard;
