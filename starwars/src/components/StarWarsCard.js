import React from 'react';
import axios from 'axios';
import StarWarsFilms from './StarWarsFilms';
import styled from 'styled-components';

const CardContainer = styled.div`
     background-color:	#FFD9AD;
     border:1px solid white;
     width:300px;
     border-radius:10px;
`
function StarWarsCard(props){

    const name = props.item.name
    const gender = props.item.gender
    const birthYear = props.item.birth_year
    const films = props.item.films


    const willy = []
     films.map(item => {
         return axios.get(`${item}`)
         .then(response => {
              willy.push(response.data)
         })
    })


    return(
         <div>
              <StarWarsFilms film={willy}/>
         <CardContainer>
              <h1>{name}</h1>
              <p>Gender: {gender}</p>
              <p>Birth Year: {birthYear}</p>
         </CardContainer>
         </div>
    )
}
export default StarWarsCard;