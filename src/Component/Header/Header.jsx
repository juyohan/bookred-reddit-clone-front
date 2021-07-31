import React from 'react';
import HeaderMenu from "./HeaderMenu";
import {HeaderWrapper, Logo} from "./Header.styles";
import {SiReddit} from "react-icons/all";
import HeaderAuth from "./HeaderAuth";

const Header = () => {

    return (
        <HeaderWrapper>
            <Logo to={'/'}>
                <SiReddit/>
            </Logo>
            <HeaderMenu/>
            <HeaderAuth/>
        </HeaderWrapper>
    )
}

export default Header;