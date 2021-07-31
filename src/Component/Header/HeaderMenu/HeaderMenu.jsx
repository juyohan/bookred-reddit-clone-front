import React from 'react';
import PropTypes from "prop-types";
import {MenuItems} from "./HeaderMenu.styles";
import SingleItem from "./SingleItem";

const menuList = [
    {
        id : 'home',
        title : 'Home',
    },
    {
        id : 'group',
        title : 'Group',
    },
    {
        id : 'post',
        title : 'Post',
    }
];

const HeaderMenu = ({ activeMenu }) => (<MenuItems>
        {
            menuList.map(item => (
                <SingleItem key={`HeaderMenu_${item.id}`}
                            active={activeMenu === item.id}
                            item={item}
                />
            ))
        }
    </MenuItems>
)

HeaderMenu.propTypes = {
    activeMenu: PropTypes.string,
}

HeaderMenu.defaultProps = {
    activeMenu: 'home',
};

export default HeaderMenu;