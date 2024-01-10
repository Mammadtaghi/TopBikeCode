import React from 'react'
import style from "./index.module.scss";

function Button({children, onClick=()=>null, type=""}) {
  return (
    <button type={type} id={style.button} onClick={()=>onClick()}>
        {children}
    </button>
  )
}

export default Button