import React, { useState } from "react";
import Scaffold from "../components/shared/Scaffold"
import pattern from "../assets/img/pattern.svg"

import { Form, Icon, Input, Button } from 'antd';
import { Redirect } from "react-router";
import { connect } from "react-redux"
import { userActions } from "../store/actions/index"

const styles = {
	formHeader: {
		overflow: "hidden",
		textAlign: "right"
	},
	appName: {
		color: "#fff",
		marginTop: "-20px",
		marginBottom: "0px",
		fontWeight: 600,
		fontSize: "48px",
		textShadow: "0px 2px 5px #cccccc",
		textAlign: "center"
	},
	heroImg: {
		marginTop: "-200px",
		animation: `spin 10s linear infinite`
	}
}

function LoginScreen(props) {
	const [phone, setPhone] = useState(null);
	const [pass, setPass] = useState(null);

	const handlePhone = (evt) => {
		if (evt.target.value.length > 10) return;
		let val = evt.target.value.replace(/\D/g, '')
		setPhone(val);
	}

	const handlePass = (evt) => {
		if (evt.target.value.length > 12) return;
		setPass(evt.target.value);
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		props.attemptLogin({ phone, pass })
	}

	if (props.auth.token) return <Redirect to="/home" />

	return (
		<Scaffold styles={{ minHeight: "100vh", backgroundColor: "#9BC53D" }}>
			<Form onSubmit={(e) => { e.preventDefault(); console.log(e) }} style={styles.form}>
				<Form.Item>
					<div style={styles.formHeader}>
						<img src={pattern} style={styles.heroImg} alt="Food plate" />
						<h1 className="slide-in-blurred-bottom" style={styles.appName}>MealzBoxx</h1>
					</div>
				</Form.Item>
				<Form.Item>
					<Input style={{ width: "50%", float: "left" }} type="phone"
						prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="Phone number" onChange={handlePhone} value={phone}
					/>
					<Input style={{ width: "50%", float: "right" }}
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password" placeholder="Password" onChange={handlePass} value={pass}
					/>
					{/* <Link to="/home"> */}
					<Button block htmlType="submit" disabled={props.auth.inProgress} onClick={handleSubmit} className="login-form-button" style={{ border: "none", color: "#FFFFFF", backgroundColor: "#3b8686" }}>
						Log in
					</Button>
					{/* </Link> */}
					<div style={{}}>
						<a style={{ color: "#FFFFFF", float: "right" }} href="http://google.com" >
							Forgot password
          </a>

						<Button className="login-form-button" style={{ width: "50%", color: "#3b8686", backgroundColor: "#cff09e" }}>
							Sign up
          </Button>
					</div>
				</Form.Item>
			</Form>
		</Scaffold>
	);
}
const mapState = (state) => ({
	auth: state.auth
});
const mapDispatch = (dispatch) => ({
	attemptLogin: (formData) => dispatch(userActions.loginUser(formData))
})
export default connect(mapState, mapDispatch)(LoginScreen)
