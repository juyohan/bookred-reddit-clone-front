import React, {useContext, useEffect, useRef} from 'react';
import {Editor, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import './Eidtor.style.css';
// import 'draft-js/dist/Draft.css'
import PostContext from "../../../../../../Context/PostDataContext";

const Content = ({editorState, setEditorState, handleKeyCommand, styleMap, extendedBlockRenderMap}) => {
    const [post, setPost] = useContext(PostContext);
    const ref = useRef();

    // context API 에 입력한 내용을 html코드로 저장
    useEffect(() => {
        setPost.setPostData({
            ...post.postData,
            content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        });
        // console.log(editorState.getCurrentContent().getBlocksAsArray());
        const contentState = editorState.getCurrentContent();
        console.log("내용 : " + draftToHtml(convertToRaw(editorState.getCurrentContent())));
        // console.log(contentState.getBlocksAsArray())
        // console.log("내용 : " + draftToHtml(convertToRaw()));
        // console.log(contentState.getKey)
        // console.log(editorState.getSelection().getFocusKey());
        // console.log(editorState);
        // console.log(editorState.getCurrentContent().getFirstBlock().getKey());
    }, [editorState]);

    const keyBindingFn = (e) => {
        if (e.keyCode === 13)
            return 'enter'
    }

    // console.log(ref);
    // console.log(ref);
    // console.log(ref.current.editor.firstChild.firstChild.firstChild.dataset);

    return (
        <>
            <Editor onChange={setEditorState}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    customStyleMap={styleMap}
                    localization={{
                        locale: 'ko',
                    }}
                    blockRenderMap={extendedBlockRenderMap}
                // placeholder={"Text (optional)"}
                ref={ref}
            />
        </>
    )
}

export default Content;