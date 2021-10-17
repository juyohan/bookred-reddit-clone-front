import React from 'react';
// import styled from "styled-components";

const TestBlock = ({editorState, children}) => {
    const offsetKey = editorState.getCurrentContent().getFirstBlock().getKey() + '_initial-0-0';

    console.log(editorState.getCurrentContent().getBlocksAsArray());

    return (
        <div data-offset-key={`${offsetKey}`}
             className={"test"}
        >
            {children}
        </div>
    )
}

export default TestBlock;