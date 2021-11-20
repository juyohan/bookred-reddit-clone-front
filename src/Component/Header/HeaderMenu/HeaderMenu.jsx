import React from 'react';
import PropTypes from "prop-types";
// css
import {MenuItems} from "./HeaderMenu.styles";
// 컴포넌트
import HeaderSingleItem from "./HeaderSingleItem";

const HeaderMenu = ({activeMenu, menuList}) => {
    return (
        <MenuItems>
                {
                    menuList.length > 0 && menuList.map(item => (
                        <HeaderSingleItem key={`HeaderMenu_${item.id}`}
                                          isActive={activeMenu === item.id}
                                          item={item}
                        />
                    ))
                }
        </MenuItems>
    )
};

HeaderMenu.propTypes = {
    activeMenu: PropTypes.string, // 현재 누른 값
    // setActiveMenu : PropTypes.func, // 변화시켜줌
    menuList: PropTypes.array.isRequired, // 상단의 메뉴 리스트
}

export default HeaderMenu;