import React from 'react';
import {Link, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Favourites from "./pages/Favourites"




function App() {
  return (


    <div>
      <Header />
    
     
        
      <Switch>
      <Route exact path="/picsum"> <Photos /></Route>
      <Route path ="/picsum/cart"> <Cart /></Route>
      <Route path="/picsum/favourites"><Favourites /></Route>


      </Switch>
    </div>
  );
}

export default App;
