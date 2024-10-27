// eslint-disable-next-line no-unused-vars
import { React, useEffect, useState } from 'react';
import CartelPrincipal from '../components/CartelDePagina/CartelPrincipal';
import styled from 'styled-components';
import axios from 'axios';

function Gallery() {
    const [usuarios, setUsuarios] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9); 

    useEffect(() => {
        axios
            .get("https://apimocha.com/ecosgallery/POSTS")
            .then(response => setUsuarios(response.data));
    }, []);

    const cargarMas = () => {
        setVisibleCount((prevCount) => prevCount + 9);
    };

    return (
        <>
            <CartelPrincipal text="Galería" />
            <GalleryContainer>
                <h2>Una galería conmemorativa que muestra
                    fotos de personas en vida, acompañadas
                    de detalles sobre su historia y legado,
                    ofreciendo un espacio respetuoso para
                    honrar sus memorias.
                </h2>
            <section className='CardContainer'>
                {usuarios.slice(0, visibleCount).map((x) => ( 
                    <div key={x.id} className='cards'>
                        <h1>{x.Name}</h1>
                        <img src={x.Image} alt="Personas Muertas" />
                        <span>Nacimiento: {x.Born}</span>
                        <span>Defuncion: {x.Died}</span>
                        <span>Trabajo: {x.Job}, {x.CompanyName}</span>
                        <span>Hobbie: {x.Interests}</span>
                    </div>
                ))}       
            </section>
                {visibleCount < usuarios.length && ( // Muestra el botón solo si   quedan más tarjetas por cargar
                    <button onClick={cargarMas} className='button'>Cargar más</button>
                )                                                               }
            </GalleryContainer>
        </>
    );
}

export default Gallery;

// Estilos para el contenedor de la galería
const GalleryContainer = styled.div`
    height: 100%;
    padding: 50px;
    background-color: rgb(202, 138, 4);
    text-align: center;
    h2{
        font-size: 1.9rem;
        color: rgb(254, 249, 195);
    }
    img {
        width: 150px;
        height: 150px;
        padding-bottom: 1rem;
    }
    .CardContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;        
        padding: 3rem 0;
        gap: 50px;
    }
    .cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 250px;
        height: 320px;
        padding: 20px;
        font-weight: 700;
        border-radius: 20px;
        color: rgb(133, 77, 14);
        background-color: rgb(254, 249, 195);
    }
    .button{
        display: flex;
        margin: auto;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        font-weight: 700;
        border-radius: 10px;
        color: rgb(133, 77, 14);
        background-color: rgb(254, 249, 195);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .button:hover {
        color: rgb(254, 249, 195);
        background-color: rgb(160, 100, 0);
    }
`