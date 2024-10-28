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
                    <p>We are here to help and answer any question you might have. We look forward to hearing from you.</p>
                    <div className='socialIcons'>
                        <Icons type="mail" />
                        <span>EcosFamily@gmail.com</span>
                    </div>
                    <div className="socialIcons">
                        <Icons type="phone" />
                        <span>+569 66666666</span>
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
                            Email
                            <input type="number" placeholder='+569 66666666' required />
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
    .iconsContainer{
        width: 100%;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        
    }
    .socialIcons{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .formSection{
        width: 100%;
        margin: auto;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .nameSection, .contacto{
        gap: 30px;
        display: flex;
        justify-content: center;
    }
    .feedback{
        display: flex;
        margin: auto;
        textArea{
            width: 400px;
            height: 100px;
        }
    }
    label{
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 1.2rem;
        padding: 10px 0;
    }
    input{
        width: 300px;
        padding: 1rem;
    }
`