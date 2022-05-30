import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

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
                <p className="content__text">{newsContent.description}</p>
                <p className="content__text">{newsContent.content}</p>
                <footer className="content__footer">
                    <Link className="content__footer__link" to="/">Go back</Link>
                    <a className="content__footer__link" href={newsContent.url}>Read All</a>
                </footer>
            </article>
        </>
    )
}

export default Content;