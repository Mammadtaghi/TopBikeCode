import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { IsOpenProvider } from "./Context/isOpenContext";
import { useUser } from "./Context/userContext";
import Layout from './Layouts/Layout';
import AboutUs from './Pages/AboutUs Page';
import Account from "./Pages/Account Page";
import ContactUs from './Pages/ContactUs Page';
import Error from "./Pages/Error Page";
import Home from './Pages/Home Page';
import Shop from "./Pages/Shop Page";
import UserLayout from "./Layouts/UserLayout";

function App() {

  const { user, setUser } = useUser()

  return (
    <BrowserRouter>
      <IsOpenProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/aboutus"} element={<AboutUs />}/>
            <Route path={"/contactus"} element={<ContactUs />}/>
            <Route path={"/shop"} element={<Shop />}/>
            <Route path={"*"} element={<Error />}/>
            <Route element={<UserLayout/>}>
              { user.role ? <Route path="/account" element={<Account />}/> : null}
            </Route>
          </Route>
        </Routes>
      </IsOpenProvider>
    </BrowserRouter>
  )
}

export default App
