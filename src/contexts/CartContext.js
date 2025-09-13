import { createContext, useState, useContext } from "react";

//create box for cart
const CartContext=createContext();

// provider function to store and share to other components
export function CardProvider({children}){
    const[cart,setCart]=useState([]);

 function addCart(product){
    setCart((prevCart)=>{
        const alreadInCart=prevCart.some((item)=>item.id===product.id);
        if(alreadInCart)
            return prevCart;
        return[...prevCart,product];
    }
)

}
// remove function
function removeCart(id){
    setCart((prevCart)=>prevCart.filter((item)=>item.id!==id))
}return(
    <CartContext.Provider value={{cart,addCart,removeCart}}>
        {children}
    </CartContext.Provider>

);
}
export function useCart(){
    return  useContext(CartContext);

}


