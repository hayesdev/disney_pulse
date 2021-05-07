import React, {useEffect} from 'react'
import styled from 'styled-components'
import homeBackground from '../assets/home-background.png'
import ImgSlider from './ImgSlider'
// import Movies from './Movies'
import Viewers from './Viewers'
import Recommends from './Recommends'
import db from '../firebase'
import {useDispatch, useSelector} from 'react-redux'
import {setMovies} from '../features/movie/movieSlice'
import { selectUserName } from "../features/user/userSlice";


const Home = () => {
    const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newMovie = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newMovie = [...newMovie, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newMovie: newMovie,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

    return (
       <Container>
           <ImgSlider />
           <Viewers/>
           {/* <Movies/> */}
           <Recommends />
       </Container>
    )
}

export default Home

const Container = styled.main`
    display: block;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;
    position: relative;
    top: 72px;

    &:after {
        background: url(${homeBackground}) center center / cover no-repeat fixed;
        content: '';
        position: absolute; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;