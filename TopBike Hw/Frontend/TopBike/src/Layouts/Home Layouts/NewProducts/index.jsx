import React from 'react'
import { v4 } from 'uuid'
import Product from '../../../Components/Common Components/Product'
import { useProducts } from '../../../Context/productContext'
import style from "./index.module.scss"

function NewProducts() {

  const { Products, isLoading } = useProducts()

  return (
    <section id={style.NewProducts}>
      <h1 className={style.title}>New Products</h1>
      <div className={style.Container}>
        <div className={style.gridProduct}>
          {isLoading ? <span className={style.loader}></span> : Products && Products.map((product, index) => (
            <div key={v4()} style={{ gridArea: `grid${index}` }}>
              <Product id={product._id} image={product.image.url} title={product.title} price={product.price} discount={product.discount} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewProducts