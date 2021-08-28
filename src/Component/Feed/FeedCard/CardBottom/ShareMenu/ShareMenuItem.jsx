import React from 'react';
import {ShareMenuButton} from "./ShareMenu.styles";

const ShareMenuItem = ({list}) => {
    return (
        <ShareMenuButton>
            {list.icon}
            {list.title}
        </ShareMenuButton>
    )
}

export default ShareMenuItem;