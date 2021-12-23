import React from 'react'
import './blog.css'
import { Article } from '../../components'
import{ blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">QWE</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Dec 21, 2021" title="Recent News"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Dec 20, 2021" title="Recent News"/>
                    <Article imgUrl={blog03} date="Dec 19, 2021" title="Recent News"/>
                    <Article imgUrl={blog04} date="Dec 18, 2021" title="Recent News"/>
                    <Article imgUrl={blog05} date="Dec 17, 2021" title="Recent News"/>
                </div>
                
            </div>
        </div>
    )
}

export default Blog