import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './styles.css'

const Content = () => {
    const location = useLocation();
    const newsContent = location.state.new

    console.log('news', newsContent)
    return(
        <>
            <article className="content">
                <div 
                    style={{ background: `url(${newsContent.urlToImage}) no-repeat center center `, backgroundSize: 'cover'}}
                    className="content__banner"
                ></div>
                <p className="content__title">{newsContent.title}</p>
                <span className="content__especifications">Published by {newsContent.author} @ <a href={newsContent.url}>{newsContent.source.name}</a></span>
                <div className="content__text">
                    <p>{newsContent.description}</p>
                    <p>{newsContent.content}</p>
                </div>
                <footer className="content__footer">
                    <Link className="content__footer__backLink" to="/">Go back</Link>
                    <a target="_blank" className="content__footer__link" href={newsContent.url}>Read All</a>
                </footer>
            </article>
        </>
    )
}

export default Content;