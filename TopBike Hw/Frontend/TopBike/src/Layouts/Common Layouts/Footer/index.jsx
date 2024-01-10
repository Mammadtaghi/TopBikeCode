import React from 'react'
import style from "./index.module.scss";
import FooterList from '../../../Components/Footer Components/FooterList';
import { NavLink } from 'react-router-dom';
import Copyright from '../../../Components/Footer Components/Copyright';

function Footer() {
  return (
    <>
      <footer id={style.footer}>
        <div className={style.container}>
          <div className={style.infoBox}>

            <div className={style.imgBox}><img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" /></div>

            <p className={style.info}>The simple, delicate and light design makes it comfortable for everyone.</p>

            <div className={style.iconBox}>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-solid fa-globe"></i>
              <i className="fa-brands fa-behance"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>

          </div>

          <FooterList title={"Shop"}>
            <li><NavLink>Shopping</NavLink></li>
            <li><NavLink>Bicycle</NavLink></li>
            <li><NavLink>Bicycle Accessory</NavLink></li>
            <li><NavLink>Helmet</NavLink></li>
          </FooterList>

          <FooterList title={"About Us"}>
            <li><NavLink>About Us</NavLink></li>
            <li><NavLink>Pagination</NavLink></li>
            <li><NavLink>Terms & Conditions</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
            <li><NavLink>Accessories</NavLink></li>
            <li><NavLink>Term of use</NavLink></li>
          </FooterList>

          <FooterList title={"Information"}>
            <li><NavLink>Address</NavLink></li>
            <li><NavLink>Privacy Policy</NavLink></li>
            <li><NavLink>Terms & Conditions</NavLink></li>
            <li><NavLink>Products Return</NavLink></li>
            <li><NavLink>Wholesale Policy</NavLink></li>
          </FooterList>

        </div>
      </footer>
      <Copyright />
    </>
  )
}

export default Footer