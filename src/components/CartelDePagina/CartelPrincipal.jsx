// eslint-disable-next-line no-unused-vars
import React from 'react'
import { styled } from 'styled-components';
// eslint-disable-next-line react/prop-types
function CartelPrincipal({ text }) {
    return (
        <CartelPrincipalContainer>
            <div className='FirstViewAbout'>
                    <img className='CemeteryImg' src="https://wallpapers.com/images/featured/imagenes-sky-hd-ivxyvj6v4e70wio1.jpg" alt="" />
                    <div className='TxtAboutContainer'>{text}</div>
            </div>
        </CartelPrincipalContainer>
    )
}

export default CartelPrincipal

const CartelPrincipalContainer = styled.div`
    .FirstViewAbout{
        width: 100%;
        height: 250px;
        position: relative;
    }
    .CemeteryImg{
        width: 100%;
        height: 250px;
        object-fit: cover;
        filter: brightness(40%);
    }
    .TxtAboutContainer {
        font-size: 4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        color: rgb(255, 255, 255);
    }
`