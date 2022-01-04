import React from 'react'
import './article.css'
const Article = ({ imgUrl, date, title, link }) => {
    return (
        <div className="container_article">
            <div className="container_article-image">
                <img src={imgUrl} alt="blog"/>
            </div>
            <div className="container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <a href = {link} target="_blank" rel="noopener noreferrer"><p>Go to the page</p></a>
            </div>
        </div>
    )
}

export default Article
