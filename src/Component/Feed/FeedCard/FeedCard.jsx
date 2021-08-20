import React from 'react';
import PropTypes from "prop-types";
import FeedCardItem from "./FeedCardItem";

const FeedCard = ({feedsInfo}) => {
    return (
        <>
            {
                Array.from(feedsInfo).map(feed => (
                    <FeedCardItem key={`Feed_${feed.id}`}
                                  feed={feed}
                    />
                ))
            }
        </>
    )
}

FeedCard.propTypes = {
    feedsInfo : PropTypes.object,
}

export default FeedCard;