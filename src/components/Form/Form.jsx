// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components' 


function Footer() {
    return (
        <FormContainer> 
            <section id="contact" className="section-contact">
                <div className="contact-container">
                    <h1>Contactanos</h1>
                    <div className="img-contact-container">
                        
                    </div>
                    <form className="form-contact">
                        <div className="form-container">
                            <div className="contact">
                                <label id="name-contact" className="form-label"><input id="name" className="form-input" type="text" placeholder="name" required /></label>
                                <label id="email-contact" className="form-label"><input id="email" className="form-input" type="email" placeholder="email@example.com" required/></label> 
                                <label className="form-label"><textarea className="form-input textarea" placeholder="Message"></textarea></label>
                            </div>
                            <div className="button-container">
                                <input id="button" className="button" type="submit" value="ENVIAR"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
 
        </FormContainer> 
    );

}


export default Footer 
const FormContainer = styled.form ` `