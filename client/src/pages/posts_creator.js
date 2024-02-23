import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function CriadorPost() {
    const editorRef = useRef(null);
    return (
        <div>
            <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}></Editor>
        </div>
    );
}
