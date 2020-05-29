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
      <Route exact path="/"> <Photos /></Route>
      <Route path ="/cart"> <Cart /></Route>
      <Route path="/favourites"><Favourites /></Route>


      </Switch>
    </div>
  );
}

export default App;
