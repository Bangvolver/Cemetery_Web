// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components' 
import Icons from '../../ServicesIconsSvg/ServicesIcons';

function Footer() {
    return (
        <FooterContainer> 
            <footer className="footer">
                <ul className="social_icon">
                    <li><a href="#"><Icons type="facebook"/></a></li>
                    <li><a href="#"><Icons type="twitter"/></a></li>   
                    <li><a href="#"><Icons type="linkedin"/></a></li>
                    <li><a href="#"><Icons type="instagram"/></a></li>
                </ul>
                <ul className="menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre nosotros</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Equipo</a></li>
                    <li><a href="">Contactos</a></li>
                </ul>
                <p>&copy; 2024 <b>Equipo ECOS</b> | Todos los Derechos Reservados.</p>
            </footer>
        </FooterContainer>
    );

}

 //aqui fiera de funcion puede Js. (Arriba como abajo)

export default Footer 
const FooterContainer = styled.footer ` // FooterCointer = FootercContainer(RED inside return) & de aqui pa bajo CSS
    .footer{
        position: relative;
        width: 100%;
        min-height: 100px;
        padding: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: RGB(133, 77, 14);
    }

    footer .social_icon, footer .menu{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        flex-wrap: wrap;
    }

    footer .social_icon li, footer .menu li{
        list-style: none;
    }

    footer .social_icon li a{
        font-size: 2em;
        color: #fff;
        margin: 0 10px;
        display: inline-block;
        transition: 0.5s;
    }

    footer .social_icon li a:hover{
        transform: translateY(-10px);
    }

    footer .menu li a{
        font-size: 1.2em;
        color: RGB(255, 215, 0);
        margin: 0 10px;
        display: inline-block;
        opacity: 0.75;
        text-decoration: none;
    }

    footer .menu li a:hover{
        opacity: 1;
    }

    footer p{
        color: RGB(254, 249, 195);
        text-align: center;
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 1.1em;
    }
`