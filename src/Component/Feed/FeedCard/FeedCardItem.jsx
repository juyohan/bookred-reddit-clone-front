import React, {useContext} from 'react';
import PropTypes from "prop-types";
// css
import {CardContentWrapper, CardWrapper} from "./FeedCard.styles";
// component
import CardUser from "./CardUser";
import CardFeed from "./CardFeed";
import CardLike from "./CardLike";
import CardBottom from "./CardBottom";
// Context API
import DialogContext from "../../../Context/DialogContext";
// function
import {TimeCalculation} from "../../../Helper/TimeCalculation";
import {LikeCountFun} from "../../../Helper/LikeCountFun";

const FeedCardItem = ({feed}) => {
    // console.log(feed);
    const [dialog, setDialog] = useContext(DialogContext);

    const onClickFeed = () => {
        setDialog.setFeedDialog(true);
    }

    return (
        <>
            {/* 해당 피드를 클릭 할 경우 이동*/}
            <CardWrapper type={'button'}
                         onClick={onClickFeed}
            >
                <CardLike likeCount={LikeCountFun(feed.likeCount)}
                          likeType={feed.likeType}
                          feedId={feed.feedId}
                />
                <CardContentWrapper>
                    <CardUser username={feed.username}
                              time={TimeCalculation(feed.createDate)}
                    />
                    <CardFeed title={feed.title}
                              feedContent={feed.feedContent}
                              fileNames={feed.fileNames}
                    />
                    <CardBottom commentCount={feed.commentCount}
                                path={feed.path}
                                feedKey={feed.feedKey}
                    />
                </CardContentWrapper>
            </CardWrapper>
            {/*{*/}
            {/*    dialog.feedDialog*/}
            {/*        ? <FeedDialog feed={feed} />*/}
            {/*        : null*/}
            {/*}*/}
        </>
    )
}

FeedCardItem.propTypes = {
    feed: PropTypes.object,
}

export default FeedCardItem;