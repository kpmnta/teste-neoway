import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Content from './pages/Content';

function App() {
  const API_KEY = "cd3fbaf6482e418e83ff450578540d57"; 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  let today = new Date();
  let date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetch(`https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${API_KEY}&pageSize=100`)
       .then((response) => response.json())
       .then((actualData) => {
        setData(actualData.articles);
        setIsLoading(false);
      })
    }
  }, [query]);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={
            <Home 
              data={data} 
              setData={setData} 
              query={query} 
              setQuery={setQuery} 
              isLoading={isLoading}
            />
          }/>
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
