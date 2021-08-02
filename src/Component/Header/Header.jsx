import React from 'react';
import {SiReddit} from "react-icons/all";
// css
import {HeaderWrapper, Logo} from "./Header.styles";
// 컴포넌트
import HeaderAuth from "./HeaderAuth";
import HeaderMenu from "./HeaderMenu";

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