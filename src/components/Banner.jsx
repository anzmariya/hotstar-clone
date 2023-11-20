import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchURL}) {
    // console.log(fetchURL);
    const [movie,setMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData =async()=>{
        const {data}=await instance.get(fetchURL)
        // console.log(data.results[Math.floor(Math.random()*data.results.length)]);
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div style={{
        height: "600px",
        backgroundImage: `linear-gradient(to right, #16181f, transparent), url(${base_url}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        marginLeft: '100px',
        position: 'relative'
      }}>
        
      <div className='banner-content'>
        <h1 className='mb-3'>{movie?.name}</h1>
        <h3 className='mb-3'>{movie?.first_air_date.slice(0,4)} . {movie?.original_language} . {movie?.vote_average}</h3>
        <h3 className='mb-3' style={{opacity:'0.5'}}>{movie?.overview?.slice(0,200)}</h3>
        <button className='btn text-light pe-5 mt-2' style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}}><i class="fa-solid fa-play ps-5"></i>  Watch for Free</button>
        <button className='btn text-light ms-3 mt-2' style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}}><i class="fa-solid fa-plus"></i></button>
        
      </div>
    </div>
  )
}

export default Banner