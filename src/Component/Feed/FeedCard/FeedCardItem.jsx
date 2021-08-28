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
import FeedDialog from "../../Dialog/FeedDialog";

const FeedCardItem = ({feed}) => {
    const [dialog, setDialog] = useContext(DialogContext);

    const onClickFeed = () => {
        setDialog.setFeedDialog(true);
    }

    return (
        <>
            <CardWrapper type={'button'}
                         onClick={onClickFeed}
            >
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
            {
                dialog.feedDialog
                    ? <FeedDialog feed={feed} />
                    : null
            }
        </>
    )
}

FeedCardItem.propTypes = {
    feed: PropTypes.object,
}

export default FeedCardItem;