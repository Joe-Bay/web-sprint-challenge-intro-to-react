// Write your Character component here
import React from 'react'
import styled from 'styled-components'




const CharacterStyles = styled.div`
margin-right: 20%;
margin-left: 20%;
background-image: linear-gradient(to top, red, black, black);
border-radius: 10px;


h1{
    color:white;
    font-size: 3rem;
    &:hover{
        color: crimson;
        font-size: 4rem;
        transition: 1s;
    }
}



`

const Character = props => {
    const { chars } = props
console.log(chars)


    return (

        <CharacterStyles className="chContainer">
            <h1>{chars.name}</h1>
        </CharacterStyles>
    )
}
export default Character;