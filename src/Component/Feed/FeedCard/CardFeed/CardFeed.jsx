import React from 'react';
import PropTypes from "prop-types";

const CardFeed = ({title, desc}) => {
    return (
        <>
            {title}
            {desc}
        </>
    )
}

CardFeed.propTypes = {
    title : PropTypes.string,
    desc : PropTypes.string,
}

export default CardFeed;