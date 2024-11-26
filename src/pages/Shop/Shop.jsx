import React from 'react'
import s from "./Shop.module.scss"
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Header from '../../components/Header/Header'

const Shop = () => {
  return (
    <>
    <Header/>

    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/' element={<Sh/>
    </Routes>
    
    </>
  )
}

export default Shop