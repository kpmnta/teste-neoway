import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Content from './pages/Content';

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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home 
              data={data} 
              setData={setData} 
              query={query} 
              setQuery={setQuery} 
            />
          }/>
          <Route path="/teste" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
