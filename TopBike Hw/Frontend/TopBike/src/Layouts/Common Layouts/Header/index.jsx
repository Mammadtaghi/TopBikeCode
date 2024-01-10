import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsOpen } from '../../../Context/isOpenContext';
import { useUser } from '../../../Context/userContext';
import Navbar from '../Navbar';
import style from "./index.module.scss";

function Header() {

  const { isOpen, setIsOpen } = useIsOpen()

  const navigate = useNavigate()

  const { user } = useUser()

  function UseUserIcon() {
    if (user.role) {
      navigate("/account")
      return
    }
    setIsOpen(true)
  }

  return (
    <header className={style.header}>
      <div to={"/"} className={style.logoBox}>
        <img src={"https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289"} alt="" />
      </div>
      <Navbar />
      <div className={style.iconBox}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-user" onClick={UseUserIcon}>
          <div className={`${ user.role ? style.greenDot : style.redDot}`}></div>
        </i>
        <i className="fa-regular fa-heart">
          <div className={style.yellowDot}></div>
        </i>
        <i className="fa-solid fa-bag-shopping">
          <div className={style.yellowDot}></div>
        </i>
      </div>
    </header>
  )
}

export default Header
