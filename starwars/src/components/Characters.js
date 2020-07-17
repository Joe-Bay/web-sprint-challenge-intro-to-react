import React from 'react'
import Character from './Character'

const Characters = (props) => {
    const { chars } = props;

    const newArray = [...chars]

 return (
    <div className="characterContainer"> 

{
    newArray.map(people => <Character chars={people}/>)

}
    </div>
 )
}
export default Characters