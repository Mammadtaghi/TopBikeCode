import React from 'react'
import style from "./index.module.scss";

function SearchBox() {
    return (
        <div id={style.SearchBox}>
            <input type="text" placeholder='Search...' name='search' id={style.search} />
            <button id={style.SearchBtn}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default SearchBox