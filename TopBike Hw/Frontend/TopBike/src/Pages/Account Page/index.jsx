import React from 'react';
import { useUser } from '../../Context/userContext';
import UserInfo from '../../Layouts/Account Layouts/UserInfo';
import style from "./index.module.scss";
import NewProductForm from '../../Layouts/Account Layouts/NewProductForm';

function Account() {

  const { user } = useUser()

  return (
    <main id={style.Account}>
      <UserInfo />
      {user.role.includes("admin") ? <NewProductForm /> : null}
    </main>
  )
}

export default Account