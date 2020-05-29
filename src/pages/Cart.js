import React, {useContext, useState} from "react"
import {PicContext} from "../Context"
import CartItem from "../components/CartItem"


function Cart() {
    const {cartItems, emptyCart} = useContext(PicContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const [ordering,setOrdering] = useState("Place order")
    
function Order() {

    setOrdering("Ordering...")

    setTimeout(() => {
    
    alert("Your order has been placed")
    setOrdering("Place order")
    emptyCart()
    }, 3000)
    

console.log(cartItems)

}

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            <div className="order-button">
                <button onClick ={ Order}>{ordering}</button>
            </div>
        </main>
    )
}

export default Cart