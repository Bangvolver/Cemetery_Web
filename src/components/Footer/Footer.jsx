// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components' 

function Footer() {
    return (
        <FooterContainer> 
            <div className='marijuan'>JIJIJIJII</div>  
 
        </FooterContainer> //dentro del FooterContainer podes escribir Html.
    )

}

 //aqui fiera de funcion puede Js. (Arriba como abajo)

export default Footer 
const FooterContainer = styled.footer ` // FooterCointer = FootercContainer(RED inside return) & de aqui pa bajo CSS
.marijuan{
    width: 100px;
    color: #000;
    height: 100px;
    background-color: #000;
}
`