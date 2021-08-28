import React from 'react';
import {SiReddit} from "react-icons/all";
// css
import {HeaderWrapper, Logo, LogoTitle} from "./Header.styles";
// 컴포넌트
import HeaderAuth from "./HeaderAuth";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <HeaderWrapper>
            {/* 사이트 로고 */}
            <Logo to={'/'}>
                <SiReddit size={35}
                          color={'#2478FF'}
                />
                <LogoTitle>
                    BookRed
                </LogoTitle>
            </Logo>
            {/* 메뉴 */}
            <HeaderMenu/>
            {/* 로그인 하는 부분 */}
            <HeaderAuth/>
        </HeaderWrapper>
    )
}

export default Header;