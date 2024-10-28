// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components' 
import message from "../../../assets/img/message.png.png"//falta img

function Form() {
    return (
        <FormContainer> 
            <section id="contact" className="section-contact">
                <div className="contact-container">
                    <h1>Contactanos</h1>
                    <div className="img-contact-container">
                    <img className='message1' src={message} alt="" />
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


export default Form 
const FormContainer = styled.form `
.section-contact{
    height: auto;
    width: 100%;
    font-size: 23px;
    text-align: center;
    background-color: RGB(161, 98, 7);
    color: RGB(254, 249, 195);
    padding: 4rem 0rem 8rem 0rem;
}
.section-contact h1{
    padding: 0 0 4rem 0;
}
.img-contact-container{
    padding-bottom: 2rem;
}
.form-container{
    font-size: 1rem;
    letter-spacing: 1.8px;
}
.contact{
    display: flex;
    flex-direction: column;
}

.img-contact{
    max-width: 100px;
    max-height: 100px;
}
.form-label{
    margin: 10px;
}

.form-input{
    padding: 10px;
    border-radius: 20px;
    color: RGB(113, 63, 18);
    background-color: RGB(254, 249, 195);
}

.textarea{
    width: 180px;
    height: 100px;
}

.button{
    color: RGB(254, 249, 195);
    background-color: RGB(113, 63, 18);
    padding: 8px 22px;
    margin-bottom: 30px;
    border-radius: 10px;
    transition: all .5 ease;
}

.button:hover{
    color: RGB(66, 32, 6);
    transform: scale(1.1,1.1);
}

@media (max-width: 768px) {
    .section-contact h1{
        font-size: 1.5rem;
    }
} 

.message1{
    width: 150px;
    height: 150px;
}
`