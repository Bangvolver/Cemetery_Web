// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Login from '../pages/Login'
function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/Gallery' element={<Gallery/>} />
            <Route path='/Contacts' element={<Contact/>} />
        </Routes>
    )
}

export default Routers
