import React from 'react';
import PropTypes from "prop-types";
// css
import {
    CardContent,
    CardFeedDesc,
    CardFeedTitle,
    CardFeedWrapper,
} from "./CardFeed.styles";
// Component
import CardImage from "./CardImage";

const CardFeed = ({title, feedContent, fileNames}) => {
    // console.log(fileNames);
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
                     __html : feedContent
                 }}>
                 </CardContent>
                dlkjsdf
            </CardFeedDesc>
            {
                fileNames.length > 0 ?
                    <CardImage fileNames={fileNames}/>
                    : null
            }
        </CardFeedWrapper>
    )
}

CardFeed.propTypes = {
    title : PropTypes.string,
    content : PropTypes.string,
    fileNames : PropTypes.object
}

export default CardFeed;