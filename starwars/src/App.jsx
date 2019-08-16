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

  const [person, setPerson] = useState();

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response.data);
      const starData = response.data;
      setPerson(starData);
    })
    .catch(error =>{
      console.log("Error: ", error)
    })

  }, [])

  if(!person)return <h3>loading...</h3>;

  return (
    <SiteStyle className="sitewrapper">
      <h1 className="Header">React Wars</h1>
        <AppStyle className="App">

          <PersonCard/>
        </AppStyle>
    </SiteStyle>
  );
}

export default App;
