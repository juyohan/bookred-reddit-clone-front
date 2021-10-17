import React, {useEffect, useRef, useState} from 'react';
import {ToolbarButton, ToolbarSpan} from "./Toolbar.styles";

const ToolbarItemsSingle = ({
                                item,
                                handleBlockClick,
                                handleToggleClick,
                                currentBlockStyle,
                                currentInlineStyle,
                                handleAddLink,
                                // isView
                            }) => {
    // console.log(isView);

    return (
        <>
            <ToolbarSpan>
                {
                    item.id === 'Line' || item.id === 'Line2' ?
                        item.icon :
                        item.type === 'link' ?
                            <ToolbarButton onMouseDown={e => {
                                e.preventDefault();
                                handleAddLink();
                            }}
                            >
                                {item.icon}
                            </ToolbarButton> :
                            item.type === 'block' ?
                                <ToolbarButton onMouseDown={e => {
                                    handleBlockClick(e, item.title);
                                }}
                                               isActive={currentBlockStyle === item.title}
                                >
                                    {item.icon}
                                </ToolbarButton> :
                                item.type === 'toggle' ?
                                    <ToolbarButton onMouseDown={e => {
                                        handleToggleClick(e, item.title);
                                    }}
                                                   isActive={currentInlineStyle.has(item.title)}
                                    >
                                        {item.icon}
                                    </ToolbarButton> :
                                    <ToolbarButton>
                                        {item.icon}
                                    </ToolbarButton>
                }
            </ToolbarSpan>
        </>
    );
}

export default ToolbarItemsSingle;