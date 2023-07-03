import { useRef } from 'react';

export const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();
  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support enbeded vadeos.
      </video>
      <div>
        <button type="button" onClick={play}>
          play video
        </button>
        <button type="button" onClick={pause}>
          pause video
        </button>
      </div>
    </div>
  );
};
