import React from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";

import { appColors } from "../config"
const styles = {
    avatar: {
        color: appColors.lightFont,
        backgroundColor: "#AED581"
    }
}
function HeaderUserAvatar() {
    return (<Link to="/profile"><Avatar style={styles.avatar} icon="user" /></Link>)
}

export default HeaderUserAvatar;
