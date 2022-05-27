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

  return (
    <div className="App">
      <h1>Sua fonte de notícias favorita!</h1>
      <FilterInput 
        setQuery={setQuery}
      />
      <ul className="container">
      {data &&
          data.map(({ id, title, urlToImage }) => (
            <li className="container__list" key={id}>
              <h3 className="container__heading">{title}</h3>
              <img className="container__image"src={urlToImage}/>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
