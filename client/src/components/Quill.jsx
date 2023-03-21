import React, { useState } from 'react'
import ReactQuill from 'react-quill';

import "react-quill/dist/quill.snow.css";

export default function Quill({value, setValue}) {
    
    const options = {
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          ["clean"],
          ["link", "image"],
        ],
      },
      formats: [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "color",
        "background",
        "link",
        "image",
      ],
    };
  return (
    <div>
      <ReactQuill
        onChange={(value) => {
          setValue(value);
        }}
        value={value}
        modules={options.modules}
        formats={options.formats}
      />
    </div>
  );
}
