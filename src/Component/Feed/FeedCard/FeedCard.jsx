import React from 'react';
import PropTypes from "prop-types";
import FeedCardItem from "./FeedCardItem";

const FeedCard = ({feedsInfo}) => {
    // console.log(feedsInfo);
    return (
        <>
            {
                feedsInfo.length > 0 && feedsInfo.map(feed => (
                    <FeedCardItem key={`Feed_${feed.feedId}`}
                                  feed={feed}
                    />
                ))
            }
        </>
    )
}

FeedCard.propTypes = {
    feedsInfo : PropTypes.array,
}

export default FeedCard;