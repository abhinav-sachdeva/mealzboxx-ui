import React from 'react';
import { PageHeader } from 'antd';
import { appColors, appConstants } from "../config"
const styles = {
    header: {
        backgroundColor: appColors.primary,
        color: appColors.lightFont,
        borderBottom: '1px solid rgb(235, 237, 240)',
    }
}
function Header() {
    return (<PageHeader
        style={styles.header}
        // onBack={() => null}
        title={appConstants.appDisplayName}
        subTitle=""
    />)
}

export default Header;
