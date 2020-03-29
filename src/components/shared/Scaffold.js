import React from "react";
import { Row, Col } from 'antd';

function Scaffold(props) {
	return (
		<div>
			<Row>
				<Col style={{ paddingLeft: "3px", paddingRight: "3px", ...props.styles }} span={24} >
					{props.children}
				</Col>
			</Row>
		</div>
	);
}

export default React.memo(Scaffold)
