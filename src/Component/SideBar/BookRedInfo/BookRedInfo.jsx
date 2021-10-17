import React from 'react';
import {BookRedInfoWrapper} from "./BookRedInfo.styles";
import QuickBox from "../../../Helper/QuickBox";
import Info from "./Info";

const BookRedInfo = () => {
    return (
        <BookRedInfoWrapper>
            <Info/>
            <QuickBox/>
        </BookRedInfoWrapper>
    )
}

export default BookRedInfo;