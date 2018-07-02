import React from 'react'
import x from './x.png'

const NewComment = (props) => {
    

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://mathew-nc-news.herokuapp.com/api${props.location.pathname}/comments`, {
            method: 'POST',
            body: JSON.stringify({ body: event.target[0].value }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(comment => props.addComment(comment)).catch(console.log)
    }


    if (props.buttonClicked) {
        return (
            <div className="sideform" >
            <img src={x} align="center" height="25px" onClick={props.toggleButton} role="button"/>
                <form method="POST" id="comment" onSubmit={handleSubmit}>
                    <div className='App-Form'>
                        <textarea rows="10" id="bodyInput" className="sideform-style" placeholder='Comment here...'></textarea>
                        <input className='button' type="submit" value="Create comment" />
                    </div>
                </form>
            </div>
        )
    }

    else {
        return <a className="button commentpost" href="http://localhost:3000/" role="button" onClick={props.toggleButton}></a>
    }
}

export default NewComment