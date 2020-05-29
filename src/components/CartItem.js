import React,{useState, useContext} from "react"
import {PicContext} from "../Context"


function CartItem(props) {

    const {removeItem} = useContext(PicContext)

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick ={() => removeItem(props.item)}></i>
            <img src={props.item.url} width="130px"/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem