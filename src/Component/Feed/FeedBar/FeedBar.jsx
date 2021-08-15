import React from 'react';
import {FeedBarTitle, FeedBarWrapper} from "./FeedBar.styles";
import {AiOutlineSwapLeft} from "react-icons/all";
import PropTypes from "prop-types";

const FeedBar = ({params}) => {
    return (
        <FeedBarWrapper>
            <AiOutlineSwapLeft size={30}/>
            <FeedBarTitle>
                {params}
            </FeedBarTitle>
        </FeedBarWrapper>
    )
}

FeedBar.propTypes = {
    params : PropTypes.string.isRequired
}

export default FeedBar;