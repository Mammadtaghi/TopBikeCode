import React from 'react';
import style from "./index.module.scss";
import { useUser } from '../../Context/userContext';
import Product from '../../Components/Common Components/Product';
import usePagination from '../../Hooks/usePagination';

function WishlistPage() {

  const { user, AddToWishlist } = useUser()

  const [data, setData] = React.useState({ CP: 1, DPP: 2 })

  const [PageDatas, currentPage, setCurrentPage, setDataPerPage, pageNumbers, lastPageIndex] = usePagination(user.wishlist, data.DPP, data.CP)

  return (
    <main id={style.Wishlist}>
      <section id={style.MyWishlist}>
        <div className={style.container}>
          <h1 className={style.title}>My Wishlist</h1>
          <div className={`${style.grid} ${style.gridTest}`}>
            {PageDatas && PageDatas.map((item, i) => (
              <div key={item._id} className={style.productContainer} style={{ gridArea: `grid${i + 1}` }} >
                <Product props={item} />
              </div>
            ))}
          </div>
          <button onClick={() => setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage)}>Prev</button>
          {pageNumbers && pageNumbers.map(number=>{
            <button>{number}</button>
          })}
          <button onClick={() => setCurrentPage(currentPage < lastPageIndex ? currentPage + 1 : currentPage)}>Next</button>
        </div>
      </section>
    </main>
  )
}

export default WishlistPage