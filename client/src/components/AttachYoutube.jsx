import React from "react";

export default function AttachYoutube({ getVideoID, embededUrl }) {
  return (
    <div >
      <iframe
        width="560"
        height="315"
        src={embededUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}
