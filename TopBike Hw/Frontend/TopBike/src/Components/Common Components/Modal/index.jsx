import React from 'react';
import style from "./index.module.scss";
import { useIsOpen } from '../../../Context/isOpenContext';

function Modal({ children }) {

    const { isOpen, setIsOpen } = useIsOpen()

    return (
        <div style={isOpen ? { visibility: "visible", opacity: "1" } : { visibility: "hidden", opacity: "0" }} id={style.Modal}>
            <div className={style.container}>
                <div onClick={() => setIsOpen(false)} className={style.iconBox}><i className="fa-solid fa-xmark"></i></div>
                {children}
            </div>
        </div>
    )
}

export default Modal