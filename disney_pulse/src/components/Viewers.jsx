import React from 'react'
import styled from 'styled-components'
import disney from '../assets/viewers-disney.png'
import marvel from '../assets/viewers-marvel.png'
import national from '../assets/viewers-national.png'
import pixar from '../assets/viewers-pixar.png'
import starwars from '../assets/viewers-starwars.png'

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src={disney} alt=""/>
            </Wrap>
            <Wrap>
                <img src={starwars} alt=""/>
            </Wrap>
            <Wrap>
                <img src={marvel} alt=""/>
            </Wrap>
            <Wrap>
                <img src={pixar} alt=""/>
            </Wrap>
            <Wrap>
                <img src={national} alt=""/>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    // grid gap adds gap between every item
    grid-gap: 25px;
    margin-top: 30px;
    padding: 30px 0 26px;
`;

const Wrap = styled.div`
    border:  3px solid rgba(249, 249, 249, .1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, .8);
        transition-duration: .25s;
    }    
`;