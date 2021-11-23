import React from 'react';
import PropTypes from "prop-types";
import FbImageLibrary from 'react-fb-image-grid'
// css
import {
    CardFeedTitle,
    CardFeedWrapper,
} from "./CardFeed.styles";
// Component
import CardContent from "./CardContent";

const CardFeed = ({title, feedContent, fileNames}) => {
    const imageList = [
        'http://localhost:8080/api/file/image?fileName=SpringSecurity.png',
        'http://localhost:8080/api/file/image?fileName=jpa.png'];

    return (
        <CardFeedWrapper>
            <CardFeedTitle>
                <h3>
                    {title}
                </h3>
            </CardFeedTitle>
            <CardContent feedContent={feedContent}/>
            {
                imageList.length > 0 ?
                    <FbImageLibrary images={imageList} countFrom={5}/>
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