// eslint-disable-next-line no-unused-vars
import React from 'react'
import { styled } from 'styled-components';
import Icons from './../components/ServicesIconsSvg/ServicesIcons';

function About() {
    return (
        <SectionAbout>
            <div className='FirstViewAbout'>
                <img className='CemeteryImg' src="https://wallpapers.com/images/featured/imagenes-sky-hd-ivxyvj6v4e70wio1.jpg" alt="" />
                <div className='TxtAboutContainer'>
                    About Us
                </div>
            </div>
            <section className='ExplainAbout'>
                <div className='MainAbout'>
                    <p>
                        <span>Sobre ECOS</span>
                        Desde la organización de ceremonias personalizadas hasta la gestión completa de cementerios,
                        nos encargamos de cada detalle para garantizar una despedida digna y en paz. Además,
                        facilitamos todos los trámites legales necesarios, aliviando a las familias de preocupaciones
                        adicionales durante estos momentos sensibles. 
                        <br/>
                        <br/>
                        Nuestra plataforma digital añade un valor único:
                        almacenamos de manera segura la información y las biografías de los difuntos, creando un espacio
                        accesible y permanente donde familiares y amigos pueden honrar su legado. Desde cualquier parte
                        del mundo, es posible recordar y rendir homenaje a los seres queridos, preservando su memoria de
                        forma duradera.
                        <br/>
                        <br/>
                        En ECOS, creemos que cada vida merece ser recordada con el respeto y la atención que se ha ganado.
                        Por ello, combinamos servicios funerarios tradicionales con tecnología moderna para ofrecer una
                        experiencia significativa y cercana que ayuda a las familias a mantener vivo el legado de sus
                        seres queridos.
                    </p>
                    <img className='MainImg' src="https://i.pinimg.com/564x/fb/50/a1/fb50a1805ea2b43cad75a364b643bee9.jpg" alt="" />
                </div>
            </section>
            <section className="ServicesEcos">
                <div className="icons">
                    <Icons type="organization" />
                    <p>
                        Servicios de planificación anticipada, 
                        pueden expresar y organizar sus deseos 
                        y preferencias para su despedida.
                    </p>
                </div>
                <div className="icons">
                    <Icons type="ceremony" />
                    <p>
                        Diseñamos funerales según las preferencias
                        de cada familia para una despedida significativa.
                    </p>
                </div>
                <div className="icons">
                    <Icons type="cloudStorage" />
                    <p>
                        Ofrecemos un espacio en la nube para recordar
                        y honrar a los difuntos desde cualquier lugar.
                    </p>
                </div>
            </section>
        </SectionAbout>
    )
}
 
export default About

const SectionAbout = styled.section`
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
    .ExplainAbout{
        height: auto;
        width: 100%;
        background-color: rgb(254, 249, 195);
    }
    .MainAbout{
        width: 100%;
        height: auto;
        padding: 4rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: rgb(254, 249, 195);
        background-color: rgb(202, 138, 4);
        p {
            width: 700px;
            display: flex;
            flex-direction: column;
            text-align: left;
            font-size: 1.2rem;
            margin: 0 0 20px 0;
            span{
                font-size: 2rem;
                margin-bottom: 20px;
                font-weight: bolder;
            }
        }
        img{
            width: 700px;
            height: 300px;
        }
    }
    .ServicesEcos{
        height: auto;
        width: 100%;
        display: flex;
        gap: 50px;
        padding: 4rem 0;
        flex-wrap: wrap;
        justify-content: center;
        background-color: rgb(254, 249, 195);
    }
    .icons{
        display: flex;
        flex-direction: row;
        p{
            width: 200px;
            margin-left: 2rem;
            color: rgb(133, 77, 14);
        }
    }
`