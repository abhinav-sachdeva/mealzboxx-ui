import React from "react";
import { Spin } from 'antd';

function Loader() {
	return (<div style={{ height: "100vh", textAlign: "center", paddingTop: "50%" }}><Spin /></div>);
}

export default Loader
