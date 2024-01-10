import React from 'react'
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import SearchBox from '../../Components/Common Components/SearchBox';

function Error() {

  const navigate = useNavigate()

  return (
    <main>
      <section id={style.Error}>
        <h1 className={style.status}>404</h1>
        <h2 className={style.notFound}>Oops! That Page Can’t Be Found.</h2>
        <p className={style.notExits}>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</p>
        <p className={style.return}>Please return to <span onClick={()=>navigate("/")} className={style.homePage}>Home Page</span></p>
        <SearchBox />
      </section>
    </main>
  )
}

export default Error