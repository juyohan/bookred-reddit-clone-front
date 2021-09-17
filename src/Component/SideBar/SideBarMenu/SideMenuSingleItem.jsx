import React from 'react';
import {SideMenuItem} from "./SideBarMenu.styles";
import PropTypes from "prop-types";

const SideMenuSingleItem = ({item, isActive}) => {
    if (!item)
        return null;

    return (
        <SideMenuItem to={`/${item.id}`}
                      isActive={`${isActive}`}
        >
            {item.icon}
            {item.title}
        </SideMenuItem>
    );
}

SideMenuSingleItem.propTypes = {
    item : PropTypes.oneOfType([
        PropTypes.object
    ]).isRequired,
    isActive : PropTypes.bool
}

SideMenuSingleItem.defaultProps = {
    isActive : false
}

export default SideMenuSingleItem;