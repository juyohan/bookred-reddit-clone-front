import React from 'react';
import {SideMenuWrapper} from "./SideBar.styles";
import SideBarMenu from "./SideBarMenu";
import TopUsers from "./TopUser";
import BookRedInfo from "./BookRedInfo";

const SideBar = () => {
    return (
        <SideMenuWrapper>
            <SideBarMenu/>
            <TopUsers/>
            <BookRedInfo/>
        </SideMenuWrapper>
    )
}

export default SideBar;