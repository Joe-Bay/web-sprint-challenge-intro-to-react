import React from 'react'
import Character from './Character'

const Characters = (props) => {
    const { chars } = props;
    console.log(chars[0].name)

return null
    // chars.map(characters => {
    //     return(
    //         <div className="characterContainer">
    //             <Character key={characters.name}
    //             chars={characters.name}
    //             />
    //         </div>
    //     )
    // })
}

//     return (
//         <div className="character-container">
//     {
//          props.chars.map(function(characters){ return <Character key={characters.name} chars={characters} />})
//     }
//         </div>
//     )

// };
export default Characters