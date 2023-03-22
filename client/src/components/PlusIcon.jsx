import React, { useState, useRef } from "react";
import { AiOutlinePlus, AiFillPicture } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { SiGoogleassistant } from "react-icons/si";
import "../styles.css";

export default function PlusIcon(props) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [youtubeInput, setYoutubeInput] = useState(false);
  const [facebookInput, setFacebookInput] = useState(false);
  const fileInputRef = useRef(null);

  const youtubeInputRef = useRef(null);

  function handleImageFileClick() {
    fileInputRef.current.click();
  }

  return (
    <div>
      <div className="container">
        <div
          className={`icon-container bg-[#CEE3D4] hover:bg-[#E7F1E9] duration-500 hover:text-[#0A7227] hover:text-[40px]`}
          onClick={() => {
            setShowDropDown(!showDropDown);
            setYoutubeInput(false);
            setFacebookInput(false);
          }}
        >
          <AiOutlinePlus />
        </div>

        <ul
          className={`bg-white rounded-md w-72 shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all absolute top-7 left-1 ease-in duration-500  my-2 mx-1 ${
            showDropDown ? "visible" : "hidden"
          }`}
        >
          <p className="text-xs text-gray-500 ml-5 mt-2 mb-2">EMBEDS</p>
          <li
            className="flex hover:bg-[#F7FCF8] p-4 cursor-pointer"
            onClick={handleImageFileClick}
          >
            <span className="list-icon ">
              <AiFillPicture className="text-xl text-gray-500  " />
            </span>
            <div className="list-label px-3 flex flex-col space-y-2 ">
              <p className="leading-4 text-gray-500">Picture</p>
              <span className="text-[.6rem] text-gray-500  ">jpeg, png</span>
            </div>
            <input
              type="file"
              accept=".jpeg, .png"
              className="hidden"
              ref={fileInputRef}
              onChange={props.handleImageSelect}
            ></input>
          </li>

          <li
            className="flex hover:bg-[#F7FCF8] p-4 cursor-pointer duration-300 relative"
            onClick={() => {
              setYoutubeInput(true);
              setFacebookInput(false);
            }}
          >
            <span className="list-icon ">
              <BsCameraVideoFill className="text-xl text-gray-500  " />
            </span>
            <div className="list-label px-3 flex flex-col space-y-2 ">
              <p className="leading-4 text-gray-500">Video</p>
              <span className="text-[.6rem] text-gray-500  ">
                Embed a Youtube video
              </span>
            </div>
          </li>
          <div
            className={`absolute top-20 left-[200px] bg-white p-2 w-[17rem] rounded-md shadow-md z-10 transition-all duration-500 ease-in ${
              youtubeInput ? "visible" : "hidden"
            }`}
          >
            <input
              type="text"
              placeholder="Enter Youtube Link"
              className="p-2 bg-[#F7FCF8] w-[100%] focus:outline-[#CEE3D4] "
              ref={youtubeInputRef}
              onChange={props.handleYoutubeLink}
              value={props.youtubeInput}
            />
            <div className="flex justify-between">
              <button
                className="text-sm py-2 text-[#0A7227] "
                onClick={() => {
                  setYoutubeInput(false);
                  console.log();
                }}
                type="button"
              >
                Ok
              </button>
            </div>
          </div>

          <li
            className="flex hover:bg-[#F7FCF8] p-4 cursor-pointer"
            onClick={() => {
              setFacebookInput(true);
              setYoutubeInput(false);
            }}
          >
            <span className="list-icon ">
              <SiGoogleassistant className="text-xl text-gray-500  " />
            </span>
            <div className="list-label px-3 flex flex-col space-y-2 ">
              <p className="leading-4 text-gray-500">Social</p>
              <span className="text-[.6rem] text-gray-500  ">
                Embed a Facebook link
              </span>
            </div>
          </li>
          <div
            className={`absolute top-40 left-[200px] bg-white p-2 w-[17rem] rounded-md shadow-md z-10 transition-all duration-500 ease-in ${
              facebookInput ? "visible" : "hidden"
            }`}
          >
            <input
              type="text"
              placeholder="Enter Facebook Link"
              className="p-2 bg-[#F7FCF8] w-[100%] focus:outline-[#CEE3D4] "
              ref={youtubeInputRef}
              onChange={props.handleFacebookLink}
              value={props.facebookInput}
            />
            <div className="flex justify-between">
              <button
                className="text-sm py-2 text-[#0A7227] "
                onClick={() => {
                  setFacebookInput(false);
                  console.log();
                }}
                type="button"
              >
                Ok
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

// .container {
//     position: relative;
// }

// .dropdown {
//     background-color: white;
//     padding: 1rem;
//     border-radius: .6rem;
//     width: 10rem;
//     box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
//     list-style: none;
//     transition: 500ms ease-in;

// }

// .list-item{
//     display: flex;
//     justify-content: center;

// }

/*Sure, I can help you with that. There are a few ways to embed a YouTube video in React.js. One way is to use an `iframe` element and set its `src` attribute to the embed URL of the YouTube video¹². Another way is to use a React component such as `react-youtube` or `react-player` that can handle YouTube videos and other media sources¹³⁴. Here is an example of using an `iframe` element:

```javascript
// Assuming you have the YouTube video ID as a variable
const youtubeID = "IEDEtZ4UVtI";

// You can use template literals to construct the embed URL
const embedURL = `https://youtube.com/embed/${youtubeID}?autoplay=0`;

// You can render the iframe element with some attributes
return (
  <iframe
    className="video"
    title="Youtube player"
    src={embedURL}
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  ></iframe>
);
```

Source: Conversation with Bing, 3/20/2023(1) Iframes and React.js - How to embed a youtube video into my app. https://stackoverflow.com/questions/44715819/iframes-and-react-js-how-to-embed-a-youtube-video-into-my-app Accessed 3/20/2023.
(2) How to load and play a Youtube video in React - Stack Overflow. https://stackoverflow.com/questions/62124288/how-to-load-and-play-a-youtube-video-in-react Accessed 3/20/2023.
(3) How to embed Youtube videos using ReactJs - Learn ReactJS & React .... https://akashmittal.com/embed-youtube-videos-reactjs/ Accessed 3/20/2023.
(4) Simplest way to embed a Youtube video in your React app. https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 Accessed 3/20/2023. */
