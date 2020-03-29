import React from "react";
import { Link } from "react-router-dom";

import Scaffold from "../components/shared/Scaffold"
import ActionCard from "../components/RoundedCard"

export default function () {
	return (
		<Scaffold>
			<Link to="/home">
				<ActionCard title="Fill: true" message="bg:#c00 | fg:#fff" fill={true} bg="#c00" fg="#fff" />
				<ActionCard title="Fill: false" message="bg:#fff | fg:#fff" fill={true} bg="#fff" fg="primary" />
				<ActionCard title="Order status" message="Fill: TRUE | bg: secondry" fill={true} bg="secondry" />
				<ActionCard title="Order status" message="Fill: FALSE | bg: primary" fill={false} bg="primary" fg="#fff" />
			</Link>
		</Scaffold >)
}