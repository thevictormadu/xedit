import React, { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export default function Quill({ value, setValue }) {
  const options = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["image", "link"],
        [{ align: "" }, { align: "center" }, { align: "right" }],
        ["bold", "italic"],
        [{ list: "ordered" }, { list: "bullet" }],
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
      "video",
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
