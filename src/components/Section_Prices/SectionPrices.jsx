// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components' 

function SectionPrices() {
    return (
        <SectionPricesContainer> 
            <h1 className="tablaP">Tabla de Precios</h1>
            <div className="pricing-table">
                <h2 className="basico">Básico</h2>
                <p className="price">$150.00</p>
                <ul>
                    <li>Arreglos funerarios</li>
                    <li>Proceso de cremación</li>
                    <li className="unavailable">Vestir y cosmetizar</li>
                    <li className="unavailable">Servicio de vehículo</li>
                </ul>
                <button>Contratar ahora</button>
            </div>
            <div className="pricing-table">
                <h2 className="premium">Premium</h2>
                <p className="price">$300.00</p>
                <ul>
                    <li>Arreglos funerarios</li>
                    <li>Proceso de cremación</li>
                    <li>Vestir y cosmetizar</li>
                    <li className="unavailable">Servicio de vehículo</li>
                </ul>
                <button>Contratar ahora</button>
            </div>
            <div className="pricing-table">
                <h2 className="ultimate">Ultimate</h2>
                <p className="price">$500.00</p>
                <ul>
                    <li>Arreglos funerarios</li>
                    <li>Proceso de cremación</li>
                    <li>Vestir y cosmetizar</li>
                    <li>Servicio de vehículo</li>
                </ul>
                <button>Contratar ahora</button>
            </div>
 
        </SectionPricesContainer> //dentro del FooterContainer podes escribir Html.
    )

}

 //aqui fiera de funcion puede Js. (Arriba como abajo)

export default SectionPrices
const SectionPricesContainer = styled.sectionprices ` // FooterCointer = FootercContainer(RED inside return) & de aqui pa bajo CSS

`