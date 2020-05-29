import React,{useState, useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utils/index.js"

function Favourites() {


    const ImgArr = JSON.parse(localStorage.getItem("favs"));

   const ImgArr2 = ImgArr.filter(x => {

    if (x.isFavorite === true) {

      return x;

    }


   })

   console.log(ImgArr2);


   const Images = ImgArr2.map( (x,index) => ( 
    <Image key={x.id} img={x}  /> ))

    return (
<div>
        <h1> My Favourites</h1>

    
        {Images}
    

</div>

    )
}






export default Favourites