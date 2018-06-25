export const fetchTopicArticles = async (topicID) => {
    const res = await fetch(`https://mathew-nc-news.herokuapp.com/api/topics/${topicID}/articles`)
    const body = await res.json()
    return body
}  

export const fetchTopics = async () => {
    const res = await fetch(`https://mathew-nc-news.herokuapp.com/api/topics`)
    const body = await res.json()
    return body
}  

