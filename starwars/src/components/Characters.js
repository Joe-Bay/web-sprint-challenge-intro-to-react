import React from 'react'
import Character from './Character'

const Characters = (props) => {
    const { chars } = props;
    console.log(chars[0].name)

    const newArray = [...chars]
    console.log(newArray)


 return (
    <div className="characterContainer"> 

{
    newArray.map(people => <Character chars={people}/>)

}
    </div>
 )
}
export default Characters