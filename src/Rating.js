import React, { Component } from "react"
import {changeRating} from "./API"
import up from './up.png'
import down from './down.png'


const Rating = ({votes, id, changeVote}) => {

    const handleClick = (event) => {
        changeRating(id, event.target.value)
        changeVote(event.target.value)
    }

    return (
        <div className="inline-body">
            <input type="image" src={up} align="center" height="50px" onClick={handleClick} value="up" role="button" />
            <p><b>{votes}</b></p>
            <input type="image" src={down} align="center" height="50px" onClick={handleClick} value="down" role="button" />
        </div>
    )
}


export default Rating