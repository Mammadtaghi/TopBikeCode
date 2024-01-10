import React from 'react'
import style from "./index.module.scss";

function Product({ id, image, title, price, discount }) {

  return (
    <div id={style.Product}>
      <div className={style.imgBox}>
        <img src={image} alt={title} />
        <div className={style.iconsContainer}>
          <div className={style.iconBox}><i className='fa-regular fa-heart'></i></div>
          <div className={style.iconBox}><i className='fa-solid fa-shopping-bag'></i></div>
          <div className={style.iconBox}><i className='fa-solid fa-magnifying-glass'></i></div>
        </div>
        { discount ? <div className={style.discountBox}>-{discount}%</div> : null}
      </div>
      <div className={style.textBox}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.priceBox}><span style={discount ? {color:"grey", textDecoration:"line-through"} : {color:'#ffaa00'}}>${price}.00</span>{ discount ? <span style={{color:'#ffaa00'}}>${(price*(100-discount)/100)}.00</span> : null}</p>
      </div>
    </div>
  )
}

export default Product