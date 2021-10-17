import React, {useState} from 'react';
// component
import PostItemSingle from "./PostItemSingle";
import PostContent from "./PostContent";

// css
import {PostMenuItem, PostMenuWrapper} from "./PostMenu.styles";
// icons
import {BsCardImage, FiLink, IoIosPaper} from "react-icons/all";

const menuList = [
    {
        id: 'post',
        title: 'Post',
        icon : <IoIosPaper/>
    },
    {
        id: 'imageAndVideo',
        title: 'Images & Video',
        icon : <BsCardImage/>
    },
    {
        id: 'link',
        title: 'Link',
        icon : <FiLink/>
    }
]

const PostMenu = ({menu}) => {
    const [value, setValue] = useState(menu);

    return (
        <PostMenuWrapper>
            <PostMenuItem>
                {
                    menuList.length > 0 && menuList.map(item => (
                        <PostItemSingle key={`PostMenu_${item.id}`}
                                        item={item}
                                        activeItem={value === item.id}
                                        setValue={setValue}
                        />
                    ))
                }
            </PostMenuItem>
            <PostContent/>
        </PostMenuWrapper>
    )
}

PostMenu.defaultProps = {
    menu: 'post',
}

export default PostMenu