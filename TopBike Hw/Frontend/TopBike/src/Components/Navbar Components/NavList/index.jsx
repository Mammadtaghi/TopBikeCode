import React from 'react'
import style from "./index.module.scss";

function NavList({ children, title, rowGap=0, icons=null }) {
  
  return (
    <div id={`${style.ShopNav}`}>
      <div className={style.productTitle}><h2 className={`${style.title}`}>{title}</h2><span className={style.icons}>{icons && icons}</span></div>
      <ul style={rowGap ? {rowGap:rowGap} : null} className={`${style.links}`}>{children}</ul>
    </div>
  )
}

export default NavList