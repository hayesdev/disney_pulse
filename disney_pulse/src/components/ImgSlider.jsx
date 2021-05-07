import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderBadge from '../assets/slider-badging.jpg'
import sliderBadgeTwo from '../assets/slider-badag.jpg'
import sliderScale from '../assets/slider-scale.jpg'
import sliderScales from '../assets/slider-scales.jpg'



const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={sliderBadge} alt="slider"/>
            </Wrap>
            <Wrap>
                <img src={sliderBadgeTwo} alt="slider"/>
            </Wrap>
            <Wrap>
                <img src={sliderScale} alt="slider"/>
            </Wrap>
            <Wrap>
                <img src={sliderScales} alt="slider"/>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 10px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`;

const Wrap = styled.div`
    cursor: pointer;

    img {
        width: 100%; 
        height: 100%;
        /* padding-top: 40px; */
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: .25s;

        &:hover {
            border: 4px solid rgba(249, 249, 249, .8);
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        }
    }
`;