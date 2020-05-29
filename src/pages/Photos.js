import React,{useContext} from "react"
import {PicContext} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils/index.js"

function Photos() {

const {ImgArr} = useContext(PicContext)
// localStorage.setItem("favs", JSON.stringify(ImgArr));
const ImgArr2 = JSON.parse(localStorage.getItem("favs"));
// JSON.parse(localStorage.getItem("favs"));
const Images = ImgArr2.map( (x,index) => ( 
    <Image key={x.id} img={x} className={getClass(index)} /> ))


    return (
        <main className="photos">
            {Images}
        </main>
    )
}

export default Photos