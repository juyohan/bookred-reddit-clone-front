import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
// css
import {CardUserWrapper, DotIcon, TimeDiv, UserButton, UsernameDiv} from "./CardUser.styles";

const CardUser = ({username, time}) => {
    const ref = useRef();

    /**
     *  시간 위에 마우스를 올려놓았을 때, 피드가 작성된 시간을 박스로 표시하게 함.
     *  일정 시간 (2초정도)가 지나면 보이게 하고 그 전에 마우스를 떼어낸다면, 보이지 않음
     */
    // useEffect(() => {
    //     const over = () => window.addEventListener('mouseover', mouseHover);
    //     over();
    //     return () => window.removeEventListener('mouseover', mouseHover);
    // },[]);
    //
    // const mouseHover = (e) => {
    //     let timeout;
    //     if (ref.current === e.target) {
    //         timeout = setTimeout(() => {
    //             console.log("hello");
    //         }, 2000);
    //         return () => clearTimeout(timeout);
    //     }
    //     else if (ref.current !== e.target) {
    //         return () => clearTimeout(timeout);
    //     }
    // }

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
                Posted by
            </span>
            <UsernameDiv to={`/${username}`}>
                {username}
            </UsernameDiv>
            <TimeDiv ref={ref}
                     to={``}
            >
                {time}
            </TimeDiv>
        </CardUserWrapper>
    );
}

CardUser.propTypes = {
    user: PropTypes.object,
    time : PropTypes.string,
}

export default CardUser;