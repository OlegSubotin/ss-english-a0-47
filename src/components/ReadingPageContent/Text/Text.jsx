import React from 'react';
// import Poster from '../../../db/ReadingImages/poster.jpg'
import Menu from '../../../db/ReadingImages/restaurant-menu.jpg'
import s from './Text.module.css';

const Task = ({ text, title }) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{title}</h1>
       <img className={s.image} src={Menu} alt="poster" width='615' />
 
    </div>
  )
};

export default Task