import React from 'react'
import style from "./index.module.scss";

function FooterList({ children, title, rowGap=0 }) {

  return (
    <div id={`${style.ShopNav}`}>
      <div className={style.productTitle}><h2 className={`${style.title}`}>{title}</h2></div>
      <ul style={rowGap ? {rowGap:rowGap} : null} className={`${style.links}`}>{children}</ul>
    </div>
  )
}

export default FooterList