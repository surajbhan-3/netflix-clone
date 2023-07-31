import React, { useEffect, useState } from 'react'
import "./row.css";
import axios from "../../axios";
const baseURL ="https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow=false }) {
    const [movies,setMovie] = useState([])
    useEffect(()=>{
      async function fetchData(){

         const  request = await axios.get(fetchUrl);
         setMovie(request.data.results)
         return request;
      }

      fetchData()
         
    },[fetchUrl])

    
  return (
    <div className='first-row'>


         
<h2>{title}</h2>
        <div className="row-posters">

{/*  (isLargeRow && movie.poster_path) || 
                  (!isLargeRow && movie.backdrop_path) && */}

                    {movies.map((movie)=>(
                         ((isLargeRow && movie.poster_path) || 
                         (!isLargeRow && movie.backdrop_path)) &&
                    
                     <img  className={`row-poster ${isLargeRow && "row-poster-large"}`} key={movie.id}
                    src={`${baseURL}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                    ))}

        </div>
    </div>
  )
}

export default Row