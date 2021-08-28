import React, {useEffect, useState} from 'react';
import {CardUserWrapper, DotIcon, UserButton} from "./CardUser.styles";
import PropTypes from "prop-types";

const CardUser = ({username, time}) => {
    const [upLoadByTime, setUpLoadByTime] = useState(time);

    useEffect(() => {
        timeTransform();
    }, [])
    const timeTransform = () => {
        const now = new Date();

        setUpLoadByTime(now - upLoadByTime);
    }

    return (
        <CardUserWrapper>
            <UserButton to={`/${username}`}>
                사진
                {username}
            </UserButton>
            <DotIcon>
                •
            </DotIcon>
            <span>
                Posted by name {upLoadByTime} hours ago
            </span>
        </CardUserWrapper>
    );
}

CardUser.propTypes = {
    user: PropTypes.object,
}

export default CardUser;