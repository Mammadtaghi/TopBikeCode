import React from 'react';
import Hero from '../../Layouts/Home Layouts/Home Hero';
import HomeServices from '../../Layouts/Home Layouts/Home Services';
import NewProducts from '../../Layouts/Home Layouts/NewProducts';

function Home() {
  return (
    <main>
      <Hero />
      <HomeServices />
      <NewProducts />
    </main>
  )
}

export default Home