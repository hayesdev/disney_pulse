import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {auth, provider } from '../firebase'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import homeIcon from '../assets/home-icon.svg'
import searchIcon from '../assets/search-icon.svg'
import watchlistIcon from '../assets/watchlist-icon.svg'
import originalsIcon from '../assets/original-icon.svg'
import movieIcon from '../assets/movie-icon.svg'
import seriesIcon from '../assets/series-icon.svg'
import {
    selectUserName, 
    selectUserEmail,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from '../features/user/userSlice'
import {useSelector, useDispatch} from 'react-redux'

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                history.push('/home')
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((res) => {
            let user = res.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
            history.push('/home')
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            history.push('/')
            //redirects to login page
        })
    }
    
    return (
        <Nav>
            <Logo>
                <img  src={logo} alt='Disney logo'/>
            </Logo>
                { !userName ? (
                     <Login onClick={signIn}>LOGIN</Login>) :
                     <>
                         <NavMenu>
                    <Link to='/home'>
                         <img src={homeIcon} alt="home"/>
                     <span>HOME</span>
                    </Link>
                <a href='/search'>
                     <img src={searchIcon} alt="home"/>
                     <span>SEARCH</span>
                </a>
                <a href='/watchlist'>
                     <img src={watchlistIcon} alt="home"/>
                     <span>WATCHLIST</span>
                    </a>
        
                <a href="/originals">
                    <img src={originalsIcon} alt="home"/>
                     <span>ORIGINALS</span>
                </a>
               <a href="/movies">
                 <img src={movieIcon} alt="home"/>
                     <span>MOVIES</span>
                </a>
                <a href="/series">
                 <img src={seriesIcon} alt="home"/>
                     <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg 
                onClick={signOut}
                src={userPhoto}
                title="Sign out"
            />
                    </>
                }            
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
overflow-x: hidden;
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
    flex: 1;
    /* justify-content: flex-end; */
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
                /// scaleX from (0) to (1) makes the element appear to grow
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

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    letter-spacing: 1.2px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease-out;

    &:hover {
        background-color: #ffff;
        color: rgba(0, 0, 0, 0.6);
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;