import { useSelector } from 'react-redux';
import classes from './NowPlaying.module.css';
const NowPlaying = () => {
  const nowPlaying = useSelector((state) => state.radio.nowPlaying);

  return (
    <div className={classes.container}>
      {nowPlaying && (
        <>
          <span className={classes.title}>CURRENTLY PLAYING</span>
          <span className={classes.name}>{nowPlaying.name}</span>
        </>
      )}
    </div>
  );
};

export default NowPlaying;
