import React from 'react'
import styled from 'styled-components'
import guy from '../assets/family.jpg'
import play from '../assets/play-icon-black.png'
import trailer from '../assets/play-icon-white.png'
import add from '../assets/watchlist-icon.svg'
import group from '../assets/group-icon.png'

const Detail = () => {
    return (
        <Container>
            <BackgroundImg>
                <img src={guy} alt="family guy"/>
            </BackgroundImg>
            <ImageTitle>
                <img src={guy} alt=""/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={play} alt="play"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src={trailer} alt="trailer"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <img src={add} alt="add"/>
                </AddButton>
                <GroupWatch>
                    <img src={group} alt="group"/>
                </GroupWatch>
            </Controls>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`;

const BackgroundImg = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    bottom: 0; 
    right: 0;
    z-index: -1;
    opacity: .8;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;  
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display:flex;
    align-items: center;
    
    > button {
        cursor: pointer;
    }
`;

const PlayButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.75px;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    width: 44px; 
    height: 44px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, .6);

    &:hover {
        background: rgb(198, 198, 198);
    }
`;
const GroupWatch = styled(AddButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px; 
    height: 44px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, .6);
`;