import React, {useEffect, useState} from 'react';
import {QuickButton, QuickButtonWrapper} from "./QuickBox.styles";

const QuickBox = () => {
    const [btnStatus, setBtnStatus] = useState(false);

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleFollow = () => {
        if (window.scrollY > 170)
            setBtnStatus(true);
        else
            setBtnStatus(false);
    }

    useEffect(() => {
        const watch = () => window.addEventListener("scroll", handleFollow);
        watch();
        return () => {
            window.removeEventListener("scroll", handleFollow);
        }
    })

    return (
        <QuickButtonWrapper>
            <QuickButton onClick={handleTop}
                         btnStatus={btnStatus}
            >
                Back To Top
            </QuickButton>
        </QuickButtonWrapper>
    )
}

export default QuickBox;