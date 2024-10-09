/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Routes from '../routes/Routers'

function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Routes />
            </main>
            <Footer />
        </>
    )
}
export default Layout