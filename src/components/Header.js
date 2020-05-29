import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {PicContext} from "../Context"



function Header() {

const {cartItems} = useContext(PicContext)


return (

<header>
          <Link to="/picsum">   <h2>Pic Some</h2> </Link>
          <Link to="/picsum/favourites"> <h2>My Favourites</h2> </Link> 
          <Link to = "/picsum/cart" ><i className=
          {cartItems.length >0? "ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"}></i>
          </Link>
          
</header>

)


}


export default Header