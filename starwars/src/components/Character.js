// Write your Character component here
import React from 'react'

const Character = props => {
    const { chars } = props



    return (
        <div>
            <h1>{chars.name}</h1>
        </div>
    )
}
export default Character;