import React, {useContext, useState} from "react";
import PropTypes from "prop-types";
// css
import {CardBottomWrapper, CommentButton, EtcButton, EtcButtonDiv, ShareButton} from "./CardBottom.styles";
// Icons
import {AiOutlineComment, BiDotsHorizontalRounded, RiShareForwardLine} from "react-icons/all";
// Context API
import DialogContext from "../../../../Context/DialogContext";
// Component
import ShareMenu from "./ShareMenu";

const CardBottom = ({commentCount, path}) => {
    const [dialog, setDialog] = useContext(DialogContext);
    const [shareOpen, setShareOpen] = useState(false);
    // const [etcOpen, setEtcOpen] = useState(false);
    const [subMenuPosition, setSubMenuPosition] = useState({
        positionX: null,
        positionY: null
    })

    const onClickOpenFeedDialog = (e) => {
        // 현재 막음.
        e.preventDefault();
        setDialog.setFeedDialog(true);
    }

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

    return (
        <>
            <CardBottomWrapper>
                <CommentButton onClick={onClickOpenFeedDialog}
                               to={`${path}`}
                >
                    <AiOutlineComment size={20}/>
                    {commentCount} Comments
                </CommentButton>
                <ShareButton onClick={onClickOpenShareMenu}
                >
                    <RiShareForwardLine size={20}/>
                    Share
                </ShareButton>
                <EtcButtonDiv>
                    <EtcButton>
                        <BiDotsHorizontalRounded size={20}/>
                    </EtcButton>
                </EtcButtonDiv>
                {/*<div style={{flex : '1 1 auto'}}/>*/}
            </CardBottomWrapper>
            {
                shareOpen ?
                    <ShareMenu position={subMenuPosition}
                    />
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