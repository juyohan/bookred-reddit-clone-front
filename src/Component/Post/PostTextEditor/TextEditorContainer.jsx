import React, {useState} from "react";
import TextEditor from "./TextEditor";
import Quill from 'quill'
import 'react-quill/dist/quill.snow.css';
import ImageResize from "@looop/quill-image-resize-module-react";

Quill.register('modules/ImageResize', ImageResize);

const TextEditorContainer = () => {
    const [value, setValue] = useState({
        content : "",
    });

    const onChangeValue = (content, delta, source, editor) => {
        // console.log(editor.getText(content));
    //
        setValue({
            ...value,
            content: editor.getHTML(),
        });
    }
    // console.log(post);

    const modules = {
        toolbar: {
            container:
                [
                    //[{ 'font': [] }],
                    [{'header': [1, 2, false]}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'
                    ],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'],
                    [{'align': []}, {'color': []}, {'background': []}],          // dropdown with defaults from theme
                    ['clean'],
                ],
        },
        ImageResize: {modules: ['Resize']},
    };

    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',
    ];

    return (
        <>
            <p>
                Hello, Bookred!
            </p>
            <TextEditor value={value.content}
                        modules={modules}
                        formats={formats}
                        onChangeValue={onChangeValue}
            />
        </>
    )
}

export default TextEditorContainer;