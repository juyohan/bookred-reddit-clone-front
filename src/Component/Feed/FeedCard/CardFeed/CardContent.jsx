import React, {useCallback, useEffect, useRef, useState} from "react";
import {CardContentDiv, CardFeedDesc, UnfoldBtn} from "./CardFeed.styles";

const CardContent = ({feedContent}) => {
    const [open, setOpen] = useState(false);
    // const [width, setWidth] = useState(0);

    const openContent = (e) => {
        e.preventDefault();
        setOpen(false);
    }

    const getClientHeight = useCallback(div => {
        if (div !== null && div.getBoundingClientRect().height > 81) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    },[]);

    /**
     * 게시판이 Resize 될 때, 게시글의 내용이 적다면, 더보기 버튼을 생성 및 없애기
     */
    // useEffect(() => {
    //     const widthEvent = () => window.addEventListener('resize',handleResize )
    //     widthEvent();
    //
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);
    //
    // const handleResize = (ref) => {
    //     setWidth(window.innerWidth);
    // }

    return (
        <CardFeedDesc>
            <CardContentDiv dangerouslySetInnerHTML={{
                __html: feedContent
            }}
                         open={open}
                         ref={getClientHeight}
            />
            <UnfoldBtn type={"button"}
                       onClick={openContent}
                       open={open}
            >
                ... 더보기
            </UnfoldBtn>
        </CardFeedDesc>
    )
}

export default CardContent;