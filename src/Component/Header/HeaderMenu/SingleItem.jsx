import React from 'react';
import PropTypes from 'prop-types';
// css
import {Item} from "./HeaderMenu.styles";

const SingleItem = ({item, active}) => {
    return (
        <Item to={`/${item.id}`} active={`${active}`}>
            {item.title}
        </Item>
    )
}

SingleItem.propTypes = {
    active: PropTypes.bool,
    item: PropTypes.oneOfType([
        PropTypes.object,
    ]).isRequired,
}

SingleItem.defaultProps = {
    active: false,
}

export default SingleItem;