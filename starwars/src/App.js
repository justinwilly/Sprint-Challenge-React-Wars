import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './components/StarWarsCard';
import './App.css';
import styled from 'styled-components';

const MainContainer = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
`
const MainHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  useEffect( () => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        // console.log(response.data.results)
        const starWarsData = response.data.results;
        setData(starWarsData);
      })
      .catch(error => {
        console.log("Your data was not returned", error)
      })
  },[])


  return (
    <MainContainer>
      <MainHeader>React Wars</MainHeader>
      {
        data.map(item => {
          return <StarWarsCard item={item} key={item.url} />
        })
      }
    </MainContainer>
  );
}

export default App;
