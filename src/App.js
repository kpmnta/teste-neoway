import React, { useState, useEffect } from 'react';
import './App.css';
import FilterInput from './components/Filter';

function App() {
  const API_KEY = "cd3fbaf6482e418e83ff450578540d57"; 
  let today = new Date();
  let date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      fetch(`https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${API_KEY}&pageSize=100`)
       .then((response) => response.json())
       .then((actualData) => {
         console.log('actual', actualData)
        setData(actualData.articles);
      })
    }
  }, [query]);

  console.log('data', data)

  const formatDate = (date) => {
    const splitedDate = date.split('T');
    const newDate = splitedDate[0].replaceAll('-', '/');
    return newDate;
  }

  const formatText = (text) => {
    if (text && text.length > 80) {
      let textSize = text.substring(0, 100);
      textSize = `${textSize}...`
      return textSize;
    } else {
      return text
    }
  }

  return (
    <div className="App">
      <h1>Your favourite news outlet!</h1>
      <FilterInput 
        setQuery={setQuery}
      />
      <ul className="container">
      {data &&
          data.map(({ id, title, urlToImage, author, publishedAt }) => (
            <li className="container__list" key={id}>
              <span className='container__date'>{formatDate(publishedAt)}</span>
              <h3 className="container__heading">{formatText(title)}</h3>
              <img className="container__image"src={urlToImage}/>
              <span className='container__author'>{ author ? `By ${formatText(author)}` : ""}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
