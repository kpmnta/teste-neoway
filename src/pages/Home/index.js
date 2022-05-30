import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import FilterInput from '../../components/Filter';
import OrderBy from '../../components/OrderBy';

function Home({ data, setData, setQuery }) {

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
    <main>
      <h1>Your favourite news outlet!</h1>
      <section className='filters'>
        <FilterInput 
          setQuery={setQuery}
        />
        <OrderBy 
          data={data}
          setData={setData}
        />
      </section>
      <ul className="container">
      {data &&
          data.map(({ title, urlToImage, author, publishedAt }, index) => (
          <Link className="container__link" state={{new: data[index]}} to={{
            pathname: "/content"
          }}>
            <li className="container__list" key={title}>
                <span className='container__date'>{formatDate(publishedAt)}</span>
                <h3 className="container__heading">{formatText(title)}</h3>
                <img className="container__image"src={urlToImage}/>
                <span className='container__author'>{ author ? `By ${formatText(author)}` : ""}</span>
            </li>
          </Link>
          ))}
      </ul>
    </main>
  );
}

export default Home;
