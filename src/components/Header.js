import React from 'react';
import { PageHeader, Affix } from 'antd';
import { appColors, appConstants } from "../config"
import { useLocation } from "react-router"
import AvatarIcon from "./HeaderUserAvatar"
const styles = {
    header: {
        backgroundColor: appColors.primary,
        color: appColors.lightFont,
        borderBottom: '1px solid #cff09e',
        height: "50px"
    },
    avatar: {
        color: "#FFFFFF",
        backgroundColor: "#AED581"
    },
    hidden: { display: "none" }
}
function Header(props) {
    const location = useLocation()
    return (
        <Affix style={location.pathname !== '/' ? {} : styles.hidden}>
            <PageHeader style={styles.header} title={appConstants.appDisplayName} subTitle={<AvatarIcon />} />
        </Affix>)
}

export default Header;
