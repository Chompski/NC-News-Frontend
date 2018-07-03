import React from 'react'
import x from './x.png'


const NewArticle = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://mathew-nc-news.herokuapp.com/api${props.location.pathname}`, {
            method: 'POST',
            body: JSON.stringify({ title: event.target[0].value, body: event.target[1].value }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(article => props.addArticle(article)).catch(console.log)
    }


    if (props.buttonClicked) {
        return (
            <div className="sideform sideform-style">
                <img src={x} align="center" height="25px" onClick={props.toggleButton} role="button" alt="close" />
                <form method="POST" id="article" onSubmit={handleSubmit}>
                    <div className='App-Form'>
                        <input type="text" size="15" placeholder="Title here..." className="sideform-style" />
                        <textarea rows="10" id="bodyInput" className="sideform-style" placeholder='Article here...'></textarea>
                        <input className='button' type="submit" value="Create Article" />
                    </div>
                </form>
            </div>
        )
    }

    else {
        return (
            <span className="App-Post">
                <a className="button articlepost" role="button" onClick={props.toggleButton}></a>
            </span>
        )
    }
}

export default NewArticle;