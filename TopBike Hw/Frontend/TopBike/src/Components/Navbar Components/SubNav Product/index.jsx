import React from 'react';
import style from "./index.module.scss";

function SubNavProduct({image, title, price, discount=0}) {

  return (
    <div id={style.subNavProduct}>
      <div className={style.imgBox}><img src={image} /></div>
      <div className={style.textBox}>
        <h3 className={style.proudctTitle}>{title}</h3>
        <p className={style.productPrice}><span style={discount ? {textDecoration:"line-through", fontSize:"12px"} : {}}>${price}</span>{ discount ? <span>${(price*(100 - discount)/100)}</span> : null}</p>
      </div>
    </div>
  )
}

export default SubNavProduct