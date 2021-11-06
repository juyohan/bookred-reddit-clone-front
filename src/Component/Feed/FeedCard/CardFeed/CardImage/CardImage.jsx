import React from "react";
import {CardImageWrapper, ImageItemWrapper, OneImageLayout} from "./CardImage.styles";
import PropTypes from "prop-types";
import CardImageItem from "./CardImageItem";

const CardImage = ({fileNames}) => {
    const layout = fileNames.length;


    // if (layout === 1)
    //     return (
    //         <OneImageLayout>
    //         </OneImageLayout>
    //     )
    // else if (layout === 2)
    //     return (
    //         <>
    //             <div style={{
    //                 inset: "calc(0% + 0px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)"
    //             }}>
    //             </div>
    //
    //             <div style={{
    //                 inset: "calc(0% + 0px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)"
    //             }}>
    //             </div>
    //         </>
    //     )
    // else
        return (
            <CardImageWrapper>
                {
                    Array.from(fileNames).map(file => (
                        <CardImageItem fileName={file}/>
                    ))
                }
            </CardImageWrapper>
        )
}

CardImage.propTypes = {
    fileName: PropTypes.object,
}

export default CardImage;