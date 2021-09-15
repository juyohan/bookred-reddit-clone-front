import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const TextEditor = () => {
    return (
        <div style={{height : "650px"}}>
            <ReactQuill
                style={{height : '300px'}}
                placeholder={"Text (Optional)"}
            >
            </ReactQuill>
        </div>
    );
}

export default TextEditor;