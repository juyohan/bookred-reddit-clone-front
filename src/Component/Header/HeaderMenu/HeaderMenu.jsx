import React, {useState} from 'react';
// css
import {MenuItems} from "./HeaderMenu.styles";
// 컴포넌트
import HeaderSingleItem from "./HeaderSingleItem";

const menuList = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'group',
        title: 'Group',
    },
    {
        id: 'post',
        title: 'Post',
    }
];

const HeaderMenu = () => {
    const [activeMenu, setActiveMenu] = useState('home');

    return (
        <MenuItems>
            {
                menuList.length > 0 && menuList.map(item => (
                    <HeaderSingleItem key={`HeaderMenu_${item.id}`}
                                      active={activeMenu === item.id}
                                      item={item}
                                      setActive={setActiveMenu}
                    />
                ))
            }
        </MenuItems>
    )
}

export default HeaderMenu;