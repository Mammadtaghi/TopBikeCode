import React from 'react'
import style from "./index.module.scss";
import { NavLink } from 'react-router-dom'

function HomeNav({img, title, direction="/"}) {
  return (
    <NavLink to={direction} id={style.homeNav}>
        <div className={style.imgBox}><img src={img} /></div>
        <span className={style.title}>{title}</span>
    </NavLink>
  )
}

export default HomeNav