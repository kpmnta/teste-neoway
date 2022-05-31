import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import FilterInput from '../../components/Filter';
import OrderBy from '../../components/OrderBy';
import Loading from '../../components/Loading'

function Home({ data, setData, setQuery, query, isLoading }) {

  const formatDate = (date) => {
    const splitedDate = date.split('T');
    const newDate = splitedDate[0].replaceAll('-', '/');
    return newDate;
  }

  const formatText = (text) => {
    if (text && text.length > 80) {
      let textSize = text.substring(0, 80);
      textSize = `${textSize}...`
      return textSize;
    } else {
      return text
    }
  }

  return (
    <main className='home'>
      <h1>Your favourite news outlet!</h1>
      <section className='home__filters'>
        <FilterInput 
          setQuery={setQuery}
        />
        <OrderBy 
          data={data}
          setData={setData}
        />
      </section>
      { query ? (
        <h3 className='home__results'>Showing results for <span>{query}</span></h3>
      ) : ""}
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="home__cards">
        {data &&
            data.map(({ title, urlToImage, author, publishedAt }, index) => (
            <Link className="cards__link" state={{new: data[index]}} to={{
              pathname: "/content"
            }}>
              <li className="cards__list" key={title}>
                  <span className='cards__date'>{formatDate(publishedAt)}</span>
                  <h3 className="cards__heading">{formatText(title)}</h3>
                  <img className="cards__image"src={urlToImage}/>
                  <span className='cards__author'>{ author ? `By ${formatText(author)}` : ""}</span>
              </li>
            </Link>
            ))}
        </ul>
      )}
    </main>
  );
}

export default Home;
