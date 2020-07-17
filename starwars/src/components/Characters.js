import React from 'react'
import Character from './Character'

const Characters = (props) => {
    const { chars } = props;
console.log(`this is what im looking at ${chars}`)



    return (
        <div className="character-container">
    {

        //  props.chars.map(function(characters){ return <Character key={characters.name} chars={characters} />})
        // <Character chars={chars[0]}/>
    }
        </div>
    )

};
export default Characters;