import React from 'react'
import { useUser } from '../Context/userContext'
import { Outlet } from 'react-router-dom'

function UserLayout() {

    const { user } = useUser()

    return (
        <div>
            { user.username ? <Outlet/> : null }
        </div>
    )
}

export default UserLayout