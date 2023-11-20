import React, { useEffect, useState } from 'react'
import instance from '../instance';
import "./Row.css";

function Row({title,fetchURL,isPoster}) {
  const [allMovies, setAllMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
    // console.log(fetchURL);

    const fetchData = async ()=>{
      const {data}=await instance.get(fetchURL)  //axios.get(url[, config])
      // console.log(data.results);
      setAllMovies(data.results)
    }
      console.log(allMovies);

    useEffect(()=>{
      fetchData()
    },[])
  return (
    
    <div className='row'>
        <h1>{title}</h1>
        <div className='movie_row'>
          {
            allMovies?.map(item=>(
              <img className={`movies ${isPoster && 'moviesposter'}`} src={`${base_url}${isPoster?item?.poster_path:item.backdrop_path}`} alt="no image" style={{borderRadius:'5px'}} />
            ))
          }
        </div>
    </div>

  )
}

export default Row