import { useEffect, useRef, useState } from "react";
import Attachment from "./components/Attachment";
import AttachYoutube from "./components/AttachYoutube";
import PlusIcon from "./components/PlusIcon";
import Quill from "./components/Quill";
import TextEditor from "./components/TextEditor";
import pic from "./assets/xedit.png";
import { AiTwotoneTablet } from "react-icons/ai";
import ReactQuill from "react-quill";

function App() {
  const [imageFile, setImageFile] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [value, setValue] = useState("");

  const getVideoId = (url) => {
    // Use a regular expression to match the ID part of the URL
    const regex = /(?:\?v=|\/embed\/|\.be\/)(.*?)(?:\?|&|$)/;
    const matches = url.match(regex);

    // Return the first match group if any
    if (matches) {
      return matches[1];
    } else {
      return null;
    }
  };

  // Get the video ID from the state variable
  const videoId = getVideoId(youtubeLink);

  // Construct the embed URL from the video ID
  const embedUrl = `https://youtube.com/embed/${videoId}?autoplay=0`;

  return (
    <>
      {/* <TextEditor />
      
      */}
      <div className="max-w-[80%] m-auto py-10">
        <div className="relative">
          <Quill value={value} setValue={setValue} />
          <div className="absolute bottom-4 left-4">
            <PlusIcon
              // handleImageSelect={(event) => {
              //   console.log(event.target.files, "<<< 1");
              //   console.log(event.target.files[0], "file <<");
              //   const imagePath = URL.createObjectURL(event.target.files[0]);
              // setImageFile(URL.createObjectURL(event.target.files[0]));
              //setValue(`${value} <img src=${imagePath} />`);
              //setImageFile(event.target.files[0]);
              //}}
              handleImageSelect={(event) => {
                const imagePath = event.target.files[0];
                const fileReader = new FileReader();
                fileReader.readAsDataURL(imagePath);

                fileReader.onload = () => {
                  const base64EncodedString = fileReader.result;

                  setValue(value.concat(`<img src=${base64EncodedString}  />`));
                  console.log(base64EncodedString, "<< value");
                };
              }}
              handleYoutubeLink={(event) => setYoutubeLink(event.target.value)}
              youtubeLink={youtubeLink}
              getVideoId={getVideoId}
            />
            {/* <Attachment imageFile={imageFile} /> */}
            {/* <AttachYoutube embededUrl={embedUrl} getVideoID={getVideoId} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
