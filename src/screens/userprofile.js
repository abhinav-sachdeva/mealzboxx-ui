import React from "react";
import { Link } from "react-router-dom"

import Scaffold from "../components/shared/Scaffold"

const greetings = ["Hello", "Hey", "Hi", "Howdy"]

export default function ({ name }) {
	return (
		<Scaffold>
			<h2>{greetings[Math.floor(Math.random() * (greetings.length))]} {name}</h2>
			<Link to="/"><p>LOGIN</p></Link>
		</Scaffold >)
}