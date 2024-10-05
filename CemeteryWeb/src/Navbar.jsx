import React from 'react'

function Navbar() {
    return (
        <>
            <header class="header">
                    <div class="logo_container">
                        <img class="ecosImg" src="img/ECOS_Logo.png">
                    </div>
                    <div class="navbar">
                        <nav class="navbar-links">
                            <ul class="links">
                                <li><a class="nav-link" href="#section-about">About</a></li>
                                <li><a class="nav-link" href="#gallery">Gallery</a></li>
                                <li><a class="nav-link" href="#contacts">Contacts</a></li>
                            </ul>
                        </nav>
                        <button class="Btns"><a class='loginBtn' href='/login'>Login</a></button>
                        <button class="Btns registerBtn"><a href="">Register</a></button>
                    </div>
            </header>
        </>
    )
}

export default Navbar

