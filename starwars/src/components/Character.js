// Write your Character component here
import React from 'react'

const Character = props => {
    const { chars } = props
console.log(chars)


    return (
        <div className="chContainer">
            <h1>{chars.name}</h1>
        </div>
    )
}
export default Character;