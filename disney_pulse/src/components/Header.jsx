import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import homeIcon from '../assets/home-icon.svg'

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img  src={logo} alt='Disney logo'/>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src={homeIcon} alt="home"/>
                     <span>HOME</span>
                </a>
               
            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
position: fixed;
top: 0;
left: 0; 
right: 0;
height: 70px;
background-color: #090b13;
letter-spacing: 16px;
z-index: 3;
`;

const Logo = styled.a`
    display: inline-block;
    padding: 0;
    width: 80px;
    margin-top: 4px; 
    max-height: 70px;
    font-size: 0;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    margin: 0px;
    margin-right: auto;
    margin-left: 25px;
    padding: 0px;
    position: relative;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            width: 20px;
            min-width: 20px;
            z-index: auto;
        }

        span {
            position: relative;
            color: rgb(249, 249, 249);
            font-size: 13px;
            padding: 2px 0;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;

            &:before {
                position: absolute;
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                left: 0;
                right: 0;
                height: 2px;
                content: '';
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }    

    /* @media (max-width: 768px) {
        display: none;
    } */
`;