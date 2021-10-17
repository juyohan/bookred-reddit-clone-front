import React, {useEffect, useRef, useState} from 'react';
import {
    MarkDownButton,
    ToolbarItems,
    ToolbarItemsWrapper,
    ToolbarLine,
    ToolbarMarkDown,
    ToolbarWrapper
} from "./Toolbar.styles";
import ToolbarItemsSingle from "./ToolbarItemsSingle";
import {
    BiCode, BiCodeBlock, BiHeading,
    FaHighlighter,
    GrSuperscript,
    ImBold,
    ImItalic,
    ImLink, ImQuotesRight,
    ImStrikethrough, MdFormatListBulleted, MdFormatListNumbered
} from "react-icons/all";
import {has} from "immutable";
import {RichUtils} from 'draft-js'

const toolbarMenu = [
    {
        id: 'Bold',
        title: 'BOLD',
        type: 'toggle',
        icon: <ImBold size={20}/>
    },
    {
        id: 'Italics',
        title: 'ITALIC',
        type: 'toggle',
        icon: <ImItalic size={20}/>
    },
    {
        id: 'Link',
        title: 'LINK',
        type: 'link',
        icon: <ImLink size={20}/>
    },
    {
        id: 'Strikethrough',
        title: 'STRIKETHROUGH',
        type: 'toggle',
        icon: <ImStrikethrough size={20}/>
    },
    {
        id: 'Inline Code',
        title: 'CODE',
        type: 'toggle',
        icon: <BiCode size={20}/>
    },
    {
        id: 'Superscript',
        title: 'SUPERSCRIPT',
        icon: <GrSuperscript size={24}/>
    },
    {
        id: 'Spoiler',
        title: 'HIGHLIGHT',
        type: 'toggle',
        icon: <FaHighlighter size={20}/>
    },
    {
        id: 'Line',
        icon: <ToolbarLine/>
    },
    {
        id: 'Heading',
        title: 'header-two',
        type: 'block',
        icon: <BiHeading size={24}/>
    },
    {
        id: 'Bulleted List',
        title: 'unordered-list-item',
        type: 'block',
        icon: <MdFormatListBulleted size={22}/>
    },
    {
        id: 'Numbered List',
        title: 'ordered-list-item',
        type: 'block',
        icon: <MdFormatListNumbered size={22}/>
    },
    {
        id: 'Quote Block',
        title: 'blockquote',
        type: 'block',
        icon: <ImQuotesRight size={18}/>
    },
    {
        id: 'Code Block',
        title: 'code-block',
        type: 'block',
        icon: <BiCodeBlock size={22}/>
    },
    {
        id: 'Line2',
        icon: <ToolbarLine/>
    }
    // {
    //     id : 'Table',
    //     title : 'TABLE',
    //     icon : <BiTable size={22}/>
    // },

]

const Toolbar = ({handleBlockClick, handleToggleClick, currentBlockStyle, currentInlineStyle, handleAddLink, editorState}) => {
    const [toolBarWidth, setToolBarWidth] = useState({
        wrapWidth : undefined,
        divWidth : undefined,
    });
    const [value, setValue] = useState();
    const refDiv = useRef();
    const refWarp = useRef();

    console.log(RichUtils.getCurrentBlockType(editorState));

    useEffect(() => {
        if (toolBarWidth.wrapWidth === undefined) {
            setToolBarWidth({
                divWidth: refDiv.current.clientWidth,
                wrapWidth : refWarp.current.clientWidth
            });
        } else {
            const windowResize = () => {
                setToolBarWidth({
                    ...toolBarWidth,
                    wrapWidth : refWarp.current.clientWidth
                });            }
            window.addEventListener('resize', windowResize);
            return () => {
                window.removeEventListener('resize', windowResize);
            }
        }
    }, [refWarp]);

    useEffect(() => {
        setValue(toolBarWidth.wrapWidth - toolBarWidth.divWidth);
    }, [toolBarWidth]);

    return (
        <ToolbarWrapper>
            {/* 변하는 애 */}
            <ToolbarItemsWrapper ref={refWarp}>
                {/* 고정 된 애 */}
                <ToolbarItems ref={refDiv}>
                    {
                        toolbarMenu.length > 0 && toolbarMenu.map(item => (
                            <ToolbarItemsSingle key={`ToolbarKey_${item.id}`}
                                                item={item}
                                                handleBlockClick={handleBlockClick}
                                                handleToggleClick={handleToggleClick}
                                                currentBlockStyle={currentBlockStyle}
                                                currentInlineStyle={currentInlineStyle}
                                                handleAddLink={handleAddLink}
                                                isView={value > 10}
                            />
                        ))
                    }
                </ToolbarItems>
            </ToolbarItemsWrapper>
            <ToolbarMarkDown>
                <MarkDownButton>
                    Markdown Mode
                </MarkDownButton>
            </ToolbarMarkDown>
        </ToolbarWrapper>
    )
}

export default Toolbar;