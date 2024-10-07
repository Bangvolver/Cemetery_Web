import React from 'react'
import styled from 'styled-components'
import Logo from '../src/assets/img/ECOS_Logo.png'
import { useNavigate } from 'react-router-dom'
function Header() {
    const OnClickAlert = () => {alert('AAAAAAAAAAAA')}; // this for navigation in future
    return (
        <>
            <HeaderContainer>
                <div className='Navbar'>
                    <h2 className='EcosTitle'>ECOS</h2>
                    <nav className='NavLinks'>
                        <ul className='ListLinks'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </nav>
                    <div className='Buttons'>
                        <button className='Btns' onClick={OnClickAlert}>Login</button>
                        <button className='Btns RegisterBtn' onClick={OnClickAlert}>Register</button>
                    </div>
                </div>
            </HeaderContainer>
        </>
    )
}

export default Header

const HeaderContainer = styled.header`
    .Navbar{
        width: 100%;
        gap: 15px;
        display: flex;
        align-items: center;
        .EcosTitle{
            margin-left: 15px;
        }
        .NavLinks{
            display: flex;
            margin-left: auto;
            justify-content: center;
        }
        .NavLinks ul{
            gap: 20px;
            display: flex;
            list-style: none;
        }
    }
    .ListLinks{
        padding: 0;
    }
    .ListLinks li a{
        text-decoration: none;
        color: rgb(255, 215, 0);
    }
    .ListLinks li a:hover{
        opacity: .7; 
    }

    .Buttons{
        display: flex;
        gap: 15px;
        .Btns{
            border-radius: 5px;
            cursor: pointer;    
            padding: 8px;
        }
        .RegisterBtn{
            background-color: rgb(255, 215, 0);
            color: rgb(10, 10, 10);
        }
    }

    .Btns:hover {
        background-color: rgb(255, 235, 122);
    }
    @media (max-width: 768px) {
        .Navbar {
        justify-content: center;
        width: 100%;
        }
    }
    @media (max-width: 500px){
        .NavLinks{
            margin: auto;
        }
        .EcosTitle{
            display: none;
        }
        .Btns{
            margin-bottom: 20px;
        }
        .Navbar{
            flex-direction: column;
        }
    }
    width: 100%;
    min-height: 5rem;
    font-size: 1.1rem;
    position: relative;
    display: flex;
    align-items: center;
    background-color: rgb(10, 10, 10);
    font-family: Pussycat, Algerian, Broadway, Monospace;
`