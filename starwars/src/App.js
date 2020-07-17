import React, { useState, useEffect}from 'react';
import './App.css';
import Characters from './components/Characters'
import axios from 'axios'
import styled from 'styled-components'




const AppDiv = styled.div`

.Header{
  font-size: 5rem;
  color: black;
  text-shadow: 3px, 2px;
  &:hover{
    color: red;
    transition: 2.5s;
    transform: skew(180deg);
  }

}


`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

    const [chars, setChar] = useState(" ")

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
      axios.get("http://swapi.dev/api/people/")
      .then(res => {
        console.log(res)
        setChar(res.data.results)
      })
      .catch(err => {
        console.log(`Did not find data your error is ${err}`)
      })

    }, [])






  return (
    <AppDiv className="App">
      <h1 className="Header">STAR WARS</h1>
      {

        <Characters chars={chars}/>

      }
    </AppDiv>
  );
}

export default App;
