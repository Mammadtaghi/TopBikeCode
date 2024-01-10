import React, { useState } from 'react'
import style from "./index.module.scss";
import HomeService from '../../../Components/Home Components/HomeService';
import axios from 'axios';
import useFetch from '../../../Hooks/useFetch';
import { v4 } from 'uuid';

function HomeServices() {

  const [res, setRes] = useState([])

  const response = useFetch("http://localhost:5000/services", setRes)

  return (
    <section id={style.HomeServices}>
      <div className={style.container}>
        { res && res.map(service=>(
          <HomeService key={v4()} info={service.info} title={service.title} img={service.image.url} />
        )) }
      </div>
    </section>
  )
}

export default HomeServices