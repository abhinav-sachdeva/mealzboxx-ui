import React from "react";
import { Link } from 'react-router-dom';

import Scaffold from "../components/shared/Scaffold"
import HeroCards from "../components/HeroCardList"
import ActionCard from "../components/RoundedCard"

import subscriptionImg from "../assets/img/subscription.png"
import deliveryImg from "../assets/img/delivery-man.png"

export default function () {
	return (
		<Scaffold styles={{ minHeight: "90vh" }}>
			<HeroCards />
			<Link to="/orders">
				<ActionCard title="Order status variants" message="Click here to see more" icon={deliveryImg} iconStyles={{ width: "15%" }} fill={true} bg="secondry" />
			</Link>
			<Link to="/subscription">
				<ActionCard title="My Subscription" message="" fill={true} bg="#bdcdd4" icon={subscriptionImg} iconStyles={{ width: "15%" }} />
			</Link>
			<Link to="/orders">
				<ActionCard title="We're hungry!" message="" fill={false} bg="#fff" fg="#fff" />
			</Link>
		</Scaffold >)
}