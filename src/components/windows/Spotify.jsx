import React from "react";
import Macwindow from "./Macwindow";

const Spotify = ({windowName, setWindowsState}) => {
  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/4AxjW3XZwYwyOzQsyYIe6H?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Macwindow>
  );
};

export default Spotify;
