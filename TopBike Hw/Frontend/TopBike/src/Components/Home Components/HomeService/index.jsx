import React from 'react'
import style from "./index.module.scss";

function HomeService({img, title, info}) {
  
  return (
    <div id={style.HomeService}>
      <div className={style.imgBox}><img src={img} alt="" /></div>
      <h4 className={style.title}>{title}</h4>
      <span className={style.info}>{info}</span>
    </div>
  )
}

export default HomeService