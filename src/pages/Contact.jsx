// eslint-disable-next-line no-unused-vars
import React from 'react'
import CartelPrincipal from '../components/CartelDePagina/CartelPrincipal'
import styled from 'styled-components'
import Icons from './../components/ServicesIconsSvg/ServicesIcons'
function Contact() {
    return (
        <>
            <FormContainer>
                <CartelPrincipal text="Contactanos" />
                <h1>Ponte en contacto con nosotros</h1>
                <div className='iconsContainer'>
                    <p>Estamos aquí para ayudarte y responder cualquier pregunta que puedas tener. Esperamos tener noticias tuyas pronto.</p>
                    <div className='socialIcons'>
                        <Icons type="mail" />
                        <span>cementerioecos@gmail.com</span>
                    </div>
                    <div className="socialIcons">
                        <Icons type="phone" />
                        <span>+56 9 91827480</span>
                    </div>
                    <div className="socialIcons">
                    <Icons type="location" />
                        <span>Av. Luis Emilio Recabarren 2477, 1113749 Iquique, Tarapacá</span>
                    </div>
                </div>
                <form action="" className='formSection'>
                    <div className='nameSection'>
                        <label htmlFor="">
                            Nombre
                            <input type="text" placeholder='Qin' required />
                        </label>
                        <label htmlFor="">
                            Apellidos
                            <input type="text" placeholder='Shi Huang' required />
                        </label>
                    </div>
                    <div className='contacto'>
                        <label htmlFor="" >
                            Email
                            <input type="email" placeholder='QinShiHuang@hotmail.com' required />
                        </label>
                        <label htmlFor="" >
                            Numero
                            <input type="number" placeholder='+569 91827480' required />
                        </label>
                    </div>
                        <label htmlFor="" className='feedback'>
                            Mensaje (opcional)
                            <textarea type="text" placeholder='Ingresa tu mensaje aqui'/>
                        </label>
                        <div className="buttonContainer">
                            <button type='submit'>enviar</button>
                        </div>
                </form>
            </FormContainer>
        </>
    )
}

export default Contact

const FormContainer = styled.div`
    background-color: rgb(202, 138, 4);
    color: rgb(254, 249, 195);
    .buttonContainer{
        padding: 1rem;
    }
    button{
        display: flex;
        margin: auto;
        padding: .5rem 1rem;
        font-size: 1rem;
        border: none;
        font-weight: 700;
        border-radius: 10px;
        color: rgb(133, 77, 14);
        background-color: rgb(254, 249, 195);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    button:hover {
        color: rgb(254, 249, 195);
        background-color: rgb(160, 100, 0);
    }

    h1{
        text-align: center;
    }
    .iconsContainer {
        max-width: 600px;
        margin: 0 auto 3rem;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        
        p {
            text-align: center;
            margin-bottom: 2rem;
            line-height: 1.6;
            font-size: 1.1rem;
        }
    }

    .socialIcons {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        transition: transform 0.2s ease;

        &:hover {
            transform: translateX(10px);
        }

        span {
            font-size: 1rem;
        }
    }

    /* Sección del formulario */
    .formSection {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 12px;
    }

    .nameSection, 
    .contacto {
        display: flex;
        gap: 2rem;
        margin-bottom: 1.5rem;
        
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 1rem;
        }
    }

    label {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        font-size: 1.1rem;
        gap: 0.5rem;
        flex: 1;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid transparent;
        border-radius: 8px;
        background-color: rgb(254, 249, 195);
        color: rgb(133, 77, 14);
        font-size: 1rem;
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            border-color: rgb(160, 100, 0);
            box-shadow: 0 0 0 2px rgba(160, 100, 0, 0.2);
        }

        &::placeholder {
            color: rgba(133, 77, 14, 0.6);
        }
    }

    .feedback {
        margin: 1.5rem 0;
        width: 100%;

        textarea {
            min-height: 120px;
            resize: vertical;
        }
    }

    .buttonContainer {
        display: flex;
        justify-content: center;
        padding: 1.5rem 0;
    }

    button {
        padding: 0.75rem 2rem;
        font-size: 1.1rem;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        background-color: rgb(254, 249, 195);
        color: rgb(133, 77, 14);
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        &:hover {
            background-color: rgb(160, 100, 0);
            color: rgb(254, 249, 195);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: translateY(0);
        }
    }

    /* Responsive */
    @media (max-width: 768px) {
        padding: 1rem;

        input {
            width: 100%;
        }

        .feedback textarea {
            width: 100%;
        }
    }
`