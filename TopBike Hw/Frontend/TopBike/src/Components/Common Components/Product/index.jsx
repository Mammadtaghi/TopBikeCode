import React, { useState } from 'react';
import { useUser } from '../../../Context/userContext';
import style from "./index.module.scss";
import { useIsOpen } from '../../../Context/isOpenContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify =()=> toast("Wishlist Updated!")

function Product({ props }) {

  const { setIsOpen } = useIsOpen()

  const { user, AddToWishlist, isInWishlist } = useUser()

  const navigate = useNavigate()

  const [isIn, setisIn] = useState(isInWishlist(props._id))

  function handleAdd() {
    if (user.role) {
      AddToWishlist(props)
      navigate("/")
      setisIn(isInWishlist(props._id));
      notify()
      return
    }
    setIsOpen(true)
  }

  return (
    <div id={style.Product}>
      <Toaster />
      <div className={style.imgBox}>
        <img src={props.image.url} alt={props.title} />
        <div className={style.iconModal}>
          <div className={style.iconsContainer}>
            <div className={style.iconBox} onClick={() => handleAdd(props)}><i className={`fa-${isIn ? 'solid' : 'regular'} fa-heart`}></i></div>
            <div className={style.iconBox}><i className='fa-solid fa-shopping-bag'></i></div>
            <div className={style.iconBox}><i className='fa-solid fa-magnifying-glass'></i></div>
          </div>
        </div>
        {props.discount && <div className={style.discountBox}>-{props.discount}%</div>}      </div>
      <div className={style.textBox}>
        <h4 className={style.title}>{props.title}</h4>
        <p className={style.priceBox}><span style={props.discount ? { color: "grey", textDecoration: "line-through" } : { color: '#ffaa00' }}>${props.price}</span>{props.discount ? <span style={{ color: '#ffaa00' }}>${(props.price * (100 - props.discount) / 100)}</span> : null}</p>
      </div>
    </div>
  )
}

export default Product