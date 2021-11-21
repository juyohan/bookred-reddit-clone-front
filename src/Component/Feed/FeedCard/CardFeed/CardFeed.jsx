import React from 'react';
import PropTypes from "prop-types";
// css
import {
    CardFeedTitle,
    CardFeedWrapper,
} from "./CardFeed.styles";
// Component
import CardImage from "./CardImage";
import CardContent from "./CardContent";

const CardFeed = ({title, feedContent, fileNames}) => {
    return (
        <CardFeedWrapper>
            <CardFeedTitle>
                <h3>
                    {title}
                </h3>
            </CardFeedTitle>
            <CardContent feedContent={feedContent}/>
            {
                fileNames.length > 0 ?
                    <CardImage fileNames={fileNames}/>
                    : null
            }
        </CardFeedWrapper>
    )
}

CardFeed.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    fileNames: PropTypes.object
}

export default CardFeed;