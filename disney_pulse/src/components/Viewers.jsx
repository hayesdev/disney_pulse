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
                <img src={disney} alt="disney"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source 
                        src='/disney-mov.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img src={starwars} alt="star wars"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source 
                        src='/star-wars-mov.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img src={marvel} alt="marvel"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source 
                        src='/marvel-mov.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img src={pixar} alt="pixar"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source 
                        src='/pixar-mov.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img src={national} alt="national geographic"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source 
                        src='/nat-geo-mov.mp4'
                        type='video/mp4'
                    />
                </video>
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

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    /* inset: 0px; */
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

    video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
    
    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, .8);
        transition-duration: .25s;

        video {
        opacity: 1;
        }
    }    
`;