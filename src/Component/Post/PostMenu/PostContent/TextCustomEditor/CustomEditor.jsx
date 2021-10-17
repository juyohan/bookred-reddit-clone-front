import React, {useEffect, useRef, useState} from 'react';
import {CustomEditorWrapper, TextContent} from "./CustomEditor.styles";
import Toolbar from "./CustomEditorToolbar";
import Content from "./CustomEditorContent";
import {
    EditorState,
    RichUtils,
    DefaultDraftBlockRenderMap,
    ContentBlock,
    genKey,
    ContentState,
    convertToRaw
} from "draft-js";
import Immutable, {List, OrderedMap} from "immutable";
import TestBlock from "../Test/TestBlock";
import draftToHtml from "draftjs-to-html";


const CustomEditor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    )
    const ref = useRef();
    const [clickDiv, setClickDiv] = useState(false);

    const addEmptyBlock = (editorState) => {
        const newBlock = new ContentBlock({
            key : genKey(),
            type : 'unstyled',
            text : '',
            characterList : List()
        });

        const contentState = editorState.getCurrentContent();
        const newBlockMap = contentState.getBlockMap().set(newBlock.getKey(), newBlock);

        console.log(newBlock);
        console.log(contentState);
        // RichUtils.insertSoftNewline()
        // const newBlockMap = editorState.getCurrentContent().getBlockMap().set(newBlock.getKey(), newBlock);

    }

    // content를 클릭했다는 것을 실행해주는 훅
    // useEffect(() => {
    //     const click = () =>
    //         window.addEventListener('mousedown', checkClick);
    //     click();
    //     return () =>
    //         window.removeEventListener('mousedown', checkClick);
    // }, [clickDiv])
    //
    // const checkClick = (e) => {
    //     console.log(e);
    //     if (ref.current && e.path.includes(ref.current))
    //         setClickDiv(true);
    //     else
    //         setClickDiv(false);
    // }

    // Draft js 인라인
    const handleToggleClick = (e, inlineStyle) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }

    // Draft js 블록
    const handleBlockClick = (e, blockType) => {
        e.preventDefault();
        if (blockType === 'code-block'){
            setEditorState(RichUtils.toggleCode(editorState));
            addEmptyBlock(editorState);
        }
        else {
            setEditorState(RichUtils.toggleBlockType(editorState, blockType));
        }
    }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    // 각 옵션의 커스텀 스타일
    const styleMap = {
        'HIGHLIGHT': {
            'backgroundColor': '#545452',
            'color': '#ffffff'
        },
        'CODE': {
            'color': '#ff006d',
            'backgroundColor': '#f6f7f8'
        }
    };
    //
    const blockRenderMap = Immutable.Map({
        'unstyled' : {
            element: 'div',
            wrapper: <TestBlock editorState={editorState}/>
        }
    })
    //
    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

    // const addEmptyBlock = (editorState) => {
    //     const newBlock = new ContentBlock({
    //         key : genKey(),
    //     })
    // }

    const handleAddLink = () => {
        const selection = editorState.getSelection();
        const link = prompt("Please");
        if (!link) {
            setEditorState(RichUtils.toggleLink(editorState, selection, null));
            return ;
        }
        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity("LINK", "IMMUTABLE", {
            url : link
        });
        const newEditorState = EditorState.push(editorState, contentWithEntity, "apply-entity");
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
    };

    useEffect(() => {
        console.log("내용 : " + draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }, [editorState])


    return (
        <CustomEditorWrapper ref={ref}
                             isActive={clickDiv}
        >
            <Toolbar handleToggleClick={handleToggleClick}
                     handleBlockClick={handleBlockClick}
                     currentInlineStyle={editorState.getCurrentInlineStyle()}
                     currentBlockStyle={RichUtils.getCurrentBlockType(editorState)}
                     handleAddLink={handleAddLink}
                     editorState={editorState}
            />

            <TextContent>
                <Content editorState={editorState}
                         setEditorState={setEditorState}
                         handleKeyCommand={handleKeyCommand}
                         styleMap={styleMap}
                         extendedBlockRenderMap={extendedBlockRenderMap}
                />
            </TextContent>
        </CustomEditorWrapper>
    )
}

export default CustomEditor;