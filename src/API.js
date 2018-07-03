export const fetchArticle = async (articleID) => {
    const res = await fetch(`https://mathew-nc-news.herokuapp.com/api/articles/${articleID}`).catch(console.log)
    const body = await res.json().catch(console.log)
    return body 
}

export const fetchArticles = async (topicID) => {
        const res = await fetch(`https://mathew-nc-news.herokuapp.com/api${topicID}`).catch(console.log)
        const body = await res.json().catch(console.log)
        return body 
}

export const fetchTopics = async () => {
    const res = await fetch(`https://mathew-nc-news.herokuapp.com/api/topics`).catch(console.log)
    const body = await res.json().catch(console.log)
    return body
}

export const fetchArticleComments = async (articleID) => {
    const res = await fetch(`https://mathew-nc-news.herokuapp.com/api/articles/${articleID}/comments`).catch(console.log)
    const body = await res.json().catch(console.log)
    return body 
}

export const changeRatingArticle = async (direction, articleID) => {
    const res = await fetch(`https://mathew-nc-news.herokuapp.com/api/articles/${articleID}?vote=${direction}`, {method:'PUT'}).catch(console.log)
    const body = await res.json().catch(console.log)
    return body
}

export const changeRatingComment = async (direction, commentID) => {
    const res = await fetch(`https://mathew-nc-news.herokuapp.com/api/comments/${commentID}?vote=${direction}`, {method:'PUT'})
    const body = await res.json()
    return body
}



