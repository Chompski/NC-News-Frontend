import React from "react"
import {changeRatingArticle, changeRatingComment} from "./API"
import up from './up.png'
import down from './down.png'
import './Article.css';

const Rating = ({votes, id, changeVote, isComment}) => {

    const handleClick = (event) => {
        const direction = event.target.value;
        if(isComment) {
        changeRatingComment(direction, id)
        }
        else {
        changeRatingArticle(direction, id)
        }
        changeVote(direction, id)  
    }

    return (
        <div className="inline-body">
            <input type="image" src={up} height="40px" onClick={handleClick} value="up" role="button" className="vote" alt="thumb"/>
            <p><b>{votes}</b></p>
            <input type="image" src={down} height="40px" onClick={handleClick} value="down" role="button" className="vote" alt="thumb"/>
        </div>
    )
}

export default Rating