import React from "react";
// import { Card } from 'antd';
import { Link } from "react-router-dom"

import Scaffold from "../components/shared/Scaffold"
import ActionCard from "../components/RoundedCard"
import ListActionItem from "../components/ListActionItem"
import { appColors } from "../config"

import walletImg from "../assets/img/purse.png"
import locationImg from "../assets/img/location.png"

const greetings = ["Hello", "Hey", "Hi", "Howdy"]
const styles = {
	roundedCard: {
		borderRadius: "5px",
		padding: "2px 5px",
		marginBottom: "3px",
		backgroundColor: "#87b237",
		color: "#fff",
		fontWeight: 600,
		borderColor: appColors.secondry,
		marginTop: "5px"
	},
	cardTitle: {
		maxWidth: "83%",
		display: "inline-block"
	}
}
const addresses = [{
	id: 1,
	type: "office",
	location: "Some office address, Building #2, Area name, City"
},
{
	id: 2,
	type: "home",
	location: "Some home address, Area name, City"
}]
export default function ({ name }) {
	return (
		<Scaffold>
			<h2 style={{ color: "#fff" }}>
				{greetings[Math.floor(Math.random() * (greetings.length))]} {'Abhinav'}
			</h2>

			<ActionCard title="Rs. 540.00" message="Wallet balance"
				fill={true} bg="#87b237" iconStyles={{ width: "15%" }} icon={walletImg} />

			<ListActionItem heading="Your Addresses"
				styles={{ backgroundColor: "#87b237" }} icon={locationImg}>
				{addresses.map(e => <div key={e.id}><p>{e.type.toUpperCase()}</p><strong>{e.location}</strong>
					<hr style={{ borderColor: "#9bc53d" }} /></div>)}
			</ListActionItem>

			<Link to="/"><h3 style={{ color: "#ddd", textAlign: "right" }}>LOGOUT</h3></Link>

		</Scaffold >)
}