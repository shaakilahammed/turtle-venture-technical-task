import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { radioActions } from '../../store/radio-slice';
import Player from './Player';
import classes from './Station.module.css';

const Station = ({ id, name, frequency, img }) => {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const nowPlaying = useSelector((state) => state.radio.nowPlaying);
  useEffect(() => {
    if (nowPlaying) {
      if (nowPlaying.id === id) setIsPlaying(true);
      else setIsPlaying(false);
    }
  }, [id, nowPlaying]);

  const playHandler = () => {
    dispatch(radioActions.setNowPlaying({ id, name, frequency, img }));
  };
  return (
    <div className={classes.container} onClick={playHandler}>
      {isPlaying && <Player img={img} />}

      <div className={classes.stationDetails}>
        <div className={classes.stationName}>
          <span>{name}</span>
        </div>
        <div className={classes.stationFrequency}>
          <span>{frequency}</span>
        </div>
      </div>
    </div>
  );
};

export default Station;
