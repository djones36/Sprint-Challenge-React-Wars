import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PersonCard from "./components/cards";
import styled from "styled-components";

const SiteStyle = styled.div`
  width:1024px;
  margin: 0 auto;
    .Header{
      text-align:center;
    }
`;
const AppStyle = styled.div`
  display:flex;
  flex-wrap:wrap;
  border:1px orange solid;
  justify-content: space-evenly;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [personState, setPerson] = useState();

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response.data.results);
      const starData = response.data.results;
      setPerson(starData);
    })
    .catch(error =>{
      console.log("Error: ", error)
    })

  }, [])

  if(!personState)return <h3>loading...</h3>;

  return (
    <SiteStyle className="sitewrapper">
      <h1 className="Header">React Wars</h1>
        <AppStyle className="App">
          {personState.map((person, index) => {
            return(
              <PersonCard 
              key={index}
              name={person.name}
              birth={person.birth_year}
              gender={person.gender}
              haircolor = {person.hair_color}
              height ={person.height}
              mass={person.mass} />
            )})}
        </AppStyle>
    </SiteStyle>
  );
  
}

export default App;
