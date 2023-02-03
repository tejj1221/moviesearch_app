//import logo from './logo.svg';

//const searchurl="https://api.themoviedb.org/3/search/550?&api_key=011f9dd7d92650c3c4a1586529b45d1b&query="

import './App.css';
import Result from './components/result';
import axios from "axios"
import { useEffect, useState } from 'react';
const apiurl="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=011f9dd7d92650c3c4a1586529b45d1b&page=1"
const searchurl="https://api.themoviedb.org/3/search/movie?&api_key=011f9dd7d92650c3c4a1586529b45d1b&query="
function App() {
  const[movies,setmovies]=useState([])
  const[search,setsearch]=useState(" ")
 // console.log(search)
const getallmovies=()=>{
     axios.get(apiurl)
     .then(
  (res)=>{
    //console.log(res.data.results)
    setmovies(res.data.results)
  }
     ).catch(
      (err)=>{
        console.log(err)
      }
     )
}
const getsearchedmovies=()=>{
  axios.get(searchurl +search)
  .then(
(res)=>{
 //console.log(res.data.results)
 setmovies(res.data.results)
}
  ).catch(
   (err)=>{
     console.log(err)
   }
  )
}
useEffect(
  ()=>{
   if(search===" "){
    getallmovies()
   }else{
   getsearchedmovies()
   }
  },[search]
)
  return (
    <div className='container'>
      <h1>moviesearch</h1>
     <input type="search" className='search' value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
     <Result movies={movies}/>
    </div>
  );
}

export default App;
