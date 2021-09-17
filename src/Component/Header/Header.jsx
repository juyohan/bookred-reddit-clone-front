import React, {useContext, useEffect, useState} from 'react';
import {SiReddit} from "react-icons/all";
// css
import {HeaderWrapper, Logo, LogoTitle} from "./Header.styles";
// 컴포넌트
import HeaderAuth from "./HeaderAuth";
import HeaderMenu from "./HeaderMenu";
// Context API
import GlobalContext from "../../Context/GlobalContext";

const menuList = [
    {
        id: '/home',
        title: 'Home',
    },
    {
        id: '/group',
        title: 'Group',
    },
    {
        id: '/post',
        title: 'Post',
    }
];

const Header = () => {
    const [activeMenu, setActiveMenu] = useState();
    const [path, setPath] = useContext(GlobalContext);
    const {currentPath} = path.router;

    // post 페이지에서 새로고침을 했을 때, 헤더에 Post 밑에 표시하기 위함
    useEffect(() => {
        if (currentPath === '/')
            setActiveMenu('/home')
        else
            setActiveMenu(currentPath);
    }, [currentPath])

    // 로고를 클릭했을 때, 상단 바에서 Home에 표시가 될 수 있도록 함
    const onClickLogo = () => {
        setActiveMenu('/home')
    }

    return (
        <HeaderWrapper>
            {/* 사이트 로고 */}
            <Logo to={'/'}
                  onClick={onClickLogo}
            >
                <SiReddit size={35}
                          color={'#2478FF'}
                />
                <LogoTitle>
                    BookRed
                </LogoTitle>
            </Logo>
            {/* 메뉴 */}
            <HeaderMenu menuList={menuList}
                        activeMenu={activeMenu}
            />
            {/* 로그인 하는 부분 */}
            <HeaderAuth/>
        </HeaderWrapper>
    )
}

export default Header;