/**
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
