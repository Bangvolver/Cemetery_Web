/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import NuestroProducto from './../components/Secciones/Nuestro_Prod/NuestroProducto'
import SectionPrices from '../components/Secciones/Section_Prices/SectionPrices'
import Form from '../components/Secciones/Form/Form'

function Home() {
    return (
        <>
            <SectionHome>
                <div className="diving">
                    <img className='homeImg' src="https://png.pngtree.com/background/20230607/original/pngtree-beautiful-day-at-a-graveyard-has-a-beautiful-background-picture-image_2902658.jpg" alt="Imagen de fondo" />
                    <div className="TxtHome">
                        <h1>ECOS</h1>
                        <cite>"No se muere quien se va, solo se muere quien se olvida"</cite>
                    </div>
                </div>
            </SectionHome>
            <NuestroProducto />
            <SectionPrices />
            <Form />
        </>
    )
}

export default Home

const SectionHome = styled.section`
    .diving {
        width: 100vw;
        display: flex;
        justify-content: center;
        height: auto;
    }
    .homeImg {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(60%);
    }
    .TxtHome {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
    }
    .TxtHome h1 {
        font-size: 3rem;
    }

    .TxtHome cite {
        font-size: 1.5rem;
        font-style: italic;
    }

    @media (max-width: 768px) {
        .TxtHome h1 {
        font-size: 2rem;
        }
        .TxtHome cite {
        font-size: 1.2rem;
        }
    }

    @media (max-width: 480px) {
        .TxtHome h1 {
        font-size: 1.5rem;
        }
        .TxtHome cite {
        font-size: 1rem;
        }
        .homeImg {
        width: auto;
        }
    }
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;

`


