import { Player } from './Player/Player';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
    </div>
  );
};
