import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { v4 } from "uuid";
import HomeNav from '../../../Components/Navbar Components/HomeNav';
import NavList from '../../../Components/Navbar Components/NavList';
import SubNavProduct from '../../../Components/Navbar Components/SubNav Product';
import usePagination from '../../../Hooks/usePagination';
import style from "./index.module.scss";
import { useProducts } from '../../../Context/productContext';

const SubNav = styled.div`
    display: flex;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 30px;
    background-color: #242627;
    transform-origin: top center;
    transition: 0.4s ease-out;
  `

// const FakeAPI = [
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 40,
//     discount: 15,
//   },
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 20,
//     discount: 10,
//   },
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 100,
//     discount: 4,
//   },
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 70,
//     discount: 8,
//   },
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 60,
//     discount: 3,
//   },
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 90,
//     discount: 0,
//   },
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 110,
//     discount: 0,
//   },
//   {
//     image: "https://topbike-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1608083590",
//     title: "Bike Parts",
//     price: 120,
//     discount: 0,
//   },
// ]

function Navbar() {

  const { Products } = useProducts()

  const [PageData, currentPage, setCurrentPage, setDataPerPage, pageNumbers, lastPageIndex] = usePagination([...Products], 3, 1 )

  return (
    <nav id={style.nav}>
      <ul className={style.navList}>
        <li>
          <NavLink to={"/"} className={style.navLink}>Home</NavLink>
          <SubNav className={`${style.subNav} ${style.homeSubNav}`}>
            <HomeNav style={{ grid: "grid1" }} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/home1_79702614-1d24-4067-9a69-2ee018b89d3b.jpg"} title={"Home 1"} />
            <HomeNav style={{ grid: "grid2" }} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/home2_411f599e-59e9-4ba9-8de2-3d92ad6282c6.jpg"} title={"Home 2"} />
            <HomeNav style={{ grid: "grid3" }} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/home3_8ef816a2-0531-4578-a497-139164f99d10.jpg"} title={"Home 3"} />
            <HomeNav style={{ grid: "grid4" }} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/home4_3c5e0131-1366-4c93-a41b-9f35d04f4449.jpg"} title={"Home 4"} />
            <HomeNav style={{ grid: "grid5" }} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/home5_6e4f660a-7d2a-4559-869e-761708fefc9a.jpg"} title={"Home 5"} />
          </SubNav>
        </li>
        <li>
          <NavLink to={"/shop"} className={style.navLink}>Shop</NavLink>
          <SubNav className={`${style.subNav} ${style.shopNav}`}>
            <NavList title={"Shop Layout"}>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
            </NavList>
            <NavList title={"Shop Heading"}>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
            </NavList>
            <NavList title={"Filter Layout"}>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
            </NavList>
            <NavList title={"Product Layout"}>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
            </NavList>
            <NavList title={"Product Type"}>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
            </NavList>
            <NavList title={"Product Extends"}>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
              <li><NavLink>Pagination</NavLink></li>
            </NavList>
            <div className={`${style.imgBox}`}><img src={"https://topbike-store-demo.myshopify.com/cdn/shop/t/2/assets/apmenuitem_ihtml_2.jpg?v=59416964537520428881607489856"} /></div>
          </SubNav>
        </li>
        <li>
          <NavLink to={"/featured"} className={style.navLink}>Featured</NavLink>
          <SubNav className={`${style.subNav} ${style.featuredNav}`}>
            <iframe className={style.video} src="https://player.vimeo.com/video/203552982?background=1&amp;quality=1080p&amp;loop=1" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
            <div className={style.featuredLists}>
              <NavList title={"9 PRODUCT HOVER"}>
                <li><NavLink>Product Hover Style 1</NavLink></li>
                <li><NavLink>Product Hover Style 2</NavLink></li>
                <li><NavLink>Product Hover Style 3</NavLink></li>
                <li><NavLink>Product Hover Style 4</NavLink></li>
                <li><NavLink>All Style</NavLink></li>
              </NavList>
              <NavList title={"THEME ELEMENT"}>
                <li><NavLink>Ajax Search</NavLink></li>
                <li><NavLink>Ajax Minicart</NavLink></li>
                <li><NavLink>Recently Products</NavLink></li>
                <li><NavLink>Social Share</NavLink></li>
              </NavList>
              <NavList><li><NavLink></NavLink></li></NavList>
            </div>
          </SubNav>
        </li>
        <li>
          <NavLink to={"/pages"} className={style.navLink}>Pages</NavLink>
          <SubNav className={`${style.subNav} ${style.pagesNav}`}>
            <NavList title={"DEMO LAYOUT"}>
              <li><NavLink>Full Screen </NavLink></li>
              <li><NavLink>Heading Background</NavLink></li>
              <li><NavLink>Simple</NavLink></li>
            </NavList>
            <NavList title={"PRE - BUILD PAGES"}>
              <li><NavLink to={"/aboutus"}>About Us</NavLink></li>
              <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
              <li><NavLink to={"/faqs"}>FAQs</NavLink></li>
              <li><NavLink to={"/error"}>404 Page</NavLink></li>
              <li><NavLink to={"/login"}>Login</NavLink>/<NavLink to={"/register"}>Register</NavLink></li>
            </NavList>
            <NavList title={"ECOMERCE"}>
              <li><NavLink to={"/shop"}>Shop</NavLink></li>
              <li><NavLink to={"/cart"}>Cart</NavLink></li>
              <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
              <li><NavLink to={"/account"}>My Acoount</NavLink></li>
            </NavList>
          </SubNav>
        </li>
        <li>
          <NavLink to={"/blogs"} className={style.navLink}>Blogs</NavLink>
          <SubNav className={`${style.subNav} ${style.blogsNav}`}>
            <NavList title={"Layout"}>
              <li><NavLink>Grid</NavLink></li>
              <li><NavLink>Classic</NavLink></li>
              <li><NavLink>Standart</NavLink></li>
              <li><NavLink>No Sidebar</NavLink></li>
              <li><NavLink>Left Sidebar</NavLink></li>
              <li><NavLink>Right Sidebar</NavLink></li>
            </NavList>
            <NavList title={"Single Post"}>
              <li><NavLink>Audio</NavLink></li>
              <li><NavLink>Video</NavLink></li>
              <li><NavLink>Standart</NavLink></li>
              <li><NavLink>No Sidebar</NavLink></li>
              <li><NavLink>Left Sidebar</NavLink></li>
              <li><NavLink>Right Sidebar</NavLink></li>
            </NavList>
            <NavList
              rowGap={"0px"}
              title={"New Products"}
              icons={<><i onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null} className="fa-solid fa-angle-left"></i>
                <i onClick={() => currentPage < lastPageIndex ? setCurrentPage(currentPage + 1) : null} className="fa-solid fa-angle-right"></i></>}>
              {PageData.map(item => (
                <SubNavProduct
                  key={v4()}
                  title={item.title}
                  discount={item.discount}
                  price={item.price}
                  image={item.image.url}
                />
              ))}
            </NavList>
          </SubNav>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar