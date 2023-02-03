import React from "react";
import   "./result.css"
export default function Result(props){
    const boxes=props.movies.map(
        (item)=>{
            return(
                <Box image={item.poster_path} title={item.original_title}
                rating={item.vote_average}/>
            )
        }
    )
    return(
        <div className="result">
          {boxes}
           
        </div>
    )
}
const Box=(props)=>{
    const imagepth="https://image.tmdb.org/t/p/w1280"
    return(
        <div className="box" >
            <img src={ imagepth + props.image} alt="img" className="image"/>
            <div className="box-content">
                <span>
                 {props.title}
                </span>
                <span>
                    {props.rating}
                </span>
            </div>
        </div>
    )
}