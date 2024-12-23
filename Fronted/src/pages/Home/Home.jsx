import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/Appdownload/AppDownload'
import './Home.css'
function Home() {
  const [category,setCategory]=useState('All')
  return (
    <div>
      <Header></Header>
      <Exploremenu category={category} setCategory={setCategory}></Exploremenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home