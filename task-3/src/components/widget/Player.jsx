import React from 'react';

import classes from './Player.module.css';
import minus from '../../assets/images/minus.png';
import plus from '../../assets/images/plus.png';

const Player = ({ img }) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img src={minus} alt="minus" />
      </div>
      <div className={classes.middle}>
        <img src={img} alt="img" />
      </div>
      <div className={classes.right}>
        <img src={plus} alt="plus" />
      </div>
    </div>
  );
};

export default Player;
