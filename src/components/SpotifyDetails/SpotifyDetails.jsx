import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  ThreejsOriginal,
  GithubOriginal,
  SassOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";

const SpotifyDetails = () => {
  return (
    <>
      <div className="left">
        <h2>Audio Visualizer with Spotify API</h2>
        <p>
          This project is an audio-visualization web application that leverages
          the Spotify API to provide an interactive and engaging experience.
          Users can log in with their Spotify account to access all standard
          Spotify features, such as browsing playlists, selecting tracks, and
          playing music.
        </p>
        <p>
          The application integrates the Spotify &quot;Current Track Audio
          Analysis&quot; API to analyze the audio data of the currently playing
          track. This data drives a dynamic, real-time 3D animation rendered
          using Three.js. The visualizer reacts to the audio features, creating
          a visually captivating synchronization between music and visuals.
        </p>
        <span>
          <div className="icon">
            <Html5Original size={40} />
          </div>
          <div className="icon">
            <Css3Original size={40} />
          </div>
          <div className="icon">
            <JavascriptOriginal size={40} />
          </div>
          <div className="icon">
            <ReactOriginal size={40} />
          </div>
          <div className="icon">
            <ThreejsOriginal size={40} />
          </div>
          <div className="icon">
            <SassOriginal size={40} />
          </div>
        </span>
      </div>
      <div className="right">
        <img src="/img/spotifyVisual.png" alt="" />
        <Link
          to="https://github.com/HughPullman/Spotify-Audio-Visualizer"
          className="gitLink"
          target="_blank"
        >
          <GithubOriginal size={50} />
        </Link>
      </div>
    </>
  );
};
export default SpotifyDetails;
