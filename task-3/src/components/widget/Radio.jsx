import React from 'react';
import classes from './Radio.module.css';

import switcch from '../../assets/images/switch.png';
import backArrow from '../../assets/images/back-arrow.png';
import StationList from './StationList';
import NowPlaying from './NowPlaying';

// const DUMMY_STATIONS = [
//   {
//     id: 1,
//     name: 'Putin FM',
//     frequency: '66.6',
//     img: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/wolfgang-hasselmann-br-gllg7bs-unsplash-2_ver_1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Dribbble FM',
//     frequency: '101.2',
//     img: 'https://scied.ucar.edu/sites/default/files/media/images/weather_0.jpg',
//   },
//   {
//     id: 3,
//     name: 'Doge FM',
//     frequency: '99.4',
//     img: 'https://cdn.pixabay.com/photo/2016/10/25/12/28/thunderstorm-1768742__340.jpg',
//   },
//   {
//     id: 4,
//     name: 'Ballads FM',
//     frequency: '87.1',
//     img: 'https://i.pinimg.com/originals/6e/4d/8f/6e4d8fd9b5fca481e0f933962ae8e20f.jpg',
//   },
//   {
//     id: 5,
//     name: 'Maximum FM',
//     frequency: '142.2',
//     img: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/wolfgang-hasselmann-br-gllg7bs-unsplash-2_ver_1.jpg',
//   },
// ];

const Radio = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.leftHeader}>
          <img src={backArrow} alt="Left Arrow" />
        </div>
        <div className={classes.middleHeader}>
          <h3>STATIONS</h3>
        </div>
        <div className={classes.rightHeader}>
          <img src={switcch} alt="Switch" />
        </div>
      </div>

      <StationList />

      <NowPlaying />
    </div>
  );
};

export default Radio;
