import React from "react";
import { Row, Col } from 'antd';
const styles = {
	root: {
		padding: "3px",
		backgroundRepeat: "no-repeat",
		backgroundPositionX: "100%",
		backgroundPositionY: "50%",
		backgroundSize: "15%"
	}
}

function ListItem(props) {
	return (
		<div>
			<Row>
				<Col style={{ ...styles.root, backgroundImage: `url(${props.icon})`, ...props.styles }} span={24} >
					{props.heading && <h3 style={{ fontWeight: "bold" }}>{props.heading}</h3>}
					{props.subheading && <small>{props.subheading}</small>}
					<div style={{ maxWidth: "84%" }}>{props.children}</div>
					{/* <img src={props.icon} /> */}
				</Col>
			</Row>
		</div>
	);
}

export default React.memo(ListItem)
