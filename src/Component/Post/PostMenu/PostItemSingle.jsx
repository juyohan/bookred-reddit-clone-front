import React from 'react';
import PropTypes from "prop-types";
// css
import {MenuItemButton} from "./PostMenu.styles";

const PostItemSingle = ({item, activeItem, setValue}) => {

    const handleToggleMenu = (e) => {
        e.preventDefault();
        setValue(item.id);
    }

    return (
        <MenuItemButton isActive={activeItem}
                        onClick={handleToggleMenu}
        >
            {item.icon}
            {item.title}
        </MenuItemButton>
    )
}

PostItemSingle.propTypes = {
    item : PropTypes.object,
    activeItem : PropTypes.bool,
    setValue : PropTypes.func,
}

export default PostItemSingle;