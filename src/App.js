import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const API_KEY = "cd3fbaf6482e418e83ff450578540d57"; 
  let today = new Date();
  let date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=${API_KEY}`)
     .then((response) => response.json())
     .then((actualData) => {
       console.log('actual', actualData)
      setData(actualData.articles);
    })
   }, []);

  console.log(data)

  return (
    <div className="App">
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
