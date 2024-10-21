
import styled from 'styled-components' 

function Nuestro_Producto() {
    return (
        <Nuestro_ProductoContainer>
            <section className="nuestro_producto">
                <h2 className="SectionTitle">Nuestro Producto</h2>
                <div className="cont">
                    <div className="containerProducto">
                        <figure className="imgContainer">
                            <img src="./img/homeSection.png" alt="muerte ciclica" className="imgProducto" />
                        </figure>
                        <p>En ECOS, brindamos servicios funerarios completos, desde
                            la organización de ceremonias y gestión de cementerios
                            hasta el apoyo en trámites legales, asegurando una despedida
                            digna y respetuosa. Además, contamos con una plataforma
                            digital donde almacenamos de forma segura los datos y biografías
                            de los difuntos, accesibles en nuestra web para que familiares y
                            amigos puedan recordar y honrar su memoria desde cualquier lugar.</p>
                    </div>
                </div>
            </section> 
        </Nuestro_ProductoContainer> //dentro del FooterContainer podes escribir Html.
    )

}

 //aqui fiera de funcion puede Js. (Arriba como abajo)

export default Nuestro_Producto
const Nuestro_ProductoContainer = styled.nuestro_producto `
.nuestro_producto{
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color:RGB(254, 249, 195);
    background: RGB(202, 138, 4);
}

.cont{
    padding-bottom: 10rem;
}

.SectionTitle{
    padding: 4rem 2rem;
    font-size: 32px;
}

.containerProducto{
    max-width: 45rem;
    width: auto;
    text-align: left;
    background-color: RGB(254, 249, 195);
}

.containerProducto p{
    max-width: 350px;
    max-height: 500px;
    padding: 2rem 0rem;
    color: RGB(133, 77, 14);
    margin: auto;
}

.imgContainer{
    max-width: 40rem;
    padding: 1rem;
    margin: auto;
}

.imgProducto{
    height: 100%;
    width: 100%;
}

@media (max-width: 768px) {
    .SectionTitle{
        font-size: 1.5rem;
    }
    
}
`