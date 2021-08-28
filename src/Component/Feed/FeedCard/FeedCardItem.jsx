import React from 'react';
import PropTypes from "prop-types";
// css
import {CardContentWrapper, CardWrapper} from "./FeedCard.styles";
// component
import CardUser from "./CardUser";
import CardFeed from "./CardFeed";
import CardLike from "./CardLike";
import CardBottom from "./CardBottom";

const FeedCardItem = ({feed}) => {
    return (
        <CardWrapper>
            <CardLike like={feed.likeCount}
                      likeType={feed.likeType}
                      feedId={feed.id}
            />
            <CardContentWrapper>
                <CardUser username={feed.username}
                          time={feed.createDate}
                />
                <CardFeed title={feed.title}
                          desc={feed.desc}
                />
                <CardBottom commentCount={feed.commentCount}
                            path={feed.path}
                />
            </CardContentWrapper>
        </CardWrapper>
    )
}

FeedCardItem.propTypes = {
    feed: PropTypes.object,
}

export default FeedCardItem;