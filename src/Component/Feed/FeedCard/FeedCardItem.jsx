import React from 'react';
import PropTypes from "prop-types";
import {CardWrapper} from "./FeedCard.styles";
// component
import CardUser from "./CardUser";
import CardFeed from "./CardFeed";
import CardLike from "./CardLike";

const FeedCardItem = ({feed}) => {
    return (
        <CardWrapper>
            <CardUser user={feed.user}/>
            <CardFeed title={feed.title}
                      desc={feed.desc}
            />
            {/*<CardLike like={feed.like}/>*/}
        </CardWrapper>
    )
}

FeedCardItem.propTypes = {
    feed : PropTypes.object,
}

export default FeedCardItem;