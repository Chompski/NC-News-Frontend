import React from 'react'

const NewArticle = (props) => {
 
   const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://mathew-nc-news.herokuapp.com/api${props.location.pathname}`, {
          method: 'POST',
          body:JSON.stringify({title:event.target[0].value, body:event.target[1].value}),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(console.log).catch(console.log)
    }


    if (props.buttonClicked) {
        return (
            <form method="POST" id="article" onSubmit={handleSubmit}>
                <div className='App-Form'>
                    <input type="text" size="15" placeholder="Article name" />
                    <textarea rows="4" id="bodyInput" className="textBox"></textarea>
                    <input type="submit" value="Create Article" />
                </div>
            </form>

        )
    } else {
        return <a className="button" href="http://localhost:3000/" role="button" onClick={props.toggleButton}>Post article</a>
    }
}

export default NewArticle;