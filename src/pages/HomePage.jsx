import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Products from '../components/Products'

const HomePage = () => {
  return (
    <React.Fragment>
        <Header/>
        <Slider/>
        <Products/>
    </React.Fragment>
  )
}

export default HomePage