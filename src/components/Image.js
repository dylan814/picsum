import React,{useState,useContext} from "react"
import {PicContext} from "../Context"

function Image(props) {

    const [hovered, setHovered] = useState(false)
    const {toggleFavourite, addImgtoCart,cartItems, removeItem} = useContext(PicContext)

    function CartImg() {

        const boolCart = cartItems.some(x => x.id === props.img.id)

        if (boolCart) {

            return <i className="ri-shopping-cart-fill cart" onClick={() => removeItem(props.img)}></i>

        }


        else if (hovered) {


            return <i className="ri-add-circle-line cart" onClick={() => addImgtoCart(props.img) } ></i>

        }





    }

    function heartImg() {

    if (props.img.isFavorite) {

        return <i className="ri-heart-fill favorite" onClick = {() => toggleFavourite(props.img.id)}></i>

    }

    else if (hovered) {


        return <i className="ri-heart-line favorite" onClick = {() => toggleFavourite(props.img.id)} ></i>
    }


    }

    return (
        <div className={`${props.className} image-container`} onMouseEnter={() => setHovered(true)}  
        onMouseLeave={() => setHovered(false)}  >
            <img src={props.img.url} className="image-grid"/>
            {heartImg()}
            {CartImg()}


        </div>
    )
}

export default Image    

{/* <i className="ri-heart-fill favorite"></i> */}