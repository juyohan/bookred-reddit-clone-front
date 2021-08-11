import React, {useContext} from 'react';
import {FeedBarTitle, FeedBarWrapper} from "./FeedBar.styles";
import {AiOutlineSwapLeft} from "react-icons/all";
import GlobalContext from "../../../Context/GlobalContext";

const preTitle = (title) => {
    if (title === '/') {
        return 'Hot';
    }
    else {
        return title.split('/')[1];
    }
}

const FeedBar = () => {
    const [{pathParams, router}, setPath] = useContext(GlobalContext);

    return (
        <FeedBarWrapper>
            <AiOutlineSwapLeft size={30}/>
            <FeedBarTitle>
                {preTitle(router.currentPath)}
            </FeedBarTitle>
        </FeedBarWrapper>
    )
}

export default FeedBar;