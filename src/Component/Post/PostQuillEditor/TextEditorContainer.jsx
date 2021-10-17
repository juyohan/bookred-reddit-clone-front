import React, {useEffect, useState} from "react";
import TextEditor from "./TextEditor";
import Quill from 'quill'
import 'react-quill/dist/quill.snow.css';
import {background} from "quill/ui/icons";
// import ImageResize from "@looop/quill-image-resize-module-react";

// Quill.register('modules/ImageResize', ImageResize);

const TextEditorContainer = () => {
    const [value, setValue] = useState({
        content: "",
        title: "",
    });

    const onChangeValue = (content, delta, source, editor) => {
        //
        if (source === 'user')
            setValue({
                ...value,
                content: editor.getHTML(),
            });
    }

    useEffect(() => {
        console.log(value.content);
    }, [value.content]);
    // console.log(post);


    const modules = {
        toolbar: {
            container:
                [
                    ['bold', 'italic', 'link', 'underline', 'strike', {'script': 'super'}, {'background' : 'gray'}],
                    // [{'background' : 'gray'} , {'color' : 'white'}],
                    [{'header': 1}, {'list': 'bullet'}, {'list': 'ordered'}, 'blockquote', 'code-block'],
                    ['image', 'video']
                ],
            // handlers : {
            //     'background' : function(value) {
            //         console.log(value);
            //         if (value) {
            //
            //         }
            //     }
            // }
        },
        // table : true,
        // ImageResize: {modules: ['Resize']},
    };

    const formats = [
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
        'background', 'color',
        'list', 'bullet', 'script', 'header',
        'link', 'image', 'size', 'video'
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