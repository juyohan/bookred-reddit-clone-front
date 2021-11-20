import React, {useState} from 'react';
import PropTypes from "prop-types";
// css
import {
    CardContent,
    CardFeedDesc,
    CardFeedTitle,
    CardFeedWrapper, UnfoldBtn,
} from "./CardFeed.styles";
// Component
import CardImage from "./CardImage";

const CardFeed = ({title, feedContent, fileNames}) => {
    const [open, setOpen] = useState(false);

    const openContent = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <CardFeedWrapper>
            <CardFeedTitle>
                <h3>
                    {title}
                </h3>
            </CardFeedTitle>
            <CardFeedDesc>
                <CardContent dangerouslySetInnerHTML={{
                    __html: feedContent
                }}
                             open={open}
                />
                <UnfoldBtn type={"button"}
                           onClick={openContent}
                           open={open}
                >
                    ... 더보기
                </UnfoldBtn>
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
    title: PropTypes.string,
    content: PropTypes.string,
    fileNames: PropTypes.object
}

export default CardFeed;