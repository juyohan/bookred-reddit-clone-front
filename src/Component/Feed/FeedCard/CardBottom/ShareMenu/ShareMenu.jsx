import React from 'react';
import {ShareMenuWrapper} from "./ShareMenu.styles";
import {BiLink, RiKakaoTalkLine,} from "react-icons/all";
import ShareMenuItem from "./ShareMenuItem";

const shareMenuList = [
    {
        id: 'copy',
        title: 'Copy Link',
        icon: <BiLink size={20}/>
    },
    {
        id: 'kakao',
        title: 'Kakao Share',
        icon: <RiKakaoTalkLine size={20}/>
    }
]

const ShareMenu = ({position}) => {

    return (
        <ShareMenuWrapper style={{
            left: position.positionX,
            top: position.positionY + 36
        }}
                          role={'menu'}>
            {
                shareMenuList.length > 0 && shareMenuList.map(list => (
                    <ShareMenuItem key={`ShareMenu_${list.id}`}
                                   list={list}
                    />
                ))
            }
        </ShareMenuWrapper>
    );
}

export default ShareMenu;