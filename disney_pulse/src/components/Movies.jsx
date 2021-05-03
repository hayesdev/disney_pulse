import React from 'react'
import styled from 'styled-components'
import guy from '../assets/family.jpg'

const Movies = () => {
    return (
       <Container>
           <h4>Recommended for You</h4>
           <Content>
                <Wrap>
                    <img src={guy} alt="family guy"/>
                </Wrap>
                <Wrap>
                    <img src={guy} alt="family guy"/>
                </Wrap>
                <Wrap>
                    <img src={guy} alt="family guy"/>
                </Wrap>
                <Wrap>
                    <img src={guy} alt="family guy"/>
                </Wrap>
                <Wrap>
                    <img src={guy} alt="family guy"/>
                </Wrap>
           </Content>
       </Container>
    )
}

export default Movies

const Container = styled.div`

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, .1);
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all .175s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.04);
        border: 4px solid rgba(249, 249, 249, .8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        }
`;