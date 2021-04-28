import React from 'react'
import styled from 'styled-components'
import image from '../assets/login-background.jpg'
import logoOne from '../assets/cta-logo-one.svg'
import logoTwo from '../assets/cta-logo-two.png'


const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={logoOne} alt='logo'/>
                    <SignUp>GET ALL THREE FOR $12.99/MONTH</SignUp>
                    <Description>
                        Get Premier Access to Ray and the Last Dragon for an additional fee with a Disney Pulse subscription. As of 03/26/21, the price of Disney Pulse and the Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src={logoTwo} alt='logo two'/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vw;
    padding: 80px 40px;
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: noo-repeat;
    background-image: url(${image});
    position: absolute;
    top: 0;
    right: 0; 
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;    
    margin-bottom: 2vw;
    max-width: 650px;
    transition-timing-function: ease-out;
    transition: opacity .2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    display: block;
    width: 100%;
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    max-width: 600px;
    min-height: 1px;
    vertical-align: bottom;
`;