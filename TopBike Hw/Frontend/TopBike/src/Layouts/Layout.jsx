import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Common Layouts/Header';
import Footer from './Common Layouts/Footer';
import Modal from '../Components/Common Components/Modal';
import LoginRegisterForm from './Login_Register Layouts/LoginRegisterForm';
import { useUser } from '../Context/userContext';

function Layout() {

  const { user } = useUser()

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      { !user.role ? <Modal><LoginRegisterForm /></Modal> : null}

    </>
  )
}

export default Layout