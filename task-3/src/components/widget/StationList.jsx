import React from 'react';
import { useSelector } from 'react-redux';
import Station from './Station';
import classes from './StationList.module.css';

const StationList = () => {
  const stations = useSelector((state) => state.radio.stations);

  return (
    <div className={classes.container}>
      {stations.map((station) => (
        <div key={station.id}>
          <Station
            id={station.id}
            name={station.name}
            frequency={station.frequency}
            img={station.img}
          />
          <div className={classes.separator}></div>
        </div>
      ))}
    </div>
  );
};

export default StationList;
