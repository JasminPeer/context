import Products from "./Products";
import CartView from "./CartView";
import React, { useState } from 'react'
import { useCart } from "../contexts/CartContext";


export function Shop() {
    const[view,setView]=useState("products");
    const {cart}=useCart();
  return (
    <div>
      <button onClick={()=>setView("products")}>Products</button>
       <button onClick={()=>setView("cart")}>Cart({cart.length})</button>
       {view==="products"?<Products/>:<CartView/>}
      
    </div>
  )
}


