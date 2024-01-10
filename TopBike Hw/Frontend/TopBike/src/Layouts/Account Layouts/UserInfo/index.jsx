import React from 'react'
import style from "./index.module.scss";
import { useUser } from '../../../Context/userContext';
import Button from '../../../Components/Common Components/Button';
import { useNavigate } from 'react-router-dom';

function UserInfo() {

    const { user, Logout } = useUser()

    const navigate = useNavigate()

    function AccountLogout() {
        Logout()
        navigate("/")
    }

    return (
        <section id={style.UserInfo}>
            <h1>{user.username}</h1>
            <Button onClick={AccountLogout}>Log out</Button>
        </section>
    )
}

export default UserInfo