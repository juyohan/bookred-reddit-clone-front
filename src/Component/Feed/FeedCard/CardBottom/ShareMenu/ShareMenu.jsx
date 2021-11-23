import React, {useEffect, useRef} from 'react';
import {ShareMenuWrapper} from "./ShareMenu.styles";
import {BiLink, RiKakaoTalkLine,} from "react-icons/all";
import ShareMenuItem from "./ShareMenuItem";
import PropTypes from "prop-types";

const shareMenuList = [
    {
        id: 'copy',
        title: 'Copy Link',
        icon: <BiLink size={20}/>
    },
    {
        id: 'kakao',
        title: 'Kko Share',
        icon: <RiKakaoTalkLine size={20}/>
    }
]

const ShareMenu = ({position, open, setOpen, dialogRef}) => {
    const ref = useRef();

    useEffect(() => {
        const click = () => window.addEventListener('mousedown', checkClick);
        click();
        return () => {
            window.removeEventListener('mousedown', checkClick);
        }
    }, []);

    const checkClick = (e) => {
        if (e.target === dialogRef.current || e.target === dialogRef.current.firstChild){
            e.stopPropagation();
        }
        else if (ref.current && !e.target.contains(ref.current))
            setOpen(false);
    }

    if (open)
        return (
            <ShareMenuWrapper style={{
                left: position.positionX,
                top: position.positionY + 36,
            }}
                              role={'menu'}
                              ref={ref}
            >
                {
                    shareMenuList.length > 0 && shareMenuList.map(list => (
                        <ShareMenuItem key={`ShareMenu_${list.id}`}
                                       list={list}
                        />
                    ))
                }
            </ShareMenuWrapper>
        );
    else
        return null;
}

ShareMenu.propTypes = {
    position: PropTypes.object,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    dialogRef : PropTypes.object,
}

export default ShareMenu;