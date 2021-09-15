import React, {useContext, useState} from 'react';
import PropTypes from "prop-types";
// css
import {CardLikeWrapper, DownLikeIcon, LikeCount, UpLikeIcon} from "./CardLike.styles";
// Axios API
import {API} from "../../../../AxiosAPI";
// Context API
import DialogContext from "../../../../Context/DialogContext";
// Cookie
import {getCookie} from "../../../../JwtToken/Cookie";

const CardLike = ({like, feedId, likeType}) => {
    const [vote, setVote] = useState(like);
    const [check, setCheck] = useState(likeType);
    const [dialog, setDialog] = useContext(DialogContext);

    const onClickUpLike = (e) => {
        if (getCookie('Access-Token'))
            likeApi("UPLIKE", feedId);
        else {
            e.preventDefault();
            setDialog.setAuthDialog(true);
        }
    }

    const onClickDownLike = (e) => {
        if (getCookie('Access-Token'))
            likeApi("DOWNLIKE", feedId);
        else {
            e.preventDefault();
            setDialog.setAuthDialog(true);
        }
    }

    // Api 통신
    const likeApi = (type, id) => {
        API.FeedData.postLike(type, id)
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
    like: PropTypes.string,
    feedId: PropTypes.number,
    likeType : PropTypes.string,
}

export default CardLike;