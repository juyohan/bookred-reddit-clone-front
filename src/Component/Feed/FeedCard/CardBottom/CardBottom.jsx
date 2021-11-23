import React, {useCallback, useContext, useRef, useState} from "react";
import PropTypes from "prop-types";
// css
import {CardBottomWrapper, CommentButton, EtcButton, EtcButtonDiv, ShareButton} from "./CardBottom.styles";
// Icons
import {AiOutlineComment, BiDotsHorizontalRounded, RiShareForwardLine} from "react-icons/all";
// Component
import ShareMenu from "./ShareMenu";
import FeedComments from "./FeedComments";
import {API} from "../../../../AxiosAPI";
import FeedCommentContext from "../../../../Context/FeedCommentContext";
import FeedContext from "../../../../Context/FeedContext";

const CardBottom = ({commentCount, feedKey}) => {
    const [shareOpen, setShareOpen] = useState(false);
    const [subMenuPosition, setSubMenuPosition] = useState({
        positionX: null,
        positionY: null
    })
    const ref = useRef();
    const [open, setOpen] = useState(false);

    const onClickOpenShareMenu = (e) => {
        if (shareOpen === true)
            setShareOpen(false);
        else {
            setShareOpen(true);
            setSubMenuPosition({
                positionX: e.target.offsetLeft,
                positionY: e.target.offsetTop
            })
        }
    }

    const onClickOpenComments = (e) => {
        e.preventDefault();
        setOpen(true);
        // API.FeedData.getComments(feedKey).then(res => {
        //     if (res.status === 200) {
        //         setTest(res.data.data);
        //     }
        // });
    }

    return (
        <>
            <CardBottomWrapper>
                <CommentButton onClick={onClickOpenComments}
                >
                    <AiOutlineComment size={20}/>
                    {commentCount} Comments
                </CommentButton>
                <ShareButton onClick={onClickOpenShareMenu}
                             ref={ref}
                             open={shareOpen}
                >
                    <RiShareForwardLine size={20}/>
                    Share
                </ShareButton>
                <EtcButtonDiv>
                    <EtcButton>
                        <BiDotsHorizontalRounded size={20}/>
                    </EtcButton>
                </EtcButtonDiv>
            </CardBottomWrapper>
            {/* 공유하는 Dialog */}
            <ShareMenu open={shareOpen}
                       setOpen={setShareOpen}
                       position={subMenuPosition}
                       dialogRef={ref}
            />
            {/* 댓글 */}
            {
                open ? <FeedComments feedKey={feedKey}/>
                    : null
            }
        </>
    );
}

CardBottom.propTypes = {
    comment: PropTypes.number,
    path: PropTypes.string,
}

export default CardBottom;