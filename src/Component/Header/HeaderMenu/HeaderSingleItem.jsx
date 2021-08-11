import React from 'react';
import PropTypes from 'prop-types';
// css
import {Item} from "./HeaderMenu.styles";

const HeaderSingleItem = ({item, active}) => {
    return (
        <Item to={`/${item.id}`} active={active}>
            {item.title}
        </Item>
    )
}

HeaderSingleItem.propTypes = {
    active: PropTypes.bool,
    item: PropTypes.oneOfType([
        PropTypes.object,
    ]).isRequired,
}

HeaderSingleItem.defaultProps = {
    active: false,
}

export default HeaderSingleItem;