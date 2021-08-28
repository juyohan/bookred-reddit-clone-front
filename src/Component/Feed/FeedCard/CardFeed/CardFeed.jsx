import React from 'react';
import PropTypes from "prop-types";
import {CardFeedDesc, CardFeedTitle, CardFeedWrapper} from "./CardFeed.styles";

const CardFeed = ({title, desc}) => {
    return (
        <CardFeedWrapper>
            <CardFeedTitle>
                <h3>
                    {title}
                </h3>
            </CardFeedTitle>
            <CardFeedDesc>
                <p>
                    {desc}
                </p>
            </CardFeedDesc>
        </CardFeedWrapper>
    )
}

CardFeed.propTypes = {
    title : PropTypes.string,
    desc : PropTypes.string,
}

export default CardFeed;