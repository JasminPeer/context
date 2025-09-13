
import { useCart } from '../contexts/CartContext';

export default function CartView() {
    const {cart,removeCart}=useCart();
  return (
    <div>
      <h3>Cart</h3>
      {cart.length===0?(
        <p>your Cart is Empty!!</p>
      ):(
        cart.map((item)=>(
            <div key={item.id} style={{marginBottom:"8px"}}>
                {item.name}{" "}
                <button onClick={()=>removeCart(item.id)}>Remove Cart</button>
                </div>
        ))
      )}
    </div>
  )
}
