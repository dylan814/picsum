import React,{useState,useEffect} from "react"
import { checkPropTypes } from "prop-types"

const PicContext = React.createContext()



function PicProvider(props) {

    const [ImgArr,setImgArr] = useState([]) 
    const [cartItems, setCart] = useState([])
  


    useEffect(() => {
        
     fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
     .then(res => res.json())
     .then(data => setImgArr(data)  )
        
    
    
    },[])


    function toggleFavourite(id) {


        // const {name} = e.target;
       const newArr = ImgArr.map(x => {
            if (id === x.id) {
              
                return {
                    ...x, 
                    isFavorite: !x.isFavorite
                }

            }

            return x


        })

        //  localStorage.setItem("favs", JSON.stringify(newArr));
         ;
        setImgArr(newArr)

        console.log(ImgArr)

    }

    function addImgtoCart(img) {

    //  return setCart([...img,img])




    return setCart(prevState => [...prevState,img])



    }

    function removeItem(img) {

    setCart(prevItem => prevItem.filter(x => x.id != img.id) )

    }

    // console.log(cartItems)


function emptyCart() {

setCart([])


}

return (

<PicContext.Provider value={{ImgArr, toggleFavourite,addImgtoCart,cartItems, removeItem, emptyCart}}>
{props.children}


</PicContext.Provider>


)



}



export {PicProvider, PicContext}