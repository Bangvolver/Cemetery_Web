/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { styled } from 'styled-components';

function ProfilesImagenes({LinkImg, Nombre, Cargo}) {
    return (
        <ImgContainer >
                <img src={LinkImg} alt="imagen del equipo ECOS" />
                <span>{Nombre}</span>
                <p>{Cargo}</p>
        </ImgContainer>
    )
}

export default ProfilesImagenes

const ImgContainer = styled.div`
    img{
        width: 250px;
        height: 250px;
    }
    span{
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: bolder;
    }
    p{
        font-size: 1.3rem;
    }
    display: flex;
    flex-direction: column;
    padding: 2rem;
`
