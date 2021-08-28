import React, {useContext, useState} from 'react';
import PropTypes from "prop-types";
// css
import {CardLikeWrapper, DownLikeIcon, LikeCount, UpLikeIcon} from "./CardLike.styles";
// Axios API
import {FeedAPI} from "../../../../AxiosAPI";
// token
import Token from "../../../../JwtToken/Token";
// Context API
import DialogContext from "../../../../Context/DialogContext";

const CardLike = ({like, feedId, likeType}) => {
    const [vote, setVote] = useState(like);
    const [check, setCheck] = useState(likeType);
    const [dialog, setDialog] = useContext(DialogContext);

    const onClickUpLike = (e) => {
        if (Token())
            likeApi("UPLIKE", feedId);
        else {
            e.preventDefault();
            setDialog.setAuthDialog(true);
        }
    }

    const onClickDownLike = (e) => {
        if (Token())
            likeApi("DOWNLIKE", feedId)
        else {
            e.preventDefault();
            setDialog.setAuthDialog(true);
        }
    }

    // Api 통신
    const likeApi = (type, id) => {
        FeedAPI.postLike(type, id)
            .then(res => {
                setVote(res.data);
                checkButton(type);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const checkButton = (value) => {
        if (value === check)
            setCheck(null);
        else
            setCheck(value);
    }

    return (
        <CardLikeWrapper>
            <UpLikeIcon size={'20'}
                        onClick={onClickUpLike}
                        isActive={check === "UPLIKE"}
            />
            <LikeCount isActive={check}>
                {vote}
            </LikeCount>
            <DownLikeIcon size={'20'}
                          onClick={onClickDownLike}
                          isActive={check === "DOWNLIKE"}
            />
        </CardLikeWrapper>
    );
}

CardLike.propTypes = {
    like: PropTypes.number,
    feedId: PropTypes.number,
    likeType : PropTypes.string,
}

export default CardLike;