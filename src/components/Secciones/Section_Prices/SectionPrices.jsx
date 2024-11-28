// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components' 
function SectionPrices() {
    return (
        <SectionPricesContainer>
            <section className="sectionPrices">
                <h1 className="tablaP">Tabla de Precios</h1>
              <div className="PricingContainer">
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
                </div>
            </section>
        </SectionPricesContainer> //dentro del FooterContainer podes escribir Html.
    )

}

export default SectionPrices
const SectionPricesContainer = styled.section `
    .tablaP{
        font-size: 32px;
        padding-bottom: 4rem;
        text-align: center;
        color: RGB(133, 77, 14);
    }
    .sectionPrices{
        width: 100%;
        padding: 4rem 0rem 10rem 0rem;
        background-color: RGB(254, 240, 138);
    }
    .PricingContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }

    .pricing-table {
        border-radius: 10px;
        padding: 20px;
        width: 250px;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease; 
    }

    .pricing-table:hover {
        transform: scale(1.05);
    }

    .pricing-table h2 {
        background: linear-gradient(to right, #ff7e5f, #feb47b);
        color: white;
        padding: 20px 0;
        margin: 0;
        border-radius: 10px 10px 0 0;
    }

    .pricing-table h2.basico {
        background: linear-gradient(to right, #7f00ff, #e100ff);
    }

    .pricing-table h2.premium {
        background: linear-gradient(to right, #fc466b, #3f5efb);
    }

    .pricing-table h2.ultimate {
        background: linear-gradient(to right, #00f260, #0575e6);
    }

    .pricing-table ul {
        list-style: none;
        padding: 0;
        margin: 20px 0;
    }

    .pricing-table ul li {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }

    .pricing-table ul li.unavailable {
        color: #ccc;
        text-decoration: line-through;
    }

    .pricing-table .price {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        display: flex;
        justify-content: center;
    }

    .pricing-table button {
        background-color: #feb47b;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 15px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease; 
    }

    .pricing-table button:hover {
        background-color: #ff7e5f;
    }

    @media (max-width: 768px) {
        .pricing-table{
            width: 200px;
        }
        .tablaP{
            font-size: 1.5rem;
        }
    }
`