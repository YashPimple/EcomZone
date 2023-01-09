import React from 'react'
import "./Homepage.scss"
import Slider from '../../components/Slider/Slider'
import Featured from '../../components/Featured/Featured'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
const Homepage = () => {
  return (
    <div className='home'>
      <Slider />
      <Featured type="Featured"/>
      <Categories />
      <Featured type="Trending"/>
      <Contact />
    </div>
  )
}

export default Homepage