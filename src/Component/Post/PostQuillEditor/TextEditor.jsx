import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const TextEditor = ({modules, formats, onChangeValue, value}) => {
    return (
        <div style={{height: "350px"}}>
            <ReactQuill
                style={{height: '300px'}}
                modules={modules}
                formats={formats}
                placeholder={"Text (Optional)"}
                themee="snow"
                value={value || ''}
                onChange={onChangeValue}
            >
            </ReactQuill>
        </div>
    );
}

export default TextEditor;