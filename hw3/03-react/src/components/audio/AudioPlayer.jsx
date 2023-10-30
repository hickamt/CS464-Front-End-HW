/**
 * Audio Player Component: add to navbar Layout.jsx to play audio
 * across all pages
 * Game of Thrones Audio File Source: https://archive.org/details/01MainTitle_201905
 * Audio Player Source: https://www.npmjs.com/package/react-h5-audio-player
 */
import "./styles/audio.css"
import AudioPlayer from "react-h5-audio-player";

// eslint-disable-next-line react/prop-types
function AudioDeck({ audioSource }) {
  return (
    <div className="audio-container">
      <AudioPlayer src={audioSource} volume={0.5} />
    </div>
  );
}

export default AudioDeck;
