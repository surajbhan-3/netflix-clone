import React from 'react'
import "./home.css";
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import requests from '../../request';
import Row from '../row/Row';

function Home() {
  return (
    <div className='home-main-container'>

          <Navbar />
          <Banner />
          <Row  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow />
          <Row  title="TRENDING NOW" fetchUrl={requests.fetchTrending}
           />
          <Row  title="TOP RATED" fetchUrl={requests.fetchTopRated}
           />
          <Row  title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}
           />
          <Row  title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}
           />
          <Row  title="ROMANCE MOVIES" fetchUrl={requests.fetchRomancesMovies}
          />
          <Row  title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentries}
          />
          <Row  title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}
          />
    </div>
  )
}

export default Home