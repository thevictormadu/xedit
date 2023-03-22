import { useState } from "react";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import PlusIcon from "./components/PlusIcon";
import Quill from "./components/Quill";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
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
  const embedUrl = `https://www.youtube.com/embed/${videoId}?showinfo=0`;

  const iFrameUrl = `<iframe class="ql-video" src="${embedUrl}" frameborder="0"  allowfullscreen></iframe>`;

  console.log(embedUrl, "<<<embedUrl");
  console.log(videoId, "<<<videoId");
  console.log(iFrameUrl, "<<<iframeurl");

  return (
    <ChakraProvider>
      <div className="max-w-[700px] m-auto md:py-10">
        <NavBar />
        <div className="relative">
          <Quill value={value} setValue={setValue} />
          <div className="absolute top-[400px] left-4">
            <PlusIcon
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
              handleYoutubeLink={(event) => {
                setYoutubeLink(event.target.value);
                setValue(value.concat(iFrameUrl));
              }}
              handleFacebookLink={(event) => {
                setValue(
                  value.concat(
                    '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100057627332224%2Fvideos%2F1244330403169740%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'
                  )
                );
              }}
              youtubeLink={youtubeLink}
              getVideoId={getVideoId}
            />
          </div>
          <div className="pt-6 flex justify-center md:justify-end">
            <Button />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
