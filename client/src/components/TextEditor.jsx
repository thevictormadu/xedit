// import React, { useCallback, useEffect, useRef, useState } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";
// import "../styles.css";
// import { io } from "socket.io-client";

// const toolbarOptions = [
//   ["bold", "italic", "underline", "strike"], // toggled buttons
//   ["blockquote", "code-block"],

//   [{ header: 1 }, { header: 2 }], // custom button values
//   [{ list: "ordered" }, { list: "bullet" }],
//   [{ script: "sub" }, { script: "super" }], // superscript/subscript
//   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//   [{ direction: "rtl" }], // text direction

//   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],

//   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//   [{ font: [] }],
//   [{ align: [] }],

//   ["clean"], // remove formatting button
// ];

// export default function TextEditor() {
//   const [socket, setSocket] = useState();
//   const [quill, setQuill] = useState();

//   console.log('quill', quill)
//   console.log('socket', socket)

//   useEffect(() => {
//     const s = io("http://localhost:3002");
//     setSocket(s);

//     return () => {
//       s.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (socket == null || quill == null) return;
//     const handler = (delta) => {
//       quill.updateContents(delta);
      
//     };
//     socket.on("received-changes", handler);
//     return () => {
//       socket.off("received-changes", handler);
//     };
//   }, [socket, quill]);

//   useEffect(() => {
//     if (socket == null || quill == null) return;
//     const handler = (delta, oldDelta, source) => {
//       if (source !== "user") return;
//       socket.emit("send-changes", delta);
//     };
//     quill.on("textChange", handler);
//     return () => {
//       quill.off("textChange", handler);
//     };
//   }, [socket, quill]);
//   const wrapperRef = useCallback((wrapper) => {
//     if (wrapper === null) return;
//     wrapper.innerHTML = "";
//     const editor = document.createElement("div");
//     wrapper.append(editor);
//     const q = new Quill(editor, {
//       theme: "snow",
//       modules: { toolbar: toolbarOptions },
//     });
//     console.log('wrapper', wrapper);

//     setQuill(q);
//   }, []);
//   return <div className="container" ref={wrapperRef}></div>;
// }
