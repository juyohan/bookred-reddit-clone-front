import React from 'react';
import PropTypes from "prop-types";
// css
import {CardContent, CardFeedDesc, CardFeedTitle, CardFeedWrapper} from "./CardFeed.styles";

const CardFeed = ({title, content}) => {
    return (
        <CardFeedWrapper>
            <CardFeedTitle>
                <h3>
                    {title}
                </h3>
            </CardFeedTitle>
            <CardFeedDesc style={{
                maxHeight : '120px'
            }}
            >
                 <CardContent dangerouslySetInnerHTML={{
                     __html : content
                 }}>
                 </CardContent>
            </CardFeedDesc>
        </CardFeedWrapper>
    )
}

CardFeed.propTypes = {
    title : PropTypes.string,
    content : PropTypes.string,
}

export default CardFeed;